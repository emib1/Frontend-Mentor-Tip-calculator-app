const  form= document.querySelector("form");
const resetBtn =document.querySelector(".reset");
const inputtedBill = document.querySelector(".bill-input");
const inputtedPeople = document.querySelector(".people-no input");
/************ tip options ************/
const fiveTip = document.querySelector(".five");
const tenTip = document.querySelector(".ten");
const fifteenTip = document.querySelector(".fifteen");
const twenteyFiveTip = document.querySelector(".twentey-five");
const fiftyTip = document.querySelector(".fifty");
const customTip = document.querySelector(".custom");
const allBtns =[fiveTip, tenTip, fifteenTip, twenteyFiveTip, fiftyTip, customTip]

/*** results p elements**** */
const totalAmount = document.querySelector(".total-amount");
const tipAmount = document.querySelector(".tip-amount");


/****** error p******** */
const peopleError = document.querySelector(".people-no-error")
const billError = document.querySelector(".bill-error");
const tipError = document.querySelector(".tip-error")
let percent;

form.addEventListener("submit", handleSubmission);

function handleSubmission(e){
  e.preventDefault();
  const bill = inputtedBill.value;
  const people = inputtedPeople.value;

  // shows errors for bill
  if (bill === ""){
    billError.textContent = "Please Enter a valid number";
    inputtedBill.classList.add("error");
    setTimeout(() => {
      billError.textContent =""
      inputtedBill.classList.remove("error");
    }, "5000");

  }
  else if(bill <= "0"){
    billError.textContent = " Bill can not be zero or less";
    inputtedBill.classList.add("error");
    setTimeout(() => {
      billError.textContent =""
      inputtedBill.classList.remove("error");
    }, "5000");
  }
  // shows errors for no of people
  if (people === ""){
    peopleError.textContent = "Please Enter a valid number";
    inputtedPeople.classList.add("error");
    setTimeout(() => {
      peopleError.textContent =""
      inputtedPeople.classList.remove("error");
    }, "5000");
   
  } else if(people <= "0"){
    peopleError.textContent = "Number of people can not be zero or less";
    inputtedPeople.classList.add("error");
    setTimeout(() => {
      peopleError.textContent =""
      inputtedPeople.classList.remove("error");
    }, "5000");
  }
 
  function tipButton(){
    fiveTip.addEventListener("click", () => {
      percent =5;
      return percent;
    });
    tenTip.addEventListener("click", ()=> {
      percent =10;
      return percent;
    });
    fifteenTip.addEventListener("click", () => {
      percent =15;
      return percent;
    });
    twenteyFiveTip.addEventListener("click", () => {
      percent =25;
      return percent;

    });
    fiftyTip.addEventListener("click", () => {
      percent =50;
      return percent;

    });

    customTip.addEventListener("click",  () =>{
      percent =customTip.textContent;
      return percent;
   });;
   }tipButton();
   /// custom tip
  
//// calculate Functtion
  function calculateTip(bill, people, percent){
    totalBill = bill *(percent /100);
    totalPerson = (bill / people) + (totalBill/people);
    tipAmount.textContent = `${totalBill}`
    totalAmount.textContent =`${totalPerson}`
  }
  calculateTip(bill, people, percent);

}

resetBtn.addEventListener("click", ()=>{
  totalAmount.textContent ="$0.00";
  tipAmount.textContent ="$0.00";
});

// tipError.textContent = percent;

//  add errror