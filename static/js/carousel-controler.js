var myIndex = 1;
carousel();

function carousel() {
    if (myIndex > 10) {
        myIndex = 1;
    } else if (myIndex < 1) {
        myIndex = 10;
    }

    document.getElementById("inner-carousel").style.backgroundImage = `url('Carousel/carousel${myIndex}.webp')`;
    myIndex++;
    setTimeout(carousel, 15000); // Change image every 2 seconds
}

function plusDivs(n) {
    showDivs(myIndex += n);
}

function showDivs(n) {
    if (myIndex > 10) {
        myIndex = 1;
    } else if (myIndex < 1) {
        myIndex = 10;
    }
    document.getElementById("inner-carousel").style.backgroundImage = `url('Carousel/carousel${myIndex}.webp')`;
}