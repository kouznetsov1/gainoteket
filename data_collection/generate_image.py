import json
from dotenv import load_dotenv
import os
import openai
import requests
import shutil

IMG_URL = "https://github.com/kouznetsov1/gainoteket/blob/main/client/public/recipes/recipe_"

def main():
    load_dotenv()
    openai.organization = os.getenv("OPENAI_ORG")
    openai.api_key = os.getenv("OPENAI_API_KEY")

    with open("recipes.json", "r") as f:
        data = json.load(f)

    id = 1
    for recipe in data:
        if id == 5:
            handle_recipe(recipe, id)
            break
        id += 1


def handle_recipe(recipe, id):
    recipe["image_url"] = IMG_URL + str(id) + ".png"
    recipe["id"]= id
    recipe_name = recipe["name"]

    prompt_string = f"Translate to English:\n{recipe_name} =>"

    gpt_response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt_string,
        max_tokens=300,
        temperature=0
    )

    recipe_english = gpt_response["choices"][0]["text"]
    print("Generating image for recipe: {}".format(recipe_english))

    dalle_prompt = f"{recipe_english}, centered, dark themed, professional food photography"

    dalle_response = openai.Image.create(
        prompt=dalle_prompt,
        n=1,
        size="1024x1024"
    )

    image_url = dalle_response["data"][0]["url"]

    save_image(image_url, id)

    directions = recipe["directions"]
    i = 0
    for dir in directions:
        directions[i] = f"{i+1}. " + dir
        i += 1
    recipe["directions"] = directions

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


def generate_image(id, name):
    pass
    

if __name__ == "__main__":
    main()