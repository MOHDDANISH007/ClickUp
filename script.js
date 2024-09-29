const navDialog = document.getElementById('nav-dialog');

function handleMenu() {
    navDialog.classList.toggle('hidden');
}

const initialTranslateLTR = -48 * 4; // Initial translation value for left-to-right
const initialTranslateRTL = 36 * 4;  // Initial translation value for right-to-left

function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        console.log(entries[0]);

        // If the element is intersecting, add the scroll event listener
        if (isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
    };

    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if (isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        // Apply the transformation to the element
        element.style.transform = `translateX(${totalTranslate}px)`;
        element.style.transition = `ease-linear`;
    }

}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');

// Setup observers for each line
setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, false, 0.15);


const toggles = document.querySelectorAll('[id^="toggle"]'); // Select all toggle icons
console.log(toggles)

toggles.forEach((toggle, index) => {
    toggle.addEventListener('click', () => {
        const para = document.getElementById(`Para${index + 1}`); // Get corresponding paragraph
        para.classList.toggle('hidden'); // Toggle visibility
    });
});

