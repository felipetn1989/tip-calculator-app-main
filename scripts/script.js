const percentages = document.getElementsByName("tipPercentage");

const labels = document.querySelectorAll(".percentage");

const tipResult = document.querySelector(".tip_result_value");

const totalResult = document.querySelector(".total_result_value");

const errorMsg = document.querySelector(".error_msg");

const inumPeople = document.getElementById("inumPeople");

let selectedIndex = 1;
let tip = 0.05;
ibill.value = ""
inumPeople.value = ""


labels[0].style.backgroundColor = "var(--Strong-cyan)";

percentages.forEach((percentage, index) => {
  percentage.addEventListener("click", () => {
    if (percentage.checked) {
      selectedIndex = index + 1;
      labels[index].style.backgroundColor = "var(--Strong-cyan)";
      for (let j = 0; j < labels.length; j++) {
        if (j != index) {
          labels[j].style.backgroundColor = "var(--Very-dark-cyan)";
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
      }
    }
    let numberPeople = inumPeople.value;
    
    if (inumPeople.value == 0) {
      errorMsg.style.display = "inline";
      tipResult.innerHTML = "0.00";
      totalResult.innerHTML = "0.00";
    } else {
      tipResult.innerHTML = ((ibill.value * tip) / numberPeople).toFixed(2);
      totalResult.innerHTML = (ibill.value / numberPeople).toFixed(2)
    }
  });
});

