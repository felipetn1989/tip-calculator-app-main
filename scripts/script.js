const percentages = document.getElementsByName("tipPercentage");

const labels = document.querySelectorAll(".percentage");

const tipResult = document.querySelector(".tip_result_value");

const totalResult = document.querySelector(".total_result_value");

const errorMsg = document.querySelector(".error_msg");

const reset = document.querySelector(".reset");

const customButton = document.querySelector(".custom");

const custom = document.querySelector(".choose_custom_input");

const customTitle = document.querySelector(".choose_custom");

/* Function reload will clean all the fields. It's invoked when the user loads the page for the first time and also when the reset button is pressed */

function reload() {
  ibill.value = "";
  inumPeople.value = "";
  custom.value = "";
  tipResult.innerHTML = "0.00";
  totalResult.innerHTML = "0.00";
  ibill.focus();
}

reload();

/* These next event listeners will call the displayResults function, that does the appropriate calculations and inputs the results on the correct parts of the page. The calculations are made as soon as the user starts to put the values on the respective fields */

ibill.addEventListener("input", displayResults);
ibill.addEventListener("input", displayResults);
inumPeople.addEventListener("input", displayResults);
custom.addEventListener("input", () => {
  tip = custom.value / 100;
});
custom.addEventListener("input", displayResults);

/* Next, the code will add an Event Listener to each of the tip percentage buttons. The first part of the code checks if the button clicked is the one for custom tip. If so, it will do the appropriate changes to display the input field for the user to type in a custom value for the tip percentage */

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
        /* The else statement makes sure the custom button returns to its original appearance if the user clicks on another button after clicking on custom */
      } else {
        custom.value = "";
        custom.style.display = "none";
        customButton.style.border = "none";
        customTitle.style.display = "flex";
      }
      /* This for loop will run through all the other labels that weren't clicked and change their color to the default unclicked colors */
      for (let j = 0; j < labels.length; j++) {
        if (j != index) {
          labels[j].style.backgroundColor = "var(--Very-dark-cyan)";
          labels[5].style.backgroundColor = "var(--Very-light-grayish-cyan)";
        }
      }
      /* The switch expression will check what is the selected index (which of the percentage buttons is pressed and change the value of the variable tip */
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

/* displayResults is the function that performs the calculations and display the results. It checks if the number of people is greater than zero (if true, it will do the appropriate changes to display the error status */

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
