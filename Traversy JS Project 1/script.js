//begin by extracting variables from form
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show error message
function showError(input, message) {
    const formControl = input.parentElement;
    //className is the method you want to assign a new class
    formControl.className = "form-control error";

    //query selector to pick an individual element type
    //scope is the form control div
    const span = formControl.querySelector("span");
    span.className = "error";
    //innerText preferred over innerHTML
    span.innerText = message;
}

function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    const span = formControl.querySelector("span");
    span.className = "success";
}

function getFieldName(input) {
    return input.id;
}

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Must provide valid email");
    }
}

function checkLength(input, min, max) {
    if (input.value.length > max || input.value.length < min) {
        //you were using getFieldName in this error statement when you didn't need to
        //min and max are local
        showError(input, `Must be ${min} - ${max} characters`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordsMatch(input, input2) {
    if (input.value == input2.value && input.value != "") {
        showSuccess(input2);
    } else {
        showError(input2, "Passwords must match");
    }
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Event Listeners -------------------------
form.addEventListener('submit', function(e) {
    //prevent default
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 5, 15);
    checkLength(password2, 5, 15);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});