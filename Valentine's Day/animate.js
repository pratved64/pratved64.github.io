var heart = document.getElementById('heart');
var container = document.getElementById('holder');
console.log(heart);

function trigger() {
    setTimeout(function() {postDelay()}, 200);
    heart.style.animation = "expand 1s 0s ease-in-out";
    container.style.animation = "fade 1s 0s ease-in-out";
}

function postDelay() {
    heart.style.opacity = "0%";
    container.style.backgroundImage = "linear-gradient(rgb(252, 58, 58), rgb(252, 21, 21))";
    var card = document.getElementById('text');
    card.style.visibility = "visible";
    document.getElementById('photo').style.visibility = "visible";
    document.getElementById('b').style.visibility = "visible";
}

heart.addEventListener('click', function(){trigger()});