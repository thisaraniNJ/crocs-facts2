const crocodileFacts = [
    "Crocodiles are reptiles and belong to the order Crocodylia.",
    "They can live for over 70 years in the wild.",
    "Crocodiles are carnivorous and primarily eat fish, birds, and mammals.",
    "They have powerful jaws with a bite force of over 3,000 pounds per square inch.",
    "Crocodiles can hold their breath underwater for up to an hour.",
    "They are ectothermic, meaning their body temperature is regulated by their environment.",
    "Crocodiles can swim at speeds of up to 20 miles per hour in short bursts.",
    "They have a unique ability to see in the dark due to a special layer of tissue in their eyes.",
    "Crocodiles communicate through a variety of vocalizations, including growls and hisses.",
    "There are 15 recognized species of crocodiles, including the Nile crocodile and the saltwater crocodile."
];

let attempts = 0;
const factButton = document.getElementById('factButton');
const factDisplay = document.getElementById('factDisplay');

factButton.addEventListener('click', () => {
    if (attempts < 3) {
        attempts++;
        factDisplay.textContent = "Try to get closer to the button!";
    } else {
        const randomIndex = Math.floor(Math.random() * crocodileFacts.length);
        factDisplay.textContent = crocodileFacts[randomIndex];
    }
});

document.addEventListener('mousemove', (event) => {
    const buttonRect = factButton.getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;
    const distance = Math.sqrt((event.clientX - buttonX) ** 2 + (event.clientY - buttonY) ** 2);

    if (attempts < 3 && distance < 150) {
        const randomX = Math.random() * (window.innerWidth - buttonRect.width);
        const randomY = Math.random() * (window.innerHeight - buttonRect.height);
        factButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
});
