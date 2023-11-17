document.getElementById('swapButton').addEventListener('click', function () {
    var leftArticle = document.querySelector('.left_article');
    var rightArticle = document.querySelector('.right_article');
    var temp = leftArticle.innerHTML;
    leftArticle.innerHTML = rightArticle.innerHTML;
    rightArticle.innerHTML = temp;
});

document.getElementById("calculatebutton").addEventListener("click", function() {
    var widthRadius = document.getElementById("inputField1").value;
    var heightRadius = document.getElementById("inputField2").value;

    if (widthRadius !== "" && heightRadius !== "") {
        var ovalSquare = Math.PI * widthRadius * heightRadius;
        document.getElementById("textField").value = ovalSquare.toFixed(2);
    } else {
        alert("Please enter both width and height radius.");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const rightArticle = document.getElementById('ra');

    rightArticle.addEventListener('dblclick', function () {
        const currentAlignItems = window.getComputedStyle(rightArticle).alignItems;
        const newAlignItems = currentAlignItems === 'center' ? 'flex-start' : 'center';

        rightArticle.style.alignItems = newAlignItems;
        localStorage.setItem('alignItems', newAlignItems);
    });

    const storedAlignItems = localStorage.getItem('alignItems');
    if (storedAlignItems) {
        rightArticle.style.alignItems = storedAlignItems;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const leftArticle = document.getElementById('la');

    leftArticle.addEventListener('dblclick', function () {
        const currentJustifyContent = window.getComputedStyle(leftArticle).justifyContent;
        const newJustifyContent = currentJustifyContent === 'center' ? 'flex-start' : 'center';

        leftArticle.style.justifyContent = newJustifyContent;
        localStorage.setItem('justifyContent', newJustifyContent);
    });

    const storedJustifyContent = localStorage.getItem('justifyContent');
    if (storedJustifyContent) {
        leftArticle.style.justifyContent = storedJustifyContent;
    }
});