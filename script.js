const PASSWORD = "MonEclipse";

const message = `Salut toi ❤️

Si tu lis cette lettre...

C'est que tu as réussi à ouvrir mon petit univers.

Je voulais juste te dire merci.

Merci pour ces 10 mois.

Pour les rires.

Pour les bêtises.

Pour les moments où tu m'as fait sourire sans même t'en rendre compte.

Tu t'es installé dans mon cœur sans demander la permission...

Et franchement...

Le comité des chats trouve ça très suspect. 🐈

Mais après une longue réunion de 3 secondes...

Ils ont décidé de te garder.

Alors prends soin de toi.

Mange correctement.

Dors un peu plus.

Et continue de sourire.

Parce que ton sourire mérite d'exister encore longtemps.

🖤 Mon Éclipse`;

let i = 0;

function checkPassword() {
    const input = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (input === PASSWORD) {
        document.querySelector(".login").style.display = "none";
        document.getElementById("letter").style.display = "block";
        createHearts();
        typeWriter();
    } else {
        error.textContent = "🐈 Mauvais mot de passe...";
        shake();
    }
}

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typing").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 35);
    }
}

function shake() {
    const box = document.querySelector(".login");

    box.animate([
        { transform: "translateX(-8px)" },
        { transform: "translateX(8px)" },
        { transform: "translateX(-8px)" },
        { transform: "translateX(0px)" }
    ], {
        duration: 300
    });
}

function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");

        heart.innerHTML = ["💜","🖤","🤍","✨"][Math.floor(Math.random()*4)];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-20px";
        heart.style.fontSize = "24px";
        heart.style.pointerEvents = "none";
        heart.style.transition = "all 5s linear";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.bottom = "110vh";
            heart.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }, 500);
}

document.querySelector(".cat").addEventListener("click", () => {

    const messages = [
        "🐈 Miaou... Il paraît que tu lui manques ❤️",
        "🐈 Le chat confirme que tu es officiellement adopté.",
        "🐈 Interdiction de partir sans sourire 😾",
        "🐈 Rapport officiel : il y a beaucoup trop d'amour ici.",
        "🐈 Je surveille ton cœur... tout va bien."
    ];

    alert(messages[Math.floor(Math.random() * messages.length)]);
});

document.querySelector(".moon").addEventListener("click", () => {

    const moonQuotes = [
        "🌙 La lune garde tous les secrets.",
        "🌙 Elle brille un peu plus quand tu souris.",
        "🌙 Peut-être qu'elle nous regarde tous les deux.",
        "🌙 Même la nuit semble plus douce aujourd'hui."
    ];

    alert(moonQuotes[Math.floor(Math.random() * moonQuotes.length)]);
});
