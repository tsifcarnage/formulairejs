const email = document.getElementById("email");
const submit = document.getElementById("sub");
const start = document.querySelector(".start");
const success = document.querySelector(".success");
const link = document.querySelector(".link");
const dismiss = document.getElementById("dismiss")

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

submit.addEventListener("click", (event) => {
    event.preventDefault(); // Empêche le rechargement de la page si le bouton est dans un formulaire

    const emailValue = email.value.trim().toLowerCase(); // Supprime les espaces inutiles

    if (isValidEmail(emailValue)) {
        start.style.display = "none";
        link.textContent = emailValue;
        success.style.display = "block";
    } else {
        alert("Veuillez entrer une adresse email valide.");
    }
});

dismiss.addEventListener("click",()=>{
    success.style.display = "none";
    start.style.display = "block";
    email.value = "";
})

