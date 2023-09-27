// Brightness IPO Calc

// Button click listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let a = +document.getElementById("CSS").value;
  let b = +document.getElementById("SP1").value;
  let c = +document.getElementById("SP2").value;
  let d = +document.getElementById("CSS2").value;
  let e = +document.getElementById("PA").value;
  // PROCESS
  let brightness = a + b + c + d + e / 5
  // OUTPUT
  document.getElementById("output").innerHTML = brightness;
}
