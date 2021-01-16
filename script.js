var but1 = document.querySelector(".but1");
var but2 = document.querySelector(".but2");
var qte = document.querySelector(".qte1");
var pu = document.querySelector(".pu1").innerHTML;
var total = document.querySelector(".total");
var picture = document.querySelector(".logo1");

var somme1 = 0;
var somme2 = 0;
var somme3 = 0;

var but3 = document.querySelector(".but3");
var but4 = document.querySelector(".but4");
var qte2 = document.querySelector(".qte2");
var pu2 = document.querySelector(".pu2").innerHTML;

var but5 = document.querySelector(".but5");
var but6 = document.querySelector(".but6");
var qte3 = document.querySelector(".qte3");
var pu3 = document.querySelector(".pu3").innerHTML;

but2.addEventListener("click", () => {
  if (qte.value >= 0) {
    qte.value = parseInt(qte.value) + 1;
  }
  somme1 = parseInt(qte.value * parseInt(pu));

  total.innerHTML = somme1 + somme2 + somme3;
});
but1.addEventListener("click", () => {
  if (qte.value > 0) {
    qte.value = parseInt(qte.value) - 1;
  }
  somme1 = parseInt(qte.value * parseInt(pu));

  total.innerHTML = somme1 + somme2 + somme3;
});

but4.addEventListener("click", () => {
  if (qte2.value >= 0) {
    qte2.value = parseInt(qte2.value) + 1;
  }
  somme2 = parseInt(qte2.value * parseInt(pu2));

  total.innerHTML = somme1 + somme3 + somme2;
});
but3.addEventListener("click", () => {
  if (qte2.value > 0) {
    qte2.value = parseInt(qte2.value) - 1;
  }
  somme2 = parseInt(qte2.value * parseInt(pu2));

  total.innerHTML = somme1 + somme3 + somme2;
});

but6.addEventListener("click", () => {
  if (qte3.value >= 0) {
    qte3.value = parseInt(qte3.value) + 1;
  }
  somme3 = parseInt(qte3.value * parseInt(pu3));

  total.innerHTML = somme1 + somme2 + somme3;
});
but5.addEventListener("click", () => {
  if (qte3.value > 0) {
    qte3.value = parseInt(qte3.value) - 1;
  }
  somme3 = parseInt(qte3.value * parseInt(pu3));

  total.innerHTML = somme1 + somme2 + somme3;
});
picture.addEventListener("click", function () {
  this.style.background = "F0F8FF";
});
