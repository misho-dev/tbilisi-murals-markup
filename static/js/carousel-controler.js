var myIndex = 1;
let numImages = 19
carousel();

function carousel() {
    if (myIndex > numImages) {
        myIndex = 1;
    } else if (myIndex < 1) {
        myIndex = numImages;
    }

    document.getElementById("inner-carousel").style.backgroundImage = `url('Carousel/carousel${myIndex}.webp')`;
    myIndex++;
    setTimeout(carousel, 15000); // Change image every 2 seconds
}

function plusDivs(n) {
    showDivs(myIndex += n);
}

function showDivs(n) {
    if (myIndex > numImages) {
        myIndex = 1;
    } else if (myIndex < 1) {
        myIndex = numImages;
    }
    document.getElementById("inner-carousel").style.backgroundImage = `url('Carousel/carousel${myIndex}.webp')`;
}