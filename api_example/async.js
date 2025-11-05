const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const dogButton = document.querySelector(".dog-btn");
const dogTarget = document.querySelector(".dog-target");

async function getImage() {
	const promise = await fetch(DOG_URL);
	const afterProcessing = await promise.json();
	
	const img = document.createElement("img");
	img.src = afterProcessing.message;
	img.alt = "Dog image";
	dogTarget.appendChild(img);
}

dogButton.addEventListener("click", getImage);
// dogButton.addEventListener("click", getImage());
// The commented line is incorrect, what it does is call the getImage function immediately, and whatever
// that function returns, is what is used by the addEventListener function.

