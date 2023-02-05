const generatePassword1 = document.getElementById('generate');

const passwordTypes = { //Creating 3 different Arrays (Arr)
    letter: getRandomLetter,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

function getRandomLetter() { //First Array
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() { //2nd
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() { //3rd (bur I don't think i can do it like 1st 2)
    const symbols = '!@#$%^&(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() symbol.length)];
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