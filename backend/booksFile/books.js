const booksData = [
  {
    title: "Whispers in the Shadows",
    author: "Ava Black",
    genres: ["Horror", "Mystery"],
    rating: 3.8,
  },
  {
    title: "Galactic Odyssey",
    author: "Orion White",
    genres: ["Science Fiction", "Adventure"],
    rating: 3.5,
  },
  {
    title: "Love's Labyrinth",
    author: "Scarlett Grey",
    genres: ["Romance", "Drama"],
    rating: 3.9,
  },
  {
    title: "Clockwork Chronicles",
    author: "Sophia Davis",
    genres: ["Steampunk", "Fantasy"],
    rating: 3.7,
  },
  {
    title: "Fading Flames",
    author: "Tristan Turner",
    genres: ["Romance", "Fantasy"],
    rating: 3.2,
  },
  {
    title: "Enchanted Whispers",
    author: "Lila White",
    genres: ["Fantasy", "Mystery"],
    rating: 3.6,
  },
  {
    title: "Tales of Atlantis",
    author: "Neptune Turner",
    genres: ["Adventure", "Fantasy"],
    rating: 3.4,
  },
  {
    title: "Cosmic Secrets",
    author: "Stella Morgan",
    genres: ["Science Fiction", "Mystery"],
    rating: 3.1,
  },
  {
    title: "Starlit Serenade",
    author: "Leo Roberts",
    genres: ["Romance", "Science Fiction"],
    rating: 3.3,
  },
  {
    title: "Dreamscape",
    author: "Ivy Harris",
    genres: ["Fantasy", "Adventure"],
    rating: 3.0,
  },
  {
    title: "Ephemeral Dreams",
    author: "Ethan Black",
    genres: ["Mystery", "Romance"],
    rating: 2.8,
  },
  {
    title: "Quantum Illusions",
    author: "Nina Turner",
    genres: ["Science Fiction", "Thriller"],
    rating: 2.5,
  },
  {
    title: "Melodies of Eternity",
    author: "Caleb Morgan",
    genres: ["Romance", "Fantasy"],
    rating: 2.9,
  },
  {
    title: "Whispers in Time",
    author: "Oliver White",
    genres: ["Fantasy", "Adventure"],
    rating: 2.7,
  },
  {
    title: "Forgotten Echoes",
    author: "Ella Davis",
    genres: ["Adventure", "Mystery"],
    rating: 2.6,
  },
  {
    title: "Wandering Souls",
    author: "Eva Turner",
    genres: ["Fantasy", "Romance"],
    rating: 2.4,
  },
  {
    title: "Celestial Serenity",
    author: "Noah Morgan",
    genres: ["Science Fiction", "Adventure"],
    rating: 2.3,
  },
  {
    title: "Whispers of the Void",
    author: "Liam Black",
    genres: ["Horror", "Mystery"],
    rating: 2.2,
  },
  {
    title: "Journey to Utopia",
    author: "Zara Turner",
    genres: ["Adventure", "Drama"],
    rating: 2.1,
  },
  {
    title: "The Whispering Mountains",
    author: "Mila Harris",
    genres: ["Fantasy", "Mystery"],
    rating: 2.0,
  },
  {
    title: "Stardust Reverie",
    author: "Evan Turner",
    genres: ["Science Fiction", "Romance"],
    rating: 1.9,
  },
  {
    title: "Echoes of Tomorrow",
    author: "Sophie Black",
    genres: ["Fantasy", "Adventure"],
    rating: 1.8,
  },
  {
    title: "The Cryptic Cipher",
    author: "Aiden White",
    genres: ["Mystery", "Thriller"],
    rating: 1.7,
  },
  {
    title: "Spectral Symphony",
    author: "Ella Turner",
    genres: ["Fantasy", "Adventure"],
    rating: 1.6,
  },
  {
    title: "Whispers in the Mist",
    author: "Adrian Black",
    genres: ["Horror", "Mystery"],
    rating: 1.5,
  },
  {
    title: "Solar Odyssey",
    author: "Nova White",
    genres: ["Science Fiction", "Adventure"],
    rating: 2.0,
  },
  {
    title: "Broken Melodies",
    author: "Harmony Davis",
    genres: ["Romance", "Drama"],
    rating: 1.8,
  },
  {
    title: "Mechanical Dreams",
    author: "Felix Turner",
    genres: ["Steampunk", "Fantasy"],
    rating: 1.2,
  },
  {
    title: "Fading Sparks",
    author: "Luna Turner",
    genres: ["Romance", "Fantasy"],
    rating: 1.9,
  },
  {
    title: "Enigmatic Whispers",
    author: "Blake Black",
    genres: ["Fantasy", "Mystery"],
    rating: 1.6,
  },
  {
    title: "Lost Chronicles",
    author: "Aiden Turner",
    genres: ["Adventure", "Fantasy"],
    rating: 1.3,
  },
  {
    title: "Cosmic Echoes",
    author: "Stella White",
    genres: ["Science Fiction", "Mystery"],
    rating: 1.1,
  },
  {
    title: "Starfall Serenade",
    author: "Leo Black",
    genres: ["Romance", "Science Fiction"],
    rating: 1.4,
  },
  {
    title: "Dreambound",
    author: "Ivy Turner",
    genres: ["Fantasy", "Adventure"],
    rating: 1.0,
  },
  {
    title: "Vanishing Dreams",
    author: "Ethan White",
    genres: ["Mystery", "Romance"],
    rating: 0.8,
  },
  {
    title: "Quantum Shadows",
    author: "Nora Turner",
    genres: ["Science Fiction", "Thriller"],
    rating: 0.5,
  },
  {
    title: "Eternal Twilight",
    author: "Elijah Black",
    genres: ["Romance", "Fantasy"],
    rating: 0.9,
  },
  {
    title: "Whispers of Fate",
    author: "Olivia White",
    genres: ["Adventure", "Mystery"],
    rating: 0.7,
  },
  {
    title: "Forgotten Realms",
    author: "Ella Turner",
    genres: ["Fantasy", "Romance"],
    rating: 0.6,
  },
  {
    title: "Celestial Secrets",
    author: "Noah White",
    genres: ["Science Fiction", "Adventure"],
    rating: 0.3,
  },
  {
    title: "Whispers Beyond the Stars",
    author: "Liam Turner",
    genres: ["Horror", "Mystery"],
    rating: 0.2,
  },
  {
    title: "Utopian Journey",
    author: "Zane Turner",
    genres: ["Adventure", "Drama"],
    rating: 0.1,
  },
  {
    title: "The Silent Caverns",
    author: "Mila Turner",
    genres: ["Fantasy", "Mystery"],
    rating: 0.4,
  },
  {
    title: "Stardust Rhapsody",
    author: "Evan Black",
    genres: ["Science Fiction", "Romance"],
    rating: 0.9,
  },
  {
    title: "Echoes of Eternity",
    author: "Sophie White",
    genres: ["Fantasy", "Adventure"],
    rating: 0.8,
  },
  {
    title: "The Cryptic Enigma",
    author: "Aidan Black",
    genres: ["Mystery", "Thriller"],
    rating: 0.7,
  },
  {
    title: "Spectral Sonata",
    author: "Ella White",
    genres: ["Fantasy", "Adventure"],
    rating: 0.6,
  },
  {
    title: "Whispers of the Abyss",
    author: "Aiden Turner",
    genres: ["Horror", "Mystery"],
    rating: 4.5,
  },
  {
    title: "Lunar Chronicles",
    author: "Luna Black",
    genres: ["Science Fiction", "Adventure"],
    rating: 4.2,
  },
  {
    title: "Heartstrings",
    author: "Harper White",
    genres: ["Romance", "Drama"],
    rating: 4.8,
  },
  {
    title: "The Clockwork Odyssey",
    author: "Oscar Davis",
    genres: ["Steampunk", "Fantasy"],
    rating: 4.6,
  },
  {
    title: "Eternal Flames",
    author: "Samantha Turner",
    genres: ["Romance", "Fantasy"],
    rating: 4.3,
  },
  {
    title: "Mystic Echo",
    author: "Elijah White",
    genres: ["Fantasy", "Mystery"],
    rating: 4.7,
  },
  {
    title: "Chronicles of Elysium",
    author: "Ava Turner",
    genres: ["Adventure", "Fantasy"],
    rating: 4.4,
  },
  {
    title: "Whispers in the Cosmos",
    author: "Diana Morgan",
    genres: ["Science Fiction", "Mystery"],
    rating: 4.9,
  },
  {
    title: "Star-Crossed Saga",
    author: "Max Roberts",
    genres: ["Romance", "Science Fiction"],
    rating: 4.1,
  },
  {
    title: "Realm of Dreams",
    author: "Isaac Harris",
    genres: ["Fantasy", "Adventure"],
    rating: 4.6,
  },
  {
    title: "Ephemeral Whispers",
    author: "Sophie Black",
    genres: ["Mystery", "Romance"],
    rating: 4.2,
  },
  {
    title: "Quantum Dreams",
    author: "Nathan Turner",
    genres: ["Science Fiction", "Thriller"],
    rating: 4.7,
  },
  {
    title: "Eternal Symphony",
    author: "Eva Morgan",
    genres: ["Romance", "Fantasy"],
    rating: 4.3,
  },
  {
    title: "Shadows in Time",
    author: "Owen White",
    genres: ["Fantasy", "Adventure"],
    rating: 4.8,
  },
  {
    title: "Echoes of Destiny",
    author: "Hannah Davis",
    genres: ["Adventure", "Mystery"],
    rating: 4.4,
  },
  {
    title: "Lost in Wonderland",
    author: "Mia Harris",
    genres: ["Fantasy", "Romance"],
    rating: 4.9,
  },
  {
    title: "Celestial Harmony",
    author: "Logan Turner",
    genres: ["Science Fiction", "Adventure"],
    rating: 4.1,
  },
  {
    title: "Elysian Echo",
    author: "Avery Black",
    genres: ["Fantasy", "Romance"],
    rating: 4.5,
  },
  {
    title: "Journey to Avalon",
    author: "Zoe Morgan",
    genres: ["Adventure", "Drama"],
    rating: 4.7,
  },
  {
    title: "The Whispering Woods",
    author: "Caleb Turner",
    genres: ["Fantasy", "Mystery"],
    rating: 4.2,
  },
  {
    title: "Stellar Illusions",
    author: "Eva Harris",
    genres: ["Science Fiction", "Romance"],
    rating: 4.6,
  },
  {
    title: "Echoes of Eden",
    author: "Lucas White",
    genres: ["Fantasy", "Adventure"],
    rating: 4.8,
  },
  {
    title: "The Enigmatic Code",
    author: "Aria Turner",
    genres: ["Mystery", "Thriller"],
    rating: 4.3,
  },
  {
    title: "Ethereal Echo",
    author: "Evan Black",
    genres: ["Fantasy", "Adventure"],
    rating: 4.7,
  },
  {
    title: "Enigma of Shadows",
    author: "Natalie White",
    genres: ["Mystery", "Thriller"],
    rating: 4.2,
  },
  {
    title: "Sands of Time",
    author: "Gabriel Black",
    genres: ["Fantasy", "Adventure"],
    rating: 4.5,
  },
  {
    title: "Orbiting Nebulas",
    author: "Victoria Sparks",
    genres: ["Science Fiction"],
    rating: 4.0,
  },
  {
    title: "Crimson Roses",
    author: "Nicholas Greene",
    genres: ["Romance", "Drama"],
    rating: 4.8,
  },
  {
    title: "The Clockwork Empire",
    author: "Madison Smith",
    genres: ["Steampunk", "Historical Fiction"],
    rating: 4.3,
  },
  {
    title: "Spectral Whispers",
    author: "Derek Morgan",
    genres: ["Supernatural", "Mystery"],
    rating: 4.6,
  },
  {
    title: "Midnight Serenade",
    author: "Aria Thompson",
    genres: ["Romance", "Fantasy"],
    rating: 4.7,
  },
  {
    title: "Cosmic Odyssey",
    author: "Christopher Reynolds",
    genres: ["Science Fiction", "Adventure"],
    rating: 4.1,
  },
  {
    title: "The Paradoxical Affair",
    author: "Sophie Turner",
    genres: ["Science Fiction", "Mystery"],
    rating: 4.4,
  },
  {
    title: "Ephemeral Echoes",
    author: "Jordan Campbell",
    genres: ["Fantasy", "Adventure"],
    rating: 4.9,
  },
  {
    title: "Whispers of Destiny",
    author: "Emma Turner",
    genres: ["Fantasy", "Romance"],
    rating: 4.2,
  },
  {
    title: "Quantum Enchantment",
    author: "Aaron Anderson",
    genres: ["Science Fiction", "Thriller"],
    rating: 4.5,
  },
  {
    title: "Serendipity's Dance",
    author: "Sophia Adams",
    genres: ["Romance", "Drama"],
    rating: 4.7,
  },
  {
    title: "Curse of the Crypt",
    author: "Elijah Carter",
    genres: ["Fantasy", "Mystery"],
    rating: 4.3,
  },
  {
    title: "Whispers in the Cosmos",
    author: "Grace Harris",
    genres: ["Science Fiction", "Thriller"],
    rating: 4.6,
  },
  {
    title: "Echoes of Elysium",
    author: "Olivia Turner",
    genres: ["Fantasy", "Romance"],
    rating: 4.8,
  },
  {
    title: "Uncharted Realms",
    author: "Lucas Roberts",
    genres: ["Adventure", "Science Fiction"],
    rating: 4.4,
  },
  {
    title: "The Celestial Sonata",
    author: "Emma Harris",
    genres: ["Fantasy", "Drama"],
    rating: 4.7,
  },
  {
    title: "Shadowed Whispers",
    author: "Nathan Anderson",
    genres: ["Mystery", "Thriller"],
    rating: 4.2,
  },
  {
    title: "Lunar Serenity",
    author: "Sophia Turner",
    genres: ["Fantasy", "Adventure"],
    rating: 4.9,
  },
  {
    title: "Siren's Lullaby",
    author: "Ethan White",
    genres: ["Romance", "Fantasy"],
    rating: 4.1,
  },
  {
    title: "Chasing Dreams",
    author: "Olivia Roberts",
    genres: ["Adventure", "Drama"],
    rating: 4.7,
  },
  {
    title: "Stellar Illusions",
    author: "David Turner",
    genres: ["Science Fiction", "Mystery"],
    rating: 4.2,
  },
  {
    title: "Echoes of Eden",
    author: "Sophie White",
    genres: ["Fantasy", "Romance"],
    rating: 4.5,
  },
  {
    title: "The Enigmatic Code",
    author: "Mia Turner",
    genres: ["Mystery", "Thriller"],
    rating: 4.9,
  },
  {
    title: "Ethereal Echo",
    author: "Daniel Black",
    genres: ["Fantasy", "Adventure"],
    rating: 4.1,
  },
  {
    title: "Chronicles of Stardust",
    author: "Ella Harris",
    genres: ["Science Fiction", "Romance"],
    rating: 4.8,
  },
  {
    title: "The Whispering Woods",
    author: "Noah Turner",
    genres: ["Fantasy", "Mystery"],
    rating: 4.3,
  },
  {
    title: "Journey to Avalon",
    author: "Isabella Morgan",
    genres: ["Adventure", "Romance"],
    rating: 4.6,
  },
];
module.exports = booksData;
