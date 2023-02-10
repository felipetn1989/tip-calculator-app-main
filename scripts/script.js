const percentages = document.getElementsByName("tipPercentage");

const labels = document.querySelectorAll(".percentage");

const tipResult = document.querySelector(".tip_result_value");

const totalResult = document.querySelector(".total_result_value");

const errorMsg = document.querySelector(".error_msg");

const reset = document.querySelector(".reset");

const customButton = document.querySelector(".custom");

const custom = document.querySelector(".choose_custom_input");

const customTitle = document.querySelector(".choose_custom");

function reload() {
  ibill.value = "";
  inumPeople.value = "";
  custom.value = "";
  tipResult.innerHTML = "0.00";
  totalResult.innerHTML = "0.00";
  ibill.focus();
}

reload();

ibill.addEventListener("input", displayResults);
ibill.addEventListener("input", displayResults);
inumPeople.addEventListener("input", displayResults);
custom.addEventListener("input", () => {
  tip = custom.value / 100;
});
custom.addEventListener("input", displayResults);

percentages.forEach((percentage, index) => {
  percentage.addEventListener("click", function () {
    if (percentage.checked) {
      selectedIndex = index + 1;
      labels[index].style.backgroundColor = "var(--Strong-cyan)";
      if (selectedIndex == 6) {
        custom.style.display = "unset";
        customButton.style.border = "1px solid cyan";
        customTitle.style.display = "none";
        custom.focus();
      } else {
        custom.value = "";
        custom.style.display = "none";
        customButton.style.border = "none";
        customTitle.style.display = "flex";
      }
      for (let j = 0; j < labels.length; j++) {
        if (j != index) {
          labels[j].style.backgroundColor = "var(--Very-dark-cyan)";
          labels[5].style.backgroundColor = "var(--Very-light-grayish-cyan)";
        }
      }
      switch (selectedIndex) {
        case 1:
          tip = 0.05;
          break;
        case 2:
          tip = 0.1;
          break;
        case 3:
          tip = 0.15;
          break;
        case 4:
          tip = 0.25;
          break;
        case 5:
          tip = 0.5;
          break;
      }
    }

    displayResults();
  });
});

reset.addEventListener("click", reload);

function displayResults() {
  let numberPeople = inumPeople.value;
  if (inumPeople.value == 0) {
    errorMsg.style.display = "inline";
    inumPeople.style.border = "1px solid red";
    tipResult.innerHTML = "0.00";
    totalResult.innerHTML = "0.00";
  } else {
    errorMsg.style.display = "none";
    inumPeople.style.border = "none";
    tipResult.innerHTML = ((ibill.value * tip) / numberPeople).toFixed(2);
    totalResult.innerHTML = (ibill.value / inumPeople.value).toFixed(2);
  }
}
