document.getElementById('swapButton').addEventListener('click', function () {
    var leftArticle = document.querySelector('.left_article');
    var rightArticle = document.querySelector('.right_article');
    var temp = leftArticle.innerHTML;
    leftArticle.innerHTML = rightArticle.innerHTML;
    rightArticle.innerHTML = temp;
});