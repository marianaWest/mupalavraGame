# Mupalavra 

[PLACE_FOR_IMAGE]

https://mupalavra.cyclic.app/game


Mupalavra is a web application being created for the Museu Paranaense, one of Brazil's oldest museums. It's based on the Wordle game, but rather than randomly choosing from a pre-generated list of words, it picks the right guess from a MongoDB database fed by the museum's researchers and curators. When the user guesses the right word, the game also shows a brief description of it.  
The name is a combination of the museum's acronym (MUPA) and 'palavra', which means 'word' in Portuguese.  

# Technologies in use / Tech Stack / Built with  
  - JavaScript  
  - Node.js  
  - Express  
  - MongoDB  
  - Toastr, an animation library  

# Installation

To install Mupalavra locally, please follow the steps below:
  - Clone repo to your machine
  - Open the root of the project and install all dependencies with `npm i` / `yarn`
  - Project has various scripts to run:
    - `npm start` - running local version

# What I have learned

While I was building Mupalavra I have learned the fundamentals of MVC architecture, and how to transfer data sent from the backend into a plain JavaScript file. I also learned about .normalize('NFD') and how to get random information from MongoDB.  

# Source

This project began as a clone of the FreeCodeCamp Wordle tutorial (https://www.freecodecamp.org/news/build-a-wordle-clone-in-javascript/), but I have implemented numerous features and changes, not limited to the connection with the backend. For example, originally the Wordle game only accepts five-letter words, and Mupalavra accepts words of different lengths.  

# Refactoring

I'm not pleased with the layout yet, especially because the colors don't have the right contrast for reading.  

