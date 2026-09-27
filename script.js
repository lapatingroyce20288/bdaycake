const candle = document.getElementById("candle");
const flame = document.getElementById("flame");

const message = document.getElementById("message");
const loveMessage = document.getElementById("loveMessage");

let candleBlown = false;


candle.addEventListener("click", function () {

    if (candleBlown) {
        return;
    }

    candleBlown = true;


    // Patayin ang apoy
    flame.style.animation = "none";
    flame.style.opacity = "0";

    flame.style.transform =
        "translateX(-50%) scale(0.2)";


    // Palitan ang message
    message.innerHTML = `
        <div>Happy Birthday! 🎂</div>

        <span>Bebe ❤️</span>
    `;


    // Ipakita ang personal message
    setTimeout(function () {

        loveMessage.classList.add("show");

        loveMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 800);

});