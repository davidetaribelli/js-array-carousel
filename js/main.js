let containerElement = document.getElementById("container");
let carouselElement = document.getElementById("carousel");
let btnBack = document.getElementById("btnBack");
let btnNext = document.getElementById("btnNext");


//aggiungo immagini tramite javascript usando un ciclo for
let imgDaInserire = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"]; 

for (let i = 0; i < imgDaInserire.length; i++) {
    let currentImg = imgDaInserire[i];

    if (i == 0) {
        let newImg = document.createElement("img");
        newImg.src = `../img/${currentImg}`;
        newImg.className = "slide";
        carouselElement.append(newImg);
    } else {
        let newImg = document.createElement("img");
        newImg.src = `../img/${currentImg}`;
        newImg.className = "slide hidden";
        carouselElement.append(newImg);
    }

}

let slideElements = document.getElementsByClassName("slide");
let currentSlide = 0;

btnNext.addEventListener("click", function(){

    if(currentSlide < slideElements.length-1){
        for (let i = 0; i < slideElements.length; i++) {
            const slide = slideElements[i];
    
            if (i == currentSlide+1) {
                slide.classList.remove("hidden");
            } else {
                slide.classList.add("hidden");
            }
        }
    
        currentSlide++;

    }
});


btnBack.addEventListener("click", function () {
    if(currentSlide > 0){
        for (let i = 0; i < slideElements.length; i++) {
            const slide = slideElements[i];
    
            if (i == currentSlide - 1) {
                slide.classList.remove("hidden");
            } else {
                slide.classList.add("hidden");
            }
        }
    
        currentSlide--;

    }
});
