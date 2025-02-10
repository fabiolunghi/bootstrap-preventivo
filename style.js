document.getElementById('calculateButton').addEventListener('click', function () {
    // Prezzi orari
    const prices = {
        backend: 20.50,
        frontend: 15.30,
        analisi: 33.60
    };

    // Codici promozionali validi
    const validPromoCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

    // Ore di lavoro predefinite
    const hours = 10;

    // Ottiengo il tipo di lavoro selezionato
    const workTypeElement = document.querySelector('select');
    const workType = workTypeElement.value;

    // Ottiengo il codice promozionale
    const promoCodeElement = document.querySelector('#promoCode');
    const promoCode = promoCodeElement.value;

    // Ottiengo l'area di risultato
    const resultElement = document.getElementById('result');

    // Calcolo il prezzo base
    let hourlyRate;
    if (workType === '1') hourlyRate = prices.backend;
    else if (workType === '2') hourlyRate = prices.frontend;
    else if (workType === '3') hourlyRate = prices.analisi;

    let finalPrice = hourlyRate * hours;

    // Applico lo sconto se il codice è valido
    if (promoCode && validPromoCodes.includes(promoCode)) {
        promoCodeElement.classList.add('is-valid');
        promoCodeElement.classList.remove('is-invalid');
        finalPrice *= 0.75;
    } else if (promoCode){
        promoCodeElement.classList.add('is-invalid');
        promoCodeElement.classList.remove('is-valid');
    }


    // Mostro il prezzo finale
    resultElement.innerHTML = `
        <strong>Prezzo finale:</strong><br>
        <span class="fs-4">${finalPrice.toFixed(2)} €</span>
    `;
});