// 1. Reference the canvas element from the HTML
const canvas = document.getElementById('gameCanvas');

// 2. Get the 2D rendering context
const ctx = canvas.getContext('2d');

// Example: Draw a simple player square to verify it works
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 40, 40); // x, y, width, height

const img = document.createElement("img");
img.style.width = "100px";
img.style.height = "100px";
// Step 2: Set the image source and alternative description
img.src = "https://images.editor.website/uploads/b/ae7fb200-c5c1-11e9-a44b-3988929b030a/Allderdice%20Dragon.jpg?width=400";
img.alt = "A descriptive text for accessibility";

// Step 3: Append the image to the HTML body or a specific container
document.body.appendChild(img);

let posX = 0;
    let posY = 0;
    const speed = 20; 

    // 3. Listen for keydown events globally
    document.addEventListener("keydown", (event) => {
      // Normalize key value to lowercase to catch both 'W' and 'w'
      const key = event.key.toLowerCase(); 

      switch (key) {
        case "w": // Move Up
          posY -= speed;
          break;
        case "s": // Move Down
          posY += speed;
          break;
        case "a": // Move Left
          posX -= speed;
          break;
        case "d": // Move Right
          posX += speed;
          break;
        default:
          return; // Exit function if any other key is pressed
      }

      // 4. Block default window scrolling behavior when pressing W or S
      event.preventDefault(); 

      // 5. Update the CSS transform values
      img.style.transform = `translate(${posX}px, ${posY}px)`;
    });