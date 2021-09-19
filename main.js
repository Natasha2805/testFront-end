"use strict"
const textarea = document.getElementById('textarea');
const phone = document.getElementById('phone');

function ValidPhone() {
    let mask = /^\+\d{12,13}$/;
    let phoneUser = phone.value;
    let output = null;
    let valid = mask.test(phoneUser);
    if (valid) output = 'Номер верный!';
    else output = 'Номер неверный!';
    document.getElementById('message').innerHTML = output;
    return valid;
}


function ValidMail() {
    let textareaValue = textarea.value;
    if(textareaValue == ''){
        textarea.innerHTML = 'nataliasolox@gmail.com'
    }
    return textarea
}
