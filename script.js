document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel-wrapper");
    const cards = Array.from(document.querySelectorAll(".card"));
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 50; // Including margin
    const intervalTime = 5000; // 5 seconds

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function handleTransitionEnd() {
        if (currentIndex === cards.length / 2) {
            carousel.style.transition = 'none';
            currentIndex = 0;
            carousel.style.transform = `translateX(0)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        }
    }

    function moveNext() {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        } else {
            currentIndex = 0; // Loop back to start
            updateCarousel();
        }
    }

    function movePrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        } else {
            currentIndex = cards.length - 1; // Loop to end
            updateCarousel();
        }
    }

    let autoSlide = setInterval(moveNext, intervalTime);

    nextButton.addEventListener("click", () => {
        clearInterval(autoSlide); // Stop auto sliding when user interacts
        moveNext();
        autoSlide = setInterval(moveNext, intervalTime); // Restart auto sliding
    });

    prevButton.addEventListener("click", () => {
        clearInterval(autoSlide); // Stop auto sliding when user interacts
        movePrev();
        autoSlide = setInterval(moveNext, intervalTime); // Restart auto sliding
    });

    carousel.addEventListener("transitionend", handleTransitionEnd);

    // Initialize carousel to show the first set of cards
    updateCarousel();
});
