package responses

type IngredientResponse struct {
	Quantity float64 `json:"quantity"`
	Unit     string  `json:"unit"`
	Name     string  `json:"name"`
}

type RecipeResponse struct {
	Name        string                          `json:"name"`
	Calories    int                             `json:"calories"`
	Carbs       int                             `json:"carbs"`
	Protein     int                             `json:"protein"`
	Fat         int                             `json:"fat"`
	Ingredients map[string][]IngredientResponse `json:"ingredients"`
	Directions  []string                        `json:"directions"`
	Servings    int                             `json:"servings"`
	Category    []string                        `json:"category"`
	Preference  []string                        `json:"preference"`
	URL         string                          `json:"url"`
	ID          int                             `json:"id"`
	ImageURL    string                          `json:"image_url"`
}
