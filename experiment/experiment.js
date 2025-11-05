// const monthRent = 5000;

// const yearRent = monthRent * 12;

// console.log("The yearlyRent is: " + yearRent);

// const variableOne = 2;
// const variableTwo = "2";

// if (variableOne == variableTwo) {
// 	console.log("Test 1");
// }
// if (variableOne === variableTwo) {
// 	console.log("Test 2");
// }
// if (23 == "23") {
// 	console.log("Test 3");
// }
// if (23 === "23") {
// 	console.log("Test 4");
// }
// if ("23" == "23") {
// 	console.log("Test 5")
// }
// if ("23" === "23") {
// 	console.log("Test 6")
// }


// let x = 5;
// let y = "9";
// console.log(x + y);
// console.log(y + x);
// console.log(Number(y) + x);

let friendsAtParty = "10";

// if (friendsAtParty != 10) {
// 	console.log("friendsAtParty != 10");
// }
// if (friendsAtParty !== 10) {
// 	console.log("friendsAtParty !== 10");
// }
// if (friendsAtParty <= 10) {
// 	console.log("friendsAtParty <= 10");
// }
// if (friendsAtParty >= 10) {
// 	console.log("friendsAtParty >= 10");
// }

// console.log(typeof(friendsAtParty));
// friendsAtParty++;
// friendsAtParty+=1;
// --friendsAtParty;
// friendsAtParty--;
// console.log(friendsAtParty);
// console.log(typeof(friendsAtParty));

const timesToRepeat = 3;
for (let i = 0; i < timesToRepeat; i++) {
	friendsAtParty += friendsAtParty;
}
console.log(friendsAtParty);
console.log(typeof(friendsAtParty));
console.log(Number(friendsAtParty));