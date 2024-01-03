#!/usr/bin/node
//Script to print characters of a Star Wars movie using the Star Wars API.

import requests
import sys

def get_characters(movie_id):
    url = f"https://swapi.dev/api/films/{movie_id}/"
    response = requests.get(url)
    
    if response.status_code == 200:
        film_data = response.json()
        characters = film_data['characters']
        return characters
    else:
        print(f"Error: Unable to fetch data for movie ID {movie_id}")
        sys.exit(1)

def get_character_name(character_url):
    response = requests.get(character_url)
    
    if response.status_code == 200:
        character_data = response.json()
        return character_data['name']
    else:
        print(f"Error: Unable to fetch character data from {character_url}")
        sys.exit(1)

def main():
    if len(sys.argv) != 2:
        print("Usage: ./script.py <movie_id>")
        sys.exit(1)

    movie_id = sys.argv[1]
    characters = get_characters(movie_id)

    for character_url in characters:
        character_name = get_character_name(character_url)
        print(character_name)

if __name__ == "__main__":
    main()

