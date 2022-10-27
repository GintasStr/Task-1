/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const weightDisplay = document.getElementById("output");

  const kg = document.getElementById("search").value;

  const svarai = document.createElement("h3");
  svarai.textContent = "Svarai:" + " " + kg * 2.2046 + " " + "lb";

  const gramai = document.createElement("h3");
  gramai.textContent = "Gramai:" + " " + kg / 0.001 + " " + "g";

  const uncijos = document.createElement("h3");
  uncijos.textContent = "Uncijos:" + " " + kg * 35.274 + " " + "oz";

  weightDisplay.append(svarai, gramai, uncijos);
});
