//======================= MATH METHODS ==========================


//QUESTION NO 01
// const positiveNumber = prompt("Enter a positive number (can include decimals):");

// const number = parseFloat(positiveNumber);

// if (isNaN(number) || number <= 0 || Number.isInteger(number)) {
//   alert("Please enter a valid positive number.");
// } else {
//   const roundOff = Math.round(number);
//   const floorValue = Math.floor(number);
//   const ceilValue = Math.ceil(number);
//   document.write(`Number: ${number} <br> RoundOff: ${roundOff} <br> Floor Value: ${floorValue} <br> Ceil Value: ${ceilValue} `);
// }






//QUESTION NO 02
// const negativeNumber = prompt("Enter a positive number (can include decimals):");

// const number = parseFloat(negativeNumber);

// if (isNaN(number) || number >= 0 || Number.isInteger(number)) {
//     alert("Please enter a valid negative floating-point number.");
// } else {
//   const roundOff = Math.round(number);
//   const floorValue = Math.floor(number);
//   const ceilValue = Math.ceil(number);
//   document.write(`Number: ${number} <br> RoundOff: ${roundOff} <br> Floor Value: ${floorValue} <br> Ceil Value: ${ceilValue} `);
// }






//QUESTION NO 03
// const userInput = Number(prompt("Enter a number")) ;
// const absoluteValue = Math.abs(userInput);
// document.write(`The absolute value of ${userInput} is ${absoluteValue}`)





//QUESTION NO 04
// const randomNumber = Math.floor(Math.random()*6 + 1)
// document.write(`Random dice value: ${randomNumber}`)





//QUESTION NO 05
// const options = ["head","tail"]
// const randomIndex = Math.floor(Math.random()*options.length);
// const IndexAdjust = randomIndex+1;
// const randomCoin = options[randomIndex]
// document.write(`${IndexAdjust} <br> random coin value:${randomCoin}`)





//QUESTION NO 06
// const randomNumber= Math.floor(Math.random()*100 +1);
// document.write(`Random no between 1 and 100: ${randomNumber}`)




//QUESTION NO 07
// const userWeight =parseFloat(prompt("Enter your weight in kilograms"));
// document.write(`The weight of user is ${userWeight} in kilograms`)





//QUESTION NO 08
// const secretNumber = Math.floor(Math.random() * 10) + 1;
// const userNumber = parseFloat(prompt("Enter a number between 1 and 10"),10);

// if(userNumber === secretNumber){
//     alert(`🎉 Congratulations! You Won! \n Secret Number is ${secretNumber} ✨`);
// }else{
//     alert(`❌ Try Again! The Secret Number was ${secretNumber}`);
// }