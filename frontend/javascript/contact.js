//use strict mode
"use strict";

/**
 * ==============================================================
 * Contact page functionality
 * ==============================================================
 */

//env config
const dotenv = require("dotenv");
require("dotenv").config();

const submitButton = document.getElementById("submit-button");
const form = document.getElementById("contact-form");
submitButton.addEventListener("submit", sendEmail);


function sendEmail(){
  Email.send({
    SecureToken: "process.envSecureToken",
    To: "jackc.baylor@gmail.com",
    From: document.getElementById("email").value,
    Subject: document.getElementById("subject").value,
    Body: document.getElementById("message").value,
  }).then( 
    message => alert("Message has been sent!")
    );
};



console.log("Oh this was triggered.");
/*onsubmit = sendEmail() => {};
           reset(); 
           return false;
*/

//contact form check 

const name = document.getElementById('personsname');
const contactForm = document.getElementById('contact-form');
const emailErrorPara = document.getElementById('email-error')

//cheching email and name 
personsname.addEventListener('input', function(e) {
  const pattern = /^[\w]{6,8}$/;
  const currentValue = e.target.value;
  const valid = pattern.test(currentValue)

  if(valid) {
    emailErrorPara.style.display = 'none'
  } else {
    emailErrorPara.style.display = 'block'
  }
})