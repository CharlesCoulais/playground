

window.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('startBt');

  button.addEventListener('click', jouer);
})


function jouer() {
  var max = 3;
  var chances = 2;
  var hasard = Math.floor(Math.random() * (max + 1));

  var message = "Il te reste " + chances + " chances. \n";
  while (chances > 1) {
    var reponse = prompt(message + "Devine mon chiffre entre 0 et " + max + " ?");
    if (hasard > reponse) message = "Trop petit ! \n";
    if (hasard < reponse) message = "Trop grand ! \n";
    if (hasard == reponse) alert("Gagné !");
    if (hasard == reponse) return;
    chances = chances - 1;
    message = message + "Il te reste " + chances + " chances. \n"
  }

  var reponse = prompt(message + "Devine mon chiffre entre 0 et " + max + " ?");

  if (hasard != reponse) alert("PERDU TETE DE PROUT ! Le nombre était " + hasard);
  if (hasard == reponse) alert("Gagné !");
}