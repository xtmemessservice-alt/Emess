const cards = document.querySelectorAll('.card');

cards.forEach(card => {

card.addEventListener('mouseenter', ()=>{

card.style.transform = "scale(1.05)";

});

card.addEventListener('mouseleave', ()=>{

card.style.transform = "scale(1)";

});

});
function openPopup() {
    document.getElementById("paymentPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("paymentPopup").style.display = "none";
}

window.onclick = function(event) {
    let popup = document.getElementById("paymentPopup");

    if (event.target == popup) {
        popup.style.display = "none";
    }
}
function payTelma(tool, amount) {

    // Manokatra MVola
    window.location.href =
    "tel:*111*1*2*0341088432*" + amount + "%23";

    // Rehefa afaka 3 segondra dia misokatra WhatsApp
    setTimeout(function(){

        let message =
        "Bonjour, j'ai payé " + tool +
        " - " + amount +
        " Ar. Voici ma preuve de paiement.";

        window.open(
        "https://wa.me/261335492313?text=" +
        encodeURIComponent(message),
        "_blank"
        );

    }, 3000);
}