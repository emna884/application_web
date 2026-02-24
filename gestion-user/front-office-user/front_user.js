function validerEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validerMotDePasse(password) {
    return password.length >= 8;
}

function validerTelephone(tel) {
    const regex = /^\d{8}$/;
    return regex.test(tel);
}

function validerConfirmationMotDePasse(password, confirm) {
    return password === confirm;
}

// Validation du formulaire de connexion
function validerConnexion(event) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validerEmail(email)) {
        alert("Adresse e-mail invalide. Veuillez entrer un format valide (ex: exemple@domaine.com).");
        event.preventDefault();
        return false;
    }

    if (!validerMotDePasse(password)) {
        alert("Le mot de passe doit contenir au moins 8 caractères.");
        event.preventDefault();
        return false;
    }

    return true;
}

// Validation du formulaire d'inscription
function validerInscription(event) {
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;

    if (!validerEmail(email)) {
        alert("Adresse e-mail invalide. Veuillez entrer un format valide (ex: exemple@domaine.com).");
        event.preventDefault();
        return false;
    }

    if (!validerTelephone(tel)) {
        alert("Numéro de téléphone invalide. Veuillez entrer exactement 8 chiffres.");
        event.preventDefault();
        return false;
    }

    if (!validerMotDePasse(password)) {
        alert("Le mot de passe doit contenir au moins 8 caractères.");
        event.preventDefault();
        return false;
    }

    if (!validerConfirmationMotDePasse(password, confirm)) {
        alert("Les mots de passe ne correspondent pas.");
        event.preventDefault();
        return false;
    }

    return true;
}

// Validation du formulaire OTP (vérification)
function validerOTP(event) {
    const otp = document.getElementById("otp").value.trim();

    if (otp === "") {
        alert("Veuillez entrer le code OTP.");
        event.preventDefault();
        return false;
    }

    alert("Vérification réussie !");
    event.preventDefault();
    window.location.href = "connexion.html";
    return false;
}

// Validation du formulaire changement de mot de passe
function validerChangPass(event) {
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm-password").value;

    if (!validerMotDePasse(password)) {
        alert("Le mot de passe doit contenir au moins 8 caractères.");
        event.preventDefault();
        return false;
    }

    if (!validerConfirmationMotDePasse(password, confirm)) {
        alert("Les mots de passe ne correspondent pas.");
        event.preventDefault();
        return false;
    }

    alert("Mot de passe réinitialisé avec succès !");
    event.preventDefault();
    window.location.href = "connexion.html";
    return false;
}

// Validation du formulaire envoi réinitialisation
function validerEnvoiReinit(event) {
    const email = document.getElementById("email").value;

    if (!validerEmail(email)) {
        alert("Adresse e-mail invalide. Veuillez entrer un format valide (ex: exemple@domaine.com).");
        event.preventDefault();
        return false;
    }

    alert("Lien de réinitialisation envoyé avec succès !");
    event.preventDefault();
    window.location.href = "chang_pass.html";
    return false;
}

// Validation du formulaire demande artisan
function validerDemande(event) {
    const email = document.getElementById("email").value;
    const tel = document.getElementById("telephone").value;

    if (!validerEmail(email)) {
        alert("Adresse e-mail invalide. Veuillez entrer un format valide (ex: exemple@domaine.com).");
        event.preventDefault();
        return false;
    }

    if (!validerTelephone(tel)) {
        alert("Numéro de téléphone invalide. Veuillez entrer exactement 8 chiffres.");
        event.preventDefault();
        return false;
    }

    alert("Demande envoyée avec succès !");
    event.preventDefault();
    window.location.href = "connexion.html";
    return false;
}

document.addEventListener("DOMContentLoaded", function () {
    // Page connexion ou inscription
    const formCard = document.querySelector(".form-card form");
    if (formCard) {
        const confirmField = document.getElementById("confirm");
        if (confirmField) {
            formCard.addEventListener("submit", validerInscription);
        } else {
            formCard.addEventListener("submit", validerConnexion);
        }
    }

    // Page vérification OTP, envoi réinitialisation ou changement mot de passe
    const formMember = document.querySelector(".member-form");
    if (formMember) {
        const otpField = document.getElementById("otp");
        const confirmPassField = document.getElementById("confirm-password");
        if (otpField) {
            formMember.addEventListener("submit", validerOTP);
        } else if (confirmPassField) {
            formMember.addEventListener("submit", validerChangPass);
        } else {
            formMember.addEventListener("submit", validerEnvoiReinit);
        }
    }

    // Page demande artisan
    const formArtisan = document.querySelector(".artisan-form");
    if (formArtisan) {
        formArtisan.addEventListener("submit", validerDemande);
    }
});
