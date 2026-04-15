document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".accordion .item");

    // =========================
    // ACCORDION CONTROL
    // =========================
    items.forEach(item => {
        const button = item.querySelector(".accordion-header");

        button.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            // fecha todos os outros
            items.forEach(i => {
                i.classList.remove("active");
            });

            // se não estava ativo, abre este
            if (!isActive) {
                item.classList.add("active");
            }

        });
    });

    // =========================
    // SMOOTH SCROLL (opcional)
    // =========================
    document.querySelectorAll("h2").forEach(title => {
        title.style.cursor = "pointer";

        title.addEventListener("click", () => {
            title.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // =========================
    // HOVER FEEDBACK (UX POLISH)
    // =========================
    items.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transition = "0.2s";
        });
    });

});
