const DOG_URL = "https://dog.ceo/api/breeds/image/random";
let dogDiv = document.querySelector(".dog-target");
let dogButton = document.querySelector(".dog-btn");

dogButton.addEventListener("click", () => {
	const promise = fetch(DOG_URL);
	const processedPromise = promise.then((response) => {
		const processingPromise = response.text();
	
		// If we knew that our server was definitely going to return a json object, 
		// we could do: 
		// const processingPromise = response.json();
		// This would allow us to skip the JSON.parse() call below.
	
    	return processingPromise;
	});
	processedPromise.then((response) => {
		const dogObject = JSON.parse(response);
		const img = document.createElement("img");
		
		img.src = dogObject.message;
		img.alt = "Dog picture";
		dogDiv.appendChild(img);
	}).catch((err) => {
		console.log("There was an error", err);
	});
});
