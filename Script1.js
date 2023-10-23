
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});



function isok(form) {
    var passed = false;
    if (form.tz.value.length != 9) {
        alert("A 9-character ID must be written");
    }
    else if (isNaN(form.tz.value)) {
        alert("Only digits are typed ");
    }
   
    else if (form.fullname.value.length < 3) {
        alert("A 9-character ID must be written");
    }
    else if (isNaN(form.fullname.value) == false) {
        alert("Only type letters");
    }
    else if (form.email.value.indexOf("@") == -1) {
        alert("A valid email address must be entered");
    }
    else if (form.email.value.indexOf(".") == -1) {
        alert("A valid email address must be entered");
    }
    else {
        passed = true;
    }
    return passed;
}


        
    (function () {
        alert(" We hope you to enjoy in  our website !!");
})()

        document.write("ENJOY");
document.write((function () { return website   })());
        document.write("<br><br>")
    
      






