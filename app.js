const valeurs = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const couleurs = ["♥", "♦", "♣", "♠"];

function afficherCombinaisons() {
  const combinaisons = Array.from(
    combinations(valeurs.concat(couleurs), 5)
  );
  const elementCombinaisons = document.getElementById("combinaisons");
  for (const combinaison of combinaisons) {
    const elementCombinaison = document.createElement("div");
    elementCombinaison.classList.add("combinaison");
    for (const carte of combinaison) {
      elementCombinaison.innerHTML += `<p>${carte}</p>`;
    }
    elementCombinaisons.appendChild(elementCombinaison);
  }
}

function combinations(arr, n) {
  if (n > arr.length) {
    return [];
  }
  if (n === 0) {
    return [[]];
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = arr.slice(i + 1);
    const combs = combinations(rest, n - 1);
    for (const comb of combs) {
      result.push([arr[i], ...comb]);
    }
  }
  return result;
}

afficherCombinaisons();
