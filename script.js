// 1. Target the footer paragraph
const footerElement = document.querySelector('footer p');

// 2. Get the current date AND time
const currentDate = new Date(); 
const currentDateTime = currentDate.toLocaleString(); // This gets both date and time!

// Update the footer HTML automatically with the exact date and time
if (footerElement) {
    footerElement.innerHTML = `&copy; ${currentDateTime} Albert Einstein. Designed with CSS Grid.`;
}

// 3. Using Arrays and Objects (name-value pairs)
const einsteinQuotes = [
    { text: "Imagination is more important than knowledge.", year: 1929 },
    { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", year: 1930 },
    { text: "The important thing is not to stop questioning.", year: 1955 }
];