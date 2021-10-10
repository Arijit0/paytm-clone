
const mobile__responsive__holder = document.querySelector(".mobile__responsive__holder");
const hamburger__holder = document.querySelector(".hamburger__holder");
const overlay = document.querySelector(".overlay");
hamburger__holder.addEventListener("click", () => {
mobile__responsive__holder.style.display = 'block';
mobile__responsive__holder.style.opacity = 1;
mobile__responsive__holder.style.transform = 'translateX(0%)';
mobile__responsive__holder.style.transition = 'transform 0.5s cubic-bezier(0.08, 0.15, 0.09, 0.93)';
overlay.style.display = 'block';
overlay.addEventListener("click", () => {
mobile__responsive__holder.style.display = 'none';
mobile__responsive__holder.style.opacity = 0;
overlay.style.display = 'none';
})
  });