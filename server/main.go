package main

import (
	"api/configs"
	"api/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	configs.ConnectDB()

	routes.RecipeRoute(app)

	app.Listen(":6000")
}
