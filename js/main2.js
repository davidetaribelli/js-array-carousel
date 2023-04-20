const carouselElement = document.querySelector(".carousel");
const btnNext = document.querySelector(".btnNext");
const btnBack = document.querySelector(".btnBack");
let currentImg = 0;

let imageElement = ["../img/01.webp","../img/02.webp","../img/03.webp","../img/04.webp", "../img/05.webp"];


let i = 0;
while(i < imageElement.length){

    const image = imageElement[i];

    const viewImage = document.createElement("img");
    viewImage.src = image;
    
    if(i == 0){
        viewImage.classList.add("visible");
    }
    
    carouselElement.append(viewImage);

    i++;
}

const slideImages = document.querySelectorAll(".carousel > img");

btnNext.addEventListener("click", function(){

    slideImages[currentImg].classList.remove("visible");

    currentImg++;

    if (currentImg == slideImages.length) {
        currentImg = 0;
    }

    slideImages[currentImg].classList.add("visible");
    
    

});


btnBack.addEventListener("click", function(){

   slideImages[currentImg].classList.remove("visible");

    currentImg--;

    if (currentImg < 0) {
        currentImg = 4;
    }
    
    slideImages[currentImg].classList.add("visible");
    
    

});