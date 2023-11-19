const container = document.querySelector(".container"),
      ShowPassword = document.querySelectorAll(".showHidePw"),
      password = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

// js code to show/hide password and change icon
ShowPassword.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
    });
    
    
    // New to JS.

    //code to show/hide password and change icon
    
    // Help needed for changing the state of the eye button for password.

});


// js code to appear signup and login form
signUp.addEventListener("click", () => {
    container.classList.add("active");
});

login.addEventListener("click", () => {
    container.classList.remove("active");
});