console.log("Testing JS")

const button = document.getElementById("one")
const header = document.getElementById("equation")

button.addEventListener("click", () => {
    header.textContent = "1";
});