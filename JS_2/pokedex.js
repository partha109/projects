const pokedex = [{
  id: 1,
  name: 'Bulbasaur',
  type: ['Grass', 'Poison'],
  base: {
    HP: 45,
    Attack: 49,
    Defense: 49,
    'Sp. Attack': 65,
    'Sp. Defense': 65,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/bulbasaur',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
}, {
  id: 2,
  name: 'Ivysaur',
  type: ['Grass', 'Poison'],
  base: {
    HP: 60,
    Attack: 62,
    Defense: 63,
    'Sp. Attack': 80,
    'Sp. Defense': 80,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/ivysaur',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
}, {
  id: 3,
  name: 'Venusaur',
  type: ['Grass', 'Poison'],
  base: {
    HP: 80,
    Attack: 82,
    Defense: 83,
    'Sp. Attack': 100,
    'Sp. Defense': 100,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/venusaur',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png'
}, {
  id: 4,
  name: 'Charmander',
  type: ['Fire'],
  base: {
    HP: 39,
    Attack: 52,
    Defense: 43,
    'Sp. Attack': 60,
    'Sp. Defense': 50,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/charmander',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
}, {
  id: 5,
  name: 'Charmeleon',
  type: ['Fire'],
  base: {
    HP: 58,
    Attack: 64,
    Defense: 58,
    'Sp. Attack': 80,
    'Sp. Defense': 65,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/charmeleon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png'
}, {
  id: 6,
  name: 'Charizard',
  type: ['Fire', 'Flying'],
  base: {
    HP: 78,
    Attack: 84,
    Defense: 78,
    'Sp. Attack': 109,
    'Sp. Defense': 85,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/charizard',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
}, {
  id: 7,
  name: 'Squirtle',
  type: ['Water'],
  base: {
    HP: 44,
    Attack: 48,
    Defense: 65,
    'Sp. Attack': 50,
    'Sp. Defense': 64,
    Speed: 43
  },
  url: 'https://www.pokemon.com/us/pokedex/squirtle',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
}, {
  id: 8,
  name: 'Wartortle',
  type: ['Water'],
  base: {
    HP: 59,
    Attack: 63,
    Defense: 80,
    'Sp. Attack': 65,
    'Sp. Defense': 80,
    Speed: 58
  },
  url: 'https://www.pokemon.com/us/pokedex/wartortle',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png'
}, {
  id: 9,
  name: 'Blastoise',
  type: ['Water'],
  base: {
    HP: 79,
    Attack: 83,
    Defense: 100,
    'Sp. Attack': 85,
    'Sp. Defense': 105,
    Speed: 78
  },
  url: 'https://www.pokemon.com/us/pokedex/blastoise',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png'
}, {
  id: 10,
  name: 'Caterpie',
  type: ['Bug'],
  base: {
    HP: 45,
    Attack: 30,
    Defense: 35,
    'Sp. Attack': 20,
    'Sp. Defense': 20,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/caterpie',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png'
}, {
  id: 11,
  name: 'Metapod',
  type: ['Bug'],
  base: {
    HP: 50,
    Attack: 20,
    Defense: 55,
    'Sp. Attack': 25,
    'Sp. Defense': 25,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/metapod',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png'
}, {
  id: 12,
  name: 'Butterfree',
  type: ['Bug', 'Flying'],
  base: {
    HP: 60,
    Attack: 45,
    Defense: 50,
    'Sp. Attack': 90,
    'Sp. Defense': 80,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/butterfree',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png'
}, {
  id: 13,
  name: 'Weedle',
  type: ['Bug', 'Poison'],
  base: {
    HP: 40,
    Attack: 35,
    Defense: 30,
    'Sp. Attack': 20,
    'Sp. Defense': 20,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/weedle',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png'
}, {
  id: 14,
  name: 'Kakuna',
  type: ['Bug', 'Poison'],
  base: {
    HP: 45,
    Attack: 25,
    Defense: 50,
    'Sp. Attack': 25,
    'Sp. Defense': 25,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/kakuna',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png'
}, {
  id: 15,
  name: 'Beedrill',
  type: ['Bug', 'Poison'],
  base: {
    HP: 65,
    Attack: 90,
    Defense: 40,
    'Sp. Attack': 45,
    'Sp. Defense': 80,
    Speed: 75
  },
  url: 'https://www.pokemon.com/us/pokedex/beedrill',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png'
}, {
  id: 16,
  name: 'Pidgey',
  type: ['Normal', 'Flying'],
  base: {
    HP: 40,
    Attack: 45,
    Defense: 40,
    'Sp. Attack': 35,
    'Sp. Defense': 35,
    Speed: 56
  },
  url: 'https://www.pokemon.com/us/pokedex/pidgey',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png'
}, {
  id: 17,
  name: 'Pidgeotto',
  type: ['Normal', 'Flying'],
  base: {
    HP: 63,
    Attack: 60,
    Defense: 55,
    'Sp. Attack': 50,
    'Sp. Defense': 50,
    Speed: 71
  },
  url: 'https://www.pokemon.com/us/pokedex/pidgeotto',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png'
}, {
  id: 18,
  name: 'Pidgeot',
  type: ['Normal', 'Flying'],
  base: {
    HP: 83,
    Attack: 80,
    Defense: 75,
    'Sp. Attack': 70,
    'Sp. Defense': 70,
    Speed: 101
  },
  url: 'https://www.pokemon.com/us/pokedex/pidgeot',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png'
}, {
  id: 19,
  name: 'Rattata',
  type: ['Normal'],
  base: {
    HP: 30,
    Attack: 56,
    Defense: 35,
    'Sp. Attack': 25,
    'Sp. Defense': 35,
    Speed: 72
  },
  url: 'https://www.pokemon.com/us/pokedex/rattata',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png'
}, {
  id: 20,
  name: 'Raticate',
  type: ['Normal'],
  base: {
    HP: 55,
    Attack: 81,
    Defense: 60,
    'Sp. Attack': 50,
    'Sp. Defense': 70,
    Speed: 97
  },
  url: 'https://www.pokemon.com/us/pokedex/raticate',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png'
}, {
  id: 21,
  name: 'Spearow',
  type: ['Normal', 'Flying'],
  base: {
    HP: 40,
    Attack: 60,
    Defense: 30,
    'Sp. Attack': 31,
    'Sp. Defense': 31,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/spearow',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png'
}, {
  id: 22,
  name: 'Fearow',
  type: ['Normal', 'Flying'],
  base: {
    HP: 65,
    Attack: 90,
    Defense: 65,
    'Sp. Attack': 61,
    'Sp. Defense': 61,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/fearow',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png'
}, {
  id: 23,
  name: 'Ekans',
  type: ['Poison'],
  base: {
    HP: 35,
    Attack: 60,
    Defense: 44,
    'Sp. Attack': 40,
    'Sp. Defense': 54,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/ekans',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png'
}, {
  id: 24,
  name: 'Arbok',
  type: ['Poison'],
  base: {
    HP: 60,
    Attack: 95,
    Defense: 69,
    'Sp. Attack': 65,
    'Sp. Defense': 79,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/arbok',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png'
}, {
  id: 25,
  name: 'Pikachu',
  type: ['Electric'],
  base: {
    HP: 35,
    Attack: 55,
    Defense: 40,
    'Sp. Attack': 50,
    'Sp. Defense': 50,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/pikachu',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
}, {
  id: 26,
  name: 'Raichu',
  type: ['Electric'],
  base: {
    HP: 60,
    Attack: 90,
    Defense: 55,
    'Sp. Attack': 90,
    'Sp. Defense': 80,
    Speed: 110
  },
  url: 'https://www.pokemon.com/us/pokedex/raichu',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png'
}, {
  id: 27,
  name: 'Sandshrew',
  type: ['Ground'],
  base: {
    HP: 50,
    Attack: 75,
    Defense: 85,
    'Sp. Attack': 20,
    'Sp. Defense': 30,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/sandshrew',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png'
}, {
  id: 28,
  name: 'Sandslash',
  type: ['Ground'],
  base: {
    HP: 75,
    Attack: 100,
    Defense: 110,
    'Sp. Attack': 45,
    'Sp. Defense': 55,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/sandslash',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png'
}, {
  id: 29,
  name: 'Nidoran\u2640',
  type: ['Poison'],
  base: {
    HP: 55,
    Attack: 47,
    Defense: 52,
    'Sp. Attack': 40,
    'Sp. Defense': 40,
    Speed: 41
  },
  url: 'https://www.pokemon.com/us/pokedex/nidoran\u2640',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png'
}, {
  id: 30,
  name: 'Nidorina',
  type: ['Poison'],
  base: {
    HP: 70,
    Attack: 62,
    Defense: 67,
    'Sp. Attack': 55,
    'Sp. Defense': 55,
    Speed: 56
  },
  url: 'https://www.pokemon.com/us/pokedex/nidorina',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png'
}, {
  id: 31,
  name: 'Nidoqueen',
  type: ['Poison', 'Ground'],
  base: {
    HP: 90,
    Attack: 92,
    Defense: 87,
    'Sp. Attack': 75,
    'Sp. Defense': 85,
    Speed: 76
  },
  url: 'https://www.pokemon.com/us/pokedex/nidoqueen',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png'
}, {
  id: 32,
  name: 'Nidoran\u2642',
  type: ['Poison'],
  base: {
    HP: 46,
    Attack: 57,
    Defense: 40,
    'Sp. Attack': 40,
    'Sp. Defense': 40,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/nidoran\u2642',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png'
}, {
  id: 33,
  name: 'Nidorino',
  type: ['Poison'],
  base: {
    HP: 61,
    Attack: 72,
    Defense: 57,
    'Sp. Attack': 55,
    'Sp. Defense': 55,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/nidorino',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png'
}, {
  id: 34,
  name: 'Nidoking',
  type: ['Poison', 'Ground'],
  base: {
    HP: 81,
    Attack: 102,
    Defense: 77,
    'Sp. Attack': 85,
    'Sp. Defense': 75,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/nidoking',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png'
}, {
  id: 35,
  name: 'Clefairy',
  type: ['Fairy'],
  base: {
    HP: 70,
    Attack: 45,
    Defense: 48,
    'Sp. Attack': 60,
    'Sp. Defense': 65,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/clefairy',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png'
}, {
  id: 36,
  name: 'Clefable',
  type: ['Fairy'],
  base: {
    HP: 95,
    Attack: 70,
    Defense: 73,
    'Sp. Attack': 95,
    'Sp. Defense': 90,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/clefable',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png'
}, {
  id: 37,
  name: 'Vulpix',
  type: ['Fire'],
  base: {
    HP: 38,
    Attack: 41,
    Defense: 40,
    'Sp. Attack': 50,
    'Sp. Defense': 65,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/vulpix',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png'
}, {
  id: 38,
  name: 'Ninetales',
  type: ['Fire'],
  base: {
    HP: 73,
    Attack: 76,
    Defense: 75,
    'Sp. Attack': 81,
    'Sp. Defense': 100,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/ninetales',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png'
}, {
  id: 39,
  name: 'Jigglypuff',
  type: ['Normal', 'Fairy'],
  base: {
    HP: 115,
    Attack: 45,
    Defense: 20,
    'Sp. Attack': 45,
    'Sp. Defense': 25,
    Speed: 20
  },
  url: 'https://www.pokemon.com/us/pokedex/jigglypuff',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png'
}, {
  id: 40,
  name: 'Wigglytuff',
  type: ['Normal', 'Fairy'],
  base: {
    HP: 140,
    Attack: 70,
    Defense: 45,
    'Sp. Attack': 85,
    'Sp. Defense': 50,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/wigglytuff',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png'
}, {
  id: 41,
  name: 'Zubat',
  type: ['Poison', 'Flying'],
  base: {
    HP: 40,
    Attack: 45,
    Defense: 35,
    'Sp. Attack': 30,
    'Sp. Defense': 40,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/zubat',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png'
}, {
  id: 42,
  name: 'Golbat',
  type: ['Poison', 'Flying'],
  base: {
    HP: 75,
    Attack: 80,
    Defense: 70,
    'Sp. Attack': 65,
    'Sp. Defense': 75,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/golbat',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png'
}, {
  id: 43,
  name: 'Oddish',
  type: ['Grass', 'Poison'],
  base: {
    HP: 45,
    Attack: 50,
    Defense: 55,
    'Sp. Attack': 75,
    'Sp. Defense': 65,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/oddish',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png'
}, {
  id: 44,
  name: 'Gloom',
  type: ['Grass', 'Poison'],
  base: {
    HP: 60,
    Attack: 65,
    Defense: 70,
    'Sp. Attack': 85,
    'Sp. Defense': 75,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/gloom',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png'
}, {
  id: 45,
  name: 'Vileplume',
  type: ['Grass', 'Poison'],
  base: {
    HP: 75,
    Attack: 80,
    Defense: 85,
    'Sp. Attack': 110,
    'Sp. Defense': 90,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/vileplume',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png'
}, {
  id: 46,
  name: 'Paras',
  type: ['Bug', 'Grass'],
  base: {
    HP: 35,
    Attack: 70,
    Defense: 55,
    'Sp. Attack': 45,
    'Sp. Defense': 55,
    Speed: 25
  },
  url: 'https://www.pokemon.com/us/pokedex/paras',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png'
}, {
  id: 47,
  name: 'Parasect',
  type: ['Bug', 'Grass'],
  base: {
    HP: 60,
    Attack: 95,
    Defense: 80,
    'Sp. Attack': 60,
    'Sp. Defense': 80,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/parasect',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png'
}, {
  id: 48,
  name: 'Venonat',
  type: ['Bug', 'Poison'],
  base: {
    HP: 60,
    Attack: 55,
    Defense: 50,
    'Sp. Attack': 40,
    'Sp. Defense': 55,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/venonat',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png'
}, {
  id: 49,
  name: 'Venomoth',
  type: ['Bug', 'Poison'],
  base: {
    HP: 70,
    Attack: 65,
    Defense: 60,
    'Sp. Attack': 90,
    'Sp. Defense': 75,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/venomoth',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png'
}, {
  id: 50,
  name: 'Diglett',
  type: ['Ground'],
  base: {
    HP: 10,
    Attack: 55,
    Defense: 25,
    'Sp. Attack': 35,
    'Sp. Defense': 45,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/diglett',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png'
}, {
  id: 51,
  name: 'Dugtrio',
  type: ['Ground'],
  base: {
    HP: 35,
    Attack: 100,
    Defense: 50,
    'Sp. Attack': 50,
    'Sp. Defense': 70,
    Speed: 120
  },
  url: 'https://www.pokemon.com/us/pokedex/dugtrio',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png'
}, {
  id: 52,
  name: 'Meowth',
  type: ['Normal'],
  base: {
    HP: 40,
    Attack: 45,
    Defense: 35,
    'Sp. Attack': 40,
    'Sp. Defense': 40,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/meowth',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png'
}, {
  id: 53,
  name: 'Persian',
  type: ['Normal'],
  base: {
    HP: 65,
    Attack: 70,
    Defense: 60,
    'Sp. Attack': 65,
    'Sp. Defense': 65,
    Speed: 115
  },
  url: 'https://www.pokemon.com/us/pokedex/persian',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png'
}, {
  id: 54,
  name: 'Psyduck',
  type: ['Water'],
  base: {
    HP: 50,
    Attack: 52,
    Defense: 48,
    'Sp. Attack': 65,
    'Sp. Defense': 50,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/psyduck',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png'
}, {
  id: 55,
  name: 'Golduck',
  type: ['Water'],
  base: {
    HP: 80,
    Attack: 82,
    Defense: 78,
    'Sp. Attack': 95,
    'Sp. Defense': 80,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/golduck',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png'
}, {
  id: 56,
  name: 'Mankey',
  type: ['Fighting'],
  base: {
    HP: 40,
    Attack: 80,
    Defense: 35,
    'Sp. Attack': 35,
    'Sp. Defense': 45,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/mankey',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png'
}, {
  id: 57,
  name: 'Primeape',
  type: ['Fighting'],
  base: {
    HP: 65,
    Attack: 105,
    Defense: 60,
    'Sp. Attack': 60,
    'Sp. Defense': 70,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/primeape',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png'
}, {
  id: 58,
  name: 'Growlithe',
  type: ['Fire'],
  base: {
    HP: 55,
    Attack: 70,
    Defense: 45,
    'Sp. Attack': 70,
    'Sp. Defense': 50,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/growlithe',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png'
}, {
  id: 59,
  name: 'Arcanine',
  type: ['Fire'],
  base: {
    HP: 90,
    Attack: 110,
    Defense: 80,
    'Sp. Attack': 100,
    'Sp. Defense': 80,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/arcanine',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png'
}, {
  id: 60,
  name: 'Poliwag',
  type: ['Water'],
  base: {
    HP: 40,
    Attack: 50,
    Defense: 40,
    'Sp. Attack': 40,
    'Sp. Defense': 40,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/poliwag',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png'
}, {
  id: 61,
  name: 'Poliwhirl',
  type: ['Water'],
  base: {
    HP: 65,
    Attack: 65,
    Defense: 65,
    'Sp. Attack': 50,
    'Sp. Defense': 50,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/poliwhirl',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png'
}, {
  id: 62,
  name: 'Poliwrath',
  type: ['Water', 'Fighting'],
  base: {
    HP: 90,
    Attack: 95,
    Defense: 95,
    'Sp. Attack': 70,
    'Sp. Defense': 90,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/poliwrath',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png'
}, {
  id: 63,
  name: 'Abra',
  type: ['Psychic'],
  base: {
    HP: 25,
    Attack: 20,
    Defense: 15,
    'Sp. Attack': 105,
    'Sp. Defense': 55,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/abra',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png'
}, {
  id: 64,
  name: 'Kadabra',
  type: ['Psychic'],
  base: {
    HP: 40,
    Attack: 35,
    Defense: 30,
    'Sp. Attack': 120,
    'Sp. Defense': 70,
    Speed: 105
  },
  url: 'https://www.pokemon.com/us/pokedex/kadabra',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png'
}, {
  id: 65,
  name: 'Alakazam',
  type: ['Psychic'],
  base: {
    HP: 55,
    Attack: 50,
    Defense: 45,
    'Sp. Attack': 135,
    'Sp. Defense': 95,
    Speed: 120
  },
  url: 'https://www.pokemon.com/us/pokedex/alakazam',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png'
}, {
  id: 66,
  name: 'Machop',
  type: ['Fighting'],
  base: {
    HP: 70,
    Attack: 80,
    Defense: 50,
    'Sp. Attack': 35,
    'Sp. Defense': 35,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/machop',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png'
}, {
  id: 67,
  name: 'Machoke',
  type: ['Fighting'],
  base: {
    HP: 80,
    Attack: 100,
    Defense: 70,
    'Sp. Attack': 50,
    'Sp. Defense': 60,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/machoke',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png'
}, {
  id: 68,
  name: 'Machamp',
  type: ['Fighting'],
  base: {
    HP: 90,
    Attack: 130,
    Defense: 80,
    'Sp. Attack': 65,
    'Sp. Defense': 85,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/machamp',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png'
}, {
  id: 69,
  name: 'Bellsprout',
  type: ['Grass', 'Poison'],
  base: {
    HP: 50,
    Attack: 75,
    Defense: 35,
    'Sp. Attack': 70,
    'Sp. Defense': 30,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/bellsprout',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png'
}, {
  id: 70,
  name: 'Weepinbell',
  type: ['Grass', 'Poison'],
  base: {
    HP: 65,
    Attack: 90,
    Defense: 50,
    'Sp. Attack': 85,
    'Sp. Defense': 45,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/weepinbell',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png'
}, {
  id: 71,
  name: 'Victreebel',
  type: ['Grass', 'Poison'],
  base: {
    HP: 80,
    Attack: 105,
    Defense: 65,
    'Sp. Attack': 100,
    'Sp. Defense': 70,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/victreebel',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png'
}, {
  id: 72,
  name: 'Tentacool',
  type: ['Water', 'Poison'],
  base: {
    HP: 40,
    Attack: 40,
    Defense: 35,
    'Sp. Attack': 50,
    'Sp. Defense': 100,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/tentacool',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png'
}, {
  id: 73,
  name: 'Tentacruel',
  type: ['Water', 'Poison'],
  base: {
    HP: 80,
    Attack: 70,
    Defense: 65,
    'Sp. Attack': 80,
    'Sp. Defense': 120,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/tentacruel',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png'
}, {
  id: 74,
  name: 'Geodude',
  type: ['Rock', 'Ground'],
  base: {
    HP: 40,
    Attack: 80,
    Defense: 100,
    'Sp. Attack': 30,
    'Sp. Defense': 30,
    Speed: 20
  },
  url: 'https://www.pokemon.com/us/pokedex/geodude',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png'
}, {
  id: 75,
  name: 'Graveler',
  type: ['Rock', 'Ground'],
  base: {
    HP: 55,
    Attack: 95,
    Defense: 115,
    'Sp. Attack': 45,
    'Sp. Defense': 45,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/graveler',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png'
}, {
  id: 76,
  name: 'Golem',
  type: ['Rock', 'Ground'],
  base: {
    HP: 80,
    Attack: 120,
    Defense: 130,
    'Sp. Attack': 55,
    'Sp. Defense': 65,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/golem',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png'
}, {
  id: 77,
  name: 'Ponyta',
  type: ['Fire'],
  base: {
    HP: 50,
    Attack: 85,
    Defense: 55,
    'Sp. Attack': 65,
    'Sp. Defense': 65,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/ponyta',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png'
}, {
  id: 78,
  name: 'Rapidash',
  type: ['Fire'],
  base: {
    HP: 65,
    Attack: 100,
    Defense: 70,
    'Sp. Attack': 80,
    'Sp. Defense': 80,
    Speed: 105
  },
  url: 'https://www.pokemon.com/us/pokedex/rapidash',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png'
}, {
  id: 79,
  name: 'Slowpoke',
  type: ['Water', 'Psychic'],
  base: {
    HP: 90,
    Attack: 65,
    Defense: 65,
    'Sp. Attack': 40,
    'Sp. Defense': 40,
    Speed: 15
  },
  url: 'https://www.pokemon.com/us/pokedex/slowpoke',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png'
}, {
  id: 80,
  name: 'Slowbro',
  type: ['Water', 'Psychic'],
  base: {
    HP: 95,
    Attack: 75,
    Defense: 110,
    'Sp. Attack': 100,
    'Sp. Defense': 80,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/slowbro',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png'
}, {
  id: 81,
  name: 'Magnemite',
  type: ['Electric', 'Steel'],
  base: {
    HP: 25,
    Attack: 35,
    Defense: 70,
    'Sp. Attack': 95,
    'Sp. Defense': 55,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/magnemite',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png'
}, {
  id: 82,
  name: 'Magneton',
  type: ['Electric', 'Steel'],
  base: {
    HP: 50,
    Attack: 60,
    Defense: 95,
    'Sp. Attack': 120,
    'Sp. Defense': 70,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/magneton',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png'
}, {
  id: 83,
  name: "Farfetch'd",
  type: ['Normal', 'Flying'],
  base: {
    HP: 52,
    Attack: 90,
    Defense: 55,
    'Sp. Attack': 58,
    'Sp. Defense': 62,
    Speed: 60
  },
  url: "https://www.pokemon.com/us/pokedex/farfetch'd",
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png'
}, {
  id: 84,
  name: 'Doduo',
  type: ['Normal', 'Flying'],
  base: {
    HP: 35,
    Attack: 85,
    Defense: 45,
    'Sp. Attack': 35,
    'Sp. Defense': 35,
    Speed: 75
  },
  url: 'https://www.pokemon.com/us/pokedex/doduo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png'
}, {
  id: 85,
  name: 'Dodrio',
  type: ['Normal', 'Flying'],
  base: {
    HP: 60,
    Attack: 110,
    Defense: 70,
    'Sp. Attack': 60,
    'Sp. Defense': 60,
    Speed: 110
  },
  url: 'https://www.pokemon.com/us/pokedex/dodrio',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png'
}, {
  id: 86,
  name: 'Seel',
  type: ['Water'],
  base: {
    HP: 65,
    Attack: 45,
    Defense: 55,
    'Sp. Attack': 45,
    'Sp. Defense': 70,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/seel',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png'
}, {
  id: 87,
  name: 'Dewgong',
  type: ['Water', 'Ice'],
  base: {
    HP: 90,
    Attack: 70,
    Defense: 80,
    'Sp. Attack': 70,
    'Sp. Defense': 95,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/dewgong',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png'
}, {
  id: 88,
  name: 'Grimer',
  type: ['Poison'],
  base: {
    HP: 80,
    Attack: 80,
    Defense: 50,
    'Sp. Attack': 40,
    'Sp. Defense': 50,
    Speed: 25
  },
  url: 'https://www.pokemon.com/us/pokedex/grimer',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png'
}, {
  id: 89,
  name: 'Muk',
  type: ['Poison'],
  base: {
    HP: 105,
    Attack: 105,
    Defense: 75,
    'Sp. Attack': 65,
    'Sp. Defense': 100,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/muk',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png'
}, {
  id: 90,
  name: 'Shellder',
  type: ['Water'],
  base: {
    HP: 30,
    Attack: 65,
    Defense: 100,
    'Sp. Attack': 45,
    'Sp. Defense': 25,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/shellder',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png'
}, {
  id: 91,
  name: 'Cloyster',
  type: ['Water', 'Ice'],
  base: {
    HP: 50,
    Attack: 95,
    Defense: 180,
    'Sp. Attack': 85,
    'Sp. Defense': 45,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/cloyster',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png'
}, {
  id: 92,
  name: 'Gastly',
  type: ['Ghost', 'Poison'],
  base: {
    HP: 30,
    Attack: 35,
    Defense: 30,
    'Sp. Attack': 100,
    'Sp. Defense': 35,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/gastly',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png'
}, {
  id: 93,
  name: 'Haunter',
  type: ['Ghost', 'Poison'],
  base: {
    HP: 45,
    Attack: 50,
    Defense: 45,
    'Sp. Attack': 115,
    'Sp. Defense': 55,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/haunter',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png'
}, {
  id: 94,
  name: 'Gengar',
  type: ['Ghost', 'Poison'],
  base: {
    HP: 60,
    Attack: 65,
    Defense: 60,
    'Sp. Attack': 130,
    'Sp. Defense': 75,
    Speed: 110
  },
  url: 'https://www.pokemon.com/us/pokedex/gengar',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png'
}, {
  id: 95,
  name: 'Onix',
  type: ['Rock', 'Ground'],
  base: {
    HP: 35,
    Attack: 45,
    Defense: 160,
    'Sp. Attack': 30,
    'Sp. Defense': 45,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/onix',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png'
}, {
  id: 96,
  name: 'Drowzee',
  type: ['Psychic'],
  base: {
    HP: 60,
    Attack: 48,
    Defense: 45,
    'Sp. Attack': 43,
    'Sp. Defense': 90,
    Speed: 42
  },
  url: 'https://www.pokemon.com/us/pokedex/drowzee',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png'
}, {
  id: 97,
  name: 'Hypno',
  type: ['Psychic'],
  base: {
    HP: 85,
    Attack: 73,
    Defense: 70,
    'Sp. Attack': 73,
    'Sp. Defense': 115,
    Speed: 67
  },
  url: 'https://www.pokemon.com/us/pokedex/hypno',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png'
}, {
  id: 98,
  name: 'Krabby',
  type: ['Water'],
  base: {
    HP: 30,
    Attack: 105,
    Defense: 90,
    'Sp. Attack': 25,
    'Sp. Defense': 25,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/krabby',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png'
}, {
  id: 99,
  name: 'Kingler',
  type: ['Water'],
  base: {
    HP: 55,
    Attack: 130,
    Defense: 115,
    'Sp. Attack': 50,
    'Sp. Defense': 50,
    Speed: 75
  },
  url: 'https://www.pokemon.com/us/pokedex/kingler',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png'
}, {
  id: 100,
  name: 'Voltorb',
  type: ['Electric'],
  base: {
    HP: 40,
    Attack: 30,
    Defense: 50,
    'Sp. Attack': 55,
    'Sp. Defense': 55,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/voltorb',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png'
}, {
  id: 101,
  name: 'Electrode',
  type: ['Electric'],
  base: {
    HP: 60,
    Attack: 50,
    Defense: 70,
    'Sp. Attack': 80,
    'Sp. Defense': 80,
    Speed: 150
  },
  url: 'https://www.pokemon.com/us/pokedex/electrode',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png'
}, {
  id: 102,
  name: 'Exeggcute',
  type: ['Grass', 'Psychic'],
  base: {
    HP: 60,
    Attack: 40,
    Defense: 80,
    'Sp. Attack': 60,
    'Sp. Defense': 45,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/exeggcute',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png'
}, {
  id: 103,
  name: 'Exeggutor',
  type: ['Grass', 'Psychic'],
  base: {
    HP: 95,
    Attack: 95,
    Defense: 85,
    'Sp. Attack': 125,
    'Sp. Defense': 75,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/exeggutor',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png'
}, {
  id: 104,
  name: 'Cubone',
  type: ['Ground'],
  base: {
    HP: 50,
    Attack: 50,
    Defense: 95,
    'Sp. Attack': 40,
    'Sp. Defense': 50,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/cubone',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png'
}, {
  id: 105,
  name: 'Marowak',
  type: ['Ground'],
  base: {
    HP: 60,
    Attack: 80,
    Defense: 110,
    'Sp. Attack': 50,
    'Sp. Defense': 80,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/marowak',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png'
}, {
  id: 106,
  name: 'Hitmonlee',
  type: ['Fighting'],
  base: {
    HP: 50,
    Attack: 120,
    Defense: 53,
    'Sp. Attack': 35,
    'Sp. Defense': 110,
    Speed: 87
  },
  url: 'https://www.pokemon.com/us/pokedex/hitmonlee',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png'
}, {
  id: 107,
  name: 'Hitmonchan',
  type: ['Fighting'],
  base: {
    HP: 50,
    Attack: 105,
    Defense: 79,
    'Sp. Attack': 35,
    'Sp. Defense': 110,
    Speed: 76
  },
  url: 'https://www.pokemon.com/us/pokedex/hitmonchan',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png'
}, {
  id: 108,
  name: 'Lickitung',
  type: ['Normal'],
  base: {
    HP: 90,
    Attack: 55,
    Defense: 75,
    'Sp. Attack': 60,
    'Sp. Defense': 75,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/lickitung',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png'
}, {
  id: 109,
  name: 'Koffing',
  type: ['Poison'],
  base: {
    HP: 40,
    Attack: 65,
    Defense: 95,
    'Sp. Attack': 60,
    'Sp. Defense': 45,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/koffing',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png'
}, {
  id: 110,
  name: 'Weezing',
  type: ['Poison'],
  base: {
    HP: 65,
    Attack: 90,
    Defense: 120,
    'Sp. Attack': 85,
    'Sp. Defense': 70,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/weezing',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png'
}, {
  id: 111,
  name: 'Rhyhorn',
  type: ['Ground', 'Rock'],
  base: {
    HP: 80,
    Attack: 85,
    Defense: 95,
    'Sp. Attack': 30,
    'Sp. Defense': 30,
    Speed: 25
  },
  url: 'https://www.pokemon.com/us/pokedex/rhyhorn',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png'
}, {
  id: 112,
  name: 'Rhydon',
  type: ['Ground', 'Rock'],
  base: {
    HP: 105,
    Attack: 130,
    Defense: 120,
    'Sp. Attack': 45,
    'Sp. Defense': 45,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/rhydon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png'
}, {
  id: 113,
  name: 'Chansey',
  type: ['Normal'],
  base: {
    HP: 250,
    Attack: 5,
    Defense: 5,
    'Sp. Attack': 35,
    'Sp. Defense': 105,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/chansey',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png'
}, {
  id: 114,
  name: 'Tangela',
  type: ['Grass'],
  base: {
    HP: 65,
    Attack: 55,
    Defense: 115,
    'Sp. Attack': 100,
    'Sp. Defense': 40,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/tangela',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png'
}, {
  id: 115,
  name: 'Kangaskhan',
  type: ['Normal'],
  base: {
    HP: 105,
    Attack: 95,
    Defense: 80,
    'Sp. Attack': 40,
    'Sp. Defense': 80,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/kangaskhan',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png'
}, {
  id: 116,
  name: 'Horsea',
  type: ['Water'],
  base: {
    HP: 30,
    Attack: 40,
    Defense: 70,
    'Sp. Attack': 70,
    'Sp. Defense': 25,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/horsea',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png'
}, {
  id: 117,
  name: 'Seadra',
  type: ['Water'],
  base: {
    HP: 55,
    Attack: 65,
    Defense: 95,
    'Sp. Attack': 95,
    'Sp. Defense': 45,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/seadra',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png'
}, {
  id: 118,
  name: 'Goldeen',
  type: ['Water'],
  base: {
    HP: 45,
    Attack: 67,
    Defense: 60,
    'Sp. Attack': 35,
    'Sp. Defense': 50,
    Speed: 63
  },
  url: 'https://www.pokemon.com/us/pokedex/goldeen',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png'
}, {
  id: 119,
  name: 'Seaking',
  type: ['Water'],
  base: {
    HP: 80,
    Attack: 92,
    Defense: 65,
    'Sp. Attack': 65,
    'Sp. Defense': 80,
    Speed: 68
  },
  url: 'https://www.pokemon.com/us/pokedex/seaking',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png'
}, {
  id: 120,
  name: 'Staryu',
  type: ['Water'],
  base: {
    HP: 30,
    Attack: 45,
    Defense: 55,
    'Sp. Attack': 70,
    'Sp. Defense': 55,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/staryu',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png'
}, {
  id: 121,
  name: 'Starmie',
  type: ['Water', 'Psychic'],
  base: {
    HP: 60,
    Attack: 75,
    Defense: 85,
    'Sp. Attack': 100,
    'Sp. Defense': 85,
    Speed: 115
  },
  url: 'https://www.pokemon.com/us/pokedex/starmie',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png'
}, {
  id: 122,
  name: 'Mr. Mime',
  type: ['Psychic', 'Fairy'],
  base: {
    HP: 40,
    Attack: 45,
    Defense: 65,
    'Sp. Attack': 100,
    'Sp. Defense': 120,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/mr. mime',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png'
}, {
  id: 123,
  name: 'Scyther',
  type: ['Bug', 'Flying'],
  base: {
    HP: 70,
    Attack: 110,
    Defense: 80,
    'Sp. Attack': 55,
    'Sp. Defense': 80,
    Speed: 105
  },
  url: 'https://www.pokemon.com/us/pokedex/scyther',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png'
}, {
  id: 124,
  name: 'Jynx',
  type: ['Ice', 'Psychic'],
  base: {
    HP: 65,
    Attack: 50,
    Defense: 35,
    'Sp. Attack': 115,
    'Sp. Defense': 95,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/jynx',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png'
}, {
  id: 125,
  name: 'Electabuzz',
  type: ['Electric'],
  base: {
    HP: 65,
    Attack: 83,
    Defense: 57,
    'Sp. Attack': 95,
    'Sp. Defense': 85,
    Speed: 105
  },
  url: 'https://www.pokemon.com/us/pokedex/electabuzz',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png'
}, {
  id: 126,
  name: 'Magmar',
  type: ['Fire'],
  base: {
    HP: 65,
    Attack: 95,
    Defense: 57,
    'Sp. Attack': 100,
    'Sp. Defense': 85,
    Speed: 93
  },
  url: 'https://www.pokemon.com/us/pokedex/magmar',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png'
}, {
  id: 127,
  name: 'Pinsir',
  type: ['Bug'],
  base: {
    HP: 65,
    Attack: 125,
    Defense: 100,
    'Sp. Attack': 55,
    'Sp. Defense': 70,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/pinsir',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png'
}, {
  id: 128,
  name: 'Tauros',
  type: ['Normal'],
  base: {
    HP: 75,
    Attack: 100,
    Defense: 95,
    'Sp. Attack': 40,
    'Sp. Defense': 70,
    Speed: 110
  },
  url: 'https://www.pokemon.com/us/pokedex/tauros',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png'
}, {
  id: 129,
  name: 'Magikarp',
  type: ['Water'],
  base: {
    HP: 20,
    Attack: 10,
    Defense: 55,
    'Sp. Attack': 15,
    'Sp. Defense': 20,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/magikarp',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png'
}, {
  id: 130,
  name: 'Gyarados',
  type: ['Water', 'Flying'],
  base: {
    HP: 95,
    Attack: 125,
    Defense: 79,
    'Sp. Attack': 60,
    'Sp. Defense': 100,
    Speed: 81
  },
  url: 'https://www.pokemon.com/us/pokedex/gyarados',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png'
}, {
  id: 131,
  name: 'Lapras',
  type: ['Water', 'Ice'],
  base: {
    HP: 130,
    Attack: 85,
    Defense: 80,
    'Sp. Attack': 85,
    'Sp. Defense': 95,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/lapras',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png'
}, {
  id: 132,
  name: 'Ditto',
  type: ['Normal'],
  base: {
    HP: 48,
    Attack: 48,
    Defense: 48,
    'Sp. Attack': 48,
    'Sp. Defense': 48,
    Speed: 48
  },
  url: 'https://www.pokemon.com/us/pokedex/ditto',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'
}, {
  id: 133,
  name: 'Eevee',
  type: ['Normal'],
  base: {
    HP: 55,
    Attack: 55,
    Defense: 50,
    'Sp. Attack': 45,
    'Sp. Defense': 65,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/eevee',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png'
}, {
  id: 134,
  name: 'Vaporeon',
  type: ['Water'],
  base: {
    HP: 130,
    Attack: 65,
    Defense: 60,
    'Sp. Attack': 110,
    'Sp. Defense': 95,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/vaporeon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png'
}, {
  id: 135,
  name: 'Jolteon',
  type: ['Electric'],
  base: {
    HP: 65,
    Attack: 65,
    Defense: 60,
    'Sp. Attack': 110,
    'Sp. Defense': 95,
    Speed: 130
  },
  url: 'https://www.pokemon.com/us/pokedex/jolteon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png'
}, {
  id: 136,
  name: 'Flareon',
  type: ['Fire'],
  base: {
    HP: 65,
    Attack: 130,
    Defense: 60,
    'Sp. Attack': 95,
    'Sp. Defense': 110,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/flareon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png'
}, {
  id: 137,
  name: 'Porygon',
  type: ['Normal'],
  base: {
    HP: 65,
    Attack: 60,
    Defense: 70,
    'Sp. Attack': 85,
    'Sp. Defense': 75,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/porygon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png'
}, {
  id: 138,
  name: 'Omanyte',
  type: ['Rock', 'Water'],
  base: {
    HP: 35,
    Attack: 40,
    Defense: 100,
    'Sp. Attack': 90,
    'Sp. Defense': 55,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/omanyte',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png'
}, {
  id: 139,
  name: 'Omastar',
  type: ['Rock', 'Water'],
  base: {
    HP: 70,
    Attack: 60,
    Defense: 125,
    'Sp. Attack': 115,
    'Sp. Defense': 70,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/omastar',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png'
}, {
  id: 140,
  name: 'Kabuto',
  type: ['Rock', 'Water'],
  base: {
    HP: 30,
    Attack: 80,
    Defense: 90,
    'Sp. Attack': 55,
    'Sp. Defense': 45,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/kabuto',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png'
}, {
  id: 141,
  name: 'Kabutops',
  type: ['Rock', 'Water'],
  base: {
    HP: 60,
    Attack: 115,
    Defense: 105,
    'Sp. Attack': 65,
    'Sp. Defense': 70,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/kabutops',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png'
}, {
  id: 142,
  name: 'Aerodactyl',
  type: ['Rock', 'Flying'],
  base: {
    HP: 80,
    Attack: 105,
    Defense: 65,
    'Sp. Attack': 60,
    'Sp. Defense': 75,
    Speed: 130
  },
  url: 'https://www.pokemon.com/us/pokedex/aerodactyl',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png'
}, {
  id: 143,
  name: 'Snorlax',
  type: ['Normal'],
  base: {
    HP: 160,
    Attack: 110,
    Defense: 65,
    'Sp. Attack': 65,
    'Sp. Defense': 110,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/snorlax',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png'
}, {
  id: 144,
  name: 'Articuno',
  type: ['Ice', 'Flying'],
  base: {
    HP: 90,
    Attack: 85,
    Defense: 100,
    'Sp. Attack': 95,
    'Sp. Defense': 125,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/articuno',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png'
}, {
  id: 145,
  name: 'Zapdos',
  type: ['Electric', 'Flying'],
  base: {
    HP: 90,
    Attack: 90,
    Defense: 85,
    'Sp. Attack': 125,
    'Sp. Defense': 90,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/zapdos',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png'
}, {
  id: 146,
  name: 'Moltres',
  type: ['Fire', 'Flying'],
  base: {
    HP: 90,
    Attack: 100,
    Defense: 90,
    'Sp. Attack': 125,
    'Sp. Defense': 85,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/moltres',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png'
}, {
  id: 147,
  name: 'Dratini',
  type: ['Dragon'],
  base: {
    HP: 41,
    Attack: 64,
    Defense: 45,
    'Sp. Attack': 50,
    'Sp. Defense': 50,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/dratini',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png'
}, {
  id: 148,
  name: 'Dragonair',
  type: ['Dragon'],
  base: {
    HP: 61,
    Attack: 84,
    Defense: 65,
    'Sp. Attack': 70,
    'Sp. Defense': 70,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/dragonair',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png'
}, {
  id: 149,
  name: 'Dragonite',
  type: ['Dragon', 'Flying'],
  base: {
    HP: 91,
    Attack: 134,
    Defense: 95,
    'Sp. Attack': 100,
    'Sp. Defense': 100,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/dragonite',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png'
}, {
  id: 150,
  name: 'Mewtwo',
  type: ['Psychic'],
  base: {
    HP: 106,
    Attack: 110,
    Defense: 90,
    'Sp. Attack': 154,
    'Sp. Defense': 90,
    Speed: 130
  },
  url: 'https://www.pokemon.com/us/pokedex/mewtwo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png'
}, {
  id: 151,
  name: 'Mew',
  type: ['Psychic'],
  base: {
    HP: 100,
    Attack: 100,
    Defense: 100,
    'Sp. Attack': 100,
    'Sp. Defense': 100,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/mew',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png'
}, {
  id: 152,
  name: 'Chikorita',
  type: ['Grass'],
  base: {
    HP: 45,
    Attack: 49,
    Defense: 65,
    'Sp. Attack': 49,
    'Sp. Defense': 65,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/chikorita',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png'
}, {
  id: 153,
  name: 'Bayleef',
  type: ['Grass'],
  base: {
    HP: 60,
    Attack: 62,
    Defense: 80,
    'Sp. Attack': 63,
    'Sp. Defense': 80,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/bayleef',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png'
}, {
  id: 154,
  name: 'Meganium',
  type: ['Grass'],
  base: {
    HP: 80,
    Attack: 82,
    Defense: 100,
    'Sp. Attack': 83,
    'Sp. Defense': 100,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/meganium',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png'
}, {
  id: 155,
  name: 'Cyndaquil',
  type: ['Fire'],
  base: {
    HP: 39,
    Attack: 52,
    Defense: 43,
    'Sp. Attack': 60,
    'Sp. Defense': 50,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/cyndaquil',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png'
}, {
  id: 156,
  name: 'Quilava',
  type: ['Fire'],
  base: {
    HP: 58,
    Attack: 64,
    Defense: 58,
    'Sp. Attack': 80,
    'Sp. Defense': 65,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/quilava',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png'
}, {
  id: 157,
  name: 'Typhlosion',
  type: ['Fire'],
  base: {
    HP: 78,
    Attack: 84,
    Defense: 78,
    'Sp. Attack': 109,
    'Sp. Defense': 85,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/typhlosion',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png'
}, {
  id: 158,
  name: 'Totodile',
  type: ['Water'],
  base: {
    HP: 50,
    Attack: 65,
    Defense: 64,
    'Sp. Attack': 44,
    'Sp. Defense': 48,
    Speed: 43
  },
  url: 'https://www.pokemon.com/us/pokedex/totodile',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png'
}, {
  id: 159,
  name: 'Croconaw',
  type: ['Water'],
  base: {
    HP: 65,
    Attack: 80,
    Defense: 80,
    'Sp. Attack': 59,
    'Sp. Defense': 63,
    Speed: 58
  },
  url: 'https://www.pokemon.com/us/pokedex/croconaw',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png'
}, {
  id: 160,
  name: 'Feraligatr',
  type: ['Water'],
  base: {
    HP: 85,
    Attack: 105,
    Defense: 100,
    'Sp. Attack': 79,
    'Sp. Defense': 83,
    Speed: 78
  },
  url: 'https://www.pokemon.com/us/pokedex/feraligatr',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png'
}, {
  id: 161,
  name: 'Sentret',
  type: ['Normal'],
  base: {
    HP: 35,
    Attack: 46,
    Defense: 34,
    'Sp. Attack': 35,
    'Sp. Defense': 45,
    Speed: 20
  },
  url: 'https://www.pokemon.com/us/pokedex/sentret',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png'
}, {
  id: 162,
  name: 'Furret',
  type: ['Normal'],
  base: {
    HP: 85,
    Attack: 76,
    Defense: 64,
    'Sp. Attack': 45,
    'Sp. Defense': 55,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/furret',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png'
}, {
  id: 163,
  name: 'Hoothoot',
  type: ['Normal', 'Flying'],
  base: {
    HP: 60,
    Attack: 30,
    Defense: 30,
    'Sp. Attack': 36,
    'Sp. Defense': 56,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/hoothoot',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png'
}, {
  id: 164,
  name: 'Noctowl',
  type: ['Normal', 'Flying'],
  base: {
    HP: 100,
    Attack: 50,
    Defense: 50,
    'Sp. Attack': 86,
    'Sp. Defense': 96,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/noctowl',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png'
}, {
  id: 165,
  name: 'Ledyba',
  type: ['Bug', 'Flying'],
  base: {
    HP: 40,
    Attack: 20,
    Defense: 30,
    'Sp. Attack': 40,
    'Sp. Defense': 80,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/ledyba',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png'
}, {
  id: 166,
  name: 'Ledian',
  type: ['Bug', 'Flying'],
  base: {
    HP: 55,
    Attack: 35,
    Defense: 50,
    'Sp. Attack': 55,
    'Sp. Defense': 110,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/ledian',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png'
}, {
  id: 167,
  name: 'Spinarak',
  type: ['Bug', 'Poison'],
  base: {
    HP: 40,
    Attack: 60,
    Defense: 40,
    'Sp. Attack': 40,
    'Sp. Defense': 40,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/spinarak',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png'
}, {
  id: 168,
  name: 'Ariados',
  type: ['Bug', 'Poison'],
  base: {
    HP: 70,
    Attack: 90,
    Defense: 70,
    'Sp. Attack': 60,
    'Sp. Defense': 70,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/ariados',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png'
}, {
  id: 169,
  name: 'Crobat',
  type: ['Poison', 'Flying'],
  base: {
    HP: 85,
    Attack: 90,
    Defense: 80,
    'Sp. Attack': 70,
    'Sp. Defense': 80,
    Speed: 130
  },
  url: 'https://www.pokemon.com/us/pokedex/crobat',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png'
}, {
  id: 170,
  name: 'Chinchou',
  type: ['Water', 'Electric'],
  base: {
    HP: 75,
    Attack: 38,
    Defense: 38,
    'Sp. Attack': 56,
    'Sp. Defense': 56,
    Speed: 67
  },
  url: 'https://www.pokemon.com/us/pokedex/chinchou',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png'
}, {
  id: 171,
  name: 'Lanturn',
  type: ['Water', 'Electric'],
  base: {
    HP: 125,
    Attack: 58,
    Defense: 58,
    'Sp. Attack': 76,
    'Sp. Defense': 76,
    Speed: 67
  },
  url: 'https://www.pokemon.com/us/pokedex/lanturn',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png'
}, {
  id: 172,
  name: 'Pichu',
  type: ['Electric'],
  base: {
    HP: 20,
    Attack: 40,
    Defense: 15,
    'Sp. Attack': 35,
    'Sp. Defense': 35,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/pichu',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png'
}, {
  id: 173,
  name: 'Cleffa',
  type: ['Fairy'],
  base: {
    HP: 50,
    Attack: 25,
    Defense: 28,
    'Sp. Attack': 45,
    'Sp. Defense': 55,
    Speed: 15
  },
  url: 'https://www.pokemon.com/us/pokedex/cleffa',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png'
}, {
  id: 174,
  name: 'Igglybuff',
  type: ['Normal', 'Fairy'],
  base: {
    HP: 90,
    Attack: 30,
    Defense: 15,
    'Sp. Attack': 40,
    'Sp. Defense': 20,
    Speed: 15
  },
  url: 'https://www.pokemon.com/us/pokedex/igglybuff',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png'
}, {
  id: 175,
  name: 'Togepi',
  type: ['Fairy'],
  base: {
    HP: 35,
    Attack: 20,
    Defense: 65,
    'Sp. Attack': 40,
    'Sp. Defense': 65,
    Speed: 20
  },
  url: 'https://www.pokemon.com/us/pokedex/togepi',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png'
}, {
  id: 176,
  name: 'Togetic',
  type: ['Fairy', 'Flying'],
  base: {
    HP: 55,
    Attack: 40,
    Defense: 85,
    'Sp. Attack': 80,
    'Sp. Defense': 105,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/togetic',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png'
}, {
  id: 177,
  name: 'Natu',
  type: ['Psychic', 'Flying'],
  base: {
    HP: 40,
    Attack: 50,
    Defense: 45,
    'Sp. Attack': 70,
    'Sp. Defense': 45,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/natu',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png'
}, {
  id: 178,
  name: 'Xatu',
  type: ['Psychic', 'Flying'],
  base: {
    HP: 65,
    Attack: 75,
    Defense: 70,
    'Sp. Attack': 95,
    'Sp. Defense': 70,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/xatu',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png'
}, {
  id: 179,
  name: 'Mareep',
  type: ['Electric'],
  base: {
    HP: 55,
    Attack: 40,
    Defense: 40,
    'Sp. Attack': 65,
    'Sp. Defense': 45,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/mareep',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png'
}, {
  id: 180,
  name: 'Flaaffy',
  type: ['Electric'],
  base: {
    HP: 70,
    Attack: 55,
    Defense: 55,
    'Sp. Attack': 80,
    'Sp. Defense': 60,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/flaaffy',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png'
}, {
  id: 181,
  name: 'Ampharos',
  type: ['Electric'],
  base: {
    HP: 90,
    Attack: 75,
    Defense: 85,
    'Sp. Attack': 115,
    'Sp. Defense': 90,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/ampharos',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png'
}, {
  id: 182,
  name: 'Bellossom',
  type: ['Grass'],
  base: {
    HP: 75,
    Attack: 80,
    Defense: 95,
    'Sp. Attack': 90,
    'Sp. Defense': 100,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/bellossom',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png'
}, {
  id: 183,
  name: 'Marill',
  type: ['Water', 'Fairy'],
  base: {
    HP: 70,
    Attack: 20,
    Defense: 50,
    'Sp. Attack': 20,
    'Sp. Defense': 50,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/marill',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png'
}, {
  id: 184,
  name: 'Azumarill',
  type: ['Water', 'Fairy'],
  base: {
    HP: 100,
    Attack: 50,
    Defense: 80,
    'Sp. Attack': 60,
    'Sp. Defense': 80,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/azumarill',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png'
}, {
  id: 185,
  name: 'Sudowoodo',
  type: ['Rock'],
  base: {
    HP: 70,
    Attack: 100,
    Defense: 115,
    'Sp. Attack': 30,
    'Sp. Defense': 65,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/sudowoodo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png'
}, {
  id: 186,
  name: 'Politoed',
  type: ['Water'],
  base: {
    HP: 90,
    Attack: 75,
    Defense: 75,
    'Sp. Attack': 90,
    'Sp. Defense': 100,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/politoed',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png'
}, {
  id: 187,
  name: 'Hoppip',
  type: ['Grass', 'Flying'],
  base: {
    HP: 35,
    Attack: 35,
    Defense: 40,
    'Sp. Attack': 35,
    'Sp. Defense': 55,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/hoppip',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png'
}, {
  id: 188,
  name: 'Skiploom',
  type: ['Grass', 'Flying'],
  base: {
    HP: 55,
    Attack: 45,
    Defense: 50,
    'Sp. Attack': 45,
    'Sp. Defense': 65,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/skiploom',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png'
}, {
  id: 189,
  name: 'Jumpluff',
  type: ['Grass', 'Flying'],
  base: {
    HP: 75,
    Attack: 55,
    Defense: 70,
    'Sp. Attack': 55,
    'Sp. Defense': 95,
    Speed: 110
  },
  url: 'https://www.pokemon.com/us/pokedex/jumpluff',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png'
}, {
  id: 190,
  name: 'Aipom',
  type: ['Normal'],
  base: {
    HP: 55,
    Attack: 70,
    Defense: 55,
    'Sp. Attack': 40,
    'Sp. Defense': 55,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/aipom',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png'
}, {
  id: 191,
  name: 'Sunkern',
  type: ['Grass'],
  base: {
    HP: 30,
    Attack: 30,
    Defense: 30,
    'Sp. Attack': 30,
    'Sp. Defense': 30,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/sunkern',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png'
}, {
  id: 192,
  name: 'Sunflora',
  type: ['Grass'],
  base: {
    HP: 75,
    Attack: 75,
    Defense: 55,
    'Sp. Attack': 105,
    'Sp. Defense': 85,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/sunflora',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png'
}, {
  id: 193,
  name: 'Yanma',
  type: ['Bug', 'Flying'],
  base: {
    HP: 65,
    Attack: 65,
    Defense: 45,
    'Sp. Attack': 75,
    'Sp. Defense': 45,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/yanma',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png'
}, {
  id: 194,
  name: 'Wooper',
  type: ['Water', 'Ground'],
  base: {
    HP: 55,
    Attack: 45,
    Defense: 45,
    'Sp. Attack': 25,
    'Sp. Defense': 25,
    Speed: 15
  },
  url: 'https://www.pokemon.com/us/pokedex/wooper',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png'
}, {
  id: 195,
  name: 'Quagsire',
  type: ['Water', 'Ground'],
  base: {
    HP: 95,
    Attack: 85,
    Defense: 85,
    'Sp. Attack': 65,
    'Sp. Defense': 65,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/quagsire',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png'
}, {
  id: 196,
  name: 'Espeon',
  type: ['Psychic'],
  base: {
    HP: 65,
    Attack: 65,
    Defense: 60,
    'Sp. Attack': 130,
    'Sp. Defense': 95,
    Speed: 110
  },
  url: 'https://www.pokemon.com/us/pokedex/espeon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png'
}, {
  id: 197,
  name: 'Umbreon',
  type: ['Dark'],
  base: {
    HP: 95,
    Attack: 65,
    Defense: 110,
    'Sp. Attack': 60,
    'Sp. Defense': 130,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/umbreon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png'
}, {
  id: 198,
  name: 'Murkrow',
  type: ['Dark', 'Flying'],
  base: {
    HP: 60,
    Attack: 85,
    Defense: 42,
    'Sp. Attack': 85,
    'Sp. Defense': 42,
    Speed: 91
  },
  url: 'https://www.pokemon.com/us/pokedex/murkrow',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png'
}, {
  id: 199,
  name: 'Slowking',
  type: ['Water', 'Psychic'],
  base: {
    HP: 95,
    Attack: 75,
    Defense: 80,
    'Sp. Attack': 100,
    'Sp. Defense': 110,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/slowking',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png'
}, {
  id: 200,
  name: 'Misdreavus',
  type: ['Ghost'],
  base: {
    HP: 60,
    Attack: 60,
    Defense: 60,
    'Sp. Attack': 85,
    'Sp. Defense': 85,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/misdreavus',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png'
}, {
  id: 201,
  name: 'Unown',
  type: ['Psychic'],
  base: {
    HP: 48,
    Attack: 72,
    Defense: 48,
    'Sp. Attack': 72,
    'Sp. Defense': 48,
    Speed: 48
  },
  url: 'https://www.pokemon.com/us/pokedex/unown',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png'
}, {
  id: 202,
  name: 'Wobbuffet',
  type: ['Psychic'],
  base: {
    HP: 190,
    Attack: 33,
    Defense: 58,
    'Sp. Attack': 33,
    'Sp. Defense': 58,
    Speed: 33
  },
  url: 'https://www.pokemon.com/us/pokedex/wobbuffet',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png'
}, {
  id: 203,
  name: 'Girafarig',
  type: ['Normal', 'Psychic'],
  base: {
    HP: 70,
    Attack: 80,
    Defense: 65,
    'Sp. Attack': 90,
    'Sp. Defense': 65,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/girafarig',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png'
}, {
  id: 204,
  name: 'Pineco',
  type: ['Bug'],
  base: {
    HP: 50,
    Attack: 65,
    Defense: 90,
    'Sp. Attack': 35,
    'Sp. Defense': 35,
    Speed: 15
  },
  url: 'https://www.pokemon.com/us/pokedex/pineco',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png'
}, {
  id: 205,
  name: 'Forretress',
  type: ['Bug', 'Steel'],
  base: {
    HP: 75,
    Attack: 90,
    Defense: 140,
    'Sp. Attack': 60,
    'Sp. Defense': 60,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/forretress',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png'
}, {
  id: 206,
  name: 'Dunsparce',
  type: ['Normal'],
  base: {
    HP: 100,
    Attack: 70,
    Defense: 70,
    'Sp. Attack': 65,
    'Sp. Defense': 65,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/dunsparce',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png'
}, {
  id: 207,
  name: 'Gligar',
  type: ['Ground', 'Flying'],
  base: {
    HP: 65,
    Attack: 75,
    Defense: 105,
    'Sp. Attack': 35,
    'Sp. Defense': 65,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/gligar',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png'
}, {
  id: 208,
  name: 'Steelix',
  type: ['Steel', 'Ground'],
  base: {
    HP: 75,
    Attack: 85,
    Defense: 200,
    'Sp. Attack': 55,
    'Sp. Defense': 65,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/steelix',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png'
}, {
  id: 209,
  name: 'Snubbull',
  type: ['Fairy'],
  base: {
    HP: 60,
    Attack: 80,
    Defense: 50,
    'Sp. Attack': 40,
    'Sp. Defense': 40,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/snubbull',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png'
}, {
  id: 210,
  name: 'Granbull',
  type: ['Fairy'],
  base: {
    HP: 90,
    Attack: 120,
    Defense: 75,
    'Sp. Attack': 60,
    'Sp. Defense': 60,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/granbull',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png'
}, {
  id: 211,
  name: 'Qwilfish',
  type: ['Water', 'Poison'],
  base: {
    HP: 65,
    Attack: 95,
    Defense: 85,
    'Sp. Attack': 55,
    'Sp. Defense': 55,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/qwilfish',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png'
}, {
  id: 212,
  name: 'Scizor',
  type: ['Bug', 'Steel'],
  base: {
    HP: 70,
    Attack: 130,
    Defense: 100,
    'Sp. Attack': 55,
    'Sp. Defense': 80,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/scizor',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png'
}, {
  id: 213,
  name: 'Shuckle',
  type: ['Bug', 'Rock'],
  base: {
    HP: 20,
    Attack: 10,
    Defense: 230,
    'Sp. Attack': 10,
    'Sp. Defense': 230,
    Speed: 5
  },
  url: 'https://www.pokemon.com/us/pokedex/shuckle',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png'
}, {
  id: 214,
  name: 'Heracross',
  type: ['Bug', 'Fighting'],
  base: {
    HP: 80,
    Attack: 125,
    Defense: 75,
    'Sp. Attack': 40,
    'Sp. Defense': 95,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/heracross',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png'
}, {
  id: 215,
  name: 'Sneasel',
  type: ['Dark', 'Ice'],
  base: {
    HP: 55,
    Attack: 95,
    Defense: 55,
    'Sp. Attack': 35,
    'Sp. Defense': 75,
    Speed: 115
  },
  url: 'https://www.pokemon.com/us/pokedex/sneasel',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png'
}, {
  id: 216,
  name: 'Teddiursa',
  type: ['Normal'],
  base: {
    HP: 60,
    Attack: 80,
    Defense: 50,
    'Sp. Attack': 50,
    'Sp. Defense': 50,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/teddiursa',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png'
}, {
  id: 217,
  name: 'Ursaring',
  type: ['Normal'],
  base: {
    HP: 90,
    Attack: 130,
    Defense: 75,
    'Sp. Attack': 75,
    'Sp. Defense': 75,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/ursaring',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png'
}, {
  id: 218,
  name: 'Slugma',
  type: ['Fire'],
  base: {
    HP: 40,
    Attack: 40,
    Defense: 40,
    'Sp. Attack': 70,
    'Sp. Defense': 40,
    Speed: 20
  },
  url: 'https://www.pokemon.com/us/pokedex/slugma',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png'
}, {
  id: 219,
  name: 'Magcargo',
  type: ['Fire', 'Rock'],
  base: {
    HP: 60,
    Attack: 50,
    Defense: 120,
    'Sp. Attack': 90,
    'Sp. Defense': 80,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/magcargo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png'
}, {
  id: 220,
  name: 'Swinub',
  type: ['Ice', 'Ground'],
  base: {
    HP: 50,
    Attack: 50,
    Defense: 40,
    'Sp. Attack': 30,
    'Sp. Defense': 30,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/swinub',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png'
}, {
  id: 221,
  name: 'Piloswine',
  type: ['Ice', 'Ground'],
  base: {
    HP: 100,
    Attack: 100,
    Defense: 80,
    'Sp. Attack': 60,
    'Sp. Defense': 60,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/piloswine',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png'
}, {
  id: 222,
  name: 'Corsola',
  type: ['Water', 'Rock'],
  base: {
    HP: 65,
    Attack: 55,
    Defense: 95,
    'Sp. Attack': 65,
    'Sp. Defense': 95,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/corsola',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png'
}, {
  id: 223,
  name: 'Remoraid',
  type: ['Water'],
  base: {
    HP: 35,
    Attack: 65,
    Defense: 35,
    'Sp. Attack': 65,
    'Sp. Defense': 35,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/remoraid',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png'
}, {
  id: 224,
  name: 'Octillery',
  type: ['Water'],
  base: {
    HP: 75,
    Attack: 105,
    Defense: 75,
    'Sp. Attack': 105,
    'Sp. Defense': 75,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/octillery',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png'
}, {
  id: 225,
  name: 'Delibird',
  type: ['Ice', 'Flying'],
  base: {
    HP: 45,
    Attack: 55,
    Defense: 45,
    'Sp. Attack': 65,
    'Sp. Defense': 45,
    Speed: 75
  },
  url: 'https://www.pokemon.com/us/pokedex/delibird',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png'
}, {
  id: 226,
  name: 'Mantine',
  type: ['Water', 'Flying'],
  base: {
    HP: 85,
    Attack: 40,
    Defense: 70,
    'Sp. Attack': 80,
    'Sp. Defense': 140,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/mantine',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png'
}, {
  id: 227,
  name: 'Skarmory',
  type: ['Steel', 'Flying'],
  base: {
    HP: 65,
    Attack: 80,
    Defense: 140,
    'Sp. Attack': 40,
    'Sp. Defense': 70,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/skarmory',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png'
}, {
  id: 228,
  name: 'Houndour',
  type: ['Dark', 'Fire'],
  base: {
    HP: 45,
    Attack: 60,
    Defense: 30,
    'Sp. Attack': 80,
    'Sp. Defense': 50,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/houndour',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png'
}, {
  id: 229,
  name: 'Houndoom',
  type: ['Dark', 'Fire'],
  base: {
    HP: 75,
    Attack: 90,
    Defense: 50,
    'Sp. Attack': 110,
    'Sp. Defense': 80,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/houndoom',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png'
}, {
  id: 230,
  name: 'Kingdra',
  type: ['Water', 'Dragon'],
  base: {
    HP: 75,
    Attack: 95,
    Defense: 95,
    'Sp. Attack': 95,
    'Sp. Defense': 95,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/kingdra',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png'
}, {
  id: 231,
  name: 'Phanpy',
  type: ['Ground'],
  base: {
    HP: 90,
    Attack: 60,
    Defense: 60,
    'Sp. Attack': 40,
    'Sp. Defense': 40,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/phanpy',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png'
}, {
  id: 232,
  name: 'Donphan',
  type: ['Ground'],
  base: {
    HP: 90,
    Attack: 120,
    Defense: 120,
    'Sp. Attack': 60,
    'Sp. Defense': 60,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/donphan',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png'
}, {
  id: 233,
  name: 'Porygon2',
  type: ['Normal'],
  base: {
    HP: 85,
    Attack: 80,
    Defense: 90,
    'Sp. Attack': 105,
    'Sp. Defense': 95,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/porygon2',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png'
}, {
  id: 234,
  name: 'Stantler',
  type: ['Normal'],
  base: {
    HP: 73,
    Attack: 95,
    Defense: 62,
    'Sp. Attack': 85,
    'Sp. Defense': 65,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/stantler',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png'
}, {
  id: 235,
  name: 'Smeargle',
  type: ['Normal'],
  base: {
    HP: 55,
    Attack: 20,
    Defense: 35,
    'Sp. Attack': 20,
    'Sp. Defense': 45,
    Speed: 75
  },
  url: 'https://www.pokemon.com/us/pokedex/smeargle',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png'
}, {
  id: 236,
  name: 'Tyrogue',
  type: ['Fighting'],
  base: {
    HP: 35,
    Attack: 35,
    Defense: 35,
    'Sp. Attack': 35,
    'Sp. Defense': 35,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/tyrogue',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png'
}, {
  id: 237,
  name: 'Hitmontop',
  type: ['Fighting'],
  base: {
    HP: 50,
    Attack: 95,
    Defense: 95,
    'Sp. Attack': 35,
    'Sp. Defense': 110,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/hitmontop',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png'
}, {
  id: 238,
  name: 'Smoochum',
  type: ['Ice', 'Psychic'],
  base: {
    HP: 45,
    Attack: 30,
    Defense: 15,
    'Sp. Attack': 85,
    'Sp. Defense': 65,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/smoochum',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png'
}, {
  id: 239,
  name: 'Elekid',
  type: ['Electric'],
  base: {
    HP: 45,
    Attack: 63,
    Defense: 37,
    'Sp. Attack': 65,
    'Sp. Defense': 55,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/elekid',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png'
}, {
  id: 240,
  name: 'Magby',
  type: ['Fire'],
  base: {
    HP: 45,
    Attack: 75,
    Defense: 37,
    'Sp. Attack': 70,
    'Sp. Defense': 55,
    Speed: 83
  },
  url: 'https://www.pokemon.com/us/pokedex/magby',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png'
}, {
  id: 241,
  name: 'Miltank',
  type: ['Normal'],
  base: {
    HP: 95,
    Attack: 80,
    Defense: 105,
    'Sp. Attack': 40,
    'Sp. Defense': 70,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/miltank',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png'
}, {
  id: 242,
  name: 'Blissey',
  type: ['Normal'],
  base: {
    HP: 255,
    Attack: 10,
    Defense: 10,
    'Sp. Attack': 75,
    'Sp. Defense': 135,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/blissey',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png'
}, {
  id: 243,
  name: 'Raikou',
  type: ['Electric'],
  base: {
    HP: 90,
    Attack: 85,
    Defense: 75,
    'Sp. Attack': 115,
    'Sp. Defense': 100,
    Speed: 115
  },
  url: 'https://www.pokemon.com/us/pokedex/raikou',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png'
}, {
  id: 244,
  name: 'Entei',
  type: ['Fire'],
  base: {
    HP: 115,
    Attack: 115,
    Defense: 85,
    'Sp. Attack': 90,
    'Sp. Defense': 75,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/entei',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png'
}, {
  id: 245,
  name: 'Suicune',
  type: ['Water'],
  base: {
    HP: 100,
    Attack: 75,
    Defense: 115,
    'Sp. Attack': 90,
    'Sp. Defense': 115,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/suicune',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png'
}, {
  id: 246,
  name: 'Larvitar',
  type: ['Rock', 'Ground'],
  base: {
    HP: 50,
    Attack: 64,
    Defense: 50,
    'Sp. Attack': 45,
    'Sp. Defense': 50,
    Speed: 41
  },
  url: 'https://www.pokemon.com/us/pokedex/larvitar',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png'
}, {
  id: 247,
  name: 'Pupitar',
  type: ['Rock', 'Ground'],
  base: {
    HP: 70,
    Attack: 84,
    Defense: 70,
    'Sp. Attack': 65,
    'Sp. Defense': 70,
    Speed: 51
  },
  url: 'https://www.pokemon.com/us/pokedex/pupitar',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png'
}, {
  id: 248,
  name: 'Tyranitar',
  type: ['Rock', 'Dark'],
  base: {
    HP: 100,
    Attack: 134,
    Defense: 110,
    'Sp. Attack': 95,
    'Sp. Defense': 100,
    Speed: 61
  },
  url: 'https://www.pokemon.com/us/pokedex/tyranitar',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png'
}, {
  id: 249,
  name: 'Lugia',
  type: ['Psychic', 'Flying'],
  base: {
    HP: 106,
    Attack: 90,
    Defense: 130,
    'Sp. Attack': 90,
    'Sp. Defense': 154,
    Speed: 110
  },
  url: 'https://www.pokemon.com/us/pokedex/lugia',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png'
}, {
  id: 250,
  name: 'Ho-Oh',
  type: ['Fire', 'Flying'],
  base: {
    HP: 106,
    Attack: 130,
    Defense: 90,
    'Sp. Attack': 110,
    'Sp. Defense': 154,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/ho-oh',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png'
}, {
  id: 251,
  name: 'Celebi',
  type: ['Psychic', 'Grass'],
  base: {
    HP: 100,
    Attack: 100,
    Defense: 100,
    'Sp. Attack': 100,
    'Sp. Defense': 100,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/celebi',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png'
}, {
  id: 252,
  name: 'Treecko',
  type: ['Grass'],
  base: {
    HP: 40,
    Attack: 45,
    Defense: 35,
    'Sp. Attack': 65,
    'Sp. Defense': 55,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/treecko',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png'
}, {
  id: 253,
  name: 'Grovyle',
  type: ['Grass'],
  base: {
    HP: 50,
    Attack: 65,
    Defense: 45,
    'Sp. Attack': 85,
    'Sp. Defense': 65,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/grovyle',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png'
}, {
  id: 254,
  name: 'Sceptile',
  type: ['Grass'],
  base: {
    HP: 70,
    Attack: 85,
    Defense: 65,
    'Sp. Attack': 105,
    'Sp. Defense': 85,
    Speed: 120
  },
  url: 'https://www.pokemon.com/us/pokedex/sceptile',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png'
}, {
  id: 255,
  name: 'Torchic',
  type: ['Fire'],
  base: {
    HP: 45,
    Attack: 60,
    Defense: 40,
    'Sp. Attack': 70,
    'Sp. Defense': 50,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/torchic',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png'
}, {
  id: 256,
  name: 'Combusken',
  type: ['Fire', 'Fighting'],
  base: {
    HP: 60,
    Attack: 85,
    Defense: 60,
    'Sp. Attack': 85,
    'Sp. Defense': 60,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/combusken',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png'
}, {
  id: 257,
  name: 'Blaziken',
  type: ['Fire', 'Fighting'],
  base: {
    HP: 80,
    Attack: 120,
    Defense: 70,
    'Sp. Attack': 110,
    'Sp. Defense': 70,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/blaziken',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png'
}, {
  id: 258,
  name: 'Mudkip',
  type: ['Water'],
  base: {
    HP: 50,
    Attack: 70,
    Defense: 50,
    'Sp. Attack': 50,
    'Sp. Defense': 50,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/mudkip',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png'
}, {
  id: 259,
  name: 'Marshtomp',
  type: ['Water', 'Ground'],
  base: {
    HP: 70,
    Attack: 85,
    Defense: 70,
    'Sp. Attack': 60,
    'Sp. Defense': 70,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/marshtomp',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png'
}, {
  id: 260,
  name: 'Swampert',
  type: ['Water', 'Ground'],
  base: {
    HP: 100,
    Attack: 110,
    Defense: 90,
    'Sp. Attack': 85,
    'Sp. Defense': 90,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/swampert',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png'
}, {
  id: 261,
  name: 'Poochyena',
  type: ['Dark'],
  base: {
    HP: 35,
    Attack: 55,
    Defense: 35,
    'Sp. Attack': 30,
    'Sp. Defense': 30,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/poochyena',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png'
}, {
  id: 262,
  name: 'Mightyena',
  type: ['Dark'],
  base: {
    HP: 70,
    Attack: 90,
    Defense: 70,
    'Sp. Attack': 60,
    'Sp. Defense': 60,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/mightyena',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png'
}, {
  id: 263,
  name: 'Zigzagoon',
  type: ['Normal'],
  base: {
    HP: 38,
    Attack: 30,
    Defense: 41,
    'Sp. Attack': 30,
    'Sp. Defense': 41,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/zigzagoon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png'
}, {
  id: 264,
  name: 'Linoone',
  type: ['Normal'],
  base: {
    HP: 78,
    Attack: 70,
    Defense: 61,
    'Sp. Attack': 50,
    'Sp. Defense': 61,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/linoone',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png'
}, {
  id: 265,
  name: 'Wurmple',
  type: ['Bug'],
  base: {
    HP: 45,
    Attack: 45,
    Defense: 35,
    'Sp. Attack': 20,
    'Sp. Defense': 30,
    Speed: 20
  },
  url: 'https://www.pokemon.com/us/pokedex/wurmple',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png'
}, {
  id: 266,
  name: 'Silcoon',
  type: ['Bug'],
  base: {
    HP: 50,
    Attack: 35,
    Defense: 55,
    'Sp. Attack': 25,
    'Sp. Defense': 25,
    Speed: 15
  },
  url: 'https://www.pokemon.com/us/pokedex/silcoon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png'
}, {
  id: 267,
  name: 'Beautifly',
  type: ['Bug', 'Flying'],
  base: {
    HP: 60,
    Attack: 70,
    Defense: 50,
    'Sp. Attack': 100,
    'Sp. Defense': 50,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/beautifly',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png'
}, {
  id: 268,
  name: 'Cascoon',
  type: ['Bug'],
  base: {
    HP: 50,
    Attack: 35,
    Defense: 55,
    'Sp. Attack': 25,
    'Sp. Defense': 25,
    Speed: 15
  },
  url: 'https://www.pokemon.com/us/pokedex/cascoon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png'
}, {
  id: 269,
  name: 'Dustox',
  type: ['Bug', 'Poison'],
  base: {
    HP: 60,
    Attack: 50,
    Defense: 70,
    'Sp. Attack': 50,
    'Sp. Defense': 90,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/dustox',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png'
}, {
  id: 270,
  name: 'Lotad',
  type: ['Water', 'Grass'],
  base: {
    HP: 40,
    Attack: 30,
    Defense: 30,
    'Sp. Attack': 40,
    'Sp. Defense': 50,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/lotad',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png'
}, {
  id: 271,
  name: 'Lombre',
  type: ['Water', 'Grass'],
  base: {
    HP: 60,
    Attack: 50,
    Defense: 50,
    'Sp. Attack': 60,
    'Sp. Defense': 70,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/lombre',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png'
}, {
  id: 272,
  name: 'Ludicolo',
  type: ['Water', 'Grass'],
  base: {
    HP: 80,
    Attack: 70,
    Defense: 70,
    'Sp. Attack': 90,
    'Sp. Defense': 100,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/ludicolo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png'
}, {
  id: 273,
  name: 'Seedot',
  type: ['Grass'],
  base: {
    HP: 40,
    Attack: 40,
    Defense: 50,
    'Sp. Attack': 30,
    'Sp. Defense': 30,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/seedot',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png'
}, {
  id: 274,
  name: 'Nuzleaf',
  type: ['Grass', 'Dark'],
  base: {
    HP: 70,
    Attack: 70,
    Defense: 40,
    'Sp. Attack': 60,
    'Sp. Defense': 40,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/nuzleaf',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png'
}, {
  id: 275,
  name: 'Shiftry',
  type: ['Grass', 'Dark'],
  base: {
    HP: 90,
    Attack: 100,
    Defense: 60,
    'Sp. Attack': 90,
    'Sp. Defense': 60,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/shiftry',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png'
}, {
  id: 276,
  name: 'Taillow',
  type: ['Normal', 'Flying'],
  base: {
    HP: 40,
    Attack: 55,
    Defense: 30,
    'Sp. Attack': 30,
    'Sp. Defense': 30,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/taillow',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png'
}, {
  id: 277,
  name: 'Swellow',
  type: ['Normal', 'Flying'],
  base: {
    HP: 60,
    Attack: 85,
    Defense: 60,
    'Sp. Attack': 75,
    'Sp. Defense': 50,
    Speed: 125
  },
  url: 'https://www.pokemon.com/us/pokedex/swellow',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png'
}, {
  id: 278,
  name: 'Wingull',
  type: ['Water', 'Flying'],
  base: {
    HP: 40,
    Attack: 30,
    Defense: 30,
    'Sp. Attack': 55,
    'Sp. Defense': 30,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/wingull',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png'
}, {
  id: 279,
  name: 'Pelipper',
  type: ['Water', 'Flying'],
  base: {
    HP: 60,
    Attack: 50,
    Defense: 100,
    'Sp. Attack': 95,
    'Sp. Defense': 70,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/pelipper',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png'
}, {
  id: 280,
  name: 'Ralts',
  type: ['Psychic', 'Fairy'],
  base: {
    HP: 28,
    Attack: 25,
    Defense: 25,
    'Sp. Attack': 45,
    'Sp. Defense': 35,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/ralts',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png'
}, {
  id: 281,
  name: 'Kirlia',
  type: ['Psychic', 'Fairy'],
  base: {
    HP: 38,
    Attack: 35,
    Defense: 35,
    'Sp. Attack': 65,
    'Sp. Defense': 55,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/kirlia',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png'
}, {
  id: 282,
  name: 'Gardevoir',
  type: ['Psychic', 'Fairy'],
  base: {
    HP: 68,
    Attack: 65,
    Defense: 65,
    'Sp. Attack': 125,
    'Sp. Defense': 115,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/gardevoir',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png'
}, {
  id: 283,
  name: 'Surskit',
  type: ['Bug', 'Water'],
  base: {
    HP: 40,
    Attack: 30,
    Defense: 32,
    'Sp. Attack': 50,
    'Sp. Defense': 52,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/surskit',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png'
}, {
  id: 284,
  name: 'Masquerain',
  type: ['Bug', 'Flying'],
  base: {
    HP: 70,
    Attack: 60,
    Defense: 62,
    'Sp. Attack': 100,
    'Sp. Defense': 82,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/masquerain',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png'
}, {
  id: 285,
  name: 'Shroomish',
  type: ['Grass'],
  base: {
    HP: 60,
    Attack: 40,
    Defense: 60,
    'Sp. Attack': 40,
    'Sp. Defense': 60,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/shroomish',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png'
}, {
  id: 286,
  name: 'Breloom',
  type: ['Grass', 'Fighting'],
  base: {
    HP: 60,
    Attack: 130,
    Defense: 80,
    'Sp. Attack': 60,
    'Sp. Defense': 60,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/breloom',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png'
}, {
  id: 287,
  name: 'Slakoth',
  type: ['Normal'],
  base: {
    HP: 60,
    Attack: 60,
    Defense: 60,
    'Sp. Attack': 35,
    'Sp. Defense': 35,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/slakoth',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png'
}, {
  id: 288,
  name: 'Vigoroth',
  type: ['Normal'],
  base: {
    HP: 80,
    Attack: 80,
    Defense: 80,
    'Sp. Attack': 55,
    'Sp. Defense': 55,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/vigoroth',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png'
}, {
  id: 289,
  name: 'Slaking',
  type: ['Normal'],
  base: {
    HP: 150,
    Attack: 160,
    Defense: 100,
    'Sp. Attack': 95,
    'Sp. Defense': 65,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/slaking',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png'
}, {
  id: 290,
  name: 'Nincada',
  type: ['Bug', 'Ground'],
  base: {
    HP: 31,
    Attack: 45,
    Defense: 90,
    'Sp. Attack': 30,
    'Sp. Defense': 30,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/nincada',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png'
}, {
  id: 291,
  name: 'Ninjask',
  type: ['Bug', 'Flying'],
  base: {
    HP: 61,
    Attack: 90,
    Defense: 45,
    'Sp. Attack': 50,
    'Sp. Defense': 50,
    Speed: 160
  },
  url: 'https://www.pokemon.com/us/pokedex/ninjask',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png'
}, {
  id: 292,
  name: 'Shedinja',
  type: ['Bug', 'Ghost'],
  base: {
    HP: 1,
    Attack: 90,
    Defense: 45,
    'Sp. Attack': 30,
    'Sp. Defense': 30,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/shedinja',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/292.png'
}, {
  id: 293,
  name: 'Whismur',
  type: ['Normal'],
  base: {
    HP: 64,
    Attack: 51,
    Defense: 23,
    'Sp. Attack': 51,
    'Sp. Defense': 23,
    Speed: 28
  },
  url: 'https://www.pokemon.com/us/pokedex/whismur',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png'
}, {
  id: 294,
  name: 'Loudred',
  type: ['Normal'],
  base: {
    HP: 84,
    Attack: 71,
    Defense: 43,
    'Sp. Attack': 71,
    'Sp. Defense': 43,
    Speed: 48
  },
  url: 'https://www.pokemon.com/us/pokedex/loudred',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png'
}, {
  id: 295,
  name: 'Exploud',
  type: ['Normal'],
  base: {
    HP: 104,
    Attack: 91,
    Defense: 63,
    'Sp. Attack': 91,
    'Sp. Defense': 73,
    Speed: 68
  },
  url: 'https://www.pokemon.com/us/pokedex/exploud',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png'
}, {
  id: 296,
  name: 'Makuhita',
  type: ['Fighting'],
  base: {
    HP: 72,
    Attack: 60,
    Defense: 30,
    'Sp. Attack': 20,
    'Sp. Defense': 30,
    Speed: 25
  },
  url: 'https://www.pokemon.com/us/pokedex/makuhita',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png'
}, {
  id: 297,
  name: 'Hariyama',
  type: ['Fighting'],
  base: {
    HP: 144,
    Attack: 120,
    Defense: 60,
    'Sp. Attack': 40,
    'Sp. Defense': 60,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/hariyama',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png'
}, {
  id: 298,
  name: 'Azurill',
  type: ['Normal', 'Fairy'],
  base: {
    HP: 50,
    Attack: 20,
    Defense: 40,
    'Sp. Attack': 20,
    'Sp. Defense': 40,
    Speed: 20
  },
  url: 'https://www.pokemon.com/us/pokedex/azurill',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png'
}, {
  id: 299,
  name: 'Nosepass',
  type: ['Rock'],
  base: {
    HP: 30,
    Attack: 45,
    Defense: 135,
    'Sp. Attack': 45,
    'Sp. Defense': 90,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/nosepass',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png'
}, {
  id: 300,
  name: 'Skitty',
  type: ['Normal'],
  base: {
    HP: 50,
    Attack: 45,
    Defense: 45,
    'Sp. Attack': 35,
    'Sp. Defense': 35,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/skitty',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png'
}, {
  id: 301,
  name: 'Delcatty',
  type: ['Normal'],
  base: {
    HP: 70,
    Attack: 65,
    Defense: 65,
    'Sp. Attack': 55,
    'Sp. Defense': 55,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/delcatty',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png'
}, {
  id: 302,
  name: 'Sableye',
  type: ['Dark', 'Ghost'],
  base: {
    HP: 50,
    Attack: 75,
    Defense: 75,
    'Sp. Attack': 65,
    'Sp. Defense': 65,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/sableye',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png'
}, {
  id: 303,
  name: 'Mawile',
  type: ['Steel', 'Fairy'],
  base: {
    HP: 50,
    Attack: 85,
    Defense: 85,
    'Sp. Attack': 55,
    'Sp. Defense': 55,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/mawile',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png'
}, {
  id: 304,
  name: 'Aron',
  type: ['Steel', 'Rock'],
  base: {
    HP: 50,
    Attack: 70,
    Defense: 100,
    'Sp. Attack': 40,
    'Sp. Defense': 40,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/aron',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png'
}, {
  id: 305,
  name: 'Lairon',
  type: ['Steel', 'Rock'],
  base: {
    HP: 60,
    Attack: 90,
    Defense: 140,
    'Sp. Attack': 50,
    'Sp. Defense': 50,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/lairon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png'
}, {
  id: 306,
  name: 'Aggron',
  type: ['Steel', 'Rock'],
  base: {
    HP: 70,
    Attack: 110,
    Defense: 180,
    'Sp. Attack': 60,
    'Sp. Defense': 60,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/aggron',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png'
}, {
  id: 307,
  name: 'Meditite',
  type: ['Fighting', 'Psychic'],
  base: {
    HP: 30,
    Attack: 40,
    Defense: 55,
    'Sp. Attack': 40,
    'Sp. Defense': 55,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/meditite',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png'
}, {
  id: 308,
  name: 'Medicham',
  type: ['Fighting', 'Psychic'],
  base: {
    HP: 60,
    Attack: 60,
    Defense: 75,
    'Sp. Attack': 60,
    'Sp. Defense': 75,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/medicham',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png'
}, {
  id: 309,
  name: 'Electrike',
  type: ['Electric'],
  base: {
    HP: 40,
    Attack: 45,
    Defense: 40,
    'Sp. Attack': 65,
    'Sp. Defense': 40,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/electrike',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png'
}, {
  id: 310,
  name: 'Manectric',
  type: ['Electric'],
  base: {
    HP: 70,
    Attack: 75,
    Defense: 60,
    'Sp. Attack': 105,
    'Sp. Defense': 60,
    Speed: 105
  },
  url: 'https://www.pokemon.com/us/pokedex/manectric',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png'
}, {
  id: 311,
  name: 'Plusle',
  type: ['Electric'],
  base: {
    HP: 60,
    Attack: 50,
    Defense: 40,
    'Sp. Attack': 85,
    'Sp. Defense': 75,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/plusle',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png'
}, {
  id: 312,
  name: 'Minun',
  type: ['Electric'],
  base: {
    HP: 60,
    Attack: 40,
    Defense: 50,
    'Sp. Attack': 75,
    'Sp. Defense': 85,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/minun',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png'
}, {
  id: 313,
  name: 'Volbeat',
  type: ['Bug'],
  base: {
    HP: 65,
    Attack: 73,
    Defense: 75,
    'Sp. Attack': 47,
    'Sp. Defense': 85,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/volbeat',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png'
}, {
  id: 314,
  name: 'Illumise',
  type: ['Bug'],
  base: {
    HP: 65,
    Attack: 47,
    Defense: 75,
    'Sp. Attack': 73,
    'Sp. Defense': 85,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/illumise',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png'
}, {
  id: 315,
  name: 'Roselia',
  type: ['Grass', 'Poison'],
  base: {
    HP: 50,
    Attack: 60,
    Defense: 45,
    'Sp. Attack': 100,
    'Sp. Defense': 80,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/roselia',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png'
}, {
  id: 316,
  name: 'Gulpin',
  type: ['Poison'],
  base: {
    HP: 70,
    Attack: 43,
    Defense: 53,
    'Sp. Attack': 43,
    'Sp. Defense': 53,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/gulpin',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png'
}, {
  id: 317,
  name: 'Swalot',
  type: ['Poison'],
  base: {
    HP: 100,
    Attack: 73,
    Defense: 83,
    'Sp. Attack': 73,
    'Sp. Defense': 83,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/swalot',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png'
}, {
  id: 318,
  name: 'Carvanha',
  type: ['Water', 'Dark'],
  base: {
    HP: 45,
    Attack: 90,
    Defense: 20,
    'Sp. Attack': 65,
    'Sp. Defense': 20,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/carvanha',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png'
}, {
  id: 319,
  name: 'Sharpedo',
  type: ['Water', 'Dark'],
  base: {
    HP: 70,
    Attack: 120,
    Defense: 40,
    'Sp. Attack': 95,
    'Sp. Defense': 40,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/sharpedo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png'
}, {
  id: 320,
  name: 'Wailmer',
  type: ['Water'],
  base: {
    HP: 130,
    Attack: 70,
    Defense: 35,
    'Sp. Attack': 70,
    'Sp. Defense': 35,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/wailmer',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png'
}, {
  id: 321,
  name: 'Wailord',
  type: ['Water'],
  base: {
    HP: 170,
    Attack: 90,
    Defense: 45,
    'Sp. Attack': 90,
    'Sp. Defense': 45,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/wailord',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png'
}, {
  id: 322,
  name: 'Numel',
  type: ['Fire', 'Ground'],
  base: {
    HP: 60,
    Attack: 60,
    Defense: 40,
    'Sp. Attack': 65,
    'Sp. Defense': 45,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/numel',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png'
}, {
  id: 323,
  name: 'Camerupt',
  type: ['Fire', 'Ground'],
  base: {
    HP: 70,
    Attack: 100,
    Defense: 70,
    'Sp. Attack': 105,
    'Sp. Defense': 75,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/camerupt',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png'
}, {
  id: 324,
  name: 'Torkoal',
  type: ['Fire'],
  base: {
    HP: 70,
    Attack: 85,
    Defense: 140,
    'Sp. Attack': 85,
    'Sp. Defense': 70,
    Speed: 20
  },
  url: 'https://www.pokemon.com/us/pokedex/torkoal',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png'
}, {
  id: 325,
  name: 'Spoink',
  type: ['Psychic'],
  base: {
    HP: 60,
    Attack: 25,
    Defense: 35,
    'Sp. Attack': 70,
    'Sp. Defense': 80,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/spoink',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png'
}, {
  id: 326,
  name: 'Grumpig',
  type: ['Psychic'],
  base: {
    HP: 80,
    Attack: 45,
    Defense: 65,
    'Sp. Attack': 90,
    'Sp. Defense': 110,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/grumpig',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png'
}, {
  id: 327,
  name: 'Spinda',
  type: ['Normal'],
  base: {
    HP: 60,
    Attack: 60,
    Defense: 60,
    'Sp. Attack': 60,
    'Sp. Defense': 60,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/spinda',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png'
}, {
  id: 328,
  name: 'Trapinch',
  type: ['Ground'],
  base: {
    HP: 45,
    Attack: 100,
    Defense: 45,
    'Sp. Attack': 45,
    'Sp. Defense': 45,
    Speed: 10
  },
  url: 'https://www.pokemon.com/us/pokedex/trapinch',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png'
}, {
  id: 329,
  name: 'Vibrava',
  type: ['Ground', 'Dragon'],
  base: {
    HP: 50,
    Attack: 70,
    Defense: 50,
    'Sp. Attack': 50,
    'Sp. Defense': 50,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/vibrava',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png'
}, {
  id: 330,
  name: 'Flygon',
  type: ['Ground', 'Dragon'],
  base: {
    HP: 80,
    Attack: 100,
    Defense: 80,
    'Sp. Attack': 80,
    'Sp. Defense': 80,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/flygon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png'
}, {
  id: 331,
  name: 'Cacnea',
  type: ['Grass'],
  base: {
    HP: 50,
    Attack: 85,
    Defense: 40,
    'Sp. Attack': 85,
    'Sp. Defense': 40,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/cacnea',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png'
}, {
  id: 332,
  name: 'Cacturne',
  type: ['Grass', 'Dark'],
  base: {
    HP: 70,
    Attack: 115,
    Defense: 60,
    'Sp. Attack': 115,
    'Sp. Defense': 60,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/cacturne',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png'
}, {
  id: 333,
  name: 'Swablu',
  type: ['Normal', 'Flying'],
  base: {
    HP: 45,
    Attack: 40,
    Defense: 60,
    'Sp. Attack': 40,
    'Sp. Defense': 75,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/swablu',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png'
}, {
  id: 334,
  name: 'Altaria',
  type: ['Dragon', 'Flying'],
  base: {
    HP: 75,
    Attack: 70,
    Defense: 90,
    'Sp. Attack': 70,
    'Sp. Defense': 105,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/altaria',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png'
}, {
  id: 335,
  name: 'Zangoose',
  type: ['Normal'],
  base: {
    HP: 73,
    Attack: 115,
    Defense: 60,
    'Sp. Attack': 60,
    'Sp. Defense': 60,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/zangoose',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png'
}, {
  id: 336,
  name: 'Seviper',
  type: ['Poison'],
  base: {
    HP: 73,
    Attack: 100,
    Defense: 60,
    'Sp. Attack': 100,
    'Sp. Defense': 60,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/seviper',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png'
}, {
  id: 337,
  name: 'Lunatone',
  type: ['Rock', 'Psychic'],
  base: {
    HP: 90,
    Attack: 55,
    Defense: 65,
    'Sp. Attack': 95,
    'Sp. Defense': 85,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/lunatone',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png'
}, {
  id: 338,
  name: 'Solrock',
  type: ['Rock', 'Psychic'],
  base: {
    HP: 90,
    Attack: 95,
    Defense: 85,
    'Sp. Attack': 55,
    'Sp. Defense': 65,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/solrock',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png'
}, {
  id: 339,
  name: 'Barboach',
  type: ['Water', 'Ground'],
  base: {
    HP: 50,
    Attack: 48,
    Defense: 43,
    'Sp. Attack': 46,
    'Sp. Defense': 41,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/barboach',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png'
}, {
  id: 340,
  name: 'Whiscash',
  type: ['Water', 'Ground'],
  base: {
    HP: 110,
    Attack: 78,
    Defense: 73,
    'Sp. Attack': 76,
    'Sp. Defense': 71,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/whiscash',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png'
}, {
  id: 341,
  name: 'Corphish',
  type: ['Water'],
  base: {
    HP: 43,
    Attack: 80,
    Defense: 65,
    'Sp. Attack': 50,
    'Sp. Defense': 35,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/corphish',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png'
}, {
  id: 342,
  name: 'Crawdaunt',
  type: ['Water', 'Dark'],
  base: {
    HP: 63,
    Attack: 120,
    Defense: 85,
    'Sp. Attack': 90,
    'Sp. Defense': 55,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/crawdaunt',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png'
}, {
  id: 343,
  name: 'Baltoy',
  type: ['Ground', 'Psychic'],
  base: {
    HP: 40,
    Attack: 40,
    Defense: 55,
    'Sp. Attack': 40,
    'Sp. Defense': 70,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/baltoy',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png'
}, {
  id: 344,
  name: 'Claydol',
  type: ['Ground', 'Psychic'],
  base: {
    HP: 60,
    Attack: 70,
    Defense: 105,
    'Sp. Attack': 70,
    'Sp. Defense': 120,
    Speed: 75
  },
  url: 'https://www.pokemon.com/us/pokedex/claydol',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png'
}, {
  id: 345,
  name: 'Lileep',
  type: ['Rock', 'Grass'],
  base: {
    HP: 66,
    Attack: 41,
    Defense: 77,
    'Sp. Attack': 61,
    'Sp. Defense': 87,
    Speed: 23
  },
  url: 'https://www.pokemon.com/us/pokedex/lileep',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png'
}, {
  id: 346,
  name: 'Cradily',
  type: ['Rock', 'Grass'],
  base: {
    HP: 86,
    Attack: 81,
    Defense: 97,
    'Sp. Attack': 81,
    'Sp. Defense': 107,
    Speed: 43
  },
  url: 'https://www.pokemon.com/us/pokedex/cradily',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png'
}, {
  id: 347,
  name: 'Anorith',
  type: ['Rock', 'Bug'],
  base: {
    HP: 45,
    Attack: 95,
    Defense: 50,
    'Sp. Attack': 40,
    'Sp. Defense': 50,
    Speed: 75
  },
  url: 'https://www.pokemon.com/us/pokedex/anorith',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png'
}, {
  id: 348,
  name: 'Armaldo',
  type: ['Rock', 'Bug'],
  base: {
    HP: 75,
    Attack: 125,
    Defense: 100,
    'Sp. Attack': 70,
    'Sp. Defense': 80,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/armaldo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png'
}, {
  id: 349,
  name: 'Feebas',
  type: ['Water'],
  base: {
    HP: 20,
    Attack: 15,
    Defense: 20,
    'Sp. Attack': 10,
    'Sp. Defense': 55,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/feebas',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png'
}, {
  id: 350,
  name: 'Milotic',
  type: ['Water'],
  base: {
    HP: 95,
    Attack: 60,
    Defense: 79,
    'Sp. Attack': 100,
    'Sp. Defense': 125,
    Speed: 81
  },
  url: 'https://www.pokemon.com/us/pokedex/milotic',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png'
}, {
  id: 351,
  name: 'Castform',
  type: ['Normal'],
  base: {
    HP: 70,
    Attack: 70,
    Defense: 70,
    'Sp. Attack': 70,
    'Sp. Defense': 70,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/castform',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png'
}, {
  id: 352,
  name: 'Kecleon',
  type: ['Normal'],
  base: {
    HP: 60,
    Attack: 90,
    Defense: 70,
    'Sp. Attack': 60,
    'Sp. Defense': 120,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/kecleon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png'
}, {
  id: 353,
  name: 'Shuppet',
  type: ['Ghost'],
  base: {
    HP: 44,
    Attack: 75,
    Defense: 35,
    'Sp. Attack': 63,
    'Sp. Defense': 33,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/shuppet',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png'
}, {
  id: 354,
  name: 'Banette',
  type: ['Ghost'],
  base: {
    HP: 64,
    Attack: 115,
    Defense: 65,
    'Sp. Attack': 83,
    'Sp. Defense': 63,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/banette',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png'
}, {
  id: 355,
  name: 'Duskull',
  type: ['Ghost'],
  base: {
    HP: 20,
    Attack: 40,
    Defense: 90,
    'Sp. Attack': 30,
    'Sp. Defense': 90,
    Speed: 25
  },
  url: 'https://www.pokemon.com/us/pokedex/duskull',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png'
}, {
  id: 356,
  name: 'Dusclops',
  type: ['Ghost'],
  base: {
    HP: 40,
    Attack: 70,
    Defense: 130,
    'Sp. Attack': 60,
    'Sp. Defense': 130,
    Speed: 25
  },
  url: 'https://www.pokemon.com/us/pokedex/dusclops',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png'
}, {
  id: 357,
  name: 'Tropius',
  type: ['Grass', 'Flying'],
  base: {
    HP: 99,
    Attack: 68,
    Defense: 83,
    'Sp. Attack': 72,
    'Sp. Defense': 87,
    Speed: 51
  },
  url: 'https://www.pokemon.com/us/pokedex/tropius',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png'
}, {
  id: 358,
  name: 'Chimecho',
  type: ['Psychic'],
  base: {
    HP: 75,
    Attack: 50,
    Defense: 80,
    'Sp. Attack': 95,
    'Sp. Defense': 90,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/chimecho',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png'
}, {
  id: 359,
  name: 'Absol',
  type: ['Dark'],
  base: {
    HP: 65,
    Attack: 130,
    Defense: 60,
    'Sp. Attack': 75,
    'Sp. Defense': 60,
    Speed: 75
  },
  url: 'https://www.pokemon.com/us/pokedex/absol',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png'
}, {
  id: 360,
  name: 'Wynaut',
  type: ['Psychic'],
  base: {
    HP: 95,
    Attack: 23,
    Defense: 48,
    'Sp. Attack': 23,
    'Sp. Defense': 48,
    Speed: 23
  },
  url: 'https://www.pokemon.com/us/pokedex/wynaut',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png'
}, {
  id: 361,
  name: 'Snorunt',
  type: ['Ice'],
  base: {
    HP: 50,
    Attack: 50,
    Defense: 50,
    'Sp. Attack': 50,
    'Sp. Defense': 50,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/snorunt',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png'
}, {
  id: 362,
  name: 'Glalie',
  type: ['Ice'],
  base: {
    HP: 80,
    Attack: 80,
    Defense: 80,
    'Sp. Attack': 80,
    'Sp. Defense': 80,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/glalie',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png'
}, {
  id: 363,
  name: 'Spheal',
  type: ['Ice', 'Water'],
  base: {
    HP: 70,
    Attack: 40,
    Defense: 50,
    'Sp. Attack': 55,
    'Sp. Defense': 50,
    Speed: 25
  },
  url: 'https://www.pokemon.com/us/pokedex/spheal',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png'
}, {
  id: 364,
  name: 'Sealeo',
  type: ['Ice', 'Water'],
  base: {
    HP: 90,
    Attack: 60,
    Defense: 70,
    'Sp. Attack': 75,
    'Sp. Defense': 70,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/sealeo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png'
}, {
  id: 365,
  name: 'Walrein',
  type: ['Ice', 'Water'],
  base: {
    HP: 110,
    Attack: 80,
    Defense: 90,
    'Sp. Attack': 95,
    'Sp. Defense': 90,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/walrein',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png'
}, {
  id: 366,
  name: 'Clamperl',
  type: ['Water'],
  base: {
    HP: 35,
    Attack: 64,
    Defense: 85,
    'Sp. Attack': 74,
    'Sp. Defense': 55,
    Speed: 32
  },
  url: 'https://www.pokemon.com/us/pokedex/clamperl',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png'
}, {
  id: 367,
  name: 'Huntail',
  type: ['Water'],
  base: {
    HP: 55,
    Attack: 104,
    Defense: 105,
    'Sp. Attack': 94,
    'Sp. Defense': 75,
    Speed: 52
  },
  url: 'https://www.pokemon.com/us/pokedex/huntail',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png'
}, {
  id: 368,
  name: 'Gorebyss',
  type: ['Water'],
  base: {
    HP: 55,
    Attack: 84,
    Defense: 105,
    'Sp. Attack': 114,
    'Sp. Defense': 75,
    Speed: 52
  },
  url: 'https://www.pokemon.com/us/pokedex/gorebyss',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/368.png'
}, {
  id: 369,
  name: 'Relicanth',
  type: ['Water', 'Rock'],
  base: {
    HP: 100,
    Attack: 90,
    Defense: 130,
    'Sp. Attack': 45,
    'Sp. Defense': 65,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/relicanth',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png'
}, {
  id: 370,
  name: 'Luvdisc',
  type: ['Water'],
  base: {
    HP: 43,
    Attack: 30,
    Defense: 55,
    'Sp. Attack': 40,
    'Sp. Defense': 65,
    Speed: 97
  },
  url: 'https://www.pokemon.com/us/pokedex/luvdisc',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png'
}, {
  id: 371,
  name: 'Bagon',
  type: ['Dragon'],
  base: {
    HP: 45,
    Attack: 75,
    Defense: 60,
    'Sp. Attack': 40,
    'Sp. Defense': 30,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/bagon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png'
}, {
  id: 372,
  name: 'Shelgon',
  type: ['Dragon'],
  base: {
    HP: 65,
    Attack: 95,
    Defense: 100,
    'Sp. Attack': 60,
    'Sp. Defense': 50,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/shelgon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png'
}, {
  id: 373,
  name: 'Salamence',
  type: ['Dragon', 'Flying'],
  base: {
    HP: 95,
    Attack: 135,
    Defense: 80,
    'Sp. Attack': 110,
    'Sp. Defense': 80,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/salamence',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png'
}, {
  id: 374,
  name: 'Beldum',
  type: ['Steel', 'Psychic'],
  base: {
    HP: 40,
    Attack: 55,
    Defense: 80,
    'Sp. Attack': 35,
    'Sp. Defense': 60,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/beldum',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png'
}, {
  id: 375,
  name: 'Metang',
  type: ['Steel', 'Psychic'],
  base: {
    HP: 60,
    Attack: 75,
    Defense: 100,
    'Sp. Attack': 55,
    'Sp. Defense': 80,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/metang',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png'
}, {
  id: 376,
  name: 'Metagross',
  type: ['Steel', 'Psychic'],
  base: {
    HP: 80,
    Attack: 135,
    Defense: 130,
    'Sp. Attack': 95,
    'Sp. Defense': 90,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/metagross',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png'
}, {
  id: 377,
  name: 'Regirock',
  type: ['Rock'],
  base: {
    HP: 80,
    Attack: 100,
    Defense: 200,
    'Sp. Attack': 50,
    'Sp. Defense': 100,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/regirock',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png'
}, {
  id: 378,
  name: 'Regice',
  type: ['Ice'],
  base: {
    HP: 80,
    Attack: 50,
    Defense: 100,
    'Sp. Attack': 100,
    'Sp. Defense': 200,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/regice',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png'
}, {
  id: 379,
  name: 'Registeel',
  type: ['Steel'],
  base: {
    HP: 80,
    Attack: 75,
    Defense: 150,
    'Sp. Attack': 75,
    'Sp. Defense': 150,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/registeel',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png'
}, {
  id: 380,
  name: 'Latias',
  type: ['Dragon', 'Psychic'],
  base: {
    HP: 80,
    Attack: 80,
    Defense: 90,
    'Sp. Attack': 110,
    'Sp. Defense': 130,
    Speed: 110
  },
  url: 'https://www.pokemon.com/us/pokedex/latias',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png'
}, {
  id: 381,
  name: 'Latios',
  type: ['Dragon', 'Psychic'],
  base: {
    HP: 80,
    Attack: 90,
    Defense: 80,
    'Sp. Attack': 130,
    'Sp. Defense': 110,
    Speed: 110
  },
  url: 'https://www.pokemon.com/us/pokedex/latios',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png'
}, {
  id: 382,
  name: 'Kyogre',
  type: ['Water'],
  base: {
    HP: 100,
    Attack: 100,
    Defense: 90,
    'Sp. Attack': 150,
    'Sp. Defense': 140,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/kyogre',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png'
}, {
  id: 383,
  name: 'Groudon',
  type: ['Ground'],
  base: {
    HP: 100,
    Attack: 150,
    Defense: 140,
    'Sp. Attack': 100,
    'Sp. Defense': 90,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/groudon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png'
}, {
  id: 384,
  name: 'Rayquaza',
  type: ['Dragon', 'Flying'],
  base: {
    HP: 105,
    Attack: 150,
    Defense: 90,
    'Sp. Attack': 150,
    'Sp. Defense': 90,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/rayquaza',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png'
}, {
  id: 385,
  name: 'Jirachi',
  type: ['Steel', 'Psychic'],
  base: {
    HP: 100,
    Attack: 100,
    Defense: 100,
    'Sp. Attack': 100,
    'Sp. Defense': 100,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/jirachi',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png'
}, {
  id: 386,
  name: 'Deoxys',
  type: ['Psychic'],
  base: {
    HP: 50,
    Attack: 150,
    Defense: 50,
    'Sp. Attack': 150,
    'Sp. Defense': 50,
    Speed: 150
  },
  url: 'https://www.pokemon.com/us/pokedex/deoxys',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/386.png'
}, {
  id: 387,
  name: 'Turtwig',
  type: ['Grass'],
  base: {
    HP: 55,
    Attack: 68,
    Defense: 64,
    'Sp. Attack': 45,
    'Sp. Defense': 55,
    Speed: 31
  },
  url: 'https://www.pokemon.com/us/pokedex/turtwig',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png'
}, {
  id: 388,
  name: 'Grotle',
  type: ['Grass'],
  base: {
    HP: 75,
    Attack: 89,
    Defense: 85,
    'Sp. Attack': 55,
    'Sp. Defense': 65,
    Speed: 36
  },
  url: 'https://www.pokemon.com/us/pokedex/grotle',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png'
}, {
  id: 389,
  name: 'Torterra',
  type: ['Grass', 'Ground'],
  base: {
    HP: 95,
    Attack: 109,
    Defense: 105,
    'Sp. Attack': 75,
    'Sp. Defense': 85,
    Speed: 56
  },
  url: 'https://www.pokemon.com/us/pokedex/torterra',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png'
}, {
  id: 390,
  name: 'Chimchar',
  type: ['Fire'],
  base: {
    HP: 44,
    Attack: 58,
    Defense: 44,
    'Sp. Attack': 58,
    'Sp. Defense': 44,
    Speed: 61
  },
  url: 'https://www.pokemon.com/us/pokedex/chimchar',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png'
}, {
  id: 391,
  name: 'Monferno',
  type: ['Fire', 'Fighting'],
  base: {
    HP: 64,
    Attack: 78,
    Defense: 52,
    'Sp. Attack': 78,
    'Sp. Defense': 52,
    Speed: 81
  },
  url: 'https://www.pokemon.com/us/pokedex/monferno',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/391.png'
}, {
  id: 392,
  name: 'Infernape',
  type: ['Fire', 'Fighting'],
  base: {
    HP: 76,
    Attack: 104,
    Defense: 71,
    'Sp. Attack': 104,
    'Sp. Defense': 71,
    Speed: 108
  },
  url: 'https://www.pokemon.com/us/pokedex/infernape',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png'
}, {
  id: 393,
  name: 'Piplup',
  type: ['Water'],
  base: {
    HP: 53,
    Attack: 51,
    Defense: 53,
    'Sp. Attack': 61,
    'Sp. Defense': 56,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/piplup',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png'
}, {
  id: 394,
  name: 'Prinplup',
  type: ['Water'],
  base: {
    HP: 64,
    Attack: 66,
    Defense: 68,
    'Sp. Attack': 81,
    'Sp. Defense': 76,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/prinplup',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png'
}, {
  id: 395,
  name: 'Empoleon',
  type: ['Water', 'Steel'],
  base: {
    HP: 84,
    Attack: 86,
    Defense: 88,
    'Sp. Attack': 111,
    'Sp. Defense': 101,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/empoleon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png'
}, {
  id: 396,
  name: 'Starly',
  type: ['Normal', 'Flying'],
  base: {
    HP: 40,
    Attack: 55,
    Defense: 30,
    'Sp. Attack': 30,
    'Sp. Defense': 30,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/starly',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png'
}, {
  id: 397,
  name: 'Staravia',
  type: ['Normal', 'Flying'],
  base: {
    HP: 55,
    Attack: 75,
    Defense: 50,
    'Sp. Attack': 40,
    'Sp. Defense': 40,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/staravia',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/397.png'
}, {
  id: 398,
  name: 'Staraptor',
  type: ['Normal', 'Flying'],
  base: {
    HP: 85,
    Attack: 120,
    Defense: 70,
    'Sp. Attack': 50,
    'Sp. Defense': 60,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/staraptor',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png'
}, {
  id: 399,
  name: 'Bidoof',
  type: ['Normal'],
  base: {
    HP: 59,
    Attack: 45,
    Defense: 40,
    'Sp. Attack': 35,
    'Sp. Defense': 40,
    Speed: 31
  },
  url: 'https://www.pokemon.com/us/pokedex/bidoof',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png'
}, {
  id: 400,
  name: 'Bibarel',
  type: ['Normal', 'Water'],
  base: {
    HP: 79,
    Attack: 85,
    Defense: 60,
    'Sp. Attack': 55,
    'Sp. Defense': 60,
    Speed: 71
  },
  url: 'https://www.pokemon.com/us/pokedex/bibarel',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/400.png'
}, {
  id: 401,
  name: 'Kricketot',
  type: ['Bug'],
  base: {
    HP: 37,
    Attack: 25,
    Defense: 41,
    'Sp. Attack': 25,
    'Sp. Defense': 41,
    Speed: 25
  },
  url: 'https://www.pokemon.com/us/pokedex/kricketot',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png'
}, {
  id: 402,
  name: 'Kricketune',
  type: ['Bug'],
  base: {
    HP: 77,
    Attack: 85,
    Defense: 51,
    'Sp. Attack': 55,
    'Sp. Defense': 51,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/kricketune',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png'
}, {
  id: 403,
  name: 'Shinx',
  type: ['Electric'],
  base: {
    HP: 45,
    Attack: 65,
    Defense: 34,
    'Sp. Attack': 40,
    'Sp. Defense': 34,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/shinx',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png'
}, {
  id: 404,
  name: 'Luxio',
  type: ['Electric'],
  base: {
    HP: 60,
    Attack: 85,
    Defense: 49,
    'Sp. Attack': 60,
    'Sp. Defense': 49,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/luxio',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png'
}, {
  id: 405,
  name: 'Luxray',
  type: ['Electric'],
  base: {
    HP: 80,
    Attack: 120,
    Defense: 79,
    'Sp. Attack': 95,
    'Sp. Defense': 79,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/luxray',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png'
}, {
  id: 406,
  name: 'Budew',
  type: ['Grass', 'Poison'],
  base: {
    HP: 40,
    Attack: 30,
    Defense: 35,
    'Sp. Attack': 50,
    'Sp. Defense': 70,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/budew',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png'
}, {
  id: 407,
  name: 'Roserade',
  type: ['Grass', 'Poison'],
  base: {
    HP: 60,
    Attack: 70,
    Defense: 65,
    'Sp. Attack': 125,
    'Sp. Defense': 105,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/roserade',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png'
}, {
  id: 408,
  name: 'Cranidos',
  type: ['Rock'],
  base: {
    HP: 67,
    Attack: 125,
    Defense: 40,
    'Sp. Attack': 30,
    'Sp. Defense': 30,
    Speed: 58
  },
  url: 'https://www.pokemon.com/us/pokedex/cranidos',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png'
}, {
  id: 409,
  name: 'Rampardos',
  type: ['Rock'],
  base: {
    HP: 97,
    Attack: 165,
    Defense: 60,
    'Sp. Attack': 65,
    'Sp. Defense': 50,
    Speed: 58
  },
  url: 'https://www.pokemon.com/us/pokedex/rampardos',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png'
}, {
  id: 410,
  name: 'Shieldon',
  type: ['Rock', 'Steel'],
  base: {
    HP: 30,
    Attack: 42,
    Defense: 118,
    'Sp. Attack': 42,
    'Sp. Defense': 88,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/shieldon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png'
}, {
  id: 411,
  name: 'Bastiodon',
  type: ['Rock', 'Steel'],
  base: {
    HP: 60,
    Attack: 52,
    Defense: 168,
    'Sp. Attack': 47,
    'Sp. Defense': 138,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/bastiodon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png'
}, {
  id: 412,
  name: 'Burmy',
  type: ['Bug'],
  base: {
    HP: 40,
    Attack: 29,
    Defense: 45,
    'Sp. Attack': 29,
    'Sp. Defense': 45,
    Speed: 36
  },
  url: 'https://www.pokemon.com/us/pokedex/burmy',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png'
}, {
  id: 413,
  name: 'Wormadam',
  type: ['Bug', 'Grass'],
  base: {
    HP: 60,
    Attack: 59,
    Defense: 85,
    'Sp. Attack': 79,
    'Sp. Defense': 105,
    Speed: 36
  },
  url: 'https://www.pokemon.com/us/pokedex/wormadam',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/413.png'
}, {
  id: 414,
  name: 'Mothim',
  type: ['Bug', 'Flying'],
  base: {
    HP: 70,
    Attack: 94,
    Defense: 50,
    'Sp. Attack': 94,
    'Sp. Defense': 50,
    Speed: 66
  },
  url: 'https://www.pokemon.com/us/pokedex/mothim',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/414.png'
}, {
  id: 415,
  name: 'Combee',
  type: ['Bug', 'Flying'],
  base: {
    HP: 30,
    Attack: 30,
    Defense: 42,
    'Sp. Attack': 30,
    'Sp. Defense': 42,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/combee',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png'
}, {
  id: 416,
  name: 'Vespiquen',
  type: ['Bug', 'Flying'],
  base: {
    HP: 70,
    Attack: 80,
    Defense: 102,
    'Sp. Attack': 80,
    'Sp. Defense': 102,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/vespiquen',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png'
}, {
  id: 417,
  name: 'Pachirisu',
  type: ['Electric'],
  base: {
    HP: 60,
    Attack: 45,
    Defense: 70,
    'Sp. Attack': 45,
    'Sp. Defense': 90,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/pachirisu',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png'
}, {
  id: 418,
  name: 'Buizel',
  type: ['Water'],
  base: {
    HP: 55,
    Attack: 65,
    Defense: 35,
    'Sp. Attack': 60,
    'Sp. Defense': 30,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/buizel',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png'
}, {
  id: 419,
  name: 'Floatzel',
  type: ['Water'],
  base: {
    HP: 85,
    Attack: 105,
    Defense: 55,
    'Sp. Attack': 85,
    'Sp. Defense': 50,
    Speed: 115
  },
  url: 'https://www.pokemon.com/us/pokedex/floatzel',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png'
}, {
  id: 420,
  name: 'Cherubi',
  type: ['Grass'],
  base: {
    HP: 45,
    Attack: 35,
    Defense: 45,
    'Sp. Attack': 62,
    'Sp. Defense': 53,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/cherubi',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png'
}, {
  id: 421,
  name: 'Cherrim',
  type: ['Grass'],
  base: {
    HP: 70,
    Attack: 60,
    Defense: 70,
    'Sp. Attack': 87,
    'Sp. Defense': 78,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/cherrim',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png'
}, {
  id: 422,
  name: 'Shellos',
  type: ['Water'],
  base: {
    HP: 76,
    Attack: 48,
    Defense: 48,
    'Sp. Attack': 57,
    'Sp. Defense': 62,
    Speed: 34
  },
  url: 'https://www.pokemon.com/us/pokedex/shellos',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png'
}, {
  id: 423,
  name: 'Gastrodon',
  type: ['Water', 'Ground'],
  base: {
    HP: 111,
    Attack: 83,
    Defense: 68,
    'Sp. Attack': 92,
    'Sp. Defense': 82,
    Speed: 39
  },
  url: 'https://www.pokemon.com/us/pokedex/gastrodon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png'
}, {
  id: 424,
  name: 'Ambipom',
  type: ['Normal'],
  base: {
    HP: 75,
    Attack: 100,
    Defense: 66,
    'Sp. Attack': 60,
    'Sp. Defense': 66,
    Speed: 115
  },
  url: 'https://www.pokemon.com/us/pokedex/ambipom',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png'
}, {
  id: 425,
  name: 'Drifloon',
  type: ['Ghost', 'Flying'],
  base: {
    HP: 90,
    Attack: 50,
    Defense: 34,
    'Sp. Attack': 60,
    'Sp. Defense': 44,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/drifloon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/425.png'
}, {
  id: 426,
  name: 'Drifblim',
  type: ['Ghost', 'Flying'],
  base: {
    HP: 150,
    Attack: 80,
    Defense: 44,
    'Sp. Attack': 90,
    'Sp. Defense': 54,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/drifblim',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/426.png'
}, {
  id: 427,
  name: 'Buneary',
  type: ['Normal'],
  base: {
    HP: 55,
    Attack: 66,
    Defense: 44,
    'Sp. Attack': 44,
    'Sp. Defense': 56,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/buneary',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png'
}, {
  id: 428,
  name: 'Lopunny',
  type: ['Normal'],
  base: {
    HP: 65,
    Attack: 76,
    Defense: 84,
    'Sp. Attack': 54,
    'Sp. Defense': 96,
    Speed: 105
  },
  url: 'https://www.pokemon.com/us/pokedex/lopunny',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png'
}, {
  id: 429,
  name: 'Mismagius',
  type: ['Ghost'],
  base: {
    HP: 60,
    Attack: 60,
    Defense: 60,
    'Sp. Attack': 105,
    'Sp. Defense': 105,
    Speed: 105
  },
  url: 'https://www.pokemon.com/us/pokedex/mismagius',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png'
}, {
  id: 430,
  name: 'Honchkrow',
  type: ['Dark', 'Flying'],
  base: {
    HP: 100,
    Attack: 125,
    Defense: 52,
    'Sp. Attack': 105,
    'Sp. Defense': 52,
    Speed: 71
  },
  url: 'https://www.pokemon.com/us/pokedex/honchkrow',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png'
}, {
  id: 431,
  name: 'Glameow',
  type: ['Normal'],
  base: {
    HP: 49,
    Attack: 55,
    Defense: 42,
    'Sp. Attack': 42,
    'Sp. Defense': 37,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/glameow',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png'
}, {
  id: 432,
  name: 'Purugly',
  type: ['Normal'],
  base: {
    HP: 71,
    Attack: 82,
    Defense: 64,
    'Sp. Attack': 64,
    'Sp. Defense': 59,
    Speed: 112
  },
  url: 'https://www.pokemon.com/us/pokedex/purugly',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png'
}, {
  id: 433,
  name: 'Chingling',
  type: ['Psychic'],
  base: {
    HP: 45,
    Attack: 30,
    Defense: 50,
    'Sp. Attack': 65,
    'Sp. Defense': 50,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/chingling',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png'
}, {
  id: 434,
  name: 'Stunky',
  type: ['Poison', 'Dark'],
  base: {
    HP: 63,
    Attack: 63,
    Defense: 47,
    'Sp. Attack': 41,
    'Sp. Defense': 41,
    Speed: 74
  },
  url: 'https://www.pokemon.com/us/pokedex/stunky',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/434.png'
}, {
  id: 435,
  name: 'Skuntank',
  type: ['Poison', 'Dark'],
  base: {
    HP: 103,
    Attack: 93,
    Defense: 67,
    'Sp. Attack': 71,
    'Sp. Defense': 61,
    Speed: 84
  },
  url: 'https://www.pokemon.com/us/pokedex/skuntank',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png'
}, {
  id: 436,
  name: 'Bronzor',
  type: ['Steel', 'Psychic'],
  base: {
    HP: 57,
    Attack: 24,
    Defense: 86,
    'Sp. Attack': 24,
    'Sp. Defense': 86,
    Speed: 23
  },
  url: 'https://www.pokemon.com/us/pokedex/bronzor',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/436.png'
}, {
  id: 437,
  name: 'Bronzong',
  type: ['Steel', 'Psychic'],
  base: {
    HP: 67,
    Attack: 89,
    Defense: 116,
    'Sp. Attack': 79,
    'Sp. Defense': 116,
    Speed: 33
  },
  url: 'https://www.pokemon.com/us/pokedex/bronzong',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/437.png'
}, {
  id: 438,
  name: 'Bonsly',
  type: ['Rock'],
  base: {
    HP: 50,
    Attack: 80,
    Defense: 95,
    'Sp. Attack': 10,
    'Sp. Defense': 45,
    Speed: 10
  },
  url: 'https://www.pokemon.com/us/pokedex/bonsly',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png'
}, {
  id: 439,
  name: 'Mime Jr.',
  type: ['Psychic', 'Fairy'],
  base: {
    HP: 20,
    Attack: 25,
    Defense: 45,
    'Sp. Attack': 70,
    'Sp. Defense': 90,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/mime jr.',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png'
}, {
  id: 440,
  name: 'Happiny',
  type: ['Normal'],
  base: {
    HP: 100,
    Attack: 5,
    Defense: 5,
    'Sp. Attack': 15,
    'Sp. Defense': 65,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/happiny',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png'
}, {
  id: 441,
  name: 'Chatot',
  type: ['Normal', 'Flying'],
  base: {
    HP: 76,
    Attack: 65,
    Defense: 45,
    'Sp. Attack': 92,
    'Sp. Defense': 42,
    Speed: 91
  },
  url: 'https://www.pokemon.com/us/pokedex/chatot',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/441.png'
}, {
  id: 442,
  name: 'Spiritomb',
  type: ['Ghost', 'Dark'],
  base: {
    HP: 50,
    Attack: 92,
    Defense: 108,
    'Sp. Attack': 92,
    'Sp. Defense': 108,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/spiritomb',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png'
}, {
  id: 443,
  name: 'Gible',
  type: ['Dragon', 'Ground'],
  base: {
    HP: 58,
    Attack: 70,
    Defense: 45,
    'Sp. Attack': 40,
    'Sp. Defense': 45,
    Speed: 42
  },
  url: 'https://www.pokemon.com/us/pokedex/gible',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png'
}, {
  id: 444,
  name: 'Gabite',
  type: ['Dragon', 'Ground'],
  base: {
    HP: 68,
    Attack: 90,
    Defense: 65,
    'Sp. Attack': 50,
    'Sp. Defense': 55,
    Speed: 82
  },
  url: 'https://www.pokemon.com/us/pokedex/gabite',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png'
}, {
  id: 445,
  name: 'Garchomp',
  type: ['Dragon', 'Ground'],
  base: {
    HP: 108,
    Attack: 130,
    Defense: 95,
    'Sp. Attack': 80,
    'Sp. Defense': 85,
    Speed: 102
  },
  url: 'https://www.pokemon.com/us/pokedex/garchomp',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png'
}, {
  id: 446,
  name: 'Munchlax',
  type: ['Normal'],
  base: {
    HP: 135,
    Attack: 85,
    Defense: 40,
    'Sp. Attack': 40,
    'Sp. Defense': 85,
    Speed: 5
  },
  url: 'https://www.pokemon.com/us/pokedex/munchlax',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png'
}, {
  id: 447,
  name: 'Riolu',
  type: ['Fighting'],
  base: {
    HP: 40,
    Attack: 70,
    Defense: 40,
    'Sp. Attack': 35,
    'Sp. Defense': 40,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/riolu',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png'
}, {
  id: 448,
  name: 'Lucario',
  type: ['Fighting', 'Steel'],
  base: {
    HP: 70,
    Attack: 110,
    Defense: 70,
    'Sp. Attack': 115,
    'Sp. Defense': 70,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/lucario',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png'
}, {
  id: 449,
  name: 'Hippopotas',
  type: ['Ground'],
  base: {
    HP: 68,
    Attack: 72,
    Defense: 78,
    'Sp. Attack': 38,
    'Sp. Defense': 42,
    Speed: 32
  },
  url: 'https://www.pokemon.com/us/pokedex/hippopotas',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png'
}, {
  id: 450,
  name: 'Hippowdon',
  type: ['Ground'],
  base: {
    HP: 108,
    Attack: 112,
    Defense: 118,
    'Sp. Attack': 68,
    'Sp. Defense': 72,
    Speed: 47
  },
  url: 'https://www.pokemon.com/us/pokedex/hippowdon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png'
}, {
  id: 451,
  name: 'Skorupi',
  type: ['Poison', 'Bug'],
  base: {
    HP: 40,
    Attack: 50,
    Defense: 90,
    'Sp. Attack': 30,
    'Sp. Defense': 55,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/skorupi',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png'
}, {
  id: 452,
  name: 'Drapion',
  type: ['Poison', 'Dark'],
  base: {
    HP: 70,
    Attack: 90,
    Defense: 110,
    'Sp. Attack': 60,
    'Sp. Defense': 75,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/drapion',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png'
}, {
  id: 453,
  name: 'Croagunk',
  type: ['Poison', 'Fighting'],
  base: {
    HP: 48,
    Attack: 61,
    Defense: 40,
    'Sp. Attack': 61,
    'Sp. Defense': 40,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/croagunk',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png'
}, {
  id: 454,
  name: 'Toxicroak',
  type: ['Poison', 'Fighting'],
  base: {
    HP: 83,
    Attack: 106,
    Defense: 65,
    'Sp. Attack': 86,
    'Sp. Defense': 65,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/toxicroak',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png'
}, {
  id: 455,
  name: 'Carnivine',
  type: ['Grass'],
  base: {
    HP: 74,
    Attack: 100,
    Defense: 72,
    'Sp. Attack': 90,
    'Sp. Defense': 72,
    Speed: 46
  },
  url: 'https://www.pokemon.com/us/pokedex/carnivine',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png'
}, {
  id: 456,
  name: 'Finneon',
  type: ['Water'],
  base: {
    HP: 49,
    Attack: 49,
    Defense: 56,
    'Sp. Attack': 49,
    'Sp. Defense': 61,
    Speed: 66
  },
  url: 'https://www.pokemon.com/us/pokedex/finneon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png'
}, {
  id: 457,
  name: 'Lumineon',
  type: ['Water'],
  base: {
    HP: 69,
    Attack: 69,
    Defense: 76,
    'Sp. Attack': 69,
    'Sp. Defense': 86,
    Speed: 91
  },
  url: 'https://www.pokemon.com/us/pokedex/lumineon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png'
}, {
  id: 458,
  name: 'Mantyke',
  type: ['Water', 'Flying'],
  base: {
    HP: 45,
    Attack: 20,
    Defense: 50,
    'Sp. Attack': 60,
    'Sp. Defense': 120,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/mantyke',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png'
}, {
  id: 459,
  name: 'Snover',
  type: ['Grass', 'Ice'],
  base: {
    HP: 60,
    Attack: 62,
    Defense: 50,
    'Sp. Attack': 62,
    'Sp. Defense': 60,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/snover',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png'
}, {
  id: 460,
  name: 'Abomasnow',
  type: ['Grass', 'Ice'],
  base: {
    HP: 90,
    Attack: 92,
    Defense: 75,
    'Sp. Attack': 92,
    'Sp. Defense': 85,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/abomasnow',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png'
}, {
  id: 461,
  name: 'Weavile',
  type: ['Dark', 'Ice'],
  base: {
    HP: 70,
    Attack: 120,
    Defense: 65,
    'Sp. Attack': 45,
    'Sp. Defense': 85,
    Speed: 125
  },
  url: 'https://www.pokemon.com/us/pokedex/weavile',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png'
}, {
  id: 462,
  name: 'Magnezone',
  type: ['Electric', 'Steel'],
  base: {
    HP: 70,
    Attack: 70,
    Defense: 115,
    'Sp. Attack': 130,
    'Sp. Defense': 90,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/magnezone',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png'
}, {
  id: 463,
  name: 'Lickilicky',
  type: ['Normal'],
  base: {
    HP: 110,
    Attack: 85,
    Defense: 95,
    'Sp. Attack': 80,
    'Sp. Defense': 95,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/lickilicky',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png'
}, {
  id: 464,
  name: 'Rhyperior',
  type: ['Ground', 'Rock'],
  base: {
    HP: 115,
    Attack: 140,
    Defense: 130,
    'Sp. Attack': 55,
    'Sp. Defense': 55,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/rhyperior',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png'
}, {
  id: 465,
  name: 'Tangrowth',
  type: ['Grass'],
  base: {
    HP: 100,
    Attack: 100,
    Defense: 125,
    'Sp. Attack': 110,
    'Sp. Defense': 50,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/tangrowth',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png'
}, {
  id: 466,
  name: 'Electivire',
  type: ['Electric'],
  base: {
    HP: 75,
    Attack: 123,
    Defense: 67,
    'Sp. Attack': 95,
    'Sp. Defense': 85,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/electivire',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png'
}, {
  id: 467,
  name: 'Magmortar',
  type: ['Fire'],
  base: {
    HP: 75,
    Attack: 95,
    Defense: 67,
    'Sp. Attack': 125,
    'Sp. Defense': 95,
    Speed: 83
  },
  url: 'https://www.pokemon.com/us/pokedex/magmortar',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png'
}, {
  id: 468,
  name: 'Togekiss',
  type: ['Fairy', 'Flying'],
  base: {
    HP: 85,
    Attack: 50,
    Defense: 95,
    'Sp. Attack': 120,
    'Sp. Defense': 115,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/togekiss',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png'
}, {
  id: 469,
  name: 'Yanmega',
  type: ['Bug', 'Flying'],
  base: {
    HP: 86,
    Attack: 76,
    Defense: 86,
    'Sp. Attack': 116,
    'Sp. Defense': 56,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/yanmega',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png'
}, {
  id: 470,
  name: 'Leafeon',
  type: ['Grass'],
  base: {
    HP: 65,
    Attack: 110,
    Defense: 130,
    'Sp. Attack': 60,
    'Sp. Defense': 65,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/leafeon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png'
}, {
  id: 471,
  name: 'Glaceon',
  type: ['Ice'],
  base: {
    HP: 65,
    Attack: 60,
    Defense: 110,
    'Sp. Attack': 130,
    'Sp. Defense': 95,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/glaceon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png'
}, {
  id: 472,
  name: 'Gliscor',
  type: ['Ground', 'Flying'],
  base: {
    HP: 75,
    Attack: 95,
    Defense: 125,
    'Sp. Attack': 45,
    'Sp. Defense': 75,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/gliscor',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png'
}, {
  id: 473,
  name: 'Mamoswine',
  type: ['Ice', 'Ground'],
  base: {
    HP: 110,
    Attack: 130,
    Defense: 80,
    'Sp. Attack': 70,
    'Sp. Defense': 60,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/mamoswine',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png'
}, {
  id: 474,
  name: 'Porygon-Z',
  type: ['Normal'],
  base: {
    HP: 85,
    Attack: 80,
    Defense: 70,
    'Sp. Attack': 135,
    'Sp. Defense': 75,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/porygon-z',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png'
}, {
  id: 475,
  name: 'Gallade',
  type: ['Psychic', 'Fighting'],
  base: {
    HP: 68,
    Attack: 125,
    Defense: 65,
    'Sp. Attack': 65,
    'Sp. Defense': 115,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/gallade',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/475.png'
}, {
  id: 476,
  name: 'Probopass',
  type: ['Rock', 'Steel'],
  base: {
    HP: 60,
    Attack: 55,
    Defense: 145,
    'Sp. Attack': 75,
    'Sp. Defense': 150,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/probopass',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/476.png'
}, {
  id: 477,
  name: 'Dusknoir',
  type: ['Ghost'],
  base: {
    HP: 45,
    Attack: 100,
    Defense: 135,
    'Sp. Attack': 65,
    'Sp. Defense': 135,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/dusknoir',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png'
}, {
  id: 478,
  name: 'Froslass',
  type: ['Ice', 'Ghost'],
  base: {
    HP: 70,
    Attack: 80,
    Defense: 70,
    'Sp. Attack': 80,
    'Sp. Defense': 70,
    Speed: 110
  },
  url: 'https://www.pokemon.com/us/pokedex/froslass',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png'
}, {
  id: 479,
  name: 'Rotom',
  type: ['Electric', 'Ghost'],
  base: {
    HP: 50,
    Attack: 50,
    Defense: 77,
    'Sp. Attack': 95,
    'Sp. Defense': 77,
    Speed: 91
  },
  url: 'https://www.pokemon.com/us/pokedex/rotom',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png'
}, {
  id: 480,
  name: 'Uxie',
  type: ['Psychic'],
  base: {
    HP: 75,
    Attack: 75,
    Defense: 130,
    'Sp. Attack': 75,
    'Sp. Defense': 130,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/uxie',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png'
}, {
  id: 481,
  name: 'Mesprit',
  type: ['Psychic'],
  base: {
    HP: 80,
    Attack: 105,
    Defense: 105,
    'Sp. Attack': 105,
    'Sp. Defense': 105,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/mesprit',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png'
}, {
  id: 482,
  name: 'Azelf',
  type: ['Psychic'],
  base: {
    HP: 75,
    Attack: 125,
    Defense: 70,
    'Sp. Attack': 125,
    'Sp. Defense': 70,
    Speed: 115
  },
  url: 'https://www.pokemon.com/us/pokedex/azelf',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png'
}, {
  id: 483,
  name: 'Dialga',
  type: ['Steel', 'Dragon'],
  base: {
    HP: 100,
    Attack: 120,
    Defense: 120,
    'Sp. Attack': 150,
    'Sp. Defense': 100,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/dialga',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png'
}, {
  id: 484,
  name: 'Palkia',
  type: ['Water', 'Dragon'],
  base: {
    HP: 90,
    Attack: 120,
    Defense: 100,
    'Sp. Attack': 150,
    'Sp. Defense': 120,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/palkia',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png'
}, {
  id: 485,
  name: 'Heatran',
  type: ['Fire', 'Steel'],
  base: {
    HP: 91,
    Attack: 90,
    Defense: 106,
    'Sp. Attack': 130,
    'Sp. Defense': 106,
    Speed: 77
  },
  url: 'https://www.pokemon.com/us/pokedex/heatran',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/485.png'
}, {
  id: 486,
  name: 'Regigigas',
  type: ['Normal'],
  base: {
    HP: 110,
    Attack: 160,
    Defense: 110,
    'Sp. Attack': 80,
    'Sp. Defense': 110,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/regigigas',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png'
}, {
  id: 487,
  name: 'Giratina',
  type: ['Ghost', 'Dragon'],
  base: {
    HP: 150,
    Attack: 100,
    Defense: 120,
    'Sp. Attack': 100,
    'Sp. Defense': 120,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/giratina',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png'
}, {
  id: 488,
  name: 'Cresselia',
  type: ['Psychic'],
  base: {
    HP: 120,
    Attack: 70,
    Defense: 120,
    'Sp. Attack': 75,
    'Sp. Defense': 130,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/cresselia',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png'
}, {
  id: 489,
  name: 'Phione',
  type: ['Water'],
  base: {
    HP: 80,
    Attack: 80,
    Defense: 80,
    'Sp. Attack': 80,
    'Sp. Defense': 80,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/phione',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png'
}, {
  id: 490,
  name: 'Manaphy',
  type: ['Water'],
  base: {
    HP: 100,
    Attack: 100,
    Defense: 100,
    'Sp. Attack': 100,
    'Sp. Defense': 100,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/manaphy',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png'
}, {
  id: 491,
  name: 'Darkrai',
  type: ['Dark'],
  base: {
    HP: 70,
    Attack: 90,
    Defense: 90,
    'Sp. Attack': 135,
    'Sp. Defense': 90,
    Speed: 125
  },
  url: 'https://www.pokemon.com/us/pokedex/darkrai',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png'
}, {
  id: 492,
  name: 'Shaymin',
  type: ['Grass'],
  base: {
    HP: 100,
    Attack: 100,
    Defense: 100,
    'Sp. Attack': 100,
    'Sp. Defense': 100,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/shaymin',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png'
}, {
  id: 493,
  name: 'Arceus',
  type: ['Normal'],
  base: {
    HP: 120,
    Attack: 120,
    Defense: 120,
    'Sp. Attack': 120,
    'Sp. Defense': 120,
    Speed: 120
  },
  url: 'https://www.pokemon.com/us/pokedex/arceus',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png'
}, {
  id: 494,
  name: 'Victini',
  type: ['Psychic', 'Fire'],
  base: {
    HP: 100,
    Attack: 100,
    Defense: 100,
    'Sp. Attack': 100,
    'Sp. Defense': 100,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/victini',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png'
}, {
  id: 495,
  name: 'Snivy',
  type: ['Grass'],
  base: {
    HP: 45,
    Attack: 45,
    Defense: 55,
    'Sp. Attack': 45,
    'Sp. Defense': 55,
    Speed: 63
  },
  url: 'https://www.pokemon.com/us/pokedex/snivy',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png'
}, {
  id: 496,
  name: 'Servine',
  type: ['Grass'],
  base: {
    HP: 60,
    Attack: 60,
    Defense: 75,
    'Sp. Attack': 60,
    'Sp. Defense': 75,
    Speed: 83
  },
  url: 'https://www.pokemon.com/us/pokedex/servine',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png'
}, {
  id: 497,
  name: 'Serperior',
  type: ['Grass'],
  base: {
    HP: 75,
    Attack: 75,
    Defense: 95,
    'Sp. Attack': 75,
    'Sp. Defense': 95,
    Speed: 113
  },
  url: 'https://www.pokemon.com/us/pokedex/serperior',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png'
}, {
  id: 498,
  name: 'Tepig',
  type: ['Fire'],
  base: {
    HP: 65,
    Attack: 63,
    Defense: 45,
    'Sp. Attack': 45,
    'Sp. Defense': 45,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/tepig',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png'
}, {
  id: 499,
  name: 'Pignite',
  type: ['Fire', 'Fighting'],
  base: {
    HP: 90,
    Attack: 93,
    Defense: 55,
    'Sp. Attack': 70,
    'Sp. Defense': 55,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/pignite',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/499.png'
}, {
  id: 500,
  name: 'Emboar',
  type: ['Fire', 'Fighting'],
  base: {
    HP: 110,
    Attack: 123,
    Defense: 65,
    'Sp. Attack': 100,
    'Sp. Defense': 65,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/emboar',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png'
}, {
  id: 501,
  name: 'Oshawott',
  type: ['Water'],
  base: {
    HP: 55,
    Attack: 55,
    Defense: 45,
    'Sp. Attack': 63,
    'Sp. Defense': 45,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/oshawott',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png'
}, {
  id: 502,
  name: 'Dewott',
  type: ['Water'],
  base: {
    HP: 75,
    Attack: 75,
    Defense: 60,
    'Sp. Attack': 83,
    'Sp. Defense': 60,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/dewott',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png'
}, {
  id: 503,
  name: 'Samurott',
  type: ['Water'],
  base: {
    HP: 95,
    Attack: 100,
    Defense: 85,
    'Sp. Attack': 108,
    'Sp. Defense': 70,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/samurott',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png'
}, {
  id: 504,
  name: 'Patrat',
  type: ['Normal'],
  base: {
    HP: 45,
    Attack: 55,
    Defense: 39,
    'Sp. Attack': 35,
    'Sp. Defense': 39,
    Speed: 42
  },
  url: 'https://www.pokemon.com/us/pokedex/patrat',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png'
}, {
  id: 505,
  name: 'Watchog',
  type: ['Normal'],
  base: {
    HP: 60,
    Attack: 85,
    Defense: 69,
    'Sp. Attack': 60,
    'Sp. Defense': 69,
    Speed: 77
  },
  url: 'https://www.pokemon.com/us/pokedex/watchog',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png'
}, {
  id: 506,
  name: 'Lillipup',
  type: ['Normal'],
  base: {
    HP: 45,
    Attack: 60,
    Defense: 45,
    'Sp. Attack': 25,
    'Sp. Defense': 45,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/lillipup',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png'
}, {
  id: 507,
  name: 'Herdier',
  type: ['Normal'],
  base: {
    HP: 65,
    Attack: 80,
    Defense: 65,
    'Sp. Attack': 35,
    'Sp. Defense': 65,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/herdier',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png'
}, {
  id: 508,
  name: 'Stoutland',
  type: ['Normal'],
  base: {
    HP: 85,
    Attack: 110,
    Defense: 90,
    'Sp. Attack': 45,
    'Sp. Defense': 90,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/stoutland',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png'
}, {
  id: 509,
  name: 'Purrloin',
  type: ['Dark'],
  base: {
    HP: 41,
    Attack: 50,
    Defense: 37,
    'Sp. Attack': 50,
    'Sp. Defense': 37,
    Speed: 66
  },
  url: 'https://www.pokemon.com/us/pokedex/purrloin',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png'
}, {
  id: 510,
  name: 'Liepard',
  type: ['Dark'],
  base: {
    HP: 64,
    Attack: 88,
    Defense: 50,
    'Sp. Attack': 88,
    'Sp. Defense': 50,
    Speed: 106
  },
  url: 'https://www.pokemon.com/us/pokedex/liepard',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png'
}, {
  id: 511,
  name: 'Pansage',
  type: ['Grass'],
  base: {
    HP: 50,
    Attack: 53,
    Defense: 48,
    'Sp. Attack': 53,
    'Sp. Defense': 48,
    Speed: 64
  },
  url: 'https://www.pokemon.com/us/pokedex/pansage',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png'
}, {
  id: 512,
  name: 'Simisage',
  type: ['Grass'],
  base: {
    HP: 75,
    Attack: 98,
    Defense: 63,
    'Sp. Attack': 98,
    'Sp. Defense': 63,
    Speed: 101
  },
  url: 'https://www.pokemon.com/us/pokedex/simisage',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png'
}, {
  id: 513,
  name: 'Pansear',
  type: ['Fire'],
  base: {
    HP: 50,
    Attack: 53,
    Defense: 48,
    'Sp. Attack': 53,
    'Sp. Defense': 48,
    Speed: 64
  },
  url: 'https://www.pokemon.com/us/pokedex/pansear',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png'
}, {
  id: 514,
  name: 'Simisear',
  type: ['Fire'],
  base: {
    HP: 75,
    Attack: 98,
    Defense: 63,
    'Sp. Attack': 98,
    'Sp. Defense': 63,
    Speed: 101
  },
  url: 'https://www.pokemon.com/us/pokedex/simisear',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png'
}, {
  id: 515,
  name: 'Panpour',
  type: ['Water'],
  base: {
    HP: 50,
    Attack: 53,
    Defense: 48,
    'Sp. Attack': 53,
    'Sp. Defense': 48,
    Speed: 64
  },
  url: 'https://www.pokemon.com/us/pokedex/panpour',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png'
}, {
  id: 516,
  name: 'Simipour',
  type: ['Water'],
  base: {
    HP: 75,
    Attack: 98,
    Defense: 63,
    'Sp. Attack': 98,
    'Sp. Defense': 63,
    Speed: 101
  },
  url: 'https://www.pokemon.com/us/pokedex/simipour',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png'
}, {
  id: 517,
  name: 'Munna',
  type: ['Psychic'],
  base: {
    HP: 76,
    Attack: 25,
    Defense: 45,
    'Sp. Attack': 67,
    'Sp. Defense': 55,
    Speed: 24
  },
  url: 'https://www.pokemon.com/us/pokedex/munna',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png'
}, {
  id: 518,
  name: 'Musharna',
  type: ['Psychic'],
  base: {
    HP: 116,
    Attack: 55,
    Defense: 85,
    'Sp. Attack': 107,
    'Sp. Defense': 95,
    Speed: 29
  },
  url: 'https://www.pokemon.com/us/pokedex/musharna',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png'
}, {
  id: 519,
  name: 'Pidove',
  type: ['Normal', 'Flying'],
  base: {
    HP: 50,
    Attack: 55,
    Defense: 50,
    'Sp. Attack': 36,
    'Sp. Defense': 30,
    Speed: 43
  },
  url: 'https://www.pokemon.com/us/pokedex/pidove',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/519.png'
}, {
  id: 520,
  name: 'Tranquill',
  type: ['Normal', 'Flying'],
  base: {
    HP: 62,
    Attack: 77,
    Defense: 62,
    'Sp. Attack': 50,
    'Sp. Defense': 42,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/tranquill',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/520.png'
}, {
  id: 521,
  name: 'Unfezant',
  type: ['Normal', 'Flying'],
  base: {
    HP: 80,
    Attack: 115,
    Defense: 80,
    'Sp. Attack': 65,
    'Sp. Defense': 55,
    Speed: 93
  },
  url: 'https://www.pokemon.com/us/pokedex/unfezant',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/521.png'
}, {
  id: 522,
  name: 'Blitzle',
  type: ['Electric'],
  base: {
    HP: 45,
    Attack: 60,
    Defense: 32,
    'Sp. Attack': 50,
    'Sp. Defense': 32,
    Speed: 76
  },
  url: 'https://www.pokemon.com/us/pokedex/blitzle',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png'
}, {
  id: 523,
  name: 'Zebstrika',
  type: ['Electric'],
  base: {
    HP: 75,
    Attack: 100,
    Defense: 63,
    'Sp. Attack': 80,
    'Sp. Defense': 63,
    Speed: 116
  },
  url: 'https://www.pokemon.com/us/pokedex/zebstrika',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png'
}, {
  id: 524,
  name: 'Roggenrola',
  type: ['Rock'],
  base: {
    HP: 55,
    Attack: 75,
    Defense: 85,
    'Sp. Attack': 25,
    'Sp. Defense': 25,
    Speed: 15
  },
  url: 'https://www.pokemon.com/us/pokedex/roggenrola',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png'
}, {
  id: 525,
  name: 'Boldore',
  type: ['Rock'],
  base: {
    HP: 70,
    Attack: 105,
    Defense: 105,
    'Sp. Attack': 50,
    'Sp. Defense': 40,
    Speed: 20
  },
  url: 'https://www.pokemon.com/us/pokedex/boldore',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png'
}, {
  id: 526,
  name: 'Gigalith',
  type: ['Rock'],
  base: {
    HP: 85,
    Attack: 135,
    Defense: 130,
    'Sp. Attack': 60,
    'Sp. Defense': 80,
    Speed: 25
  },
  url: 'https://www.pokemon.com/us/pokedex/gigalith',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png'
}, {
  id: 527,
  name: 'Woobat',
  type: ['Psychic', 'Flying'],
  base: {
    HP: 65,
    Attack: 45,
    Defense: 43,
    'Sp. Attack': 55,
    'Sp. Defense': 43,
    Speed: 72
  },
  url: 'https://www.pokemon.com/us/pokedex/woobat',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/527.png'
}, {
  id: 528,
  name: 'Swoobat',
  type: ['Psychic', 'Flying'],
  base: {
    HP: 67,
    Attack: 57,
    Defense: 55,
    'Sp. Attack': 77,
    'Sp. Defense': 55,
    Speed: 114
  },
  url: 'https://www.pokemon.com/us/pokedex/swoobat',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/528.png'
}, {
  id: 529,
  name: 'Drilbur',
  type: ['Ground'],
  base: {
    HP: 60,
    Attack: 85,
    Defense: 40,
    'Sp. Attack': 30,
    'Sp. Defense': 45,
    Speed: 68
  },
  url: 'https://www.pokemon.com/us/pokedex/drilbur',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png'
}, {
  id: 530,
  name: 'Excadrill',
  type: ['Ground', 'Steel'],
  base: {
    HP: 110,
    Attack: 135,
    Defense: 60,
    'Sp. Attack': 50,
    'Sp. Defense': 65,
    Speed: 88
  },
  url: 'https://www.pokemon.com/us/pokedex/excadrill',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png'
}, {
  id: 531,
  name: 'Audino',
  type: ['Normal'],
  base: {
    HP: 103,
    Attack: 60,
    Defense: 86,
    'Sp. Attack': 60,
    'Sp. Defense': 86,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/audino',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png'
}, {
  id: 532,
  name: 'Timburr',
  type: ['Fighting'],
  base: {
    HP: 75,
    Attack: 80,
    Defense: 55,
    'Sp. Attack': 25,
    'Sp. Defense': 35,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/timburr',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png'
}, {
  id: 533,
  name: 'Gurdurr',
  type: ['Fighting'],
  base: {
    HP: 85,
    Attack: 105,
    Defense: 85,
    'Sp. Attack': 40,
    'Sp. Defense': 50,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/gurdurr',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png'
}, {
  id: 534,
  name: 'Conkeldurr',
  type: ['Fighting'],
  base: {
    HP: 105,
    Attack: 140,
    Defense: 95,
    'Sp. Attack': 55,
    'Sp. Defense': 65,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/conkeldurr',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png'
}, {
  id: 535,
  name: 'Tympole',
  type: ['Water'],
  base: {
    HP: 50,
    Attack: 50,
    Defense: 40,
    'Sp. Attack': 50,
    'Sp. Defense': 40,
    Speed: 64
  },
  url: 'https://www.pokemon.com/us/pokedex/tympole',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png'
}, {
  id: 536,
  name: 'Palpitoad',
  type: ['Water', 'Ground'],
  base: {
    HP: 75,
    Attack: 65,
    Defense: 55,
    'Sp. Attack': 65,
    'Sp. Defense': 55,
    Speed: 69
  },
  url: 'https://www.pokemon.com/us/pokedex/palpitoad',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/536.png'
}, {
  id: 537,
  name: 'Seismitoad',
  type: ['Water', 'Ground'],
  base: {
    HP: 105,
    Attack: 95,
    Defense: 75,
    'Sp. Attack': 85,
    'Sp. Defense': 75,
    Speed: 74
  },
  url: 'https://www.pokemon.com/us/pokedex/seismitoad',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/537.png'
}, {
  id: 538,
  name: 'Throh',
  type: ['Fighting'],
  base: {
    HP: 120,
    Attack: 100,
    Defense: 85,
    'Sp. Attack': 30,
    'Sp. Defense': 85,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/throh',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png'
}, {
  id: 539,
  name: 'Sawk',
  type: ['Fighting'],
  base: {
    HP: 75,
    Attack: 125,
    Defense: 75,
    'Sp. Attack': 30,
    'Sp. Defense': 75,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/sawk',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png'
}, {
  id: 540,
  name: 'Sewaddle',
  type: ['Bug', 'Grass'],
  base: {
    HP: 45,
    Attack: 53,
    Defense: 70,
    'Sp. Attack': 40,
    'Sp. Defense': 60,
    Speed: 42
  },
  url: 'https://www.pokemon.com/us/pokedex/sewaddle',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/540.png'
}, {
  id: 541,
  name: 'Swadloon',
  type: ['Bug', 'Grass'],
  base: {
    HP: 55,
    Attack: 63,
    Defense: 90,
    'Sp. Attack': 50,
    'Sp. Defense': 80,
    Speed: 42
  },
  url: 'https://www.pokemon.com/us/pokedex/swadloon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/541.png'
}, {
  id: 542,
  name: 'Leavanny',
  type: ['Bug', 'Grass'],
  base: {
    HP: 75,
    Attack: 103,
    Defense: 80,
    'Sp. Attack': 70,
    'Sp. Defense': 80,
    Speed: 92
  },
  url: 'https://www.pokemon.com/us/pokedex/leavanny',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/542.png'
}, {
  id: 543,
  name: 'Venipede',
  type: ['Bug', 'Poison'],
  base: {
    HP: 30,
    Attack: 45,
    Defense: 59,
    'Sp. Attack': 30,
    'Sp. Defense': 39,
    Speed: 57
  },
  url: 'https://www.pokemon.com/us/pokedex/venipede',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/543.png'
}, {
  id: 544,
  name: 'Whirlipede',
  type: ['Bug', 'Poison'],
  base: {
    HP: 40,
    Attack: 55,
    Defense: 99,
    'Sp. Attack': 40,
    'Sp. Defense': 79,
    Speed: 47
  },
  url: 'https://www.pokemon.com/us/pokedex/whirlipede',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png'
}, {
  id: 545,
  name: 'Scolipede',
  type: ['Bug', 'Poison'],
  base: {
    HP: 60,
    Attack: 100,
    Defense: 89,
    'Sp. Attack': 55,
    'Sp. Defense': 69,
    Speed: 112
  },
  url: 'https://www.pokemon.com/us/pokedex/scolipede',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png'
}, {
  id: 546,
  name: 'Cottonee',
  type: ['Grass', 'Fairy'],
  base: {
    HP: 40,
    Attack: 27,
    Defense: 60,
    'Sp. Attack': 37,
    'Sp. Defense': 50,
    Speed: 66
  },
  url: 'https://www.pokemon.com/us/pokedex/cottonee',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/546.png'
}, {
  id: 547,
  name: 'Whimsicott',
  type: ['Grass', 'Fairy'],
  base: {
    HP: 60,
    Attack: 67,
    Defense: 85,
    'Sp. Attack': 77,
    'Sp. Defense': 75,
    Speed: 116
  },
  url: 'https://www.pokemon.com/us/pokedex/whimsicott',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png'
}, {
  id: 548,
  name: 'Petilil',
  type: ['Grass'],
  base: {
    HP: 45,
    Attack: 35,
    Defense: 50,
    'Sp. Attack': 70,
    'Sp. Defense': 50,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/petilil',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png'
}, {
  id: 549,
  name: 'Lilligant',
  type: ['Grass'],
  base: {
    HP: 70,
    Attack: 60,
    Defense: 75,
    'Sp. Attack': 110,
    'Sp. Defense': 75,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/lilligant',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png'
}, {
  id: 550,
  name: 'Basculin',
  type: ['Water'],
  base: {
    HP: 70,
    Attack: 92,
    Defense: 65,
    'Sp. Attack': 80,
    'Sp. Defense': 55,
    Speed: 98
  },
  url: 'https://www.pokemon.com/us/pokedex/basculin',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/550.png'
}, {
  id: 551,
  name: 'Sandile',
  type: ['Ground', 'Dark'],
  base: {
    HP: 50,
    Attack: 72,
    Defense: 35,
    'Sp. Attack': 35,
    'Sp. Defense': 35,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/sandile',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/551.png'
}, {
  id: 552,
  name: 'Krokorok',
  type: ['Ground', 'Dark'],
  base: {
    HP: 60,
    Attack: 82,
    Defense: 45,
    'Sp. Attack': 45,
    'Sp. Defense': 45,
    Speed: 74
  },
  url: 'https://www.pokemon.com/us/pokedex/krokorok',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png'
}, {
  id: 553,
  name: 'Krookodile',
  type: ['Ground', 'Dark'],
  base: {
    HP: 95,
    Attack: 117,
    Defense: 80,
    'Sp. Attack': 65,
    'Sp. Defense': 70,
    Speed: 92
  },
  url: 'https://www.pokemon.com/us/pokedex/krookodile',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png'
}, {
  id: 554,
  name: 'Darumaka',
  type: ['Fire'],
  base: {
    HP: 70,
    Attack: 90,
    Defense: 45,
    'Sp. Attack': 15,
    'Sp. Defense': 45,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/darumaka',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png'
}, {
  id: 555,
  name: 'Darmanitan',
  type: ['Fire'],
  base: {
    HP: 105,
    Attack: 140,
    Defense: 55,
    'Sp. Attack': 30,
    'Sp. Defense': 55,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/darmanitan',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/555.png'
}, {
  id: 556,
  name: 'Maractus',
  type: ['Grass'],
  base: {
    HP: 75,
    Attack: 86,
    Defense: 67,
    'Sp. Attack': 106,
    'Sp. Defense': 67,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/maractus',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png'
}, {
  id: 557,
  name: 'Dwebble',
  type: ['Bug', 'Rock'],
  base: {
    HP: 50,
    Attack: 65,
    Defense: 85,
    'Sp. Attack': 35,
    'Sp. Defense': 35,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/dwebble',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/557.png'
}, {
  id: 558,
  name: 'Crustle',
  type: ['Bug', 'Rock'],
  base: {
    HP: 70,
    Attack: 105,
    Defense: 125,
    'Sp. Attack': 65,
    'Sp. Defense': 75,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/crustle',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/558.png'
}, {
  id: 559,
  name: 'Scraggy',
  type: ['Dark', 'Fighting'],
  base: {
    HP: 50,
    Attack: 75,
    Defense: 70,
    'Sp. Attack': 35,
    'Sp. Defense': 70,
    Speed: 48
  },
  url: 'https://www.pokemon.com/us/pokedex/scraggy',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/559.png'
}, {
  id: 560,
  name: 'Scrafty',
  type: ['Dark', 'Fighting'],
  base: {
    HP: 65,
    Attack: 90,
    Defense: 115,
    'Sp. Attack': 45,
    'Sp. Defense': 115,
    Speed: 58
  },
  url: 'https://www.pokemon.com/us/pokedex/scrafty',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/560.png'
}, {
  id: 561,
  name: 'Sigilyph',
  type: ['Psychic', 'Flying'],
  base: {
    HP: 72,
    Attack: 58,
    Defense: 80,
    'Sp. Attack': 103,
    'Sp. Defense': 80,
    Speed: 97
  },
  url: 'https://www.pokemon.com/us/pokedex/sigilyph',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/561.png'
}, {
  id: 562,
  name: 'Yamask',
  type: ['Ghost'],
  base: {
    HP: 38,
    Attack: 30,
    Defense: 85,
    'Sp. Attack': 55,
    'Sp. Defense': 65,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/yamask',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png'
}, {
  id: 563,
  name: 'Cofagrigus',
  type: ['Ghost'],
  base: {
    HP: 58,
    Attack: 50,
    Defense: 145,
    'Sp. Attack': 95,
    'Sp. Defense': 105,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/cofagrigus',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png'
}, {
  id: 564,
  name: 'Tirtouga',
  type: ['Water', 'Rock'],
  base: {
    HP: 54,
    Attack: 78,
    Defense: 103,
    'Sp. Attack': 53,
    'Sp. Defense': 45,
    Speed: 22
  },
  url: 'https://www.pokemon.com/us/pokedex/tirtouga',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/564.png'
}, {
  id: 565,
  name: 'Carracosta',
  type: ['Water', 'Rock'],
  base: {
    HP: 74,
    Attack: 108,
    Defense: 133,
    'Sp. Attack': 83,
    'Sp. Defense': 65,
    Speed: 32
  },
  url: 'https://www.pokemon.com/us/pokedex/carracosta',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png'
}, {
  id: 566,
  name: 'Archen',
  type: ['Rock', 'Flying'],
  base: {
    HP: 55,
    Attack: 112,
    Defense: 45,
    'Sp. Attack': 74,
    'Sp. Defense': 45,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/archen',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/566.png'
}, {
  id: 567,
  name: 'Archeops',
  type: ['Rock', 'Flying'],
  base: {
    HP: 75,
    Attack: 140,
    Defense: 65,
    'Sp. Attack': 112,
    'Sp. Defense': 65,
    Speed: 110
  },
  url: 'https://www.pokemon.com/us/pokedex/archeops',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/567.png'
}, {
  id: 568,
  name: 'Trubbish',
  type: ['Poison'],
  base: {
    HP: 50,
    Attack: 50,
    Defense: 62,
    'Sp. Attack': 40,
    'Sp. Defense': 62,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/trubbish',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png'
}, {
  id: 569,
  name: 'Garbodor',
  type: ['Poison'],
  base: {
    HP: 80,
    Attack: 95,
    Defense: 82,
    'Sp. Attack': 60,
    'Sp. Defense': 82,
    Speed: 75
  },
  url: 'https://www.pokemon.com/us/pokedex/garbodor',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png'
}, {
  id: 570,
  name: 'Zorua',
  type: ['Dark'],
  base: {
    HP: 40,
    Attack: 65,
    Defense: 40,
    'Sp. Attack': 80,
    'Sp. Defense': 40,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/zorua',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png'
}, {
  id: 571,
  name: 'Zoroark',
  type: ['Dark'],
  base: {
    HP: 60,
    Attack: 105,
    Defense: 60,
    'Sp. Attack': 120,
    'Sp. Defense': 60,
    Speed: 105
  },
  url: 'https://www.pokemon.com/us/pokedex/zoroark',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png'
}, {
  id: 572,
  name: 'Minccino',
  type: ['Normal'],
  base: {
    HP: 55,
    Attack: 50,
    Defense: 40,
    'Sp. Attack': 40,
    'Sp. Defense': 40,
    Speed: 75
  },
  url: 'https://www.pokemon.com/us/pokedex/minccino',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png'
}, {
  id: 573,
  name: 'Cinccino',
  type: ['Normal'],
  base: {
    HP: 75,
    Attack: 95,
    Defense: 60,
    'Sp. Attack': 65,
    'Sp. Defense': 60,
    Speed: 115
  },
  url: 'https://www.pokemon.com/us/pokedex/cinccino',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png'
}, {
  id: 574,
  name: 'Gothita',
  type: ['Psychic'],
  base: {
    HP: 45,
    Attack: 30,
    Defense: 50,
    'Sp. Attack': 55,
    'Sp. Defense': 65,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/gothita',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png'
}, {
  id: 575,
  name: 'Gothorita',
  type: ['Psychic'],
  base: {
    HP: 60,
    Attack: 45,
    Defense: 70,
    'Sp. Attack': 75,
    'Sp. Defense': 85,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/gothorita',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png'
}, {
  id: 576,
  name: 'Gothitelle',
  type: ['Psychic'],
  base: {
    HP: 70,
    Attack: 55,
    Defense: 95,
    'Sp. Attack': 95,
    'Sp. Defense': 110,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/gothitelle',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png'
}, {
  id: 577,
  name: 'Solosis',
  type: ['Psychic'],
  base: {
    HP: 45,
    Attack: 30,
    Defense: 40,
    'Sp. Attack': 105,
    'Sp. Defense': 50,
    Speed: 20
  },
  url: 'https://www.pokemon.com/us/pokedex/solosis',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png'
}, {
  id: 578,
  name: 'Duosion',
  type: ['Psychic'],
  base: {
    HP: 65,
    Attack: 40,
    Defense: 50,
    'Sp. Attack': 125,
    'Sp. Defense': 60,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/duosion',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png'
}, {
  id: 579,
  name: 'Reuniclus',
  type: ['Psychic'],
  base: {
    HP: 110,
    Attack: 65,
    Defense: 75,
    'Sp. Attack': 125,
    'Sp. Defense': 85,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/reuniclus',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png'
}, {
  id: 580,
  name: 'Ducklett',
  type: ['Water', 'Flying'],
  base: {
    HP: 62,
    Attack: 44,
    Defense: 50,
    'Sp. Attack': 44,
    'Sp. Defense': 50,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/ducklett',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/580.png'
}, {
  id: 581,
  name: 'Swanna',
  type: ['Water', 'Flying'],
  base: {
    HP: 75,
    Attack: 87,
    Defense: 63,
    'Sp. Attack': 87,
    'Sp. Defense': 63,
    Speed: 98
  },
  url: 'https://www.pokemon.com/us/pokedex/swanna',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/581.png'
}, {
  id: 582,
  name: 'Vanillite',
  type: ['Ice'],
  base: {
    HP: 36,
    Attack: 50,
    Defense: 50,
    'Sp. Attack': 65,
    'Sp. Defense': 60,
    Speed: 44
  },
  url: 'https://www.pokemon.com/us/pokedex/vanillite',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png'
}, {
  id: 583,
  name: 'Vanillish',
  type: ['Ice'],
  base: {
    HP: 51,
    Attack: 65,
    Defense: 65,
    'Sp. Attack': 80,
    'Sp. Defense': 75,
    Speed: 59
  },
  url: 'https://www.pokemon.com/us/pokedex/vanillish',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png'
}, {
  id: 584,
  name: 'Vanilluxe',
  type: ['Ice'],
  base: {
    HP: 71,
    Attack: 95,
    Defense: 85,
    'Sp. Attack': 110,
    'Sp. Defense': 95,
    Speed: 79
  },
  url: 'https://www.pokemon.com/us/pokedex/vanilluxe',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png'
}, {
  id: 585,
  name: 'Deerling',
  type: ['Normal', 'Grass'],
  base: {
    HP: 60,
    Attack: 60,
    Defense: 50,
    'Sp. Attack': 40,
    'Sp. Defense': 50,
    Speed: 75
  },
  url: 'https://www.pokemon.com/us/pokedex/deerling',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/585.png'
}, {
  id: 586,
  name: 'Sawsbuck',
  type: ['Normal', 'Grass'],
  base: {
    HP: 80,
    Attack: 100,
    Defense: 70,
    'Sp. Attack': 60,
    'Sp. Defense': 70,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/sawsbuck',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/586.png'
}, {
  id: 587,
  name: 'Emolga',
  type: ['Electric', 'Flying'],
  base: {
    HP: 55,
    Attack: 75,
    Defense: 60,
    'Sp. Attack': 75,
    'Sp. Defense': 60,
    Speed: 103
  },
  url: 'https://www.pokemon.com/us/pokedex/emolga',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png'
}, {
  id: 588,
  name: 'Karrablast',
  type: ['Bug'],
  base: {
    HP: 50,
    Attack: 75,
    Defense: 45,
    'Sp. Attack': 40,
    'Sp. Defense': 45,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/karrablast',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png'
}, {
  id: 589,
  name: 'Escavalier',
  type: ['Bug', 'Steel'],
  base: {
    HP: 70,
    Attack: 135,
    Defense: 105,
    'Sp. Attack': 60,
    'Sp. Defense': 105,
    Speed: 20
  },
  url: 'https://www.pokemon.com/us/pokedex/escavalier',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png'
}, {
  id: 590,
  name: 'Foongus',
  type: ['Grass', 'Poison'],
  base: {
    HP: 69,
    Attack: 55,
    Defense: 45,
    'Sp. Attack': 55,
    'Sp. Defense': 55,
    Speed: 15
  },
  url: 'https://www.pokemon.com/us/pokedex/foongus',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/590.png'
}, {
  id: 591,
  name: 'Amoonguss',
  type: ['Grass', 'Poison'],
  base: {
    HP: 114,
    Attack: 85,
    Defense: 70,
    'Sp. Attack': 85,
    'Sp. Defense': 80,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/amoonguss',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png'
}, {
  id: 592,
  name: 'Frillish',
  type: ['Water', 'Ghost'],
  base: {
    HP: 55,
    Attack: 40,
    Defense: 50,
    'Sp. Attack': 65,
    'Sp. Defense': 85,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/frillish',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png'
}, {
  id: 593,
  name: 'Jellicent',
  type: ['Water', 'Ghost'],
  base: {
    HP: 100,
    Attack: 60,
    Defense: 70,
    'Sp. Attack': 85,
    'Sp. Defense': 105,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/jellicent',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png'
}, {
  id: 594,
  name: 'Alomomola',
  type: ['Water'],
  base: {
    HP: 165,
    Attack: 75,
    Defense: 80,
    'Sp. Attack': 40,
    'Sp. Defense': 45,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/alomomola',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png'
}, {
  id: 595,
  name: 'Joltik',
  type: ['Bug', 'Electric'],
  base: {
    HP: 50,
    Attack: 47,
    Defense: 50,
    'Sp. Attack': 57,
    'Sp. Defense': 50,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/joltik',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/595.png'
}, {
  id: 596,
  name: 'Galvantula',
  type: ['Bug', 'Electric'],
  base: {
    HP: 70,
    Attack: 77,
    Defense: 60,
    'Sp. Attack': 97,
    'Sp. Defense': 60,
    Speed: 108
  },
  url: 'https://www.pokemon.com/us/pokedex/galvantula',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/596.png'
}, {
  id: 597,
  name: 'Ferroseed',
  type: ['Grass', 'Steel'],
  base: {
    HP: 44,
    Attack: 50,
    Defense: 91,
    'Sp. Attack': 24,
    'Sp. Defense': 86,
    Speed: 10
  },
  url: 'https://www.pokemon.com/us/pokedex/ferroseed',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/597.png'
}, {
  id: 598,
  name: 'Ferrothorn',
  type: ['Grass', 'Steel'],
  base: {
    HP: 74,
    Attack: 94,
    Defense: 131,
    'Sp. Attack': 54,
    'Sp. Defense': 116,
    Speed: 20
  },
  url: 'https://www.pokemon.com/us/pokedex/ferrothorn',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/598.png'
}, {
  id: 599,
  name: 'Klink',
  type: ['Steel'],
  base: {
    HP: 40,
    Attack: 55,
    Defense: 70,
    'Sp. Attack': 45,
    'Sp. Defense': 60,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/klink',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png'
}, {
  id: 600,
  name: 'Klang',
  type: ['Steel'],
  base: {
    HP: 60,
    Attack: 80,
    Defense: 95,
    'Sp. Attack': 70,
    'Sp. Defense': 85,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/klang',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png'
}, {
  id: 601,
  name: 'Klinklang',
  type: ['Steel'],
  base: {
    HP: 60,
    Attack: 100,
    Defense: 115,
    'Sp. Attack': 70,
    'Sp. Defense': 85,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/klinklang',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/601.png'
}, {
  id: 602,
  name: 'Tynamo',
  type: ['Electric'],
  base: {
    HP: 35,
    Attack: 55,
    Defense: 40,
    'Sp. Attack': 45,
    'Sp. Defense': 40,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/tynamo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/602.png'
}, {
  id: 603,
  name: 'Eelektrik',
  type: ['Electric'],
  base: {
    HP: 65,
    Attack: 85,
    Defense: 70,
    'Sp. Attack': 75,
    'Sp. Defense': 70,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/eelektrik',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/603.png'
}, {
  id: 604,
  name: 'Eelektross',
  type: ['Electric'],
  base: {
    HP: 85,
    Attack: 115,
    Defense: 80,
    'Sp. Attack': 105,
    'Sp. Defense': 80,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/eelektross',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/604.png'
}, {
  id: 605,
  name: 'Elgyem',
  type: ['Psychic'],
  base: {
    HP: 55,
    Attack: 55,
    Defense: 55,
    'Sp. Attack': 85,
    'Sp. Defense': 55,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/elgyem',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/605.png'
}, {
  id: 606,
  name: 'Beheeyem',
  type: ['Psychic'],
  base: {
    HP: 75,
    Attack: 75,
    Defense: 75,
    'Sp. Attack': 125,
    'Sp. Defense': 95,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/beheeyem',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/606.png'
}, {
  id: 607,
  name: 'Litwick',
  type: ['Ghost', 'Fire'],
  base: {
    HP: 50,
    Attack: 30,
    Defense: 55,
    'Sp. Attack': 65,
    'Sp. Defense': 55,
    Speed: 20
  },
  url: 'https://www.pokemon.com/us/pokedex/litwick',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/607.png'
}, {
  id: 608,
  name: 'Lampent',
  type: ['Ghost', 'Fire'],
  base: {
    HP: 60,
    Attack: 40,
    Defense: 60,
    'Sp. Attack': 95,
    'Sp. Defense': 60,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/lampent',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/608.png'
}, {
  id: 609,
  name: 'Chandelure',
  type: ['Ghost', 'Fire'],
  base: {
    HP: 60,
    Attack: 55,
    Defense: 90,
    'Sp. Attack': 145,
    'Sp. Defense': 90,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/chandelure',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png'
}, {
  id: 610,
  name: 'Axew',
  type: ['Dragon'],
  base: {
    HP: 46,
    Attack: 87,
    Defense: 60,
    'Sp. Attack': 30,
    'Sp. Defense': 40,
    Speed: 57
  },
  url: 'https://www.pokemon.com/us/pokedex/axew',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/610.png'
}, {
  id: 611,
  name: 'Fraxure',
  type: ['Dragon'],
  base: {
    HP: 66,
    Attack: 117,
    Defense: 70,
    'Sp. Attack': 40,
    'Sp. Defense': 50,
    Speed: 67
  },
  url: 'https://www.pokemon.com/us/pokedex/fraxure',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/611.png'
}, {
  id: 612,
  name: 'Haxorus',
  type: ['Dragon'],
  base: {
    HP: 76,
    Attack: 147,
    Defense: 90,
    'Sp. Attack': 60,
    'Sp. Defense': 70,
    Speed: 97
  },
  url: 'https://www.pokemon.com/us/pokedex/haxorus',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png'
}, {
  id: 613,
  name: 'Cubchoo',
  type: ['Ice'],
  base: {
    HP: 55,
    Attack: 70,
    Defense: 40,
    'Sp. Attack': 60,
    'Sp. Defense': 40,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/cubchoo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/613.png'
}, {
  id: 614,
  name: 'Beartic',
  type: ['Ice'],
  base: {
    HP: 95,
    Attack: 130,
    Defense: 80,
    'Sp. Attack': 70,
    'Sp. Defense': 80,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/beartic',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png'
}, {
  id: 615,
  name: 'Cryogonal',
  type: ['Ice'],
  base: {
    HP: 80,
    Attack: 50,
    Defense: 50,
    'Sp. Attack': 95,
    'Sp. Defense': 135,
    Speed: 105
  },
  url: 'https://www.pokemon.com/us/pokedex/cryogonal',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/615.png'
}, {
  id: 616,
  name: 'Shelmet',
  type: ['Bug'],
  base: {
    HP: 50,
    Attack: 40,
    Defense: 85,
    'Sp. Attack': 40,
    'Sp. Defense': 65,
    Speed: 25
  },
  url: 'https://www.pokemon.com/us/pokedex/shelmet',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/616.png'
}, {
  id: 617,
  name: 'Accelgor',
  type: ['Bug'],
  base: {
    HP: 80,
    Attack: 70,
    Defense: 40,
    'Sp. Attack': 100,
    'Sp. Defense': 60,
    Speed: 145
  },
  url: 'https://www.pokemon.com/us/pokedex/accelgor',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png'
}, {
  id: 618,
  name: 'Stunfisk',
  type: ['Ground', 'Electric'],
  base: {
    HP: 109,
    Attack: 66,
    Defense: 84,
    'Sp. Attack': 81,
    'Sp. Defense': 99,
    Speed: 32
  },
  url: 'https://www.pokemon.com/us/pokedex/stunfisk',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/618.png'
}, {
  id: 619,
  name: 'Mienfoo',
  type: ['Fighting'],
  base: {
    HP: 45,
    Attack: 85,
    Defense: 50,
    'Sp. Attack': 55,
    'Sp. Defense': 50,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/mienfoo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/619.png'
}, {
  id: 620,
  name: 'Mienshao',
  type: ['Fighting'],
  base: {
    HP: 65,
    Attack: 125,
    Defense: 60,
    'Sp. Attack': 95,
    'Sp. Defense': 60,
    Speed: 105
  },
  url: 'https://www.pokemon.com/us/pokedex/mienshao',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/620.png'
}, {
  id: 621,
  name: 'Druddigon',
  type: ['Dragon'],
  base: {
    HP: 77,
    Attack: 120,
    Defense: 90,
    'Sp. Attack': 60,
    'Sp. Defense': 90,
    Speed: 48
  },
  url: 'https://www.pokemon.com/us/pokedex/druddigon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/621.png'
}, {
  id: 622,
  name: 'Golett',
  type: ['Ground', 'Ghost'],
  base: {
    HP: 59,
    Attack: 74,
    Defense: 50,
    'Sp. Attack': 35,
    'Sp. Defense': 50,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/golett',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/622.png'
}, {
  id: 623,
  name: 'Golurk',
  type: ['Ground', 'Ghost'],
  base: {
    HP: 89,
    Attack: 124,
    Defense: 80,
    'Sp. Attack': 55,
    'Sp. Defense': 80,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/golurk',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/623.png'
}, {
  id: 624,
  name: 'Pawniard',
  type: ['Dark', 'Steel'],
  base: {
    HP: 45,
    Attack: 85,
    Defense: 70,
    'Sp. Attack': 40,
    'Sp. Defense': 40,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/pawniard',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/624.png'
}, {
  id: 625,
  name: 'Bisharp',
  type: ['Dark', 'Steel'],
  base: {
    HP: 65,
    Attack: 125,
    Defense: 100,
    'Sp. Attack': 60,
    'Sp. Defense': 70,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/bisharp',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/625.png'
}, {
  id: 626,
  name: 'Bouffalant',
  type: ['Normal'],
  base: {
    HP: 95,
    Attack: 110,
    Defense: 95,
    'Sp. Attack': 40,
    'Sp. Defense': 95,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/bouffalant',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/626.png'
}, {
  id: 627,
  name: 'Rufflet',
  type: ['Normal', 'Flying'],
  base: {
    HP: 70,
    Attack: 83,
    Defense: 50,
    'Sp. Attack': 37,
    'Sp. Defense': 50,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/rufflet',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/627.png'
}, {
  id: 628,
  name: 'Braviary',
  type: ['Normal', 'Flying'],
  base: {
    HP: 100,
    Attack: 123,
    Defense: 75,
    'Sp. Attack': 57,
    'Sp. Defense': 75,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/braviary',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/628.png'
}, {
  id: 629,
  name: 'Vullaby',
  type: ['Dark', 'Flying'],
  base: {
    HP: 70,
    Attack: 55,
    Defense: 75,
    'Sp. Attack': 45,
    'Sp. Defense': 65,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/vullaby',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/629.png'
}, {
  id: 630,
  name: 'Mandibuzz',
  type: ['Dark', 'Flying'],
  base: {
    HP: 110,
    Attack: 65,
    Defense: 105,
    'Sp. Attack': 55,
    'Sp. Defense': 95,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/mandibuzz',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/630.png'
}, {
  id: 631,
  name: 'Heatmor',
  type: ['Fire'],
  base: {
    HP: 85,
    Attack: 97,
    Defense: 66,
    'Sp. Attack': 105,
    'Sp. Defense': 66,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/heatmor',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/631.png'
}, {
  id: 632,
  name: 'Durant',
  type: ['Bug', 'Steel'],
  base: {
    HP: 58,
    Attack: 109,
    Defense: 112,
    'Sp. Attack': 48,
    'Sp. Defense': 48,
    Speed: 109
  },
  url: 'https://www.pokemon.com/us/pokedex/durant',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/632.png'
}, {
  id: 633,
  name: 'Deino',
  type: ['Dark', 'Dragon'],
  base: {
    HP: 52,
    Attack: 65,
    Defense: 50,
    'Sp. Attack': 45,
    'Sp. Defense': 50,
    Speed: 38
  },
  url: 'https://www.pokemon.com/us/pokedex/deino',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/633.png'
}, {
  id: 634,
  name: 'Zweilous',
  type: ['Dark', 'Dragon'],
  base: {
    HP: 72,
    Attack: 85,
    Defense: 70,
    'Sp. Attack': 65,
    'Sp. Defense': 70,
    Speed: 58
  },
  url: 'https://www.pokemon.com/us/pokedex/zweilous',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/634.png'
}, {
  id: 635,
  name: 'Hydreigon',
  type: ['Dark', 'Dragon'],
  base: {
    HP: 92,
    Attack: 105,
    Defense: 90,
    'Sp. Attack': 125,
    'Sp. Defense': 90,
    Speed: 98
  },
  url: 'https://www.pokemon.com/us/pokedex/hydreigon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png'
}, {
  id: 636,
  name: 'Larvesta',
  type: ['Bug', 'Fire'],
  base: {
    HP: 55,
    Attack: 85,
    Defense: 55,
    'Sp. Attack': 50,
    'Sp. Defense': 55,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/larvesta',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/636.png'
}, {
  id: 637,
  name: 'Volcarona',
  type: ['Bug', 'Fire'],
  base: {
    HP: 85,
    Attack: 60,
    Defense: 65,
    'Sp. Attack': 135,
    'Sp. Defense': 105,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/volcarona',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/637.png'
}, {
  id: 638,
  name: 'Cobalion',
  type: ['Steel', 'Fighting'],
  base: {
    HP: 91,
    Attack: 90,
    Defense: 129,
    'Sp. Attack': 90,
    'Sp. Defense': 72,
    Speed: 108
  },
  url: 'https://www.pokemon.com/us/pokedex/cobalion',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/638.png'
}, {
  id: 639,
  name: 'Terrakion',
  type: ['Rock', 'Fighting'],
  base: {
    HP: 91,
    Attack: 129,
    Defense: 90,
    'Sp. Attack': 72,
    'Sp. Defense': 90,
    Speed: 108
  },
  url: 'https://www.pokemon.com/us/pokedex/terrakion',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/639.png'
}, {
  id: 640,
  name: 'Virizion',
  type: ['Grass', 'Fighting'],
  base: {
    HP: 91,
    Attack: 90,
    Defense: 72,
    'Sp. Attack': 90,
    'Sp. Defense': 129,
    Speed: 108
  },
  url: 'https://www.pokemon.com/us/pokedex/virizion',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/640.png'
}, {
  id: 641,
  name: 'Tornadus',
  type: ['Flying'],
  base: {
    HP: 79,
    Attack: 115,
    Defense: 70,
    'Sp. Attack': 125,
    'Sp. Defense': 80,
    Speed: 111
  },
  url: 'https://www.pokemon.com/us/pokedex/tornadus',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/641.png'
}, {
  id: 642,
  name: 'Thundurus',
  type: ['Electric', 'Flying'],
  base: {
    HP: 79,
    Attack: 115,
    Defense: 70,
    'Sp. Attack': 125,
    'Sp. Defense': 80,
    Speed: 111
  },
  url: 'https://www.pokemon.com/us/pokedex/thundurus',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/642.png'
}, {
  id: 643,
  name: 'Reshiram',
  type: ['Dragon', 'Fire'],
  base: {
    HP: 100,
    Attack: 120,
    Defense: 100,
    'Sp. Attack': 150,
    'Sp. Defense': 120,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/reshiram',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png'
}, {
  id: 644,
  name: 'Zekrom',
  type: ['Dragon', 'Electric'],
  base: {
    HP: 100,
    Attack: 150,
    Defense: 120,
    'Sp. Attack': 120,
    'Sp. Defense': 100,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/zekrom',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png'
}, {
  id: 645,
  name: 'Landorus',
  type: ['Ground', 'Flying'],
  base: {
    HP: 89,
    Attack: 125,
    Defense: 90,
    'Sp. Attack': 115,
    'Sp. Defense': 80,
    Speed: 101
  },
  url: 'https://www.pokemon.com/us/pokedex/landorus',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/645.png'
}, {
  id: 646,
  name: 'Kyurem',
  type: ['Dragon', 'Ice'],
  base: {
    HP: 125,
    Attack: 130,
    Defense: 90,
    'Sp. Attack': 130,
    'Sp. Defense': 90,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/kyurem',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png'
}, {
  id: 647,
  name: 'Keldeo',
  type: ['Water', 'Fighting'],
  base: {
    HP: 91,
    Attack: 72,
    Defense: 90,
    'Sp. Attack': 129,
    'Sp. Defense': 90,
    Speed: 108
  },
  url: 'https://www.pokemon.com/us/pokedex/keldeo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/647.png'
}, {
  id: 648,
  name: 'Meloetta',
  type: ['Normal', 'Psychic'],
  base: {
    HP: 100,
    Attack: 77,
    Defense: 77,
    'Sp. Attack': 128,
    'Sp. Defense': 128,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/meloetta',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/648.png'
}, {
  id: 649,
  name: 'Genesect',
  type: ['Bug', 'Steel'],
  base: {
    HP: 71,
    Attack: 120,
    Defense: 95,
    'Sp. Attack': 120,
    'Sp. Defense': 95,
    Speed: 99
  },
  url: 'https://www.pokemon.com/us/pokedex/genesect',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/649.png'
}, {
  id: 650,
  name: 'Chespin',
  type: ['Grass'],
  base: {
    HP: 56,
    Attack: 61,
    Defense: 65,
    'Sp. Attack': 48,
    'Sp. Defense': 45,
    Speed: 38
  },
  url: 'https://www.pokemon.com/us/pokedex/chespin',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png'
}, {
  id: 651,
  name: 'Quilladin',
  type: ['Grass'],
  base: {
    HP: 61,
    Attack: 78,
    Defense: 95,
    'Sp. Attack': 56,
    'Sp. Defense': 58,
    Speed: 57
  },
  url: 'https://www.pokemon.com/us/pokedex/quilladin',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/651.png'
}, {
  id: 652,
  name: 'Chesnaught',
  type: ['Grass', 'Fighting'],
  base: {
    HP: 88,
    Attack: 107,
    Defense: 122,
    'Sp. Attack': 74,
    'Sp. Defense': 75,
    Speed: 64
  },
  url: 'https://www.pokemon.com/us/pokedex/chesnaught',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png'
}, {
  id: 653,
  name: 'Fennekin',
  type: ['Fire'],
  base: {
    HP: 40,
    Attack: 45,
    Defense: 40,
    'Sp. Attack': 62,
    'Sp. Defense': 60,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/fennekin',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/653.png'
}, {
  id: 654,
  name: 'Braixen',
  type: ['Fire'],
  base: {
    HP: 59,
    Attack: 59,
    Defense: 58,
    'Sp. Attack': 90,
    'Sp. Defense': 70,
    Speed: 73
  },
  url: 'https://www.pokemon.com/us/pokedex/braixen',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/654.png'
}, {
  id: 655,
  name: 'Delphox',
  type: ['Fire', 'Psychic'],
  base: {
    HP: 75,
    Attack: 69,
    Defense: 72,
    'Sp. Attack': 114,
    'Sp. Defense': 100,
    Speed: 104
  },
  url: 'https://www.pokemon.com/us/pokedex/delphox',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png'
}, {
  id: 656,
  name: 'Froakie',
  type: ['Water'],
  base: {
    HP: 41,
    Attack: 56,
    Defense: 40,
    'Sp. Attack': 62,
    'Sp. Defense': 44,
    Speed: 71
  },
  url: 'https://www.pokemon.com/us/pokedex/froakie',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png'
}, {
  id: 657,
  name: 'Frogadier',
  type: ['Water'],
  base: {
    HP: 54,
    Attack: 63,
    Defense: 52,
    'Sp. Attack': 83,
    'Sp. Defense': 56,
    Speed: 97
  },
  url: 'https://www.pokemon.com/us/pokedex/frogadier',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/657.png'
}, {
  id: 658,
  name: 'Greninja',
  type: ['Water', 'Dark'],
  base: {
    HP: 72,
    Attack: 95,
    Defense: 67,
    'Sp. Attack': 103,
    'Sp. Defense': 71,
    Speed: 122
  },
  url: 'https://www.pokemon.com/us/pokedex/greninja',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png'
}, {
  id: 659,
  name: 'Bunnelby',
  type: ['Normal'],
  base: {
    HP: 38,
    Attack: 36,
    Defense: 38,
    'Sp. Attack': 32,
    'Sp. Defense': 36,
    Speed: 57
  },
  url: 'https://www.pokemon.com/us/pokedex/bunnelby',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/659.png'
}, {
  id: 660,
  name: 'Diggersby',
  type: ['Normal', 'Ground'],
  base: {
    HP: 85,
    Attack: 56,
    Defense: 77,
    'Sp. Attack': 50,
    'Sp. Defense': 77,
    Speed: 78
  },
  url: 'https://www.pokemon.com/us/pokedex/diggersby',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png'
}, {
  id: 661,
  name: 'Fletchling',
  type: ['Normal', 'Flying'],
  base: {
    HP: 45,
    Attack: 50,
    Defense: 43,
    'Sp. Attack': 40,
    'Sp. Defense': 38,
    Speed: 62
  },
  url: 'https://www.pokemon.com/us/pokedex/fletchling',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/661.png'
}, {
  id: 662,
  name: 'Fletchinder',
  type: ['Fire', 'Flying'],
  base: {
    HP: 62,
    Attack: 73,
    Defense: 55,
    'Sp. Attack': 56,
    'Sp. Defense': 52,
    Speed: 84
  },
  url: 'https://www.pokemon.com/us/pokedex/fletchinder',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/662.png'
}, {
  id: 663,
  name: 'Talonflame',
  type: ['Fire', 'Flying'],
  base: {
    HP: 78,
    Attack: 81,
    Defense: 71,
    'Sp. Attack': 74,
    'Sp. Defense': 69,
    Speed: 126
  },
  url: 'https://www.pokemon.com/us/pokedex/talonflame',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png'
}, {
  id: 664,
  name: 'Scatterbug',
  type: ['Bug'],
  base: {
    HP: 38,
    Attack: 35,
    Defense: 40,
    'Sp. Attack': 27,
    'Sp. Defense': 25,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/scatterbug',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/664.png'
}, {
  id: 665,
  name: 'Spewpa',
  type: ['Bug'],
  base: {
    HP: 45,
    Attack: 22,
    Defense: 60,
    'Sp. Attack': 27,
    'Sp. Defense': 30,
    Speed: 29
  },
  url: 'https://www.pokemon.com/us/pokedex/spewpa',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/665.png'
}, {
  id: 666,
  name: 'Vivillon',
  type: ['Bug', 'Flying'],
  base: {
    HP: 80,
    Attack: 52,
    Defense: 50,
    'Sp. Attack': 90,
    'Sp. Defense': 50,
    Speed: 89
  },
  url: 'https://www.pokemon.com/us/pokedex/vivillon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png'
}, {
  id: 667,
  name: 'Litleo',
  type: ['Fire', 'Normal'],
  base: {
    HP: 62,
    Attack: 50,
    Defense: 58,
    'Sp. Attack': 73,
    'Sp. Defense': 54,
    Speed: 72
  },
  url: 'https://www.pokemon.com/us/pokedex/litleo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/667.png'
}, {
  id: 668,
  name: 'Pyroar',
  type: ['Fire', 'Normal'],
  base: {
    HP: 86,
    Attack: 68,
    Defense: 72,
    'Sp. Attack': 109,
    'Sp. Defense': 66,
    Speed: 106
  },
  url: 'https://www.pokemon.com/us/pokedex/pyroar',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/668.png'
}, {
  id: 669,
  name: 'Flab\u00e9b\u00e9',
  type: ['Fairy'],
  base: {
    HP: 44,
    Attack: 38,
    Defense: 39,
    'Sp. Attack': 61,
    'Sp. Defense': 79,
    Speed: 42
  },
  url: 'https://www.pokemon.com/us/pokedex/flab\u00e9b\u00e9',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/669.png'
}, {
  id: 670,
  name: 'Floette',
  type: ['Fairy'],
  base: {
    HP: 54,
    Attack: 45,
    Defense: 47,
    'Sp. Attack': 75,
    'Sp. Defense': 98,
    Speed: 52
  },
  url: 'https://www.pokemon.com/us/pokedex/floette',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/670.png'
}, {
  id: 671,
  name: 'Florges',
  type: ['Fairy'],
  base: {
    HP: 78,
    Attack: 65,
    Defense: 68,
    'Sp. Attack': 112,
    'Sp. Defense': 154,
    Speed: 75
  },
  url: 'https://www.pokemon.com/us/pokedex/florges',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png'
}, {
  id: 672,
  name: 'Skiddo',
  type: ['Grass'],
  base: {
    HP: 66,
    Attack: 65,
    Defense: 48,
    'Sp. Attack': 62,
    'Sp. Defense': 57,
    Speed: 52
  },
  url: 'https://www.pokemon.com/us/pokedex/skiddo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/672.png'
}, {
  id: 673,
  name: 'Gogoat',
  type: ['Grass'],
  base: {
    HP: 123,
    Attack: 100,
    Defense: 62,
    'Sp. Attack': 97,
    'Sp. Defense': 81,
    Speed: 68
  },
  url: 'https://www.pokemon.com/us/pokedex/gogoat',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/673.png'
}, {
  id: 674,
  name: 'Pancham',
  type: ['Fighting'],
  base: {
    HP: 67,
    Attack: 82,
    Defense: 62,
    'Sp. Attack': 46,
    'Sp. Defense': 48,
    Speed: 43
  },
  url: 'https://www.pokemon.com/us/pokedex/pancham',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/674.png'
}, {
  id: 675,
  name: 'Pangoro',
  type: ['Fighting', 'Dark'],
  base: {
    HP: 95,
    Attack: 124,
    Defense: 78,
    'Sp. Attack': 69,
    'Sp. Defense': 71,
    Speed: 58
  },
  url: 'https://www.pokemon.com/us/pokedex/pangoro',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/675.png'
}, {
  id: 676,
  name: 'Furfrou',
  type: ['Normal'],
  base: {
    HP: 75,
    Attack: 80,
    Defense: 60,
    'Sp. Attack': 65,
    'Sp. Defense': 90,
    Speed: 102
  },
  url: 'https://www.pokemon.com/us/pokedex/furfrou',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png'
}, {
  id: 677,
  name: 'Espurr',
  type: ['Psychic'],
  base: {
    HP: 62,
    Attack: 48,
    Defense: 54,
    'Sp. Attack': 63,
    'Sp. Defense': 60,
    Speed: 68
  },
  url: 'https://www.pokemon.com/us/pokedex/espurr',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/677.png'
}, {
  id: 678,
  name: 'Meowstic',
  type: ['Psychic'],
  base: {
    HP: 74,
    Attack: 48,
    Defense: 76,
    'Sp. Attack': 83,
    'Sp. Defense': 81,
    Speed: 104
  },
  url: 'https://www.pokemon.com/us/pokedex/meowstic',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/678.png'
}, {
  id: 679,
  name: 'Honedge',
  type: ['Steel', 'Ghost'],
  base: {
    HP: 45,
    Attack: 80,
    Defense: 100,
    'Sp. Attack': 35,
    'Sp. Defense': 37,
    Speed: 28
  },
  url: 'https://www.pokemon.com/us/pokedex/honedge',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/679.png'
}, {
  id: 680,
  name: 'Doublade',
  type: ['Steel', 'Ghost'],
  base: {
    HP: 59,
    Attack: 110,
    Defense: 150,
    'Sp. Attack': 45,
    'Sp. Defense': 49,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/doublade',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/680.png'
}, {
  id: 681,
  name: 'Aegislash',
  type: ['Steel', 'Ghost'],
  base: {
    HP: 60,
    Attack: 50,
    Defense: 150,
    'Sp. Attack': 50,
    'Sp. Defense': 150,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/aegislash',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png'
}, {
  id: 682,
  name: 'Spritzee',
  type: ['Fairy'],
  base: {
    HP: 78,
    Attack: 52,
    Defense: 60,
    'Sp. Attack': 63,
    'Sp. Defense': 65,
    Speed: 23
  },
  url: 'https://www.pokemon.com/us/pokedex/spritzee',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/682.png'
}, {
  id: 683,
  name: 'Aromatisse',
  type: ['Fairy'],
  base: {
    HP: 101,
    Attack: 72,
    Defense: 72,
    'Sp. Attack': 99,
    'Sp. Defense': 89,
    Speed: 29
  },
  url: 'https://www.pokemon.com/us/pokedex/aromatisse',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png'
}, {
  id: 684,
  name: 'Swirlix',
  type: ['Fairy'],
  base: {
    HP: 62,
    Attack: 48,
    Defense: 66,
    'Sp. Attack': 59,
    'Sp. Defense': 57,
    Speed: 49
  },
  url: 'https://www.pokemon.com/us/pokedex/swirlix',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/684.png'
}, {
  id: 685,
  name: 'Slurpuff',
  type: ['Fairy'],
  base: {
    HP: 82,
    Attack: 80,
    Defense: 86,
    'Sp. Attack': 85,
    'Sp. Defense': 75,
    Speed: 72
  },
  url: 'https://www.pokemon.com/us/pokedex/slurpuff',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/685.png'
}, {
  id: 686,
  name: 'Inkay',
  type: ['Dark', 'Psychic'],
  base: {
    HP: 53,
    Attack: 54,
    Defense: 53,
    'Sp. Attack': 37,
    'Sp. Defense': 46,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/inkay',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/686.png'
}, {
  id: 687,
  name: 'Malamar',
  type: ['Dark', 'Psychic'],
  base: {
    HP: 86,
    Attack: 92,
    Defense: 88,
    'Sp. Attack': 68,
    'Sp. Defense': 75,
    Speed: 73
  },
  url: 'https://www.pokemon.com/us/pokedex/malamar',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/687.png'
}, {
  id: 688,
  name: 'Binacle',
  type: ['Rock', 'Water'],
  base: {
    HP: 42,
    Attack: 52,
    Defense: 67,
    'Sp. Attack': 39,
    'Sp. Defense': 56,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/binacle',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/688.png'
}, {
  id: 689,
  name: 'Barbaracle',
  type: ['Rock', 'Water'],
  base: {
    HP: 72,
    Attack: 105,
    Defense: 115,
    'Sp. Attack': 54,
    'Sp. Defense': 86,
    Speed: 68
  },
  url: 'https://www.pokemon.com/us/pokedex/barbaracle',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/689.png'
}, {
  id: 690,
  name: 'Skrelp',
  type: ['Poison', 'Water'],
  base: {
    HP: 50,
    Attack: 60,
    Defense: 60,
    'Sp. Attack': 60,
    'Sp. Defense': 60,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/skrelp',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/690.png'
}, {
  id: 691,
  name: 'Dragalge',
  type: ['Poison', 'Dragon'],
  base: {
    HP: 65,
    Attack: 75,
    Defense: 90,
    'Sp. Attack': 97,
    'Sp. Defense': 123,
    Speed: 44
  },
  url: 'https://www.pokemon.com/us/pokedex/dragalge',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png'
}, {
  id: 692,
  name: 'Clauncher',
  type: ['Water'],
  base: {
    HP: 50,
    Attack: 53,
    Defense: 62,
    'Sp. Attack': 58,
    'Sp. Defense': 63,
    Speed: 44
  },
  url: 'https://www.pokemon.com/us/pokedex/clauncher',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/692.png'
}, {
  id: 693,
  name: 'Clawitzer',
  type: ['Water'],
  base: {
    HP: 71,
    Attack: 73,
    Defense: 88,
    'Sp. Attack': 120,
    'Sp. Defense': 89,
    Speed: 59
  },
  url: 'https://www.pokemon.com/us/pokedex/clawitzer',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/693.png'
}, {
  id: 694,
  name: 'Helioptile',
  type: ['Electric', 'Normal'],
  base: {
    HP: 44,
    Attack: 38,
    Defense: 33,
    'Sp. Attack': 61,
    'Sp. Defense': 43,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/helioptile',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/694.png'
}, {
  id: 695,
  name: 'Heliolisk',
  type: ['Electric', 'Normal'],
  base: {
    HP: 62,
    Attack: 55,
    Defense: 52,
    'Sp. Attack': 109,
    'Sp. Defense': 94,
    Speed: 109
  },
  url: 'https://www.pokemon.com/us/pokedex/heliolisk',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png'
}, {
  id: 696,
  name: 'Tyrunt',
  type: ['Rock', 'Dragon'],
  base: {
    HP: 58,
    Attack: 89,
    Defense: 77,
    'Sp. Attack': 45,
    'Sp. Defense': 45,
    Speed: 48
  },
  url: 'https://www.pokemon.com/us/pokedex/tyrunt',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/696.png'
}, {
  id: 697,
  name: 'Tyrantrum',
  type: ['Rock', 'Dragon'],
  base: {
    HP: 82,
    Attack: 121,
    Defense: 119,
    'Sp. Attack': 69,
    'Sp. Defense': 59,
    Speed: 71
  },
  url: 'https://www.pokemon.com/us/pokedex/tyrantrum',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/697.png'
}, {
  id: 698,
  name: 'Amaura',
  type: ['Rock', 'Ice'],
  base: {
    HP: 77,
    Attack: 59,
    Defense: 50,
    'Sp. Attack': 67,
    'Sp. Defense': 63,
    Speed: 46
  },
  url: 'https://www.pokemon.com/us/pokedex/amaura',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/698.png'
}, {
  id: 699,
  name: 'Aurorus',
  type: ['Rock', 'Ice'],
  base: {
    HP: 123,
    Attack: 77,
    Defense: 72,
    'Sp. Attack': 99,
    'Sp. Defense': 92,
    Speed: 58
  },
  url: 'https://www.pokemon.com/us/pokedex/aurorus',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/699.png'
}, {
  id: 700,
  name: 'Sylveon',
  type: ['Fairy'],
  base: {
    HP: 95,
    Attack: 65,
    Defense: 65,
    'Sp. Attack': 110,
    'Sp. Defense': 130,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/sylveon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png'
}, {
  id: 701,
  name: 'Hawlucha',
  type: ['Fighting', 'Flying'],
  base: {
    HP: 78,
    Attack: 92,
    Defense: 75,
    'Sp. Attack': 74,
    'Sp. Defense': 63,
    Speed: 118
  },
  url: 'https://www.pokemon.com/us/pokedex/hawlucha',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png'
}, {
  id: 702,
  name: 'Dedenne',
  type: ['Electric', 'Fairy'],
  base: {
    HP: 67,
    Attack: 58,
    Defense: 57,
    'Sp. Attack': 81,
    'Sp. Defense': 67,
    Speed: 101
  },
  url: 'https://www.pokemon.com/us/pokedex/dedenne',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png'
}, {
  id: 703,
  name: 'Carbink',
  type: ['Rock', 'Fairy'],
  base: {
    HP: 50,
    Attack: 50,
    Defense: 150,
    'Sp. Attack': 50,
    'Sp. Defense': 150,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/carbink',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/703.png'
}, {
  id: 704,
  name: 'Goomy',
  type: ['Dragon'],
  base: {
    HP: 45,
    Attack: 50,
    Defense: 35,
    'Sp. Attack': 55,
    'Sp. Defense': 75,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/goomy',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/704.png'
}, {
  id: 705,
  name: 'Sliggoo',
  type: ['Dragon'],
  base: {
    HP: 68,
    Attack: 75,
    Defense: 53,
    'Sp. Attack': 83,
    'Sp. Defense': 113,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/sliggoo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/705.png'
}, {
  id: 706,
  name: 'Goodra',
  type: ['Dragon'],
  base: {
    HP: 90,
    Attack: 100,
    Defense: 70,
    'Sp. Attack': 110,
    'Sp. Defense': 150,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/goodra',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png'
}, {
  id: 707,
  name: 'Klefki',
  type: ['Steel', 'Fairy'],
  base: {
    HP: 57,
    Attack: 80,
    Defense: 91,
    'Sp. Attack': 80,
    'Sp. Defense': 87,
    Speed: 75
  },
  url: 'https://www.pokemon.com/us/pokedex/klefki',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/707.png'
}, {
  id: 708,
  name: 'Phantump',
  type: ['Ghost', 'Grass'],
  base: {
    HP: 43,
    Attack: 70,
    Defense: 48,
    'Sp. Attack': 50,
    'Sp. Defense': 60,
    Speed: 38
  },
  url: 'https://www.pokemon.com/us/pokedex/phantump',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png'
}, {
  id: 709,
  name: 'Trevenant',
  type: ['Ghost', 'Grass'],
  base: {
    HP: 85,
    Attack: 110,
    Defense: 76,
    'Sp. Attack': 65,
    'Sp. Defense': 82,
    Speed: 56
  },
  url: 'https://www.pokemon.com/us/pokedex/trevenant',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png'
}, {
  id: 710,
  name: 'Pumpkaboo',
  type: ['Ghost', 'Grass'],
  base: {
    HP: 59,
    Attack: 66,
    Defense: 70,
    'Sp. Attack': 44,
    'Sp. Defense': 55,
    Speed: 41
  },
  url: 'https://www.pokemon.com/us/pokedex/pumpkaboo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/710.png'
}, {
  id: 711,
  name: 'Gourgeist',
  type: ['Ghost', 'Grass'],
  base: {
    HP: 85,
    Attack: 100,
    Defense: 122,
    'Sp. Attack': 58,
    'Sp. Defense': 75,
    Speed: 54
  },
  url: 'https://www.pokemon.com/us/pokedex/gourgeist',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/711.png'
}, {
  id: 712,
  name: 'Bergmite',
  type: ['Ice'],
  base: {
    HP: 55,
    Attack: 69,
    Defense: 85,
    'Sp. Attack': 32,
    'Sp. Defense': 35,
    Speed: 28
  },
  url: 'https://www.pokemon.com/us/pokedex/bergmite',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/712.png'
}, {
  id: 713,
  name: 'Avalugg',
  type: ['Ice'],
  base: {
    HP: 95,
    Attack: 117,
    Defense: 184,
    'Sp. Attack': 44,
    'Sp. Defense': 46,
    Speed: 28
  },
  url: 'https://www.pokemon.com/us/pokedex/avalugg',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/713.png'
}, {
  id: 714,
  name: 'Noibat',
  type: ['Flying', 'Dragon'],
  base: {
    HP: 40,
    Attack: 30,
    Defense: 35,
    'Sp. Attack': 45,
    'Sp. Defense': 40,
    Speed: 55
  },
  url: 'https://www.pokemon.com/us/pokedex/noibat',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png'
}, {
  id: 715,
  name: 'Noivern',
  type: ['Flying', 'Dragon'],
  base: {
    HP: 85,
    Attack: 70,
    Defense: 80,
    'Sp. Attack': 97,
    'Sp. Defense': 80,
    Speed: 123
  },
  url: 'https://www.pokemon.com/us/pokedex/noivern',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png'
}, {
  id: 716,
  name: 'Xerneas',
  type: ['Fairy'],
  base: {
    HP: 126,
    Attack: 131,
    Defense: 95,
    'Sp. Attack': 131,
    'Sp. Defense': 98,
    Speed: 99
  },
  url: 'https://www.pokemon.com/us/pokedex/xerneas',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png'
}, {
  id: 717,
  name: 'Yveltal',
  type: ['Dark', 'Flying'],
  base: {
    HP: 126,
    Attack: 131,
    Defense: 95,
    'Sp. Attack': 131,
    'Sp. Defense': 98,
    Speed: 99
  },
  url: 'https://www.pokemon.com/us/pokedex/yveltal',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png'
}, {
  id: 718,
  name: 'Zygarde',
  type: ['Dragon', 'Ground'],
  base: {
    HP: 108,
    Attack: 100,
    Defense: 121,
    'Sp. Attack': 81,
    'Sp. Defense': 95,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/zygarde',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/718.png'
}, {
  id: 719,
  name: 'Diancie',
  type: ['Rock', 'Fairy'],
  base: {
    HP: 50,
    Attack: 100,
    Defense: 150,
    'Sp. Attack': 100,
    'Sp. Defense': 150,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/diancie',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/719.png'
}, {
  id: 720,
  name: 'Hoopa',
  type: ['Psychic', 'Ghost'],
  base: {
    HP: 80,
    Attack: 110,
    Defense: 60,
    'Sp. Attack': 150,
    'Sp. Defense': 130,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/hoopa',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/720.png'
}, {
  id: 721,
  name: 'Volcanion',
  type: ['Fire', 'Water'],
  base: {
    HP: 80,
    Attack: 110,
    Defense: 120,
    'Sp. Attack': 130,
    'Sp. Defense': 90,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/volcanion',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/721.png'
}, {
  id: 722,
  name: 'Rowlet',
  type: ['Grass', 'Flying'],
  base: {
    HP: 68,
    Attack: 55,
    Defense: 55,
    'Sp. Attack': 50,
    'Sp. Defense': 50,
    Speed: 42
  },
  url: 'https://www.pokemon.com/us/pokedex/rowlet',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png'
}, {
  id: 723,
  name: 'Dartrix',
  type: ['Grass', 'Flying'],
  base: {
    HP: 78,
    Attack: 75,
    Defense: 75,
    'Sp. Attack': 70,
    'Sp. Defense': 70,
    Speed: 52
  },
  url: 'https://www.pokemon.com/us/pokedex/dartrix',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/723.png'
}, {
  id: 724,
  name: 'Decidueye',
  type: ['Grass', 'Ghost'],
  base: {
    HP: 78,
    Attack: 107,
    Defense: 75,
    'Sp. Attack': 100,
    'Sp. Defense': 100,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/decidueye',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png'
}, {
  id: 725,
  name: 'Litten',
  type: ['Fire'],
  base: {
    HP: 45,
    Attack: 65,
    Defense: 40,
    'Sp. Attack': 60,
    'Sp. Defense': 40,
    Speed: 70
  },
  url: 'https://www.pokemon.com/us/pokedex/litten',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png'
}, {
  id: 726,
  name: 'Torracat',
  type: ['Fire'],
  base: {
    HP: 65,
    Attack: 85,
    Defense: 50,
    'Sp. Attack': 80,
    'Sp. Defense': 50,
    Speed: 90
  },
  url: 'https://www.pokemon.com/us/pokedex/torracat',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/726.png'
}, {
  id: 727,
  name: 'Incineroar',
  type: ['Fire', 'Dark'],
  base: {
    HP: 95,
    Attack: 115,
    Defense: 90,
    'Sp. Attack': 80,
    'Sp. Defense': 90,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/incineroar',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png'
}, {
  id: 728,
  name: 'Popplio',
  type: ['Water'],
  base: {
    HP: 50,
    Attack: 54,
    Defense: 54,
    'Sp. Attack': 66,
    'Sp. Defense': 56,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/popplio',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png'
}, {
  id: 729,
  name: 'Brionne',
  type: ['Water'],
  base: {
    HP: 60,
    Attack: 69,
    Defense: 69,
    'Sp. Attack': 91,
    'Sp. Defense': 81,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/brionne',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/729.png'
}, {
  id: 730,
  name: 'Primarina',
  type: ['Water', 'Fairy'],
  base: {
    HP: 80,
    Attack: 74,
    Defense: 74,
    'Sp. Attack': 126,
    'Sp. Defense': 116,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/primarina',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png'
}, {
  id: 731,
  name: 'Pikipek',
  type: ['Normal', 'Flying'],
  base: {
    HP: 35,
    Attack: 75,
    Defense: 30,
    'Sp. Attack': 30,
    'Sp. Defense': 30,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/pikipek',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/731.png'
}, {
  id: 732,
  name: 'Trumbeak',
  type: ['Normal', 'Flying'],
  base: {
    HP: 55,
    Attack: 85,
    Defense: 50,
    'Sp. Attack': 40,
    'Sp. Defense': 50,
    Speed: 75
  },
  url: 'https://www.pokemon.com/us/pokedex/trumbeak',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/732.png'
}, {
  id: 733,
  name: 'Toucannon',
  type: ['Normal', 'Flying'],
  base: {
    HP: 80,
    Attack: 120,
    Defense: 75,
    'Sp. Attack': 75,
    'Sp. Defense': 75,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/toucannon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/733.png'
}, {
  id: 734,
  name: 'Yungoos',
  type: ['Normal'],
  base: {
    HP: 48,
    Attack: 70,
    Defense: 30,
    'Sp. Attack': 30,
    'Sp. Defense': 30,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/yungoos',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/734.png'
}, {
  id: 735,
  name: 'Gumshoos',
  type: ['Normal'],
  base: {
    HP: 88,
    Attack: 110,
    Defense: 60,
    'Sp. Attack': 55,
    'Sp. Defense': 60,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/gumshoos',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/735.png'
}, {
  id: 736,
  name: 'Grubbin',
  type: ['Bug'],
  base: {
    HP: 47,
    Attack: 62,
    Defense: 45,
    'Sp. Attack': 55,
    'Sp. Defense': 45,
    Speed: 46
  },
  url: 'https://www.pokemon.com/us/pokedex/grubbin',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/736.png'
}, {
  id: 737,
  name: 'Charjabug',
  type: ['Bug', 'Electric'],
  base: {
    HP: 57,
    Attack: 82,
    Defense: 95,
    'Sp. Attack': 55,
    'Sp. Defense': 75,
    Speed: 36
  },
  url: 'https://www.pokemon.com/us/pokedex/charjabug',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/737.png'
}, {
  id: 738,
  name: 'Vikavolt',
  type: ['Bug', 'Electric'],
  base: {
    HP: 77,
    Attack: 70,
    Defense: 90,
    'Sp. Attack': 145,
    'Sp. Defense': 75,
    Speed: 43
  },
  url: 'https://www.pokemon.com/us/pokedex/vikavolt',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/738.png'
}, {
  id: 739,
  name: 'Crabrawler',
  type: ['Fighting'],
  base: {
    HP: 47,
    Attack: 82,
    Defense: 57,
    'Sp. Attack': 42,
    'Sp. Defense': 47,
    Speed: 63
  },
  url: 'https://www.pokemon.com/us/pokedex/crabrawler',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/739.png'
}, {
  id: 740,
  name: 'Crabominable',
  type: ['Fighting', 'Ice'],
  base: {
    HP: 97,
    Attack: 132,
    Defense: 77,
    'Sp. Attack': 62,
    'Sp. Defense': 67,
    Speed: 43
  },
  url: 'https://www.pokemon.com/us/pokedex/crabominable',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png'
}, {
  id: 741,
  name: 'Oricorio',
  type: ['Fire', 'Flying'],
  base: {
    HP: 75,
    Attack: 70,
    Defense: 70,
    'Sp. Attack': 98,
    'Sp. Defense': 70,
    Speed: 93
  },
  url: 'https://www.pokemon.com/us/pokedex/oricorio',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/741.png'
}, {
  id: 742,
  name: 'Cutiefly',
  type: ['Bug', 'Fairy'],
  base: {
    HP: 40,
    Attack: 45,
    Defense: 40,
    'Sp. Attack': 55,
    'Sp. Defense': 40,
    Speed: 84
  },
  url: 'https://www.pokemon.com/us/pokedex/cutiefly',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/742.png'
}, {
  id: 743,
  name: 'Ribombee',
  type: ['Bug', 'Fairy'],
  base: {
    HP: 60,
    Attack: 55,
    Defense: 60,
    'Sp. Attack': 95,
    'Sp. Defense': 70,
    Speed: 124
  },
  url: 'https://www.pokemon.com/us/pokedex/ribombee',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png'
}, {
  id: 744,
  name: 'Rockruff',
  type: ['Rock'],
  base: {
    HP: 45,
    Attack: 65,
    Defense: 40,
    'Sp. Attack': 30,
    'Sp. Defense': 40,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/rockruff',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png'
}, {
  id: 745,
  name: 'Lycanroc',
  type: ['Rock'],
  base: {
    HP: 75,
    Attack: 115,
    Defense: 65,
    'Sp. Attack': 55,
    'Sp. Defense': 65,
    Speed: 112
  },
  url: 'https://www.pokemon.com/us/pokedex/lycanroc',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png'
}, {
  id: 746,
  name: 'Wishiwashi',
  type: ['Water'],
  base: {
    HP: 45,
    Attack: 20,
    Defense: 20,
    'Sp. Attack': 25,
    'Sp. Defense': 25,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/wishiwashi',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/746.png'
}, {
  id: 747,
  name: 'Mareanie',
  type: ['Poison', 'Water'],
  base: {
    HP: 50,
    Attack: 53,
    Defense: 62,
    'Sp. Attack': 43,
    'Sp. Defense': 52,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/mareanie',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/747.png'
}, {
  id: 748,
  name: 'Toxapex',
  type: ['Poison', 'Water'],
  base: {
    HP: 50,
    Attack: 63,
    Defense: 152,
    'Sp. Attack': 53,
    'Sp. Defense': 142,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/toxapex',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png'
}, {
  id: 749,
  name: 'Mudbray',
  type: ['Ground'],
  base: {
    HP: 70,
    Attack: 100,
    Defense: 70,
    'Sp. Attack': 45,
    'Sp. Defense': 55,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/mudbray',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/749.png'
}, {
  id: 750,
  name: 'Mudsdale',
  type: ['Ground'],
  base: {
    HP: 100,
    Attack: 125,
    Defense: 100,
    'Sp. Attack': 55,
    'Sp. Defense': 85,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/mudsdale',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/750.png'
}, {
  id: 751,
  name: 'Dewpider',
  type: ['Water', 'Bug'],
  base: {
    HP: 38,
    Attack: 40,
    Defense: 52,
    'Sp. Attack': 40,
    'Sp. Defense': 72,
    Speed: 27
  },
  url: 'https://www.pokemon.com/us/pokedex/dewpider',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/751.png'
}, {
  id: 752,
  name: 'Araquanid',
  type: ['Water', 'Bug'],
  base: {
    HP: 68,
    Attack: 70,
    Defense: 92,
    'Sp. Attack': 50,
    'Sp. Defense': 132,
    Speed: 42
  },
  url: 'https://www.pokemon.com/us/pokedex/araquanid',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/752.png'
}, {
  id: 753,
  name: 'Fomantis',
  type: ['Grass'],
  base: {
    HP: 40,
    Attack: 55,
    Defense: 35,
    'Sp. Attack': 50,
    'Sp. Defense': 35,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/fomantis',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/753.png'
}, {
  id: 754,
  name: 'Lurantis',
  type: ['Grass'],
  base: {
    HP: 70,
    Attack: 105,
    Defense: 90,
    'Sp. Attack': 80,
    'Sp. Defense': 90,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/lurantis',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png'
}, {
  id: 755,
  name: 'Morelull',
  type: ['Grass', 'Fairy'],
  base: {
    HP: 40,
    Attack: 35,
    Defense: 55,
    'Sp. Attack': 65,
    'Sp. Defense': 75,
    Speed: 15
  },
  url: 'https://www.pokemon.com/us/pokedex/morelull',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/755.png'
}, {
  id: 756,
  name: 'Shiinotic',
  type: ['Grass', 'Fairy'],
  base: {
    HP: 60,
    Attack: 45,
    Defense: 80,
    'Sp. Attack': 90,
    'Sp. Defense': 100,
    Speed: 30
  },
  url: 'https://www.pokemon.com/us/pokedex/shiinotic',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/756.png'
}, {
  id: 757,
  name: 'Salandit',
  type: ['Poison', 'Fire'],
  base: {
    HP: 48,
    Attack: 44,
    Defense: 40,
    'Sp. Attack': 71,
    'Sp. Defense': 40,
    Speed: 77
  },
  url: 'https://www.pokemon.com/us/pokedex/salandit',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/757.png'
}, {
  id: 758,
  name: 'Salazzle',
  type: ['Poison', 'Fire'],
  base: {
    HP: 68,
    Attack: 64,
    Defense: 60,
    'Sp. Attack': 111,
    'Sp. Defense': 60,
    Speed: 117
  },
  url: 'https://www.pokemon.com/us/pokedex/salazzle',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png'
}, {
  id: 759,
  name: 'Stufful',
  type: ['Normal', 'Fighting'],
  base: {
    HP: 70,
    Attack: 75,
    Defense: 50,
    'Sp. Attack': 45,
    'Sp. Defense': 50,
    Speed: 50
  },
  url: 'https://www.pokemon.com/us/pokedex/stufful',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/759.png'
}, {
  id: 760,
  name: 'Bewear',
  type: ['Normal', 'Fighting'],
  base: {
    HP: 120,
    Attack: 125,
    Defense: 80,
    'Sp. Attack': 55,
    'Sp. Defense': 60,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/bewear',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/760.png'
}, {
  id: 761,
  name: 'Bounsweet',
  type: ['Grass'],
  base: {
    HP: 42,
    Attack: 30,
    Defense: 38,
    'Sp. Attack': 30,
    'Sp. Defense': 38,
    Speed: 32
  },
  url: 'https://www.pokemon.com/us/pokedex/bounsweet',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/761.png'
}, {
  id: 762,
  name: 'Steenee',
  type: ['Grass'],
  base: {
    HP: 52,
    Attack: 40,
    Defense: 48,
    'Sp. Attack': 40,
    'Sp. Defense': 48,
    Speed: 62
  },
  url: 'https://www.pokemon.com/us/pokedex/steenee',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/762.png'
}, {
  id: 763,
  name: 'Tsareena',
  type: ['Grass'],
  base: {
    HP: 72,
    Attack: 120,
    Defense: 98,
    'Sp. Attack': 50,
    'Sp. Defense': 98,
    Speed: 72
  },
  url: 'https://www.pokemon.com/us/pokedex/tsareena',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/763.png'
}, {
  id: 764,
  name: 'Comfey',
  type: ['Fairy'],
  base: {
    HP: 51,
    Attack: 52,
    Defense: 90,
    'Sp. Attack': 82,
    'Sp. Defense': 110,
    Speed: 100
  },
  url: 'https://www.pokemon.com/us/pokedex/comfey',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/764.png'
}, {
  id: 765,
  name: 'Oranguru',
  type: ['Normal', 'Psychic'],
  base: {
    HP: 90,
    Attack: 60,
    Defense: 80,
    'Sp. Attack': 90,
    'Sp. Defense': 110,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/oranguru',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/765.png'
}, {
  id: 766,
  name: 'Passimian',
  type: ['Fighting'],
  base: {
    HP: 100,
    Attack: 120,
    Defense: 90,
    'Sp. Attack': 40,
    'Sp. Defense': 60,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/passimian',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/766.png'
}, {
  id: 767,
  name: 'Wimpod',
  type: ['Bug', 'Water'],
  base: {
    HP: 25,
    Attack: 35,
    Defense: 40,
    'Sp. Attack': 20,
    'Sp. Defense': 30,
    Speed: 80
  },
  url: 'https://www.pokemon.com/us/pokedex/wimpod',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/767.png'
}, {
  id: 768,
  name: 'Golisopod',
  type: ['Bug', 'Water'],
  base: {
    HP: 75,
    Attack: 125,
    Defense: 140,
    'Sp. Attack': 60,
    'Sp. Defense': 90,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/golisopod',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/768.png'
}, {
  id: 769,
  name: 'Sandygast',
  type: ['Ghost', 'Ground'],
  base: {
    HP: 55,
    Attack: 55,
    Defense: 80,
    'Sp. Attack': 70,
    'Sp. Defense': 45,
    Speed: 15
  },
  url: 'https://www.pokemon.com/us/pokedex/sandygast',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/769.png'
}, {
  id: 770,
  name: 'Palossand',
  type: ['Ghost', 'Ground'],
  base: {
    HP: 85,
    Attack: 75,
    Defense: 110,
    'Sp. Attack': 100,
    'Sp. Defense': 75,
    Speed: 35
  },
  url: 'https://www.pokemon.com/us/pokedex/palossand',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/770.png'
}, {
  id: 771,
  name: 'Pyukumuku',
  type: ['Water'],
  base: {
    HP: 55,
    Attack: 60,
    Defense: 130,
    'Sp. Attack': 30,
    'Sp. Defense': 130,
    Speed: 5
  },
  url: 'https://www.pokemon.com/us/pokedex/pyukumuku',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/771.png'
}, {
  id: 772,
  name: 'Type: Null',
  type: ['Normal'],
  base: {
    HP: 95,
    Attack: 95,
    Defense: 95,
    'Sp. Attack': 95,
    'Sp. Defense': 95,
    Speed: 59
  },
  url: 'https://www.pokemon.com/us/pokedex/type: null',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/772.png'
}, {
  id: 773,
  name: 'Silvally',
  type: ['Normal'],
  base: {
    HP: 95,
    Attack: 95,
    Defense: 95,
    'Sp. Attack': 95,
    'Sp. Defense': 95,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/silvally',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/773.png'
}, {
  id: 774,
  name: 'Minior',
  type: ['Rock', 'Flying'],
  base: {
    HP: 60,
    Attack: 60,
    Defense: 100,
    'Sp. Attack': 60,
    'Sp. Defense': 100,
    Speed: 60
  },
  url: 'https://www.pokemon.com/us/pokedex/minior',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/774.png'
}, {
  id: 775,
  name: 'Komala',
  type: ['Normal'],
  base: {
    HP: 65,
    Attack: 115,
    Defense: 65,
    'Sp. Attack': 75,
    'Sp. Defense': 95,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/komala',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/775.png'
}, {
  id: 776,
  name: 'Turtonator',
  type: ['Fire', 'Dragon'],
  base: {
    HP: 60,
    Attack: 78,
    Defense: 135,
    'Sp. Attack': 91,
    'Sp. Defense': 85,
    Speed: 36
  },
  url: 'https://www.pokemon.com/us/pokedex/turtonator',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/776.png'
}, {
  id: 777,
  name: 'Togedemaru',
  type: ['Electric', 'Steel'],
  base: {
    HP: 65,
    Attack: 98,
    Defense: 63,
    'Sp. Attack': 40,
    'Sp. Defense': 73,
    Speed: 96
  },
  url: 'https://www.pokemon.com/us/pokedex/togedemaru',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/777.png'
}, {
  id: 778,
  name: 'Mimikyu',
  type: ['Ghost', 'Fairy'],
  base: {
    HP: 55,
    Attack: 90,
    Defense: 80,
    'Sp. Attack': 50,
    'Sp. Defense': 105,
    Speed: 96
  },
  url: 'https://www.pokemon.com/us/pokedex/mimikyu',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png'
}, {
  id: 779,
  name: 'Bruxish',
  type: ['Water', 'Psychic'],
  base: {
    HP: 68,
    Attack: 105,
    Defense: 70,
    'Sp. Attack': 70,
    'Sp. Defense': 70,
    Speed: 92
  },
  url: 'https://www.pokemon.com/us/pokedex/bruxish',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/779.png'
}, {
  id: 780,
  name: 'Drampa',
  type: ['Normal', 'Dragon'],
  base: {
    HP: 78,
    Attack: 60,
    Defense: 85,
    'Sp. Attack': 135,
    'Sp. Defense': 91,
    Speed: 36
  },
  url: 'https://www.pokemon.com/us/pokedex/drampa',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/780.png'
}, {
  id: 781,
  name: 'Dhelmise',
  type: ['Ghost', 'Grass'],
  base: {
    HP: 70,
    Attack: 131,
    Defense: 100,
    'Sp. Attack': 86,
    'Sp. Defense': 90,
    Speed: 40
  },
  url: 'https://www.pokemon.com/us/pokedex/dhelmise',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/781.png'
}, {
  id: 782,
  name: 'Jangmo-o',
  type: ['Dragon'],
  base: {
    HP: 45,
    Attack: 55,
    Defense: 65,
    'Sp. Attack': 45,
    'Sp. Defense': 45,
    Speed: 45
  },
  url: 'https://www.pokemon.com/us/pokedex/jangmo-o',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/782.png'
}, {
  id: 783,
  name: 'Hakamo-o',
  type: ['Dragon', 'Fighting'],
  base: {
    HP: 55,
    Attack: 75,
    Defense: 90,
    'Sp. Attack': 65,
    'Sp. Defense': 70,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/hakamo-o',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/783.png'
}, {
  id: 784,
  name: 'Kommo-o',
  type: ['Dragon', 'Fighting'],
  base: {
    HP: 75,
    Attack: 110,
    Defense: 125,
    'Sp. Attack': 100,
    'Sp. Defense': 105,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/kommo-o',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png'
}, {
  id: 785,
  name: 'Tapu Koko',
  type: ['Electric', 'Fairy'],
  base: {
    HP: 70,
    Attack: 115,
    Defense: 85,
    'Sp. Attack': 95,
    'Sp. Defense': 75,
    Speed: 130
  },
  url: 'https://www.pokemon.com/us/pokedex/tapu koko',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/785.png'
}, {
  id: 786,
  name: 'Tapu Lele',
  type: ['Psychic', 'Fairy'],
  base: {
    HP: 70,
    Attack: 85,
    Defense: 75,
    'Sp. Attack': 130,
    'Sp. Defense': 115,
    Speed: 95
  },
  url: 'https://www.pokemon.com/us/pokedex/tapu lele',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/786.png'
}, {
  id: 787,
  name: 'Tapu Bulu',
  type: ['Grass', 'Fairy'],
  base: {
    HP: 70,
    Attack: 130,
    Defense: 115,
    'Sp. Attack': 85,
    'Sp. Defense': 95,
    Speed: 75
  },
  url: 'https://www.pokemon.com/us/pokedex/tapu bulu',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/787.png'
}, {
  id: 788,
  name: 'Tapu Fini',
  type: ['Water', 'Fairy'],
  base: {
    HP: 70,
    Attack: 75,
    Defense: 115,
    'Sp. Attack': 95,
    'Sp. Defense': 130,
    Speed: 85
  },
  url: 'https://www.pokemon.com/us/pokedex/tapu fini',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/788.png'
}, {
  id: 789,
  name: 'Cosmog',
  type: ['Psychic'],
  base: {
    HP: 43,
    Attack: 29,
    Defense: 31,
    'Sp. Attack': 29,
    'Sp. Defense': 31,
    Speed: 37
  },
  url: 'https://www.pokemon.com/us/pokedex/cosmog',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/789.png'
}, {
  id: 790,
  name: 'Cosmoem',
  type: ['Psychic'],
  base: {
    HP: 43,
    Attack: 29,
    Defense: 131,
    'Sp. Attack': 29,
    'Sp. Defense': 131,
    Speed: 37
  },
  url: 'https://www.pokemon.com/us/pokedex/cosmoem',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/790.png'
}, {
  id: 791,
  name: 'Solgaleo',
  type: ['Psychic', 'Steel'],
  base: {
    HP: 137,
    Attack: 137,
    Defense: 107,
    'Sp. Attack': 113,
    'Sp. Defense': 89,
    Speed: 97
  },
  url: 'https://www.pokemon.com/us/pokedex/solgaleo',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png'
}, {
  id: 792,
  name: 'Lunala',
  type: ['Psychic', 'Ghost'],
  base: {
    HP: 137,
    Attack: 113,
    Defense: 89,
    'Sp. Attack': 137,
    'Sp. Defense': 107,
    Speed: 97
  },
  url: 'https://www.pokemon.com/us/pokedex/lunala',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png'
}, {
  id: 793,
  name: 'Nihilego',
  type: ['Rock', 'Poison'],
  base: {
    HP: 109,
    Attack: 53,
    Defense: 47,
    'Sp. Attack': 127,
    'Sp. Defense': 131,
    Speed: 103
  },
  url: 'https://www.pokemon.com/us/pokedex/nihilego',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/793.png'
}, {
  id: 794,
  name: 'Buzzwole',
  type: ['Bug', 'Fighting'],
  base: {
    HP: 107,
    Attack: 139,
    Defense: 139,
    'Sp. Attack': 53,
    'Sp. Defense': 53,
    Speed: 79
  },
  url: 'https://www.pokemon.com/us/pokedex/buzzwole',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/794.png'
}, {
  id: 795,
  name: 'Pheromosa',
  type: ['Bug', 'Fighting'],
  base: {
    HP: 71,
    Attack: 137,
    Defense: 37,
    'Sp. Attack': 137,
    'Sp. Defense': 37,
    Speed: 151
  },
  url: 'https://www.pokemon.com/us/pokedex/pheromosa',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/795.png'
}, {
  id: 796,
  name: 'Xurkitree',
  type: ['Electric'],
  base: {
    HP: 83,
    Attack: 89,
    Defense: 71,
    'Sp. Attack': 173,
    'Sp. Defense': 71,
    Speed: 83
  },
  url: 'https://www.pokemon.com/us/pokedex/xurkitree',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/796.png'
}, {
  id: 797,
  name: 'Celesteela',
  type: ['Steel', 'Flying'],
  base: {
    HP: 97,
    Attack: 101,
    Defense: 103,
    'Sp. Attack': 107,
    'Sp. Defense': 101,
    Speed: 61
  },
  url: 'https://www.pokemon.com/us/pokedex/celesteela',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/797.png'
}, {
  id: 798,
  name: 'Kartana',
  type: ['Grass', 'Steel'],
  base: {
    HP: 59,
    Attack: 181,
    Defense: 131,
    'Sp. Attack': 59,
    'Sp. Defense': 31,
    Speed: 109
  },
  url: 'https://www.pokemon.com/us/pokedex/kartana',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/798.png'
}, {
  id: 799,
  name: 'Guzzlord',
  type: ['Dark', 'Dragon'],
  base: {
    HP: 223,
    Attack: 101,
    Defense: 53,
    'Sp. Attack': 97,
    'Sp. Defense': 53,
    Speed: 43
  },
  url: 'https://www.pokemon.com/us/pokedex/guzzlord',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/799.png'
}, {
  id: 800,
  name: 'Necrozma',
  type: ['Psychic'],
  base: {
    HP: 97,
    Attack: 107,
    Defense: 101,
    'Sp. Attack': 127,
    'Sp. Defense': 89,
    Speed: 79
  },
  url: 'https://www.pokemon.com/us/pokedex/necrozma',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/800.png'
}, {
  id: 801,
  name: 'Magearna',
  type: ['Steel', 'Fairy'],
  base: {
    HP: 80,
    Attack: 95,
    Defense: 115,
    'Sp. Attack': 130,
    'Sp. Defense': 115,
    Speed: 65
  },
  url: 'https://www.pokemon.com/us/pokedex/magearna',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/801.png'
}, {
  id: 802,
  name: 'Marshadow',
  type: ['Fighting', 'Ghost'],
  base: {
    HP: 90,
    Attack: 125,
    Defense: 80,
    'Sp. Attack': 90,
    'Sp. Defense': 90,
    Speed: 125
  },
  url: 'https://www.pokemon.com/us/pokedex/marshadow',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png'
}, {
  id: 803,
  name: 'Poipole',
  type: ['Poison'],
  base: {
    HP: 67,
    Attack: 73,
    Defense: 67,
    'Sp. Attack': 73,
    'Sp. Defense': 67,
    Speed: 73
  },
  url: 'https://www.pokemon.com/us/pokedex/poipole',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/803.png'
}, {
  id: 804,
  name: 'Naganadel',
  type: ['Poison', 'Dragon'],
  base: {
    HP: 73,
    Attack: 73,
    Defense: 73,
    'Sp. Attack': 127,
    'Sp. Defense': 73,
    Speed: 121
  },
  url: 'https://www.pokemon.com/us/pokedex/naganadel',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/804.png'
}, {
  id: 805,
  name: 'Stakataka',
  type: ['Rock', 'Steel'],
  base: {
    HP: 61,
    Attack: 131,
    Defense: 211,
    'Sp. Attack': 53,
    'Sp. Defense': 101,
    Speed: 13
  },
  url: 'https://www.pokemon.com/us/pokedex/stakataka',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/805.png'
}, {
  id: 806,
  name: 'Blacephalon',
  type: ['Fire', 'Ghost'],
  base: {
    HP: 53,
    Attack: 127,
    Defense: 53,
    'Sp. Attack': 151,
    'Sp. Defense': 79,
    Speed: 107
  },
  url: 'https://www.pokemon.com/us/pokedex/blacephalon',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/806.png'
}, {
  id: 807,
  name: 'Zeraora',
  type: ['Electric'],
  base: {
    HP: 88,
    Attack: 112,
    Defense: 75,
    'Sp. Attack': 102,
    'Sp. Defense': 80,
    Speed: 143
  },
  url: 'https://www.pokemon.com/us/pokedex/zeraora',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/807.png'
}, {
  id: 808,
  name: 'Meltan',
  type: ['Steel'],
  base: {
    HP: 46,
    Attack: 65,
    Defense: 65,
    'Sp. Attack': 55,
    'Sp. Defense': 35,
    Speed: 34
  },
  url: 'https://www.pokemon.com/us/pokedex/meltan',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/808.png'
}, {
  id: 809,
  name: 'Melmetal',
  type: ['Steel'],
  base: {
    HP: 135,
    Attack: 143,
    Defense: 143,
    'Sp. Attack': 80,
    'Sp. Defense': 65,
    Speed: 34
  },
  url: 'https://www.pokemon.com/us/pokedex/melmetal',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/809.png'
}]
