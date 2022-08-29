const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "~`!@#$%^&*()_-+={[}],|:;<>.?/"


let passwordGenBtn = document.querySelector('#pass-gen-btn')
let passOne = document.querySelector('.pass-one')
let passTwo = document.querySelector('.pass-two')
let passLengthInput = document.querySelector('#pass-length-input')
let characterLength = document.querySelector('#character-length')
let passOneCopyBtn = document.querySelector('.pass-one-copy')
let passTwoCopyBtn = document.querySelector('.pass-two-copy')

// Character inputs
let uppercaseInput = document.querySelector('#uppercase')
let lowercaseInput = document.querySelector('#lowercase')
let numberInput = document.querySelector('#numbers')
let symbolsInput = document.querySelector('#symbols')


//  for taking password length 
let passwordLength = 0

passLengthInput.addEventListener('input', ()=>{
    passwordLength = passLengthInput.value
    characterLength.textContent  = passwordLength
})
passLengthInput.addEventListener('change', ()=>{
    characterLength.textContent  = passwordLength
})



passwordGenBtn.addEventListener('click',()=>{
    
    passOne.textContent = ''
    passTwo.textContent = ''
    let password = ''

    if(uppercaseInput.checked){
        password += uppercaseLetters
    }
    if(lowercaseInput.checked){
        password += lowercaseLetters
    }
    if(numberInput.checked){
        password+=numbers
    }
    if(symbolsInput.checked){
        password+=symbols
    }

    if(!symbolsInput.checked && !numberInput.checked && !lowercaseInput.checked && !uppercaseInput.checked && passwordLength>=8){
        alert('Please select the characters!')
    }else{    
            for(let i = 0; i < passwordLength; i++){
                let randomIndexOne = Math.floor(Math.random() * password.length)
                let randomIndexTwo = Math.floor(Math.random() * password.length)
                passOne.textContent += password[randomIndexOne]
                passTwo.textContent += password[randomIndexTwo]
            }
    }

})



passOneCopyBtn.addEventListener('click', ()=>{
      /* Get the text field */
let passOne = document.querySelector('.pass-one')


  /* Select the text field */
  passOne.select();
  passOne.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(passOne.value);

  /* Alert the copied text */
  alert("Copied the text: " + passOne.value);
})