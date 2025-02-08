// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

const agregarAmigo = () => {
    let input = document.getElementById("amigo");
    let amigo = input.value.trim();

    if (amigo !== "") {
        amigos.push(amigo);
        input.value = "";
        mostrarAmigos();
    } else {
        alert("Por favor, inserte un nombre.");
    }
};

const mostrarAmigos = () => {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
};

const sortearAmigo = () => {
    document.getElementById("listaAmigos").innerHTML='';
    if (amigos.length > 0) {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoAleatorio = amigos[numeroAleatorio];
        document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: <strong>${amigoAleatorio}</strong>`;
    } else {
        alert("Por favor, inserte amigos para poder sortear.");
    }
};
