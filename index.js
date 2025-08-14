function rollDice() {
  const numOfDice = parseInt(document.getElementById("numOfDice").value);
  const diceresult = document.getElementById("diceresult");
  const diceimages = document.getElementById("diceimages");
  const values = [];
  const images = [];

  diceimages.innerHTML = "";

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="${value}.svg" alt="Dice ${value}" width="100">`);
  }

  diceresult.textContent = `Dice: ${values.join(", ")}`;
  diceimages.innerHTML = images.join("");
}

