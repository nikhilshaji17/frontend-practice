// buttonHandler.addEventListener("click", function () {
// 	console.log("Hello again, new function type");
// });

let counter = 0;

const buttonHandler = document.querySelector(".myButton");
buttonHandler.addEventListener("click", () => {
	counter += 1;
	console.log("Hello from console", counter);
});

const inputHandler = document.querySelector(".myInput");
const textHandlerOne = document.querySelector(".sampleTextOne");
const textHandlerTwo = document.querySelector(".sampleTextTwo");

inputHandler.addEventListener("keydown", () => {
	textHandlerOne.innerText = inputHandler.value;
});

inputHandler.addEventListener("keyup", () => {
	textHandlerTwo.innerText = inputHandler.value;
});

document.querySelector(".button-container").addEventListener("click", (event) => {
	console.log(`You clicked button number ${event.target.innerText}`);
})