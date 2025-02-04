const mobile__responsive__holder = document.querySelector(".mobile__responsive__holder");
const hamburger__holder = document.querySelector(".hamburger__holder");
const overlay = document.querySelector(".overlay");

hamburger__holder.addEventListener("click", () => {
    // Toggle 'open' class for smooth transition
    mobile__responsive__holder.classList.add('open');
    overlay.classList.add('active');
});

overlay.addEventListener("click", () => {
    // Remove 'open' class to close the menu
    mobile__responsive__holder.classList.remove('open');
    overlay.classList.remove('active');
});