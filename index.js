"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const loadingText = document.querySelector(".loading-text");
    const loading = document.getElementById("loading");
    // ① loading-textを2秒かけて表示
    if (loadingText) {
        setTimeout(() => {
            loadingText.classList.add("loading-fade-in");
        }, 100); // 少しだけ遅延
    }
    // ② loading-text表示が終わった2秒後に、loading全体をフェードアウト
    if (loading) {
        // 2秒（+最初の遅延100ms）＝2.1秒後に開始
        setTimeout(() => {
            loading.style.opacity = "0"; // 3秒でフェードアウト（CSSで transition 指定済み）
        }, 2100);
    }
    // ③ 完全にフェードアウト（3秒）したら display: none にして非表示に（任意）
    setTimeout(() => {
        if (loading) {
            loading.style.display = "none";
        }
    }, 2100 + 3000); // 合計5.1秒後に完全非表示
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
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.getElementById("closeModal");
    galleryItems.forEach((img) => {
        img.addEventListener("click", () => {
            if (modal && modalImg) {
                modal.classList.remove("hidden");
                modalImg.src = img.src;
                modalImg.alt = img.alt;
            }
        });
    });
    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
        modalImg.src = "";
        modalImg.alt = "";
    });
});
