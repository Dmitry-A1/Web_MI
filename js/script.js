document.addEventListener("DOMContentLoaded", () => {
    const navHeight = document.querySelector("header").offsetHeight;

    document.querySelectorAll('a.nav-link[href^="#"]').forEach(link=> {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                const topPos = target.offsetTop - navHeight; // корректируем высоту
                window.scrollTo({
                    top: topPos,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".mode-item");
    const activeLine = document.querySelector(".mode-line-active");
    const defaultIndex = 0;
    items.forEach((item, index) => {
        item.addEventListener("mouseenter", () => {
            // Двигаем линию
            activeLine.style.left = `${index * 33.333}%`;

            // Меняем цвет заголовков
            items.forEach(i => i.querySelector(".mode-title").style.color = "var(--color-text-light)");
            item.querySelector(".mode-title").style.color = "var(--color-accent)";
        });
    });

    const row = document.querySelector("#modes .row");
    row.addEventListener("mouseleave", () => {
        // Возвращаем линию и цвет заголовка к дефолту
        activeLine.style.left = `${defaultIndex * 33.333}%`;
        items.forEach(i => i.querySelector(".mode-title").style.color = "var(--color-text-light)");
        items[defaultIndex].querySelector(".mode-title").style.color = "var(--color-accent)";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".mode-item-4");
    const activeLine = document.querySelector(".mode-line-active-4");
    const defaultIndex = 0;
    items.forEach((item, index) => {
        item.addEventListener("mouseenter", () => {
            // Двигаем линию
            activeLine.style.left = `${index * 25}%`;

            // Меняем цвет заголовков
            items.forEach(i => i.querySelector(".mode-title-4").style.color = "var(--color-text-light)");
            item.querySelector(".mode-title-4").style.color = "var(--color-accent)";
        });
    });

    const row = document.querySelector("#modes-4 .row");
    row.addEventListener("mouseleave", () => {
        // Возвращаем линию и цвет заголовка к дефолту
        activeLine.style.left = `${defaultIndex * 25}%`;
        items.forEach(i => i.querySelector(".mode-title-4").style.color = "var(--color-text-light)");
        items[defaultIndex].querySelector(".mode-title-4").style.color = "var(--color-accent)";
    });
});
