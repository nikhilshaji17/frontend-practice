console.log("----------------------------We are in experiment2---------------------------------")

// function addTwo(number) {
// 	return number + 2;
// }

// let number = 7;
// number = addTwo(number);
// console.log(number);


// --------------------------------------------------------------------------

// Works, because regular function declarations and initialization are hoisted to the top
// testFunction()

// function testFunction(){
// 	console.log("From inside the function")
// }

// --------------------------------------------------------------------------

// Does not work, because function expression declarations are hoisted, but not their initializations

// console.log(typeof(testing))
// testing()

// const testing = function testFunction(){
// 	console.log("From inside the function") 
// }

// --------------------------------------------------------------------------

// Does not work, because arrows function declarations are hoisted, but not their initializations

// console.log(typeof(testing))
// testing()

// const testing = () => {
// 	console.log("From inside the function") 
// }

// console["log"]("hello my name is Nikhil");