const submitButton = document.getElementById("submit")

submitButton.addEventListener("click", () => {

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    let EmailInput = document.getElementById("email");
    let PasswordInput = document.getElementById("pass");

    let newAccount = {
        Email: EmailInput.value,
        Password: PasswordInput.value,
    }
    accounts.push(newAccount);

    localStorage.setItem("accounts", JSON.stringify(accounts));
    document.getElementById("Register").action = "login.html";
});