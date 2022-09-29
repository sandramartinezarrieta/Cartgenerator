/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function carta() {
    let palo = ["♦", "♥", "♠", "♣"];
    let paloAleatorio = palo[Math.floor(Math.random() * palo.length)];
    let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q"];
    let numeroaleatorio = number[Math.floor(Math.random() * number.length)];

    document.getElementById("paloizq").innerHTML = paloAleatorio;
    document.getElementById("paloderch").innerHTML = paloAleatorio;
    document.getElementById("numero").innerHTML = numeroaleatorio;

    if (paloAleatorio == "♥" || paloAleatorio == "♦") {
      document.getElementById("paloizq").style.color = "red";
      document.getElementById("paloderch").style.color = "red";
      document.getElementById("numero").style.color = "red";
    }
  }
  carta();
  document.getElementById("Baraja").addEventListener("click", carta);
};

//  / document
//   //   .getElementById("cambiatamano")
//   //   .addEventListener("change", function(e) {
//   //     card.style.width = e.target.value + "px";
//   //   });
