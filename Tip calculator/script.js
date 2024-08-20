const btn = document.querySelector(".btn"),
    tip = document.querySelector(".tip"),
    total = document.querySelector(".total"),
    error = document.querySelector(".error");

const hideError = () => {
    setTimeout(() => {
        error.style.display = "none";
   }, 4000)
}


const calculateTip = () => {
    const bill = document.querySelector(".bill").value,
        rate = document.querySelector(".rate").value;
    
    if (bill === "" || rate == "") {
        error.style.display = "block";
        hideError();
    } 
        if (isNaN(bill)) {
        error.innerHTML = "please enter a number";
        error.style.display = "block";
        hideError();
    }
        else {
            let tipAmount = rate * bill;
            tipAmount = Math.ceil(tipAmount);
            tip.innerHTML = `Tip Amount: $${tipAmount}`;

            let totalBill = Number(tipAmount) + bill;
            total.innerHTML = `Total Bill: $${totalBill}`
    }
 
}
btn.addEventListener("click", calculateTip);

// the bill and rate variable was not declared on the global scope in other to avoid erro-=