

function toggleClass(selector, className) {
    // Get the element with the given selector and toggle the specified class
    const element = document.querySelector(selector);
    element.classList.toggle(className);
}