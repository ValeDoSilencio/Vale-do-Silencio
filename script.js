document.addEventListener("DOMContentLoaded", () => {

    // 🌙 Toggle Dark / Light Mode
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "🌙 Modo";
    toggleBtn.style.position = "fixed";
    toggleBtn.style.top = "20px";
    toggleBtn.style.right = "20px";
    toggleBtn.style.padding = "10px";
    toggleBtn.style.border = "none";
    toggleBtn.style.borderRadius = "8px";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.zIndex = "1000";

    document.body.appendChild(toggleBtn);

    let darkMode = true;

    toggleBtn.addEventListener("click", () => {
        darkMode = !darkMode;

        if (darkMode) {
            document.body.style.backgroundColor = "#0f172a";
            document.body.style.color = "#e2e8f0";
        } else {
            document.body.style.backgroundColor = "#f1f5f9";
            document.body.style.color = "#020617";
        }
    });

    // 📌 Scroll suave para títulos
    const headers = document.querySelectorAll("h2");

    headers.forEach(header => {
        header.style.cursor = "pointer";

        header.addEventListener("click", () => {
            header.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // 📊 Barra de progresso de leitura
    const progressBar = document.createElement("div");
    progressBar.style.position = "fixed";
    progressBar.style.top = "0";
    progressBar.style.left = "0";
    progressBar.style.height = "4px";
    progressBar.style.backgroundColor = "#38bdf8";
    progressBar.style.width = "0%";
    progressBar.style.zIndex = "999";

    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {
        const scrollTop = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / height) * 100;

        progressBar.style.width = progress + "%";
    });

    // 🔍 Pesquisa simples
    const searchInput = document.createElement("input");
    searchInput.placeholder = "Pesquisar...";
    searchInput.style.position = "fixed";
    searchInput.style.top = "20px";
    searchInput.style.left = "20px";
    searchInput.style.padding = "10px";
    searchInput.style.borderRadius = "8px";
    searchInput.style.border = "none";

    document.body.appendChild(searchInput);

    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();
        const sections = document.querySelectorAll(".section");

        sections.forEach(section => {
            const text = section.innerText.toLowerCase();

            if (text.includes(value)) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    });

});
