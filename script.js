function loadPage(page) {
  const content = document.getElementById("content");

  if (page === "home") {
    content.innerHTML = `
      <h1>🏠 Início</h1>
      <p>Bem-vindo ao servidor RP.</p>
    `;
  }

  if (page === "gerais") {
    content.innerHTML = `
      <h1>📄 Regras Gerais</h1>
      <p>✔ É obrigatório priorizar o Roleplay.</p>
      <p>❌ Proibido RDM, VDM e Metagaming.</p>
    `;
  }

  if (page === "conduta") {
    content.innerHTML = `
      <h1>🎮 Conduta</h1>
      <p>Respeita todos os jogadores.</p>
      <p>Evita toxicidade.</p>
    `;
  }
}