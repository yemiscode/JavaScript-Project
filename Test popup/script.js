// vARIABLES

const modal = document.querySelector(".modal"),
    btn = document.querySelector(".btn"),
    close = document.querySelector(".close");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

// openModal
function openModal(e) {
    e.preventDefault();
    modal.style.display = "block";
}
// closeModal
function closeModal() {
    modal.style.display = "none";
}
// Clicking a form btn refresh the page to prevent that from occurring put the parameter e into the bracket. Write the method e.preventDefault

