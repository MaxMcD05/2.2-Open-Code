const generatePassword = document.getElementById('generate');
let button = document.getElementById('btn')
button.addEventListener('generatePassword', generatePassword);
function generatePassword(){
const passwordTypes = { //Creating 3 different Arrays. Found a was a way to create and block each one. (Arr opposed to charCode)
    letter: getRandomLetter,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};
//CharCode = pre"programmed" array of all characters in accordance to ASCII
//This particular function along with the random number one is inspired by the last source listed in my OpenCode Doc.

function getRandomLetter() { // Letter Array
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	//charCode is an array of all characters labeled 0-127 using ASCII. It says +97 to start the search at letter A as A is the 97th thing listed on the ASCII array. Then it counts 26 past that which are all 26 letters.
}

function getRandomSymbol(){ // Symbol Array
	return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
	//this one gives trouble but follows the same logic as the one before. There are 15 symbols and it starts at 33 on ASCII
}

function getRandomNumber() { // Number Array
return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//ASCII numbers start at 48 and there are 10

}
//Other Possible ways I was working with Symbols:
//function getRandomSymbol() { //3rd (bur I don't think i can do it like 1st 2)
   // const symbols = '!@#$%^&(){}[]=<>/,.';
   // return symbols[Math.floor(Math.random() symbols.length)];
	//this one works a bit differently so I am still working on figuring it out.

//or maybe I could have tried making a selection of unique characters like:
// var symbolsArr = ['!','@','#','$','%','&','*','+','-'] so I can avoid unwanted symbols the ASCII has
};
generatePassword.addEventListener('click', () => {
    let password = ''; //choice of User
    const passwordLength = prompt("password length"); //display
    const passwordTypesArr = Object.values(passwordTypes);
    const passwordTypesSelected = [];//for user interface side

    function UserPrompts(){
        passwordLength = (prompt("Enter Password Length"));
        if (passwordLength < 6){
            then (prompt("This is too short to be secure"));
            return false;
        }

        if (passwordLength > 20){
            then (prompt("This password is too long"));
            return false;
        }
    }
    for (let i = 0; i < passwordLength; i++) {
        const passwordType = passwordTypesArr[Math.floor(Math.random() * passwordTypesArr.length)];
        password += passwordType();
    }
return password;

    console.log(password);
});