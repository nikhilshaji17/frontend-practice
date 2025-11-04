const TOTAL_ROWS = 6;
const TOTAL_COLS = 5;
const FINAL_ANSWER_URL = "https://words.dev-apis.com/word-of-the-day";
const POST_URL = "https://words.dev-apis.com/validate-word"
let FINAL_ANSWER = "";

let currentRow = 0;
let currentCol = 0;
let currentString = "";
let final_answer_dict = {};

function createAnswerDict() {
	for (let i = 0; i < FINAL_ANSWER.length; i ++){
		let currentLetter = FINAL_ANSWER[i];
		if (currentLetter in final_answer_dict) {
			final_answer_dict[currentLetter].push(i);
		} else {
			final_answer_dict[currentLetter] = [i];
		}
	}
}

async function getFinalAnswer() {
	const promise = await fetch(FINAL_ANSWER_URL);
	const afterProcessing = await promise.json();
	FINAL_ANSWER = afterProcessing.word;
	createAnswerDict();
}

function incrementCol() {
	if (currentCol < TOTAL_COLS - 1) {
		currentCol += 1;
	}
}

function resetBoard() {
	currentRow += 1;
	currentCol = 0;
	currentString = "";
}

function addLetterToScreen(upperCase) {
	if (currentCol < TOTAL_COLS) {
		let index = ".box-" + currentRow + currentCol;
		const currentBox = document.querySelector(index);
		currentBox.innerText = upperCase;
	}
	incrementCol();
}

function changeBoxColor(i, boxColor) {
	let index = ".box-" + currentRow + i;
	const currentBox = document.querySelector(index);
	currentBox.style.backgroundColor = boxColor;
	currentBox.style.color = "white";
}

function correctLetterPosition(letter, i) {
	let dictIndices = final_answer_dict[letter];
	for (let j = 0; j < dictIndices.length; j++) {
		if (i === dictIndices[j]) {
			return true;
		}
	}
	return false;
}

function checkCount(letter, tempDict) {
	let count = tempDict[letter].length;
	if (count <= 0) {
		return false;
	}
	return true;
}

function checkPosition(index, letter, tempDict) {
	let tempList = tempDict[letter];
	for (let i = 0; i < tempList; i++) {
		if (index === tempList[i]) {
			tempDict[letter].splice(i, 1);
			return true;
		}
	}
	return false;
}

function compareValidLetters() {
	let tempDict = final_answer_dict;
	for (let i = 0; i < currentString.length; i++) {
		if (currentString[i] in tempDict) {
			if (checkCount(currentString[i], tempDict)) {
				if (checkPosition(i, currentString[i], tempDict)) {
					changeBoxColor(i, "darkgreen");
				} else {
					changeBoxColor(i, "goldenrod");
				}
			} else {
				changeBoxColor(i, "#999");	
			}
		} else {
			changeBoxColor(i, "#999");
		}
	}
}

function redBorderAnimation() {
	for (let i = 0; i < TOTAL_COLS; i++) {
		const index = ".box-" + currentRow + i;
		const currentBox = document.querySelector(index);
		currentBox.classList.add("red-border");
		currentBox.addEventListener("animationend", () => {
			currentBox.classList.remove("red-border");
		})
	}	
}

async function checkValidWord() {
	const postData = await fetch(POST_URL, {
		method: "POST",
		body: JSON.stringify({"word": currentString})
	});
	const afterProcessing = await postData.json();
	return afterProcessing.validWord;
}

async function checkWord() {
	let flag = await checkValidWord();
	if (flag === true) {
		compareValidLetters();
		resetBoard();
	} else {
		redBorderAnimation();
		return ;
	}
}

function handleEnter() {
	if (currentCol != 4) {
		return ;
	} else if (currentString === FINAL_ANSWER){
		alert("You win!");
	} else {
		checkWord();
	}
}

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

function handleLetter(letter) {
	if (currentRow >= TOTAL_ROWS) {
		alert("Game Over!");
		return ;
	}
	if (isLetter(letter) === true) {
		const upperCase = letter.toUpperCase();
		addLetterToScreen(upperCase);
		if (currentString.length < 5) {
			currentString += letter;
		}
	} else if (letter === 'Enter') {
		console.log(currentString);
		handleEnter();
	} else if (letter === 'Backspace') {
		let index = ".box-" + currentRow + currentCol;
		const currentBox = document.querySelector(index);
		if (currentString.length > 0) {
			currentString = currentString.slice(0, currentString.length - 1);
			currentBox.innerText = "";
			currentCol -= 1;
		}
	} else {
		;
	}
}

function init() {
	getFinalAnswer();
	createAnswerDict();
}

init();
document.addEventListener("keyup", (event) => {
	const letter = event.key;
	handleLetter(letter);
})
