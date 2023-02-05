const generate1 = document.getElementById('generate');

const passwordTypes = {
    letter: getRandomLetter,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

function getRandomLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() symbols.length)];
}

generatePassword.addEventListener('click', () => {
    let password = '';
    const passwordLength = 0;
    const passwordTypesArr = Object.values(passwordTypes);

    for (let i = 0; i < passwordLength; i++) {
        const passwordType = passwordTypesArr[Math.floor(Math.random() * passwordTypesArr.length)];
        password += passwordType();
    }

    console.log(password);
});