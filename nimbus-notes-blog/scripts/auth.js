function openModal() {
    document.getElementById("signin-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("signin-modal").style.display = "none";
}

function signIn() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        alert("Signed in successfully!");
        closeModal();
    } else {
        alert("Please enter email and password.");
    }
}
