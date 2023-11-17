//use strict mode
"use strict";

/**
 * ==============================================================
 * Contact page functionality
 * ==============================================================
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