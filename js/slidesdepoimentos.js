let slide2 = document.querySelector(".slider2")
let next2 = document.querySelector("#nextSlider")

next2.addEventListener('click', function () {
    let slides2 = document.querySelectorAll(".slides2")
    slide2.appendChild(slides2[0])
})

