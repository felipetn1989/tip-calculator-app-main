const percentages = document.getElementsByName("tipPercentage");

const labels = document.querySelectorAll(".percentage");

const tipResult = document.querySelector(".tip_result_value");

const totalResult = document.querySelector(".total_result_value");

const errorMsg = document.querySelector(".error_msg");

const reset = document.querySelector(".reset");

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

ibill.addEventListener("change", displayResults);
inumPeople.addEventListener("change", displayResults);
custom.addEventListener("change",displayResults)

percentages.forEach((percentage, index) => {
  percentage.addEventListener("click", function () {
    if (percentage.checked) {
      selectedIndex = index + 1;
      labels[index].style.backgroundColor = "var(--Strong-cyan)";
      if (selectedIndex == 6) {
        custom.style.display = "unset";
        customTitle.style.display = "none";
        custom.focus()
      } else {
        custom.style.display = "none";
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
        case 6: 
          tip = custom.value/100
          console.log(tip)
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
    tipResult.innerHTML = "0.00";
    totalResult.innerHTML = "0.00";
  } else {
    errorMsg.style.display = "none";
    tipResult.innerHTML = ((ibill.value * tip) / numberPeople).toFixed(2);
    totalResult.innerHTML = (ibill.value / numberPeople).toFixed(2);
  }
}
