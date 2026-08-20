// Tək və cüt ədədləri sayan funksiya
function countEvensAndOdds(numbers) {
    let evens = 0; // cüt ədədlərin sayı
    let odds = 0;  // tək ədədlərin sayı

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    }

    return {
        cüt: evens,
        tək: odds
    };
}

// Səhifə yükləndikdə kodu işə salırıq
document.addEventListener("DOMContentLoaded", () => {
    // Yoxlamaq üçün nümayə massivi
    const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15];

    // Funksiyanı çağırırıq
    const result = countEvensAndOdds(sampleArray);

    // Nəticəni konsola çıxarırıq
    console.log("Massiv:", sampleArray);
    console.log(`Cüt ədədlərin sayı: ${result.cüt}`);
    console.log(`Tək ədədlərin sayı: ${result.tək}`);

    // Nəticəni ekranda (brauzerdə) göstərmək üçün HTML-ə yazırıq
    const app = document.getElementById("app");
    app.innerHTML = `
        <h2>Tapşırıq Nəticəsi:</h2>
        <p><b>Massiv:</b> [${sampleArray.join(", ")}]</p>
        <p><b>Cüt ədədlərin sayı:</b> ${result.cüt}</p>
        <p><b>Tək ədədlərin sayı:</b> ${result.tək}</p>
    `;
});