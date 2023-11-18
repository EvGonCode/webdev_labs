const wordsAmountCName = "wordsAmount";

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

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element =>{
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1);
            return result;
        }
    })
    return NaN;
}

function deleteCookie(name){
    setCookie(name, null, null);
}

function resizeWords() {
    var rightArticleList = document.getElementById("raol");
    const fieldValue = document.getElementById("inputWords").value;
    if(!(fieldValue.trim() === "")) {
        const newWordsAmount = parseInt(fieldValue);

        while (rightArticleList.firstChild) {
            rightArticleList.removeChild(rightArticleList.firstChild);
        }

        for (var i = 0; i < newWordsAmount; i++) {
            var listItem = document.createElement("li");
            listItem.textContent = `Word`;
            rightArticleList.appendChild(listItem);
        }

        setCookie(wordsAmountCName, newWordsAmount, 365);
    }
}
document.addEventListener("DOMContentLoaded", function () {

    var resizeWordsButton = document.getElementById("resizeButton");
    resizeWordsButton.addEventListener("click", resizeWords);
});
document.addEventListener("DOMContentLoaded", function () {
    var cookieConsentModal = document.getElementById("cookieConsentModal");
    var acceptCookiesBtn = document.getElementById("acceptCookiesBtn");
    var rejectCookiesBtn = document.getElementById("rejectCookiesBtn");

    cookieConsentModal.style.display = "block";
    acceptCookiesBtn.addEventListener("click", function () {
        localStorage.setItem("hasAcceptedCookies", "true");
        const newWordsAmount = document.getElementById("inputWords");
        const cValue = getCookie(wordsAmountCName);
        if(!isNaN(cValue)){
            newWordsAmount.value = parseInt(cValue);
            resizeWords();
        }

        cookieConsentModal.style.display = "none";
    });

    rejectCookiesBtn.addEventListener("click", function () {
        cookieConsentModal.style.display = "none";
    });
});
