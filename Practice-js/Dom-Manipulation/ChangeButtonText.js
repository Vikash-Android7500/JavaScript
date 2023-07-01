// Function to change the text of a button on click event
const changeButtonText = () => {

  const button = document.querySelector("button");

  if (button.textContent === "Click Me!") {
     button.textContent = "Clicked!";
     button.style.color = "blue";
  }
   else {
    button.textContent = "Click Me!";
    button.style.color = "red";
  }
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("click");
});
