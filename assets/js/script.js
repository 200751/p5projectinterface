document.addEventListener('submit', validateForm);
var errorbox = document.getElementById("errorbox");

function validateForm(e) {
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    var validUsername = document.forms.login.elements.username.value.match(usernameRegex);

    var login = document.forms.login.elements.username.value;

    if(/\@/.test(login)) {
        console.log("Email");
    }
    else {
        console.log("Username");
        if(validUsername == null){
            console.log("Username is not valid.")
            errorbox.style.display = "flex";
            errorbox.innerHTML = "Your username is not valid.";
            document.login.username.focus();
            return false;
        } else {
            console.log("Username is valid")
        }
    }
}