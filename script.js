const cel = document.getElementById("Celsius");
const kel = document.getElementById("Kelvin");
const far = document.getElementById("Fahrenheit");

const inputs = document.getElementsByClassName("input");

const clearBtn = document.getElementById("clearBtn");

for (let i = 0; i < inputs.length; i++) {
  getValue = inputs[i];

  getValue.addEventListener("input", function (e) {
    let obtainedValue = parseFloat(e.target.value);
    switch (e.target.name) {
      case "Celsius":
        kel.value = obtainedValue + 273.15;
        far.value = obtainedValue * 1.8 + 32;
        break;
      case "Kelvin":
        cel.value = obtainedValue - 273.15;
        far.value = (obtainedValue - 273.15) * 1.8 + 32;
        break;
      case "Fahrenheit":
        cel.value = obtainedValue - 32 / 1.8;
        kel.value = obtainedValue - 32 / 1.8 + 273.15;
        break;
    }
  });
}

clearBtn.addEventListener("click", function () {
  cel.value = "";
  kel.value = "";
  far.value = "";
});
