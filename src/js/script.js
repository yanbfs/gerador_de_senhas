let passwordLength = 16;
const inputElement = document.querySelector("#password");
const copyButtonElement = document.querySelector("#copy-button");

function generatePassword(){
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789/!?@#$%&(){}<>/*-+";
    let password = "";

    for (let i=0; i<passwordLength; i++){
        const randomNumber = Math.floor(Math.random() * chars.length);
        password +=chars.substring(randomNumber, randomNumber+  1);
    }
    
    inputElement.value = password;
}

function copyPassword(){
    navigator.clipboard.writeText(inputElement.value);
}

const passwordLengthElement = document.querySelector("#password-length");
passwordLengthElement.addEventListener("input", function(){
    passwordLength = passwordLengthElement.value;
    generatePassword();
})

copyButtonElement.addEventListener("click", copyPassword);

generatePassword();