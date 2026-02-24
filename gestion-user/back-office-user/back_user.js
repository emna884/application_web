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

// Validation du formulaire ajout utilisateur
function validerAjoutUser(event) {
    const email = document.getElementById("email").value;
    const tel = document.getElementById("telephone").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm-password").value;

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

    alert("Utilisateur ajouté avec succès !");
    event.preventDefault();
    window.location.href = "liste_user.html";
    return false;
}

// Validation du formulaire modification utilisateur
function validerModifUser(event) {
    const email = document.getElementById("email").value;
    const tel = document.getElementById("telephone").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm-password").value;

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

    if (password !== "" && !validerMotDePasse(password)) {
        alert("Le mot de passe doit contenir au moins 8 caractères.");
        event.preventDefault();
        return false;
    }

    if (password !== "" && !validerConfirmationMotDePasse(password, confirm)) {
        alert("Les mots de passe ne correspondent pas.");
        event.preventDefault();
        return false;
    }

    alert("Utilisateur modifié avec succès !");
    event.preventDefault();
    window.location.href = "liste_user.html";
    return false;
}

// Confirmation de suppression d'un utilisateur
function confirmerSuppression(event) {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
        event.preventDefault();
        return false;
    }
    alert("Utilisateur supprimé avec succès !");
}

document.addEventListener("DOMContentLoaded", function () {
    // Page ajout / modification
    const form = document.querySelector(".member-form");
    if (form) {
        const submitBtn = form.querySelector(".submit-btn");
        if (submitBtn && submitBtn.textContent.includes("Enregistrer")) {
            form.addEventListener("submit", validerModifUser);
        } else {
            form.addEventListener("submit", validerAjoutUser);
        }
    }

    // Page liste utilisateurs - boutons supprimer
    const deleteBtns = document.querySelectorAll(".btn-delete");
    deleteBtns.forEach(function (btn) {
        btn.addEventListener("click", confirmerSuppression);
    });
});
