import json
from dotenv import load_dotenv
import os
import openai
import requests
import shutil
import replicate

IMG_URL = "https://raw.githubusercontent.com/kouznetsov1/gainoteket/main/client/public/recipes/recipe_"
updated_recipes = []

"""
photo of a delicious pea and spinach soup with almonds made from nuts on a plate on the table of a rustic farmhouse in cornwall :: food photography, photorealistic, ultra 
realistic, maximum detail, recipes. com, epicurious, instagram :: 8k, volumetric light, cinematic, octane render --v 3 --ar 9:16 --uplight --no blur, depth of field, dof, bokeh
"""

def main():
    load_dotenv()
    openai.organization = os.getenv("OPENAI_ORG")
    openai.api_key = os.getenv("OPENAI_API_KEY")

    with open("recipes_with_id.json", "r") as f:
        data = json.load(f)

    for recipe in data:
        id = recipe["id"]
        print(f"Generating recipe {id} of {len(data)}...")
        handle_recipe(recipe, id)
    
    with open("recipes_with_id_and_images.json", "w", encoding="utf-8") as f:
        json.dump(updated_recipes, f, indent=4, ensure_ascii=False)


def handle_recipe(recipe, id):
    recipe["image_url"] = IMG_URL + str(id) + ".png"
    recipe_name = recipe["name"]

    # Translate recipe name to english
    prompt_string = f"Translate to English:\n{recipe_name} =>"
    recipe_english = translate_text(prompt_string)

    print("Generating image for recipe: {}".format(recipe_english))

    #dalle_prompt = f"{recipe_english}, centered, professional food photography fit for instagram"
    #image_url = generate_image(dalle_prompt)

    mdjrn_prompt = f"photo of a delicious {recipe_english} on a plate on the table of a rustic farmhouse in cornwall :: food photography, photorealistic, ultra realistic, maximum detail, recipes.com, epicurious, instagram :: 8k, volumetric light, cinematic, octane render --v4 --uplight --no blur, depth of field, dof, bokeh"
    image_url = generate_image(mdjrn_prompt)

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
    model = replicate.models.get("prompthero/openjourney")
    version = model.versions.get("9936c2001faa2194a261c01381f90e65261879985476014a0a37a334593a05eb")

    # https://replicate.com/prompthero/openjourney/versions/9936c2001faa2194a261c01381f90e65261879985476014a0a37a334593a05eb#input
    inputs = {
        # Input prompt
        'prompt': prompt,

        # Width of output image. Maximum size is 1024x768 or 768x1024 because
        # of memory limits
        'width': 1024,

        # Height of output image. Maximum size is 1024x768 or 768x1024 because
        # of memory limits
        'height': 768,

        # Number of images to output
        'num_outputs': 1,

        # Number of denoising steps
        # Range: 1 to 500
        'num_inference_steps': 50,

        # Scale for classifier-free guidance
        # Range: 1 to 20
        'guidance_scale': 8,

        # Random seed. Leave blank to randomize the seed
        # 'seed': ...,
    }

    # https://replicate.com/prompthero/openjourney/versions/9936c2001faa2194a261c01381f90e65261879985476014a0a37a334593a05eb#output-schema
    output = version.predict(**inputs)

    image_url = output[0]
    return image_url
    

if __name__ == "__main__":
    main()