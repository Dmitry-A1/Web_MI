
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("header");
    const navHeight = nav ? nav.offsetHeight : 0;

    document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                const targetPos = target.offsetTop - navHeight;
                window.scrollTo({ top: targetPos, behavior: "smooth" });
            }
            this.blur();
        });
    });
});

function makeHoverLine(itemsSelector, lineSelector, stepPercent, titleSelector) {
    const items = document.querySelectorAll(itemsSelector);
    const activeLine = document.querySelector(lineSelector);

    if (!items.length || !activeLine) return;

    const defaultIndex = 0;

    let container = items[0].parentElement;
    while (container && !container.classList.contains("row")) {
        container = container.parentElement;
    }
    if (!container) container = items[0].parentElement;

    function setActive(index) {
        activeLine.style.left = `${index * stepPercent}%`;

        items.forEach(i => {
            const title = i.querySelector(titleSelector);
            if (title) title.style.color = "var(--color-text-light)";
        });

        const activeTitle = items[index].querySelector(titleSelector);
        if (activeTitle) activeTitle.style.color = "var(--color-accent)";
    }

    function setAllOrange() {
        items.forEach(i => {
            const title = i.querySelector(titleSelector);
            if (title) title.style.color = "var(--color-accent)";
        });
        activeLine.style.left = "0";
    }

    function checkLineVisible() {
        if (activeLine.offsetParent === null) {
            setAllOrange();
        } else {
            setActive(defaultIndex);
        }
    }

    items.forEach((item, index) => {
        item.addEventListener("mouseenter", () => setActive(index));
        item.addEventListener("focus", () => setActive(index));
        item.addEventListener("touchstart", (e) => {
            e.preventDefault();
            setActive(index);
        }, { passive: false });
    });

    container.addEventListener("mouseleave", () => setActive(defaultIndex));
    container.addEventListener("touchend", () => setActive(defaultIndex));

    checkLineVisible();
    window.addEventListener("resize", checkLineVisible);
}


makeHoverLine(".mode-item", ".mode-line-active", 33.333, ".mode-title");
makeHoverLine(".mode-item-4", ".mode-line-active-4", 25, ".mode-title-4");


(function () {
    "use strict";
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach(form => {
        form.addEventListener("submit", function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");
        }, false);
    });
})();


function modalFormHandler(btnId, formSelector, modalId) {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    btn.addEventListener("click", event => {
        const form = document.querySelector(formSelector);
        if (!form) return;

        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add("was-validated");
        } else {
            const modalEl = document.getElementById(modalId);
            const modal = modalEl ? bootstrap.Modal.getInstance(modalEl) : null;
            if (modal) modal.hide();
        }

        btn.blur();
    });
}

modalFormHandler("submitBtn", "#formOrder", "myModal");
modalFormHandler("faqBtn", "#formOrder", "faqModelDialog");
modalFormHandler("modalReview", "#formReview", "reviewModelDialog");


document.querySelectorAll("button, .btn").forEach(btn => {
    btn.addEventListener("mouseup", () => btn.blur());
    btn.addEventListener("keyup", e => {
        if (e.key === "Enter" || e.key === " ") btn.blur();
    });
});

const navbar = document.querySelector('.custom-navbar');

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('show.bs.modal', () => {
        navbar.style.display = 'none';
    });

    modal.addEventListener('hidden.bs.modal', () => {
        navbar.style.display = '';
    });
});
