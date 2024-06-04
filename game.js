const films = [
    { 
        description: "Een jonge tovenaar begint aan zijn eerste jaar op een magische school.", 
        titles: ["Harry Potter en de Steen der Wijzen", "Harry Potter", "Harry Potter and the Philosopher's Stone", "Harry Potter and the Sorcerer's Stone", "Harry and the Potter", "The Philosopher's Stone", "Sorcerer's Stone", "HP and the Philosopher's Stone", "HP and the Sorcerer's Stone", "Harry Potter 1"]
    },
    { 
        description: "Een groep vrienden gaat op een epische zoektocht om een ring te vernietigen.", 
        titles: ["The Lord of the Rings: The Fellowship of the Ring", "The Fellowship of the Ring", "Lord of the Rings", "LOTR: The Fellowship of the Ring", "Fellowship of the Ring", "The Ring Fellowship", "LOTR 1", "Lord of the Rings 1", "The Fellowship", "Ring Fellowship"]
    },
    { 
        description: "Een superheld in een rood pak vecht tegen misdaad in New York.", 
        titles: ["Spider-Man", "Spiderman", "Spidey", "Spider-Man 1", "Spiderman 1", "Spidey 1", "The Amazing Spider-Man", "The Amazing Spiderman", "Amazing Spider-Man 1", "Amazing Spiderman 1"]
    },
    { 
        description: "Een jongen ontdekt dat hij de zoon is van een Griekse god en een gewone vrouw.", 
        titles: ["Percy Jackson & the Olympians: The Lightning Thief", "Percy Jackson & the Olympians", "The Lightning Thief", "Percy Jackson", "PJO", "Percy Jackson 1", "The Olympians", "Percy & the Olympians", "The Demigod Files", "Half-Blood Prince"]
    },
    { 
        description: "Een groep dinosaurussen wordt nieuw leven ingeblazen en veroorzaakt chaos in een pretpark.", 
        titles: ["Jurassic Park", "The Lost World: Jurassic Park", "Jurassic Park III", "Jurassic World", "Jurassic World: Fallen Kingdom", "Jurassic World: Dominion", "Jurassic Park 2", "Jurassic Park 3", "Jurassic World 2", "Jurassic World 3"]
    }
];

let currentFilm;

function getRandomFilm() {
    return films[Math.floor(Math.random() * films.length)];
}

function loadNewFilm() {
    currentFilm = getRandomFilm();
    document.getElementById('description').textContent = currentFilm.description;
    document.getElementById('guess').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('guessButton').style.display = 'inline';
}

function checkGuess() {
    const guess = document.getElementById('guess').value.toLowerCase().trim();
    const result = document.getElementById('result');
    const correctAnswers = currentFilm.titles.map(title => title.toLowerCase());

    if (correctAnswers.includes(guess)) {
        result.textContent = `Gefeliciteerd! Je hebt het goed! Het was inderdaad ${currentFilm.titles[0]}.`;
        document.getElementById('nextButton').style.display = 'inline';
        document.getElementById('guessButton').style.display = 'none';
    } else {
        result.textContent = `Helaas, dat is niet correct. Probeer het opnieuw!`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadNewFilm();
    document.getElementById('guessButton').addEventListener('click', checkGuess);
    document.getElementById('nextButton').addEventListener('click', loadNewFilm);
});
