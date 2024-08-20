// Variable
const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
    e.preventDefault();


    coupon.select();
    coupon.setSelectionRange(0, 9999);
    document.execCommand("copy");
    btn.textContent = " copied!!!";
    setTimeout(() => {
        btn.textContent = " copy";
    }, 3000)
}

btn.addEventListener("click", copyText);


// the button is inside a form so use the e to prevent the button. the e prevent the page from reloading when the button is clicked
// the selection range define where you want to start and end
// the select is also like value