import json
from dotenv import load_dotenv
import os
import openai

def main():
    load_dotenv()
    openai.organization = os.getenv("OPENAI_ORG")
    openai.api_key = os.getenv("OPENAI_API_KEY")

    with open("recipes.json", "r") as f:
        data = json.load(f)

    id = 1
    for recipe in data:

        handle_recipe(recipe, id)
        directions = recipe["directions"]
        i = 0
        for dir in directions:
            directions[i] = f"{i+1}. " + dir
            i += 1
        recipe["directions"] = directions
        id += 1


    i = 0
    for dir in directions:
        directions[i] = f"{i+1}. " + dir
        i += 1

    dir_string = "\n".join(directions)

    prompt_string = f"Skriv om anvisningarna för det här receptet så man inte känner igen texten. \nAnvisningar: \n{dir_string}"
    


    """
    # GPT3 Prompt
    oai = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt_string,
        temperature=0.7,
        max_tokens=500,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
    )
    """

    # Text output from GPT3
    #text_output = oai["choices"][0]["text"]

    print(prompt_string)

def handle_recipe(recipe):
    print(recipe)
    recipe["image_url"] = "img_url"
    recipe["id"]= 1
    print(recipe)


if __name__ == "__main__":
    main()