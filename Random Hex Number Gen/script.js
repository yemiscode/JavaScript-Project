const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");


const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = "#" + randomColor;
    hex.innerHTML =  "#" + randomColor;
}
btn.addEventListener("click", generateColor);
generateColor();

// let color = Math.random();
// color = Math.random().toString();
// color = Math.random().toString(16).substring(2, 8);
// console.log(color)
// The tostring bracket take a parameter know as radix, by default it is base 10 (base 10 means 0 - 9) we put in base 16 and the from e - f . the base 16 enables us to have numbers and alphabet
// The substrings method extract character from a string and it takes two parameters (start, end)