const percentages = document.getElementsByName("tipPercentage");

const labels = document.querySelectorAll(".percentage")

let selectedIndex = 1;
let tip = 0.05;

percentages.forEach((percentage, index) => {
  percentage.addEventListener("click", () => {
    if (percentage.checked) {
      selectedIndex = index + 1;
      //labels[index].style.backgroundColor = "red" modificar
      switch (selectedIndex) {
        case 1:
          tip = 0.05;
          console.log(tip);
          break;
        case 2:
          tip = 0.1;
          console.log(tip);
          break;
        case 3:
          tip = 0.15;
          console.log(tip);
          break;
        case 4:
          tip = 0.25;
          console.log(tip);
          break;
        case 5:
          tip = 0.5;
          console.log(tip);
      }
    }
    console.log(selectedIndex);
  });
});
