/*
spoonacular API

The spoonacular Nutrition, Recipe, and Food API allows you to access over thousands of recipes, thousands of ingredients, 800,000 food products, over 100,000 menu items, and restaurants. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.

API version: 1.1
Contact: mail@spoonacular.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// SearchFoodVideos200ResponseVideosInner struct for SearchFoodVideos200ResponseVideosInner
type SearchFoodVideos200ResponseVideosInner struct {
	Title string `json:"title"`
	Length int32 `json:"length"`
	Rating float32 `json:"rating"`
	ShortTitle string `json:"shortTitle"`
	Thumbnail string `json:"thumbnail"`
	Views int32 `json:"views"`
	YouTubeId string `json:"youTubeId"`
}

// NewSearchFoodVideos200ResponseVideosInner instantiates a new SearchFoodVideos200ResponseVideosInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSearchFoodVideos200ResponseVideosInner(title string, length int32, rating float32, shortTitle string, thumbnail string, views int32, youTubeId string) *SearchFoodVideos200ResponseVideosInner {
	this := SearchFoodVideos200ResponseVideosInner{}
	this.Title = title
	this.Length = length
	this.Rating = rating
	this.ShortTitle = shortTitle
	this.Thumbnail = thumbnail
	this.Views = views
	this.YouTubeId = youTubeId
	return &this
}

// NewSearchFoodVideos200ResponseVideosInnerWithDefaults instantiates a new SearchFoodVideos200ResponseVideosInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSearchFoodVideos200ResponseVideosInnerWithDefaults() *SearchFoodVideos200ResponseVideosInner {
	this := SearchFoodVideos200ResponseVideosInner{}
	return &this
}

// GetTitle returns the Title field value
func (o *SearchFoodVideos200ResponseVideosInner) GetTitle() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Title
}

// GetTitleOk returns a tuple with the Title field value
// and a boolean to check if the value has been set.
func (o *SearchFoodVideos200ResponseVideosInner) GetTitleOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Title, true
}

// SetTitle sets field value
func (o *SearchFoodVideos200ResponseVideosInner) SetTitle(v string) {
	o.Title = v
}

// GetLength returns the Length field value
func (o *SearchFoodVideos200ResponseVideosInner) GetLength() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Length
}

// GetLengthOk returns a tuple with the Length field value
// and a boolean to check if the value has been set.
func (o *SearchFoodVideos200ResponseVideosInner) GetLengthOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Length, true
}

// SetLength sets field value
func (o *SearchFoodVideos200ResponseVideosInner) SetLength(v int32) {
	o.Length = v
}

// GetRating returns the Rating field value
func (o *SearchFoodVideos200ResponseVideosInner) GetRating() float32 {
	if o == nil {
		var ret float32
		return ret
	}

	return o.Rating
}

// GetRatingOk returns a tuple with the Rating field value
// and a boolean to check if the value has been set.
func (o *SearchFoodVideos200ResponseVideosInner) GetRatingOk() (*float32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Rating, true
}

// SetRating sets field value
func (o *SearchFoodVideos200ResponseVideosInner) SetRating(v float32) {
	o.Rating = v
}

// GetShortTitle returns the ShortTitle field value
func (o *SearchFoodVideos200ResponseVideosInner) GetShortTitle() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ShortTitle
}

// GetShortTitleOk returns a tuple with the ShortTitle field value
// and a boolean to check if the value has been set.
func (o *SearchFoodVideos200ResponseVideosInner) GetShortTitleOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ShortTitle, true
}

// SetShortTitle sets field value
func (o *SearchFoodVideos200ResponseVideosInner) SetShortTitle(v string) {
	o.ShortTitle = v
}

// GetThumbnail returns the Thumbnail field value
func (o *SearchFoodVideos200ResponseVideosInner) GetThumbnail() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Thumbnail
}

// GetThumbnailOk returns a tuple with the Thumbnail field value
// and a boolean to check if the value has been set.
func (o *SearchFoodVideos200ResponseVideosInner) GetThumbnailOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Thumbnail, true
}

// SetThumbnail sets field value
func (o *SearchFoodVideos200ResponseVideosInner) SetThumbnail(v string) {
	o.Thumbnail = v
}

// GetViews returns the Views field value
func (o *SearchFoodVideos200ResponseVideosInner) GetViews() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Views
}

// GetViewsOk returns a tuple with the Views field value
// and a boolean to check if the value has been set.
func (o *SearchFoodVideos200ResponseVideosInner) GetViewsOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Views, true
}

// SetViews sets field value
func (o *SearchFoodVideos200ResponseVideosInner) SetViews(v int32) {
	o.Views = v
}

// GetYouTubeId returns the YouTubeId field value
func (o *SearchFoodVideos200ResponseVideosInner) GetYouTubeId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.YouTubeId
}

// GetYouTubeIdOk returns a tuple with the YouTubeId field value
// and a boolean to check if the value has been set.
func (o *SearchFoodVideos200ResponseVideosInner) GetYouTubeIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.YouTubeId, true
}

// SetYouTubeId sets field value
func (o *SearchFoodVideos200ResponseVideosInner) SetYouTubeId(v string) {
	o.YouTubeId = v
}

func (o SearchFoodVideos200ResponseVideosInner) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["title"] = o.Title
	}
	if true {
		toSerialize["length"] = o.Length
	}
	if true {
		toSerialize["rating"] = o.Rating
	}
	if true {
		toSerialize["shortTitle"] = o.ShortTitle
	}
	if true {
		toSerialize["thumbnail"] = o.Thumbnail
	}
	if true {
		toSerialize["views"] = o.Views
	}
	if true {
		toSerialize["youTubeId"] = o.YouTubeId
	}
	return json.Marshal(toSerialize)
}

type NullableSearchFoodVideos200ResponseVideosInner struct {
	value *SearchFoodVideos200ResponseVideosInner
	isSet bool
}

func (v NullableSearchFoodVideos200ResponseVideosInner) Get() *SearchFoodVideos200ResponseVideosInner {
	return v.value
}

func (v *NullableSearchFoodVideos200ResponseVideosInner) Set(val *SearchFoodVideos200ResponseVideosInner) {
	v.value = val
	v.isSet = true
}

func (v NullableSearchFoodVideos200ResponseVideosInner) IsSet() bool {
	return v.isSet
}

func (v *NullableSearchFoodVideos200ResponseVideosInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSearchFoodVideos200ResponseVideosInner(val *SearchFoodVideos200ResponseVideosInner) *NullableSearchFoodVideos200ResponseVideosInner {
	return &NullableSearchFoodVideos200ResponseVideosInner{value: val, isSet: true}
}

func (v NullableSearchFoodVideos200ResponseVideosInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSearchFoodVideos200ResponseVideosInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

