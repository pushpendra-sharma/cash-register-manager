const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.getElementById("cash-given");
const calculateButton = document.getElementById("btn-calculate");
const billMessage = document.querySelector(".bill-msg");
const cashMessage = document.querySelector(".cash-msg");
const noOfNotes = document.querySelectorAll(".note");
const changeAmount = document.getElementById("change-amount");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
const deleteMessage=element=>element.innerText="";

deleteMessage(billMessage);
deleteMessage(cashMessage);

function showMessage(element, text = "") {
  element.style.display = "block";
  element.innerText = text;
}

function calculateChange(amount) {
  for (let i = 0; i < availableNotes.length; i++) {
    let numberOfNotes = Math.trunc(amount / availableNotes[i]);
    amount = amount % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

calculateButton.addEventListener("click", function validateBillAndCash() {
deleteMessage(billMessage);
deleteMessage(cashMessage);
deleteMessage(changeAmount);
noOfNotes.forEach(item=>deleteMessage(item));

  if (billAmount.value > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      console.log(cashGiven.value);
      const amountToReturn = Number(cashGiven.value) - Number(billAmount.value);
      calculateChange(amountToReturn);
      showMessage(changeAmount, amountToReturn);
    } else {
      showMessage(cashMessage, "Cash provided should atleast be equal to bill");
    }
  } else {
    showMessage(billMessage, "The bill should be greater than 0");
  }
});
