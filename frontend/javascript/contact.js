//use strict mode
"use strict";

/**
 * ==============================================================
 * Contact page functionality
 * ==============================================================
 */

//contact form check 

// grabbing all elements and errors for name input
const personsname = document.getElementById('personsname');
const contactForm = document.getElementById('contact-form');
const requiredNameText = document.getElementById("required-name-text");
const nameError = document.getElementById('name-error');
const nameErrorIcon = document.getElementById('name-error-icon');

//checking name input
personsname.addEventListener('input', function(e) {
  const pattern = /^[\w\W]{2,15}$/;
  const currentValue = e.target.value;
  const valid = pattern.test(currentValue)

  if(valid) {
    nameError.style.display = "none";
    requiredNameText.style.display = "block";
    personsname.style.border = "0.3em solid blue";
    personsname.style.background = "lightblue";
    nameErrorIcon.style.display = "none";
  } else {
    nameError.style.display = "block";
    requiredNameText.style.display = "none";
    personsname.style.border = "0.3em solid red";
    personsname.style.background = "pink";
    nameErrorIcon.style.display = "block";
    e.preventDefault();
    return false;
  }
});

// grabbing all elements and errors for email input
const email = document.getElementById("email");
const requiredEmailText = document.getElementById("required-email-text");
const emailRequiredError = document.getElementById("emailrequired-error");
const emailCheckText = document.getElementById("email-check-text");
const emailError = document.getElementById("email-error");
const emailErrorIcon = document.getElementById("email-error-icon");


//checking email input if it was entered
email.addEventListener("input", function (e) {
  const pattern = /^[\Sa-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$/;
  const currentValue = e.target.value;
  const valid = pattern.test(currentValue);

  if (valid) {
    emailRequiredError.style.display = "none";
    emailError.style.display = "none";
    requiredEmailText.style.display = "block";
    emailCheckText.style.display = "block";
    email.style.border = "0.3em solid blue";
    email.style.background = "lightblue";
    emailErrorIcon.style.display = "none"
  } else {
    emailRequiredError.style.display = "block";
    emailError.style.display = "block";
    requiredEmailText.style.display = "none";
    emailCheckText.style.display = "none";
    email.style.border = "0.3em solid red";
    email.style.background = "pink";
    emailErrorIcon.style.display = "block";
    e.preventDefault();
    return false;
  }
});

// grabbing all elements and errors for subject input
const subject = document.getElementById("subject");
const requiredSubjectText = document.getElementById("required-subject-text");
const subjectError = document.getElementById("subject-error");
const subjectErrorIcon = document.getElementById("subject-error-icon");

//checking subject input
subject.addEventListener("input", function (e) {
  const pattern = /^[\w\W1-9]{2,20}$/;
  const currentValue = e.target.value;
  const valid = pattern.test(currentValue);

  if (valid) {
    subjectError.style.display = "none";
    requiredSubjectText.style.display = "block";
    subject.style.border = "0.3em solid blue";
    subject.style.background = "lightblue";
    subjectErrorIcon.style.display = "none";
  } else {
    subjectError.style.display = "block";
    requiredSubjectText.style.display = "none";
    subject.style.border = "0.3em solid red";
    subject.style.background = "pink";
    subjectErrorIcon.style.display = "block";
    e.preventDefault();
    return false;
  }
});

// grabbing all elements and errors for message input
const message = document.getElementById("message");
const requiredMessageText = document.getElementById("required-message-text");
const messageLengthError = document.getElementById("message-length-error");
const messageError = document.getElementById("message-error");
const messageErrorIcon = document.getElementById("message-error-icon");

// checking message textarea
message.addEventListener("input", function (e) {
  const pattern =/^[\s1-4]{15,150}$/;
  const currentValue = e.target.value;
  const valid = pattern.test(currentValue);

  if (valid) {
    messageError.style.display = "none";
    requiredMessageText.style.display = "block";
    messageErrorIcon.style.display = "none";
    message.style.border = "0.3em solid blue";
    message.style.background = "lightblue";
  } else {
    messageError.style.display = "block";
    requiredMessageText.style.display = "none";
    messageLengthError.style.color = "red";
    messageLengthError.style.fontSize = "16px";
    messageLengthError.style.letterSpacing = "0.063em";
    messageLengthError.style.marginBottom = "0.1em";
    message.style.border = "0.3em solid red";
    message.style.background = "pink";
    messageErrorIcon.style.display = "block";
    e.preventDefault();
    return false;
  }
});