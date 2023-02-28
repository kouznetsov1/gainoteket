import json
from dotenv import load_dotenv
import os
import openai
import requests
import shutil

IMG_URL = "https://raw.githubusercontent.com/kouznetsov1/gainoteket/main/client/public/recipes/recipe_"
updated_recipes = []

def main():
    load_dotenv()
    openai.organization = os.getenv("OPENAI_ORG")
    openai.api_key = os.getenv("OPENAI_API_KEY")

    with open("recipes.json", "r") as f:
        data = json.load(f)

    id = 1
    for recipe in data:
        handle_recipe(recipe, id)
        id += 1
    
    with open("recipes_with_id.json", "w", encoding="utf-8") as f:
        json.dump(updated_recipes, f, indent=4, ensure_ascii=False)


def handle_recipe(recipe, id):
    recipe["image_url"] = IMG_URL + str(id) + ".png"
    recipe["id"]= id
    recipe_name = recipe["name"]

    # Translate recipe name to english
    prompt_string = f"Translate to English:\n{recipe_name} =>"
    recipe_english = translate_text(prompt_string)

    print("Generating image for recipe: {}".format(recipe_english))

    dalle_prompt = f"{recipe_english}, centered, professional food photography"
    image_url = generate_image(dalle_prompt)

    save_image(image_url, id)

    directions = recipe["directions"]
    i = 0

    for dir in directions:
        directions[i] = f"{i+1}. " + dir
        i += 1
    recipe["directions"] = directions
    updated_recipes.append(recipe)

def save_image(url, id):
    image_name = f"recipe_{id}.png"
    print("Image url:", url)

    folder_path = "/home/daniel/Documents/projects/pt_food/prooly/client/public/recipes/"
    if not os.path.exists(folder_path):
        os.mkdir(folder_path)
    
    image_path = folder_path + image_name

    res = requests.get(url, stream=True)

    if res.status_code == 200:
        with open(image_path, "wb") as f:
            shutil.copyfileobj(res.raw, f)

    else:
        print("Error: Could not download image.")

def translate_text(text):
    """
    Translate text to english using GPT-3
    
    Arguments:
        text {str} -- Text prompt
        
    Returns:
        str -- Translated text
    """
    gpt_response = openai.Completion.create(
        model="text-davinci-003",
        prompt=text,
        max_tokens=300,
        temperature=0
    )

    result = gpt_response["choices"][0]["text"]
    return result

def generate_image(prompt):
    """Generate image from recipe name using DALL-E
    
    Arguments:
        prompt {str} -- Text prompt
        
    Returns:
        str -- Image url
    """
    dalle_response = openai.Image.create(
        prompt=prompt,
        n=1,
        size="1024x1024"
    )

    image_url = dalle_response["data"][0]["url"]
    return image_url
    

if __name__ == "__main__":
    main()