package main

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"strconv"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Ingredient struct {
	Quantity float64 `json:"quantity"`
	Unit     string  `json:"unit"`
	Name     string  `json:"name"`
}

// Handles the case where quantity is a string
func (i *Ingredient) UnmarshalJSON(data []byte) error {
	type alias Ingredient
	aux := struct {
		Quantity interface{} `json:"quantity"`
		*alias
	}{
		alias: (*alias)(i),
	}

	if err := json.Unmarshal(data, &aux); err != nil {
		return err
	}

	switch v := aux.Quantity.(type) {
	case float64:
		i.Quantity = v
	case string:
		if v == "" {
			i.Quantity = 0
		} else {
			parsedQuantity, err := strconv.ParseFloat(v, 64)
			if err != nil {
				return err
			}
			i.Quantity = parsedQuantity
		}
	default:
		return fmt.Errorf("unexpected type for Quantity: %T", v)
	}

	return nil
}

type Recipe struct {
	Name        string                  `json:"name"`
	Calories    int                     `json:"calories"`
	Carbs       int                     `json:"carbs"`
	Protein     int                     `json:"protein"`
	Fat         int                     `json:"fat"`
	Ingredients map[string][]Ingredient `json:"ingredients"`
	Directions  []string                `json:"directions"`
	Servings    int                     `json:"servings"`
	Category    []string                `json:"category"`
	Preference  []string                `json:"preference"`
	URL         string                  `json:"url"`
	ID          int                     `json:"id"`
	ImageURL    string                  `json:"image_url"`
}

func main() {
	recipes := readFile()

	client, collection, err := setupMongoDB()
	if err != nil {
		fmt.Println("Error setting up MongoDB:", err)
		return
	}
	defer client.Disconnect(context.Background())

	for _, recipe := range recipes {
		addRecipeToDB(recipe, collection)
	}
}

func readFile() []Recipe {
	file, err := os.Open("data/recipes_with_id_and_images.json")

	if err != nil {
		fmt.Println(err)
		return nil
	}
	defer file.Close()

	var recipes []Recipe
	decoder := json.NewDecoder(file)
	err = decoder.Decode(&recipes)
	if err != nil {
		fmt.Println("error:", err)
		return nil
	}

	return recipes
}

func setupMongoDB() (*mongo.Client, *mongo.Collection, error) {
	// Get URI from .env file
	err := godotenv.Load()
	if err != nil {
		return nil, nil, err
	}
	MONGODB_URI := os.Getenv("MONGODB_URI")

	// Set MongoDB client options
	clientOptions := options.Client().ApplyURI(MONGODB_URI)

	// Connect to MongoDB
	client, err := mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		return nil, nil, err
	}

	// Check the connection
	err = client.Ping(context.Background(), nil)
	if err != nil {
		return nil, nil, err
	}

	// Choose the database and collection
	collection := client.Database("gainoteket").Collection("recipes")

	return client, collection, nil
}

func addRecipeToDB(recipe Recipe, collection *mongo.Collection) {
	insertResult, err := collection.InsertOne(context.Background(), bson.M{
		"name":        recipe.Name,
		"calories":    recipe.Calories,
		"carbs":       recipe.Carbs,
		"protein":     recipe.Protein,
		"fat":         recipe.Fat,
		"ingredients": recipe.Ingredients,
		"directions":  recipe.Directions,
		"servings":    recipe.Servings,
		"category":    recipe.Category,
		"preference":  recipe.Preference,
		"url":         recipe.URL,
		"id":          recipe.ID,
		"image_url":   recipe.ImageURL,
	})
	if err != nil {
		fmt.Println("Error adding recipe to DB:", err)
		return
	}

	fmt.Println("Inserted recipe with ID:", insertResult.InsertedID)
}
