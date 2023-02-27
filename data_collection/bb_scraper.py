from bs4 import BeautifulSoup as bs
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import time
from dotenv import load_dotenv
import os
import re
import json
import unicodedata

load_dotenv()
URL = os.getenv("SCRAPE_URL")
categories = ["Lunch", "Dinner", "Breakfast", "Dessert"]
recipes = []
current_category = ""

fraction_map = {
    '\u00bc': '1/4',
    '\u00bd': '1/2',
    '\u00be': '3/4',
    '\u2153': '1/3',
    '\u2154': '2/3',
    '\u2155': '1/5',
    '\u2156': '2/5',
    '\u2157': '3/5',
    '\u2158': '4/5',
    '\u2159': '1/6',
    '\u215A': '5/6',
    '\u215B': '1/8',
    '\u215C': '3/8',
    '\u215D': '5/8',
    '\u215E': '7/8',
}

def start_scraping():
    for category in categories:
        options = webdriver.ChromeOptions()
        #options.add_extension('cookies.crx')
        options.add_argument("headless")
        driver = webdriver.Chrome(options=options)
        driver.get(URL)

        print("Waiting for popup...")
        dynamic_iframe = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.XPATH, "/html/body/div[5]/iframe")))
        driver.switch_to.frame(dynamic_iframe)

        # Get rid of popup
        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "/html/body/div/div/div[2]/button"))).click()
        print("Popup gone, switching back to mainframe...")

        # Switch back to main frame
        driver.switch_to.default_content()

        current_category = category
        scrape_category(driver, category)

def scrape_category(driver, category):
    # Wait for the category filter to load
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "/html/body/div[2]/div/div/ul/li[1]/ul")))

    # Set paths, get categories and size of categories
    categories_filter_xpath = "/html/body/div[2]/div/div/ul/li[1]/ul/li[{}]/button"
    categories_element = driver.find_element(By.XPATH, "/html/body/div[2]/div/div/ul/li[1]/ul")
    categories_filter = bs(categories_element.get_attribute("innerHTML"), "html.parser")
    categories_size = len(categories_filter.find_all("li"))

    # Change sorting to most popular
    xpath_sort = "/html/body/div[2]/div/div/div[2]/button[2]"
    xpath_sort_click = "/html/body/div[2]/div/div/div[3]/div[1]/ul/li[1]/div[2]/div[1]"
    driver.find_element(By.XPATH, xpath_sort).click()
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, xpath_sort_click))).click()

    for i in range(1, categories_size+1):
        # xpath for the category filter
        xpath = categories_filter_xpath.format(i)
        category_element = driver.find_element(By.XPATH, xpath)
        category_bs = bs(category_element.get_attribute("innerHTML"), "html.parser")
        category_name = category_bs.text.strip()

        if category_name == category:
            try:
                driver.execute_script("arguments[0].click();", category_element)
                time.sleep(2)
                scrape_recipes(driver)
            except:
                print("Could not click category: {}".format(category))

def scrape_recipes(driver):    
    xpath = "/html/body/div[2]/div/bb-recipe-category/div/div/div/div[2]/div[{}]/div/div[1]/a"
    n = 3
    i = 1

    while i <= n:
        try:
            print("Clicking recipe at index: {}".format(i))
            link_element = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, xpath.format(i))))
            recipe_url = link_element.get_attribute("href")

            # If recipe is in the list, skip it and increase n to increase the number of recipes to scrape
            if (not get_recipe_information(driver, recipe_url)):
                n += 1
            driver.switch_to.window(driver.window_handles[0])
            i += 1
        except Exception as e:
            print("Could not find recipe at index: {}".format(i))
            i += 1

def get_recipe_information(driver, url, div_index=3):
    print("Open new tab and get recipe information.")
    driver.execute_script("window.open('');")
    driver.switch_to.window(driver.window_handles[1])
    driver.get(url)

    ingredients = []
    directions = []

    # All of the xpaths
    x_cal = f"/html/body/div[{div_index}]/div[2]/div[1]/div/div/div/main/div/div[3]/div[1]/span[1]"
    x_carbs = f"/html/body/div[{div_index}]/div[2]/div[1]/div/div/div/main/div/div[3]/div[2]/span[1]"
    x_protein = f"/html/body/div[{div_index}]/div[2]/div[1]/div/div/div/main/div/div[3]/div[3]/span[1]"
    x_fat = f"/html/body/div[{div_index}]/div[2]/div[1]/div/div/div/main/div/div[3]/div[4]/span[1]"
    x_ingredients = f"/html/body/div[{div_index}]/div[2]/div[1]/div/div/div/main/div/div[4]/div[1]/ul"
    x_directions = f"/html/body/div[{div_index}]/div[2]/div[1]/div/div/div/main/div/div[4]/div[2]/ol"
    x_cooking_time = f"/html/body/div[{div_index}]/div[2]/div[1]/div/div/div/main/div/div[4]/div[2]/div/div[3]/time"
    x_servings = f"/html/body/div[{div_index}]/div[2]/div[1]/div/div/div/main/div/div[3]/div[6]/div[2]/div[2]"
    x_name = f"/html/body/div[{div_index}]/div[1]/div[2]/div/h1"

    print("Waiting for recipe information...")

    # Get recipe information
    cal = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, x_cal))).text
    carbs = driver.find_element(By.XPATH, x_carbs).text
    protein = driver.find_element(By.XPATH, x_protein).text
    fat = driver.find_element(By.XPATH, x_fat).text
    ingredients_element = driver.find_element(By.XPATH, x_ingredients)
    directions_element = driver.find_element(By.XPATH, x_directions)
    cooking_time = driver.find_element(By.XPATH, x_cooking_time).text
    servings = driver.find_element(By.XPATH, x_servings).text
    name = driver.find_element(By.XPATH, x_name).text
    category = current_category

    # Extract the numbers, divide macros by servings
    servings = int(re.findall(r'\d+', servings)[0])
    cal = int(re.findall(r'\d+', cal)[0]) / int(servings)
    carbs = int(re.findall(r'\d+', carbs)[0]) / int(servings)
    protein = int(re.findall(r'\d+', protein)[0]) / int(servings)
    fat = int(re.findall(r'\d+', fat)[0]) / int(servings)

    # If recipes contain name, then add to list
    for r in recipes:
        if r["name"] == name:
            print("Recipe already in list.")
            return False

    
    print("Name: {}".format(name))

    # Get ingredients
    ingredients_bs = bs(ingredients_element.get_attribute("innerHTML"), "html.parser")
    ingredients_list = ingredients_bs.find_all("li")
    for ingredient in ingredients_list:
        text = ingredient.text.replace("\n", "").strip()
        text = re.sub(r'\s+', ' ', text)
        for fraction, value in fraction_map.items():
            text = text.replace(fraction, value)
        ingredients.append(text)

    # Get directions
    directions_bs = bs(directions_element.get_attribute("innerHTML"), "html.parser")
    directions_list = directions_bs.find_all("li")
    for direction in directions_list:
        directions.append(direction.text)

    # Print recipe information
    print("Name: {}".format(name))

    recipe = {
        "name": name,
        "calories": cal,
        "carbs": carbs,
        "protein": protein,
        "fat": fat,
        "ingredients": ingredients,
        "directions": directions,
        "cooking_time": cooking_time,
        "servings": servings,
        "category": category
    }

    recipes.append(recipe)
    print("Writing to file...")
    with open("recipes.json", "w") as f:
        json.dump(recipes, f, indent=4)

    # Go back to previous page
    driver.close()
    return True

def main():
    start_scraping()

    print("Writing to file...")
    with open("recipes.json", "w") as f:
        json.dump(recipes, f, indent=4)


if __name__ == "__main__":
    main()
