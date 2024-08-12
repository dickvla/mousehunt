const objectsArray = document.getElementsByClassName("object");

/**
 * Removes event listeners from all boxes
 */
function resetBackground() {
    const tempArray = Array.from(objectsArray);
    tempArray.forEach((element) => {
        element.style.backgroundImage = "url('./assets/images/door.webp')";
    });
}

resetBackground();