document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // ACCORDION (1 aberto só)
    // =========================
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        const header = item.querySelector(".accordion-header");

        header.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            // fecha todos
            items.forEach(i => i.classList.remove("active"));

            // abre se não estava ativo
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });

    // =========================
    // SIDEBAR SMOOTH SCROLL
    // =========================
    const links = document.querySelectorAll(".sidebar a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // =========================
    // ACTIVE SECTION HIGHLIGHT (SCROLL SPY)
    // =========================
    const sections = document.querySelectorAll(".section");

    window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const id = section.getAttribute("id");
            const link = document.querySelector(`.sidebar a[href="#${id}"]`);

            if (!link) return;

            if (
                section.offsetTop <= scrollPos &&
                section.offsetTop + section.offsetHeight > scrollPos
            ) {
                link.style.color = "#38bdf8";
                link.style.transform = "translateX(5px)";
            } else {
                link.style.color = "#cbd5f5";
                link.style.transform = "translateX(0)";
            }
        });
    });

    // =========================
    // KEYBOARD UX (ESC fecha tudo)
    // =========================
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            items.forEach(i => i.classList.remove("active"));
        }
    });

    // =========================
    // SMOOTH H2 CLICK SCROLL (extra UX)
    // =========================
    document.querySelectorAll("h2").forEach(h => {
        h.style.cursor = "pointer";

        h.addEventListener("click", () => {
            h.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

});
