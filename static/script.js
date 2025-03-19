const textBox = document.getElementById("textBox");
const enterButton = document.getElementById("enterButton");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");
const changeColorButton = document.getElementById("changeColorButton");

const colors = ["white", "black", "red"];
let currentColorIndex = 0;

// Mostrar ventana emergente al presionar Enter
textBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        showPopup();
    }
});

// Mostrar ventana emergente al hacer clic en el botón Enter
enterButton.addEventListener("click", showPopup);

function showPopup() {
    popupText.textContent = textBox.value;  // Insertar texto en la ventana
    popup.style.display = "block";
}

// Cerrar ventana emergente
closePopup.addEventListener("click", function() {
    popup.style.display = "none";
});

// Cambiar color de la ventana emergente
changeColorButton.addEventListener("click", function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    let popupContent = document.querySelector(".popup-content");
    
    popupContent.style.backgroundColor = colors[currentColorIndex];

    // Cambiar el color del texto dependiendo del fondo
    if (colors[currentColorIndex] === "black") {
        popupText.style.color = "white";  // Texto en blanco si el fondo es negro
    } else {
        popupText.style.color = "black";  // Texto en negro en otros casos
    }
});

