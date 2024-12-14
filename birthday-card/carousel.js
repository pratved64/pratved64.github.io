function playVid() {
    alert("I'm gonna show you some really cool photos so that you can see why ilysm");
    let vid = document.getElementById("bgVid");
    vid.play();
}

function loadPhotos() {
    const psize = 10;
    pics = []
    let s = '.jpeg';
    for (let i = 0; i < psize; i++) {
        pics.push('CarouselPics/' + String(i) + s);
    }

    console.log(pics);
    return pics
}

function rotate(current, max) {
    let factor = Math.floor(current / max);
    if (current === max)
        return 0;
    else
        return current-(factor*max);
}


function rotPic(e1, e2, index, pArr, cArr) {
    let rotIndex = rotate(index, pArr.length)
    e1.src = pArr[rotIndex];
    e2.innerHTML = cArr[rotIndex];
    console.log(rotIndex);
    return index+1
}

function negRotPic(e1, e2, index, pArr, cArr) {
    let rotIndex = rotate(index, pArr.length);
    e1.src = pArr[rotIndex];
    e2.innerHTML = cArr[rotIndex];
    console.log(rotIndex);
    return index-1;
}

let photos = loadPhotos();
let image = document.getElementById("disp");
let cap = document.getElementById("caption");
let i = 0;
let captions = [
    "This is one of our first pics together. <br> Very cool",
    "Malhar! I had so much fun with you (even tho we got kicked out)",
    "NEW YEARSS <br> Our first kiss was very cool",
    "VALENTINE'S DAYY <br> you made me that box and got chocolatesss",
    "Skanda's party was something but this is my favourite moment from then",
    "This one was a random date but I remember being super happy cuz you're so cool",
    "One word. Smash.",
    "Creepy photo taken by Bela, but it still looks super cute cuz you're in it",
    "Ball photos are so goofy but you look so goddamn hot in all of them aaaaa",
    "CAPPITY CAPPP my personal favourite", 
]; // ADD REMAINING CAPTIONS WITH PHOTOS


document.getElementById("right").addEventListener("click", function() {
    i = rotPic(image, cap, i, photos, captions);
});

document.getElementById("left").addEventListener("click", function () {
    i = negRotPic(image, cap, i, photos, captions);
});

cap.innerHTML = captions[1];
