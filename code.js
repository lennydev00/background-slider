const slider = document.querySelector(".slider")
const sliderContainer = document.querySelector(".slider-container")
const leftButton = document.querySelector(".arrow-left")
const rightButton = document.querySelector(".arrow-right")
const images = document.querySelectorAll(".slider-img")
const imagesLength = images.length
let index = 0

function next(){
    // index = 0
    images[index].classList.remove("active")

    index++ // 5

    if (index > imagesLength - 1){
        index = 0
    }

    images[index].classList.add("active")

    sliderContainer.style.backgroundImage = `url(${images[index].src})`
}

function prev(){
    images[index].classList.remove("active")

    index-- // 1

    if (index < 0){
        index = imagesLength - 1
    }

    images[index].classList.add("active")

    sliderContainer.style.backgroundImage = `url(${images[index].src})`
}

rightButton.addEventListener("click", next)

leftButton.addEventListener("click", prev)


//https://www.youtube.com/watch?v=oABYi9nZU2I GOD