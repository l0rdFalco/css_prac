/**
 * @description Change Home page slider's arrows active status
 */
function updateSliderArrowsStatus(cardsContainer, containerWidth, cardCount, cardWidth) {
    const scrollLeft = cardsContainer.scrollLeft;
    const rightArrow = document.getElementById('slide-right-container');
    const leftArrow = document.getElementById('slide-left-container');

    // Update right arrow status
    if (scrollLeft + containerWidth < cardCount * cardWidth + 15) {
        rightArrow.classList.add('active');
    } else {
        rightArrow.classList.remove('active');
    }

    // Update left arrow status
    if (scrollLeft > 0) {
        leftArrow.classList.add('active');
    } else {
        leftArrow.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Get DOM elements
    const cardsContainer = document.getElementById('cards-container');
    const rightArrow = document.getElementById('slide-right-container');
    const leftArrow = document.getElementById('slide-left-container');
    const container = document.querySelector('.container');

    // Initialize variables
    const cardCount = cardsContainer.querySelector('.cards').children.length;
    const speed = 1000;
    let containerWidth = container.offsetWidth;
    const cardWidth = 250;

    // Initial arrow status update
    updateSliderArrowsStatus(cardsContainer, containerWidth, cardCount, cardWidth);

    // Smooth scroll function
    function smoothScroll(element, scrollAmount) {
        const start = element.scrollLeft;
        const startTime = performance.now();

        function scrollStep(timestamp) {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / speed, 1);
            element.scrollLeft = start + (scrollAmount * progress);

            if (progress < 1) {
                window.requestAnimationFrame(scrollStep);
            } else {
                updateSliderArrowsStatus(cardsContainer, containerWidth, cardCount, cardWidth);
            }
        }

        window.requestAnimationFrame(scrollStep);
    }

    // Right arrow click handler
    rightArrow.addEventListener('click', function (e) {
        if (cardsContainer.scrollLeft + containerWidth < cardCount * cardWidth) {
            smoothScroll(cardsContainer, cardWidth);
        }
        updateSliderArrowsStatus(cardsContainer, containerWidth, cardCount, cardWidth);
    });

    // Left arrow click handler
    leftArrow.addEventListener('click', function (e) {
        if (cardsContainer.scrollLeft > 0) {
            smoothScroll(cardsContainer, -cardWidth);
        }
        updateSliderArrowsStatus(cardsContainer, containerWidth, cardCount, cardWidth);
    });

    // Window resize handler
    window.addEventListener('resize', function () {
        try {
            containerWidth = cardsContainer.offsetWidth;
            updateSliderArrowsStatus(cardsContainer, containerWidth, cardCount, cardWidth);
        } catch (error) {
            console.log(`Error occurred while trying to get updated slider container width: ${error}`);
        }
    });
});