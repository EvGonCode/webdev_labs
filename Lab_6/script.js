// Function to handle color changes
let handleColorChange = function(inputId, valueId) {
    let colorInput = document.getElementById(inputId);
    let colorValueElement = document.getElementById(valueId);

    // Attach the event listener for color changes
    colorInput.addEventListener('input', function (event) {
        // Update the color display and value
        colorValueElement.textContent = event.target.value;
    });
}

handleColorChange('colorInput1', 'colorValue1');
handleColorChange('colorInput2', 'colorValue2');
handleColorChange('colorInput3', 'colorValue3');

let copyText = function() {
    const textToCopy = document.getElementById('textInput').textContent;

    let paragraph = document.getElementById('glitchMain')
    paragraph.innerHTML = '<span aria-hidden="true">' + textToCopy + '</span>' + textToCopy + '<span aria-hidden="true">' + textToCopy + '</span>';
}

let copyColor = function() {
    const colorToCopy1 = document.getElementById('colorValue1').textContent;
    const colorToCopy2 = document.getElementById('colorValue2').textContent;
    const colorToCopy3 = document.getElementById('colorValue3').textContent;

    document.documentElement.style.setProperty('--color1', colorToCopy1);
    document.documentElement.style.setProperty('--color2', colorToCopy2);
    document.documentElement.style.setProperty('--color3', colorToCopy3);
}