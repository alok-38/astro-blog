// safely access properties of an object
document.querySelector(".hamburger")?.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.toggle("expanded");
});