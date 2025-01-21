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

    // Ottieni il tipo di lavoro selezionato
    const workTypeElement = document.querySelector('select');
    const workType = workTypeElement.value;

    // Ottieni il codice promozionale
    const promoCodeElement = document.querySelector('#promoCode');
    const promoCode = promoCodeElement.value;

    // Ottieni l'area di risultato
    const resultElement = document.getElementById('result');

    // Calcola il prezzo base
    let hourlyRate;
    if (workType === '1') hourlyRate = prices.backend;
    else if (workType === '2') hourlyRate = prices.frontend;
    else if (workType === '3') hourlyRate = prices.analisi;

    let finalPrice = hourlyRate * hours;

    // Applica lo sconto se il codice è valido
    if (promoCode && validPromoCodes.includes(promoCode)) {
        finalPrice *= 0.75;
    }

    // Mostra il prezzo finale
    resultElement.innerHTML = `
        <strong>Prezzo finale:</strong><br>
        <span class="fs-4">${finalPrice.toFixed(2)} €</span>
    `;
});