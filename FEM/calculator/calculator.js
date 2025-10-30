let displayText = document.querySelector(".calc-output");
let buttonHandler = document.querySelector(".calc-buttons");
let tempResult = "0";
let result = "0";
let operator = "";

function checkIfNumber (number) {
	if (number >= 0 && number <= 9) {
		return true;
	}
	return false;
}

function handleClear (displayText, tempResult, result) {
	displayText.innerText = "0";
	tempResult = displayText.innerText;
	result = displayText.innerText;
	operator = "";
}

function handleSymbols (displayText, tempResult, result, clickResult) {
	result = tempResult;
	operator = clickResult;
	displayText.innerText = "0";
	tempResult = displayText.innerText;
}

function calculateResult(valueOne, valueTwo, operator) {
	if (operator == "+") {
		return (valueOne + valueTwo);
	} else if (operator == "-") {
		return (valueOne - valueTwo);
	} else if (operator == "x") {
		return (valueOne * valueTwo);
	} else if (operator = "÷")
		return (valueOne / valueTwo);
}

function displayResult(displayText, tempResult, result, operator) {
	let valueOne = Number(result);
	console.log(valueOne);
	let valueTwo = Number(tempResult);
	console.log(valueTwo);
	let finalValue = calculateResult(valueOne, valueTwo, operator)
	tempResult = String(finalValue);
	displayText.innerText = tempResult;
	result = "0";
}

buttonHandler.addEventListener("click", (event) => {
	let clickResult = event.target.innerText;
	if (checkIfNumber(clickResult)){
		if (displayText.innerText == "0") {
			displayText.innerText = clickResult;
		} else {
			displayText.innerText += clickResult;
		}
		tempResult = displayText.innerText;
	} else if (clickResult == "C") {
		handleClear(displayText, tempResult, result);
	} else if (clickResult == "+" || clickResult == "÷" || clickResult == "x" || clickResult == "-") {
		handleSymbols(displayText, tempResult, result, clickResult)
	} else if (clickResult == "=") {
		displayResult(displayText, tempResult, result, operator)
	}
})