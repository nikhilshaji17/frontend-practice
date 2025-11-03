let displayText = document.querySelector(".calc-output");
let buttonHandler = document.querySelector(".calc-buttons");
let runningTotal = 0;
let result = "0";
let operator = "";

function checkIfNumber (number) {
	if (number >= 0 && number <= 9) {
		return true;
	}
	return false;
}

function handleClear (displayText, runningTotal, result) {
	displayText.innerText = "0";
	runningTotal = 0;
	result = displayText.innerText;
	operator = "";
}

function calculateResult(runningTotal, intBuffer, operator) {
	if (operator == "+") {
		runningTotal += intBuffer;
	} else if (operator == "-") {
		runningTotal -= intBuffer;
	} else if (operator == "x") {
		runningTotal *= intBuffer;
	} else if (operator = "÷") {
		runningTotal /= intBuffer;
	}
	console.log(runningTotal);
}

function handleSymbols (displayText, runningTotal, result, operator) {
	if (result == "0") {
		return ;
	}
	const intBuffer = parseInt(result);
	if (runningTotal === 0) {
		runningTotal = intBuffer;
	} else {
		runningTotal = calculateResult(runningTotal, intBuffer, operator);
	}
	displayText.innerText = "0";
}

function displayResult(displayText, runningTotal, result, operator) {

}

buttonHandler.addEventListener("click", (event) => {
	let clickResult = event.target.innerText;
	if (checkIfNumber(clickResult)){
		if (displayText.innerText == "0") {
			displayText.innerText = clickResult;
		} else {
			displayText.innerText += clickResult;
		}
		result = displayText.innerText;
	} else if (clickResult == "C") {
		handleClear(displayText, runningTotal, result);
	} else if (clickResult == "⌫") {
		if (displayText.innerText.length === 1) {
			displayText.innerText = "0";
		}
		else {
			displayText.innerText = displayText.innerText.substring(0, displayText.innerText.length - 1);
		}
		result = displayText.innerText;
	} else if (clickResult == "+" || clickResult == "÷" || clickResult == "x" || clickResult == "-") {
		handleSymbols(displayText, runningTotal, result, clickResult)
	} else if (clickResult == "=") {
		displayResult(displayText, runningTotal, result, operator)
	}
})