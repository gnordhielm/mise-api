# Mise API

>The purpose of this app is to take some of the stress and uncertainty out of developing new recipes and learning new skills. Whether you're a professional or amateur the process of honing in on your distinctive taste and is predicated on repetition. Mise is a tool for mediating and organizing both the repetition, and its eventual product: new culinary ideas and dishes which only you could make. Food is, both chemically and culturally, incredibly complex. That everyone is eating kale salad lately should not be taken as an indication that the human race has exhausted the possibilities of culinary art, chef.

## Format

Requests are returned in the following format:

```
title: String,
subtitle: String,

attribution: String,

body: String
```

## Endpoints

`GET` `https://mise-app.herokuapp.com/api/recipes` - recipes index
`GET` `https://mise-app.herokuapp.com/api/recipes/:id` - show one recipe

`POST` `https://mise-app.herokuapp.com/api/recipes` - create a recipe

`PATCH` `https://mise-app.herokuapp.com/api/recipes/:id` - update a recipe
`DELETE` `https://mise-app.herokuapp.com/api/recipes/:id` - delete a recipe