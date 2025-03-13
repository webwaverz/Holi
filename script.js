// Get elements
const celebrateBtn = document.getElementById("celebrate-btn");
const videoSection = document.getElementById("video-section");
const splashContainer = document.getElementById("splash-container");

// Splash Images
const splashImages = ["blue.png", "yellow.png", "red.png", "green.png", "multi.png", "multi2.png", "splash.png"];

// Create audio element
const holiSong = new Audio("music.mp3");
holiSong.loop = true; // Loop the song for a continuous celebration

// Function to generate a random splash
function createRandomSplash(image) {
    let splash = document.createElement("img");
    splash.classList.add("splash");
    splash.src = image;

    // Set random position
    let xPos = Math.random() * window.innerWidth;
    let yPos = Math.random() * window.innerHeight;
    splash.style.left = `${xPos}px`;
    splash.style.top = `${yPos}px`;

    // Random size & rotation
    let size = Math.random() * 100 + 150;
    splash.style.width = `${size}px`;
    splash.style.height = `${size}px`;
    splash.style.transform = `rotate(${Math.random() * 360}deg)`;

    splashContainer.appendChild(splash);

    setTimeout(() => {
        splash.remove();
    }, 2000);
}

// Generate 2-3 splashes simultaneously with unique images
function generateMultipleSplashes() {
    let count = Math.floor(Math.random() * 2) + 2; // Generates 2 or 3 splashes
    let availableImages = [...splashImages]; // Copy image list
    let usedImages = new Set();

    for (let i = 0; i < count; i++) {
        if (availableImages.length === 0) break; // Stop if no unique images left

        // Pick a unique random image
        let randomIndex = Math.floor(Math.random() * availableImages.length);
        let selectedImage = availableImages[randomIndex];

        // Ensure uniqueness in the same batch
        if (!usedImages.has(selectedImage)) {
            usedImages.add(selectedImage);
            createRandomSplash(selectedImage);
            availableImages.splice(randomIndex, 1); // Remove used image
        }
    }
}

// Generate splashes every 700ms
setInterval(generateMultipleSplashes, 700);

// Show Video & Play Song on Button Click
celebrateBtn.addEventListener("click", () => {
    document.querySelector(".center-content").style.display = "none";
    videoSection.style.display = "block";
    holiSong.play(); // Play the song
});
