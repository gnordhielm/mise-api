# Mise

>The purpose of this app is to take some of the stress and uncertainty out of developing new recipes and learning new skills. Whether you're a professional or amateur the process of honing in on your distinctive taste and is predicated on repetition. Mise is a tool for mediating and organizing both the repetition, and its eventual product: new culinary ideas and dishes which only you could make. Food is, both chemically and culturally, incredibly complex. That everyone is eating kale salad lately should not be taken as an indication that the human race has exhausted the possibilities of culinary art, chef.

## Approach

[My user stories](https://trello.com/b/AWheJ8o2/mise).

**Topics of interest**

* Software that doesn't squash moments of inspiration. 
* [Fountain.io](https://fountain.io/) - discipline-specific markup languages.
* The GitHub for recipes. Bringing collaboration to a new medium
* Rich information. Stretching the rudimentary data structures to better represent reality.
* Using NoSQL to figure out a schema - then moving to SQL.

My **minimum viable product** will...

* Have authenticated users, who can indicate that they are professionals or amateurs - and update that status.
* Store recipes associated with a user - with a remarkable level of detail.
* Have a recipe API which people can ping and get recipes out of my database, formatted however they like.
* Have an interface for iterating and altering recipes before saving them to your library.

That done, I'll move on to **organizational features**, which will include...

* Meal planning - a drag and drop feature for a single meal connected to a calendar.
* Prep lists - a simple click of a button can convert a meal plan into a set of prep lists, which can be touched up and then printed. These files are bound to their meals, and update automatically when changes occur. 
* Grocery lists - an extension of the prep list, Mise can automatically calculate how much of everything I need. This would be a great mobile integration feature.

Next, I'll work on the **creative features**...

* The ideas app - making it easy to write things down and connect them to other things. This would be another mobile-first feature.
* Ideas in meal planning. Rather than just dragging and dropping recipes, users can connect recipes with ideas: things they've been meaning to try, flavors they like, etc.
* Drag and drop recipes from around the web - Mise will break them down into components it understands, and store them as untested.

Finally, I'd like to tackle some **advanced organizational features**...

* Dynamically generated prep lists - which respond to things like number of people on hand, and learn from the adjustments you make after they are generated.
* Projects - multiple meals, planned over or for long periods of time. 

If by some miracle I still need to keep busy next week, I will...

* Make it possible for users to share recipes by email or handle.
* Implement collaboration on recipes, so that two or more users can contribute to one in real-time.
* Implement a social feature in the app, including recipe feeds, annotated recipes, and following.
* Implement Instagram integration - allowing people to reference Mise recipes using special hashtags (#mise-23452).

## Process

These wireframes represent my first ideas for how users will interface with the application. They also depict some features which show up only in my stretch goals and so are an aspirational guide - not a rigid plan for the app.

![Wireframes](./readme-assets/wireframes.png)

## Database Design

[My ERD on Draw.io](https://drive.google.com/file/d/0B_Z_3OoTgJFkUWgwRmJpOVgxMmc/view?usp=sharing).

I want this database to be flexible, at least to begin with. SQL is the most robust and widely-adopted standard for 'serious databases', but to begin with, my database is kind of an experiment. My schema will benefit from that flexibility early on.

This application should do everything possible with the information available to it. For example, if I plan out a whole week's worth of meals, Mise should be able to tell me something about the nutritional benefits and detriments that week will have. It can offer me suggestions on how to make things healthier, and give me warnings if I'm sticking with the same unhealthy option over and over. It should also be able to tell me what ingredients are in season when. The issue here isn't what information my app has access to, but how much it can do with that information. This is the thinking process I need to go through when building out my database.

If this app grows to the point where it needs a more rigid and serious back-end, I will re-build it as a relational database. 

## Technologies I'll Use

* Node
* Express
* MongoDB
* React (or Angular if React winds up being too much)
* React Native, if I get to my stretch goals.

## API Endpoints
...

## Installation
...

## Next Steps

**Things I need to fix**
...

**Features I'd like to implement**
...
