import json

def main():
    with open("test.json", "r") as f:
        data = json.load(f)


    names = []
    names_and_id = []
    id = 1

    for recipe in data:
        if recipe["name"] not in names:
            names.append(recipe["name"])
            names_and_id.append({
                "name": recipe["name"],
                "id": id,
                })
        else:
            index = names.index(recipe["name"])+1
            names_and_id_with_duplicate_id = names_and_id[index]
            print("Duplicate recipe: {}".format(recipe["name"]))
        id += 1

    print("Number of recipes: {}".format(len(data)))
    print("Number of unique recipes: {}".format(len(names)))

    with open("recipes_with_id_and_duplicate_id_test.json", "w") as f:
        json.dump(names_and_id_with_duplicate_id, f, indent=4)


if __name__ == "__main__":
    main()