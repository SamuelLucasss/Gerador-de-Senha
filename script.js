let sizePassword = document.getElementById("valor");
let slider = document.getElementById("slider");
let containerPassword = document.getElementById("container-password");
let senhaGerada = document.getElementById("password");
let character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&";
let pass = "";

sizePassword.innerHTML = slider.value;

slider.oninput = function() {
    sizePassword.innerHTML = slider.value;
}

function gerarSenha() {
    pass= "";

    for(i = 0, s = character.length; i < slider.value; ++i) {
        pass += character.charAt(Math.floor(Math.random() * s));
    }
    containerPassword.classList.remove("hide");
    senhaGerada.innerHTML = pass;
}

function copyPass() {
    navigator.clipboard.writeText(pass);
    alert("Senha copiada com sucesso");
}

