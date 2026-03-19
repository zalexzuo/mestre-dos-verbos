document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateBtn");
  const displayText = document.getElementById("display-text");

  generateBtn.addEventListener("click", () => {
    const selectedPersons = Array.from(
      document.querySelectorAll('input[name="person"]:checked'),
    ).map((cb) => cb.value);

    const selectedTenses = Array.from(
      document.querySelectorAll('input[name="tense"]:checked'),
    ).map((cb) => cb.value);

    if (selectedPersons.length === 0 || selectedTenses.length === 0) {
      alert("Por favor, selecione pelo menos uma pessoa e um tempo!");
      return;
    }

    const randomPerson =
      selectedPersons[Math.floor(Math.random() * selectedPersons.length)];
    const randomTense =
      selectedTenses[Math.floor(Math.random() * selectedTenses.length)];

    displayText.innerHTML = `
            <div>
                <span style="color: #718096; font-size: 0.8rem;">CONJUGUE:</span><br>
                <strong style="font-size: 1.4rem;">${randomPerson}</strong><br>
                <span style="color: #38a169;">+ ${randomTense}</span>
            </div>
        `;
  });
});
