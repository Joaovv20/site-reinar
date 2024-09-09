prev.addEventListener('click', function () {
    let slides = document.querySelectorAll(".slides")
    slider.prepend(slides[slides.length - 1])
})