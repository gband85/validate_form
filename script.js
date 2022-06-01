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

const formFields=document.querySelectorAll('input');
formFields.forEach((field)=>{
    if (field.id!="password2") {
    field.addEventListener('input',()=>{
if (field.validity.valid) {
    field.nextElementSibling.textContent="";
}
else {
showError(field);
}
    })
}
})

password2.addEventListener("input",()=>{
    if (password2.value!=password.value) {
password2.nextElementSibling.textContent="Passwords do not match";
password2.style.backgroundColor="#fdd";
    }
    else {
    password2.nextElementSibling.textContent="";
    password2.style.backgroundColor="#fff"
    }
})
// email.addEventListener("input",function(){
//     console.log(email.id)
//     if (email.validity.valid) {

//     }
//     else {
//         showError(email);
//     }
// })

form.addEventListener('submit',function(e) {
    e.preventDefault();

})

function showError(field){
       if (field.validity.valueMissing) {
field.nextElementSibling.textContent=`Enter ${field.id}.`;
    }

    else {
 switch(field.id) {
     case "email": 
 
    if (field.validity.typeMismatch) {
        field.nextElementSibling.textContent="Enter a valid email address."
    }
    else if (field.validity.tooShort) {
        field.nextElementSibling.textContent=`Email address too short. 8 characters minimum.`;
}
      case "country":
          if (field.validity.tooShort) {
            field.nextElementSibling.textContent="Country name too short."
          }
 case "zip":
     if (field.validity.badInput) {
    field.nextElementSibling.textContent="Numbers only. Please enter a valid zip code."
     }
     else if (field.validity.rangeOverflow || field.validity.rangeUnderflow) {
        field.nextElementSibling.textContent=`Please enter a valid zip code.`;
}
     case "password":
if (field.validity.patternMismatch) {
    field.nextElementSibling.textContent="Password does not fulfill minimum security requirements."
}

// }
}
    }
}