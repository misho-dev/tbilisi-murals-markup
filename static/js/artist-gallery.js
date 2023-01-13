const yearList = document.getElementById("year-list");

yearList.addEventListener("click", (e) =>{
    let elem = e.target;
    if(elem.classList.contains("active")){
        console.log("already active");
    }else{
        document.querySelectorAll(".active")[0].classList.toggle("active");
        elem.classList.toggle("active");

        document.querySelectorAll(".active-swiper")[0].classList.toggle("container-hidden");
        document.querySelectorAll(".active-swiper")[0].classList.toggle("active-swiper");

        let targetGallery = document.getElementById("year-"+elem.innerHTML);
        targetGallery.classList.toggle("container-hidden");
        targetGallery.classList.toggle("active-swiper");
    }
});