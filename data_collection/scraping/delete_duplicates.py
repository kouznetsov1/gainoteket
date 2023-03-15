# Issue:
# Accidentally created duplicate recipes. When some recipe existed in two categories it added the category to the first
# instance of the recipe and then it created a new recipe with the same name and added the category to that one.
# Solution:
# 1. Delete the second instance of the recipe
# 2. Calculate new id:s for the recipes

import json

def main():
    with open("recipes_with_id_and_duplicate_id.json", "r") as f:
        duplicates_list = json.load(f)

    with open("recipes_with_id.json", "r") as f:
        data = json.load(f)


    # Pretty print json
    print(json.dumps(data[0:2], indent=4))

    for id, obj in enumerate(data):
        #print(id)
        if obj["id"] == 2:
            print("pop", id)
            print(obj["name"])
            print(obj["id"])
            data.pop(id)
    

    #print(json.dumps(data, indent=4))

    for recipe in duplicates_list:
        duplicate_id = recipe["duplicate_id"]
        if type(duplicate_id) == int:
            for rid, obj in enumerate(data):
                if obj["id"] == duplicate_id:
                    data.pop(rid)
                    break

    for rid, obj in enumerate(data):
        obj["id"] = rid+1

    with open("test.json", "w") as f:
        json.dump(data, f, indent=4)

    print(json.dumps(data[0:2], indent=4))

if __name__ == "__main__":
    main()