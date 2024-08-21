const submitButton = document.getElementById("submit");

const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

submitButton.addEventListener('click', () => {

    let Email = document.getElementById("email").value;
    let Password = document.getElementById("pass").value;
    let found = false;
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].Email === Email && accounts[i].Email === "admin@mail.com" && accounts[i].Password === Password && accounts[i].Password === "admin123") {
            document.getElementById("login").action = "adminpage.html";
            found = true;
            break;
        }
        else if (accounts[i].Email === Email) {
            found = true;
            if (accounts[i].Password === Password) {
                document.getElementById("login").action = "homepage.html";
                break;
            }
            else {
                alert("Incorrect Password")
                break;
            }
        }
    }
    if (!found) {
        alert("You Dont Have An Account")
    }
});