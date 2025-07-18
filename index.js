"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const btnTriggers = document.querySelectorAll('.btn-trigger');
    const spNav = document.querySelector('.sp-nav');
    btnTriggers.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const target = event.currentTarget;
            target.classList.toggle('active');
            if (spNav) {
                spNav.classList.toggle('slide-in');
            }
            event.preventDefault();
        });
    });
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
    });
    const fadeSections = document.querySelectorAll(".fade-section");
    fadeSections.forEach((el) => {
        observer.observe(el);
    });
    const gallery = document.getElementById("gallery");
    const arrowLeft = document.getElementById("arrowLeft");
    const arrowRight = document.getElementById("arrowRight");
    if (gallery && arrowLeft && arrowRight) {
        arrowLeft.addEventListener("click", () => {
            gallery.scrollBy({ left: -150, behavior: "smooth" });
        });
        arrowRight.addEventListener("click", () => {
            gallery.scrollBy({ left: 150, behavior: "smooth" });
        });
    }
});
