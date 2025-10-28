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