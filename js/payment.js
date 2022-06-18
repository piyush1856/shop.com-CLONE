let arr = ["MAYURESH BAILURKAR", "1020304050", "10/60", "123"];

document.querySelector("form").addEventListener("submit", payment);

let Cancelbtn = document.querySelector("#cancelbtn");
Cancelbtn.addEventListener("click", cartpage);

let paymentArr = [];

let flag = false;
function payment() {
  event.preventDefault();

  let name = document.querySelector("#name").value;

  let card = document.querySelector("#cardnumber").value;

  let expiry = document.querySelector("#expirydate").value;

  let code = document.querySelector("#securitycode").value;

  paymentArr.push(name, card, expiry, code);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != paymentArr[i]) {
      flag = false;
      break;
    } else {
      flag = true;
    }
  }

  check();
  paymentArr = [];
//   document.querySelector("form").reset();
  console.log(paymentArr);
}

function check() {
  if (flag == true) {
    alert("Payment Successfull");
  } else {
    alert("Please Enter correct details!");
  }
}

function cartpage() {
  window.location.pathname = "cart.html";
}
