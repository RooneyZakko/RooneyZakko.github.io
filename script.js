document.addEventListener("DOMContentLoaded", function() {
    const startQuizButton = document.getElementById("startQuiz");
    const quizQuestions = document.getElementById("quizQuestions");

    startQuizButton.addEventListener("click", function() {
        startQuizButton.style.display = "none";
        quizQuestions.style.display = "block";
        renderQuiz();
    });

    function renderQuiz() {
        const questions = [
            {
                question: "Wat is een voorbeeld van een front-end programmeertaal?",
                answers: ["HTML", "Python", "Node.js", "SQL"],
                correctAnswer: "HTML"
            },
            {
                question: "Welke programmeertaal wordt vaak gebruikt voor back-end development?",
                answers: ["JavaScript", "CSS", "PHP", "React"],
                correctAnswer: "PHP"
            },
            {
                question: "Wat doet CSS in web development?",
                answers: ["Het bepaalt de structuur van de webpagina", "Het definieert de interactieve elementen van de webpagina", "Het stijlt de webpagina", "Het verwerkt de gebruikersinvoer"],
                correctAnswer: "Het stijlt de webpagina"
            },
            {
                question: "Wat is een voorbeeld van een back-end database?",
                answers: ["MySQL", "React", "Vue.js", "Angular"],
                correctAnswer: "MySQL"
            },
            {
                question: "Welke van de volgende is een JavaScript-framework voor front-end development?",
                answers: ["Express.js", "Django", "jQuery", "Flask"],
                correctAnswer: "jQuery"
            },
            {
                question: "Wat is een API?",
                answers: ["Een programmeertaal", "Een gebruikersinterface", "Een set van definities en protocollen waarmee softwareapplicaties met elkaar kunnen communiceren", "Een framework voor back-end development"],
                correctAnswer: "Een set van definities en protocollen waarmee softwareapplicaties met elkaar kunnen communiceren"
            }
        ];

        let quizHTML = "";
        questions.forEach((question, index) => {
            quizHTML += `
                <div>
                    <p>Vraag ${index + 1}: ${question.question}</p>
                    <ul>
            `;
            question.answers.forEach(answer => {
                quizHTML += `<li><input type="radio" name="question${index}" value="${answer}">${answer}</li>`;
            });
            quizHTML += `</ul></div>`;
        });

        quizHTML += `<button id="submitQuiz">Submit</button>`;
        quizQuestions.innerHTML = quizHTML;

        const submitQuizButton = document.getElementById("submitQuiz");
        submitQuizButton.addEventListener("click", function() {
            let score = 0;
            questions.forEach((question, index) => {
                const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`).value;
                if (selectedAnswer === question.correctAnswer) {
                    score++;
                }
            });
            alert(`Je score: ${score}/${questions.length}`);
        });
    }
});