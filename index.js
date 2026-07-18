let clicks = 0;
function Click() {
    clicks += 1;
    document.getElementById("Clicks-Text").textContent = "Clicks: "+clicks;
    // Select the element
    document.getElementById("boom").style.display = "block";
    
    // Set a timer to run after 3000 milliseconds (3 seconds)
    setTimeout(function() {
        document.getElementById("boom").style.display = "none";
// Completely removes it from layout
    // Or use: element.style.visibility = "hidden"; (Leaves a blank space)
    }, 750);
};

function ToggleBackground() {
    // Find the image by its specific ID
    const isHuePaused = document.body.classList.contains('hue-paused');

    // Change the display style to make it visible
    if (isHuePaused) {
        document.body.classList.remove('hue-paused');
    }
    else {
        document.body.classList.add('hue-paused');
    }
}

function showImage() {
    // Find the image by its specific ID
    const image = document.getElementById("diceLogo");
    
    // Change the display style to make it visible
    if (image.style.display == "none") {
    image.style.display = "block"
    }
    else {
        image.style.display = "none"
    }
}