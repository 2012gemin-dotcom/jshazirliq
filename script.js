// Şəkildəki test sualları və variantlar
const quizData = [
    {
        id: 15,
        question: "15. Choose the lines of countable nouns.",
        options: ["A) 2, 5", "B) 2, 4, 5", "C) 3, 4", "D) 1, 2", "E) 1, 3, 5"],
        correct: "A"
    },
    {
        id: 16,
        question: "16. Choose the correct pairs of countable nouns.",
        options: ["A) 1, 4", "B) 1, 2", "C) 3, 4", "D) 2, 3", "E) 2, 4"],
        correct: "D"
    },
    {
        id: 17,
        question: "17. Choose the correct pairs of countable nouns.",
        options: ["A) 1, 4", "B) 1, 2", "C) 3, 4", "D) 2, 3", "E) 2, 4"],
        correct: "C"
    },
    {
        id: 18,
        question: "18. Choose the correct pair of countable nouns.",
        options: ["A) planet, ink", "B) volunteer, air", "C) carpet, business", "D) grape, traffic", "E) life, cloud"],
        correct: "E"
    }
];

// JS vasitəsilə HTML strukturunu dinamik qurmaq
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    // Sual elementlərini JS ilə yaradırıq
    quizData.forEach((q) => {
        const qDiv = document.createElement("div");
        qDiv.style.marginBottom = "20px";

        const title = document.createElement("p");
        title.style.fontWeight = "bold";
        title.innerText = q.question;
        qDiv.appendChild(title);

        q.options.forEach((opt) => {
            const label = document.createElement("label");
            label.style.display = "block";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `question_${q.id}`;
            radio.value = opt[0]; // Variantın hərfi (A, B, C...)

            label.appendChild(radio);
            label.appendChild(document.createTextNode(` ${opt}`));
            qDiv.appendChild(label);
        });

        app.appendChild(qDiv);
    });

    // Yoxlama düyməsini JS ilə yaradırıq
    const btn = document.createElement("button");
    btn.innerText = "Cavabları Yoxla";
    btn.style.padding = "10px 20px";
    btn.style.cursor = "pointer";
    btn.onclick = checkAnswers;
    app.appendChild(btn);

    // Nəticə hissəsini JS ilə yaradırıq
    const resultDiv = document.createElement("div");
    resultDiv.id = "result";
    resultDiv.style.marginTop = "20px";
    resultDiv.style.fontSize = "18px";
    resultDiv.style.fontWeight = "bold";
    app.appendChild(resultDiv);
});

// Cavabları yoxlayan JS funksiyası
function checkAnswers() {
    let score = 0;

    quizData.forEach((q) => {
        const selected = document.querySelector(`input[name="question_${q.id}"]:checked`);
        if (selected && selected.value === q.correct) {
            score++;
        }
    });

    const resultDiv = document.getElementById("result");
    resultDiv.innerText = `Nəticə: ${quizData.length} sualdan ${score} düzgün cavab!`;
}