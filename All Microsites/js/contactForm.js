function validation(){

var firstName = document.querySelector("#firstName");
var firstNameValue = firstName.value;
var lastName = document.querySelector("#lastName");
var lastNameValue = lastName.value;
var email = document.querySelector("#email");
var emailValue = email.value;
var phone = document.querySelector("#phone");
var phoneValue = phone.value;
var message = document.querySelector("#message");
var messageValue = message.value;
var errorMessage = document.querySelector("#error-message");
var text;

errorMessage.style.padding = "30px";

if(checkInputLength(firstNameValue) === true){
  text;
}else {
  text = "Please enter valid first name";
  errorMessage.innerHTML = text;
  return false;
}

if(checkInputLength(lastNameValue) === true){
  text;
}else {
  text = "Please enter valid last name";
  errorMessage.innerHTML = text;
  return false;
}

if(checkInputLength(phoneValue) === true){
  text;
}else {
  text = "Please enter valid phone number";
  errorMessage.innerHTML = text;
  return false;
}


if(checkInputLength(emailValue) === true){
  text;
}else {
  text = "Please enter your email address";
  errorMessage.innerHTML = text;
  return false;
}


if (validateEmail(emailValue)) {
  text;
}else {
  text = "Please enter a valid email address";
  errorMessage.innerHTML = text;
  return false;
}



if (messageLength(messageValue) === true) {
  text;
}else {
  text = "Please enter more than 10 characters";
  errorMessage.innerHTML = text;
  return false;
}

function phoneLength(phone){
  const phoneValue = phone.trim();

  if(phoneValue.length === 8){
    return true;
  }else {
    return false;
  }
}

function messageLength(length) {
const lengthValue = length.trim();

if (lengthValue.length > 9) {
  return true;
} else {
  return false;
}
}

function checkInputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 0) {
    return true;
  } else {
    return false;
  }
}


function validateEmail(email) {
  const emailChecker = /\S+@\S+\.\S+/;
  return emailChecker.test(email);
}

alert("Form submitted succsessfully!");
return true;

}












// const form = document.querySelector("#contactForm");
//
// const green = "#4caf50";
// const red = "#F44336";
//
// function  validateFirstName(){
//   if (checkIfEmpty(firstName)) return;
//   if(!checkIfOnlyLetters(firstName)) return;
// }
//
// function  validateLastName(){
//   if (checkIfEmpty(lastName)) return;
//   if(!checkIfOnlyLetters(lastName)) return;
// }
//
// function validateEmail() {
//   if (checkIfEmpty(email)) return;
//   if (!containsCharacters(email, 5)) return;
//   return true;
// }
//
// function validatePhone() {
//   if (checkIfEmpty(phone)) return;
//   if (!isNan(phone, 8)) return;
//   return true;
// }
//
// function checkIfEmpty(field){
//   if(isEmpty(field.value.trim())){
//     setInvalid(field, `${field.name} must not be empty`);
//     return true;
//   }else {
//     setValid(field);
//     return fals;
//   }
// }
//
// function isEmpty(value){
//   if(value === '') return true;
//   return false;
// }
//
// function setInvalid(field, message){
//   field.className = "invalid";
//   field.nextElementSibling.innerHTML = message;
//   field.nextElementSibling.style.color = red;
// }
//
// function setValid(field){
//   field.className = "valid";
//   field.nextElementSibling.innerHTML = "";
//   // field.nextElementSibling.style.color = green;
// }
//
// function checkIfOnlyLetters(field){
//   if(/ˆ[a-zA-Z ]+$/.test(field.value)){
//     setValid(field);
//     return true;
//   }else {
//     setInvalid(field, `${field.name} must contain only letters`);
//     return false;
//   }
// }
