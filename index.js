const generatePassword1 = document.getElementById('generate');

const passwordTypes = { //Creating 3 different Arrays (Arr)
    letter: getRandomLetter,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

function getRandomLetter() { //First Array
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	//charCode is an array of all characters labeled 0-127. It says +97 to start the search at letter A,
}

function getRandomSymnbol(){
	return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
	//this one gives trouble but follows the same logic as the one before
}


//not sure if im gonna use this or the other so im saving it in //function getRandomNumber() { and
    //return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

function getRandomSymbol() { //3rd (bur I don't think i can do it like 1st 2)
    const symbols = '!@#$%^&(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() symbols.length)];
	//this one works a bit differently so I am still working on figuring it out.
}

generatePassword.addEventListener('click', () => {
    let password = '';
    const passwordLength = propmpt("password length"); //Password Length but how do I make it user customizable
    const passwordTypesArr = Object.values(passwordTypes);

    for (let i = 0; i < passwordLength; i++) {
        const passwordType = passwordTypesArr[Math.floor(Math.random() * passwordTypesArr.length)];
        password += passwordType();
    }

    console.log(password);
});