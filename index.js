const generate1 = document.getElementById('generate');

const randingFunc = {
    letter: getRandomLetter,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}
//note fromCharCode - 
function getRandomLetter() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 162);
}
function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

generatePassword.addEventListener('click', () => {
    let password = '';
    const passwordLength = 0;
    const passwordTypesArr = Object.values(passwordTypes);

}

console.log(password);
});
