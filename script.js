document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateBtn");
  const recordBtn = document.getElementById("recordBtn");
  const displayText = document.getElementById("display-text");
  const historyList = document.getElementById("history-list");
  const historyContainer = document.getElementById("history-container");

  let currentPrompt = "";

  generateBtn.addEventListener("click", () => {
    const selectedPersons = Array.from(
      document.querySelectorAll('input[name="person"]:checked'),
    ).map((cb) => cb.value);
    const selectedTenses = Array.from(
      document.querySelectorAll('input[name="tense"]:checked'),
    ).map((cb) => cb.value);

    if (selectedPersons.length === 0 || selectedTenses.length === 0) {
      alert("Selecione pelo menos uma pessoa e um tempo!");
      return;
    }

    const person =
      selectedPersons[Math.floor(Math.random() * selectedPersons.length)];
    const tense =
      selectedTenses[Math.floor(Math.random() * selectedTenses.length)];
    currentPrompt = `${person} + ${tense}`;

    displayText.innerHTML = `<strong>${currentPrompt}</strong>`;
    document.getElementById("answer-input").value = "";
    document.getElementById("answer-input").focus();
  });

  recordBtn.addEventListener("click", () => {
    const verbInput = document.getElementById("verb-input");
    const answerInput = document.getElementById("answer-input");

    const verb = verbInput.value || "(Sem verbo)";
    const answer = answerInput.value || "(Vazio)";

    if (!currentPrompt) {
      alert("Gere um desafio primeiro!");
      return;
    }

    const now = new Date();
    const timestamp = now.toLocaleTimeString("pt-BR", { hour12: false });

    const newItem = document.createElement("div");
    newItem.className = "history-item";

    newItem.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center;">
              <b>${verb}</b> 
              <span style="font-size: 0.65rem; color: #a0aec0;">${timestamp}</span>
          </div>
          <div>(${currentPrompt})</div>
          <i>Resp: ${answer}</i>
          <div class="status-btns">
            <button class="s-btn c" onclick="updateItemStatus(this, 'c')">✓ Certo</button>
            <button class="s-btn e" onclick="updateItemStatus(this, 'e')">✗ Errado</button>
          </div>
      `;

    historyList.prepend(newItem);
    historyContainer.scrollTop = 0;

    answerInput.value = "";
    answerInput.focus();
  });
});

window.updateItemStatus = function (btn, status) {
  const item = btn.closest(".history-item");
  const buttons = item.querySelectorAll(".s-btn");

  item.classList.remove("is-correct", "is-incorrect");
  buttons.forEach((b) => b.classList.remove("active"));

  if (status === "c") {
    item.classList.add("is-correct");
  } else {
    item.classList.add("is-incorrect");
  }
  btn.classList.add("active");
};
