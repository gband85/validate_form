//email: typeMismatch
//country: length
//zip: typemismatch, length =5
//password: length=8,pattern: upper,lower,num,symbol  regex: /[A-Z](1)[a-z](1)[0-9](1)\W/

const form=document.querySelector("#validate");
const email=document.querySelector('#email');
const emailError=document.querySelector("#email + span.error");
const country=document.querySelector('#country');
const zip=document.querySelector('#zip');
const password=document.querySelector('#password');
const password2=document.querySelector('#password2');

email.addEventListener("input",function(){
    if (email.validity.valid) {

    }
    else {
        showError();
    }
})

form.addEventListener('submit',function(e) {
    e.preventDefault();

})

function showError(field){
// switch(field) {
    // case email: 
    if (email.validity.valueMissing) {
emailError.textContent="Enter a value."
    }
    else if (email.validity.typeMismatch) {
emailError.textContent="Enter an email address."
    }
    else if (email.validity.tooShort) {
        emailError.textContent="Email too short";
    }
    // case country:
    // case zip:
    // case password:
    // case password2:
// }
}