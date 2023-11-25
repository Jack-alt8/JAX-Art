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

//checking name input
personsname.addEventListener('input', function(e) {
  const pattern = /^[\w\W]{2,15}$/;
  const currentValue = e.target.value;
  const valid = pattern.test(currentValue)

  if(valid) {
    nameError.style.display = "none";
    requiredNameText.style.display = "block";
  } else {
    nameError.style.display = "block";
    requiredNameText.style.display = "none";
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
  } else {
    emailRequiredError.style.display = "block";
    emailError.style.display = "block";
    requiredEmailText.style.display = "none";
    emailCheckText.style.display = "none";
    e.preventDefault();
    return false;
  }
});

// grabbing all elements and errors for subject input
const subject = document.getElementById("subject");
const requiredSubjectText = document.getElementById("required-subject-text");
const subjectError = document.getElementById("subject-error");

//checking subject input
subject.addEventListener("input", function (e) {
  const pattern = /^[\w\W1-9]{2,20}$/;
  const currentValue = e.target.value;
  const valid = pattern.test(currentValue);

  if (valid) {
    subjectError.style.display = "none";
    requiredSubjectText.style.display = "block";
  } else {
    subjectError.style.display = "block";
    requiredSubjectText.style.display = "none";
    e.preventDefault();
    return false;
  }
});

// grabbing all elements and errors for message input
const message = document.getElementById("message");
const requiredMessageText = document.getElementById("required-message-text");
const messageError = document.getElementById("message-error");

// checking message textarea
message.addEventListener("input", function (e) {
  const pattern =/^[\w\s1-4]{2,150}$/;
  const currentValue = e.target.value;
  const valid = pattern.test(currentValue);

  if (valid) {
    messageError.style.display = "none";
    requiredMessageText.style.display = "block";
  } else {
    messageError.style.display = "block";
    requiredMessageText.style.display = "none";
    e.preventDefault();
    return false;
  }
});