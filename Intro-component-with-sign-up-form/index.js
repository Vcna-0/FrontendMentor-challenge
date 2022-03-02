let form = document.getElementById('form');
let email = document.getElementById('mail');
let errorInput = document.querySelectorAll('.error');
let input = document.querySelectorAll('input');
let errorMail = document.querySelector('.mail-error');

// reset all input 
function reset(){
    for (let a = 0; a < input.length; a++) {
        input[a].value = "";
    }
}

// Display Error input
function displayError(input, img){
    input.classList.remove('error');
    input.classList.add('active');
    img.style.backgroundImage = "url(images/icon-error.svg)";
}

// Remove Error input
function removeError(input, img) {
    input.classList.remove('active');
    input.classList.add('error');
    img.style.backgroundImage = "none";
}

// Check empty imput 
form.addEventListener('submit', (e) => {
    for (let i = 0; i < input.length; i++) {
        if(!input[i].validity.valid || input[i].value.length == 0){
            displayError(errorInput[i], input[i]);
            e.preventDefault();
        }else{
            removeError(errorInput[i], input[i]);
        }
    };
});

// Check email is valid
email.addEventListener('input', () => {
    if (!email.validity.valid) {
        displayError(errorMail, email);
    }else{
        removeError(errorMail, email);
    }
});

reset();




