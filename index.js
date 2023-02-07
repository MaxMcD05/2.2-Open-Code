const generatePassword = document.getElementById('generate');

const passwordTypes = { //Creating 3 different Arrays. Found a was a way to create and block each one. (Arr opposed to charCode)
    letter: getRandomLetter,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

function getRandomLetter() { //First Array
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	//charCode is an array of all characters labeled 0-127 using ASCII. It says +97 to start the search at letter A as A is the 97th thing listed on the ASCII array. Then it counts 26 past that which are all 26 letters.
}

function getRandomSymbol(){
	return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
	//this one gives trouble but follows the same logic as the one before. There are 15 symbols and it starts at 33 on ASCII
}


function getRandomNumber() {
return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//ASCII numbers start at 48 and there are 10

}

//function getRandomSymbol() { //3rd (bur I don't think i can do it like 1st 2)
   // const symbols = '!@#$%^&(){}[]=<>/,.';
   // return symbols[Math.floor(Math.random() symbols.length)];
	//this one works a bit differently so I am still working on figuring it out.


generatePassword.addEventListener('click', () => {
    let password = '';
    const passwordLength = propmpt("password length"); //Password Length but how do I make it user customizable
    const passwordTypesArr = Object.values(passwordTypes);
    const passwordTypesSelected = [];//for user interface side

    for (let i = 0; i < passwordLength; i++) {
        const passwordType = passwordTypesArr[Math.floor(Math.random() * passwordTypesArr.length)];
        password += passwordType();
    }

    console.log(password);
});