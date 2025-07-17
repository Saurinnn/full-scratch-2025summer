"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                obs.unobserve(entry.target); // 一度だけ発火
            }
        });
    }, {
        threshold: 0.1,
    });
    // 共通クラスで一括取得＆監視
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
