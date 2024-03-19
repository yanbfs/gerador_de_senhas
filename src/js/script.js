let passwordLength = 16;
const inputEl = document.querySelector("#password");
const upperCaseCheckEl = document.querySelector("#uppercase-check");
const numberCaseCheckEl = document.querySelector("#number-check");
const symbolCaseCheckEl = document.querySelector("#symbol-check");
const securityIndicatorBarEl = document.querySelector("#security-indicator-bar");
const refreshPasswordEl = document.querySelector("#refresh-password");

function generatePassword(){
    let chars = "abcdefghijkmnpqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    const numbersChars = "123456789";
    const symbolsChars = "!?@#$%&(){}[]<>/";
    let password = "";

    if(upperCaseCheckEl.checked){
        chars += upperCaseChars;
    }
    if(numberCaseCheckEl.checked){
        chars += numbersChars;
    }
    if(symbolCaseCheckEl.checked){
        chars += symbolsChars;
    }

    for(let i=0; i < passwordLength; i++){
        const randomNumber = Math.floor(Math.random()*chars.length);
        password += chars.substring(randomNumber, randomNumber+1);
    }

    inputEl.value = password;

   calculatorQuality();
   calculatorFontSize();
}

function calculatorQuality(){
    //TamanhoSenha*P1 + Maiusculas*P2 + Numeros*P3 + Simbolos*P4 = 100%
    //TamanhoSenha*25% + Maiusculas*15% + Numeros*25% + Simbolos*35% = 100%
    const percent = Math.round(
                    (passwordLength/64) * 25 + 
                    (upperCaseCheckEl.checked ? 15 : 0) + 
                    (numberCaseCheckEl.checked ? 25 : 0) +
                    (symbolCaseCheckEl.checked ? 35: 0)
                    );
    securityIndicatorBarEl.style.width = `${percent}%`;

    if(percent == 100){
        securityIndicatorBarEl.classList.remove('danger', 'warning', 'safe');
        securityIndicatorBarEl.classList.add('complete');
    }else if(percent >= 70 && percent < 100){
        securityIndicatorBarEl.classList.remove('danger', 'warning', 'complete');
        securityIndicatorBarEl.classList.add('safe');
    }
    else if (percent >= 50 && percent < 70)  {
        securityIndicatorBarEl.classList.remove('danger', 'complete', 'safe');
        securityIndicatorBarEl.classList.add('warning');
    }else{
        securityIndicatorBarEl.classList.remove('complete', 'warning', 'safe');
        securityIndicatorBarEl.classList.add('danger');
    }
}

function calculatorFontSize(){
    if(passwordLength > 45) {
        inputEl.classList.remove('password-sm', 'password-md');
        inputEl.classList.add('password-lg');
    }else if (passwordLength > 32){
        inputEl.classList.remove('password-sm', 'password-lg');
        inputEl.classList.add('password-md');
    }else if (passwordLength > 22){
        inputEl.classList.remove('password-md', 'password-lg');
        inputEl.classList.add('password-sm');
    }else{
        inputEl.classList.remove('password-sm', 'password-md','password-lg');
    }
}

function copy(){
    navigator.clipboard.writeText(inputEl.value)
}

refreshPasswordEl.addEventListener('click', generatePassword)

const passwordLengthEl = document.querySelector("#password-length");
passwordLengthEl.addEventListener("input", function(){
    passwordLength = passwordLengthEl.value;
    document.querySelector("#password-lenght-text").innerText = passwordLength;
    generatePassword();
})

upperCaseCheckEl.addEventListener("click", generatePassword);
numberCaseCheckEl.addEventListener("click", generatePassword);
symbolCaseCheckEl.addEventListener("click", generatePassword);

const copyButtonIconEl = document.querySelector("#copy-icon")
copyButtonIconEl.addEventListener("click", copy)

const copyButtonEl = document.querySelector("#copy-button")
copyButtonEl.addEventListener("click", copy)

generatePassword();

const container = document.querySelector('.container-pop-up');
const button = document.querySelector('.trigger-copy');

const Notification = () => {
    container.classList.add('hide');

    setTimeout(()=>{
        container.classList.toggle('hide');   
    }, 2000)
    
}