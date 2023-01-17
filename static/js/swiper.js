var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    loop:true,
    slidesPerView: 1,
    spaceBetween:5,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

// $(".swiper-container").mouseenter(function () {
//     swiper.autoplay.stop();
//     console.log('slider stopped');
// });

// $(".swiper-container").mouseleave(function () {
//     swiper.autoplay.start();
//     console.log('slider started again');
// });