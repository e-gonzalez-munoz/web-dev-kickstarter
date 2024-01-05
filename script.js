//Code to update the year at the footer

const currentYear = new Date().getFullYear();

document.getElementById('currentYear').textContent = currentYear;


// Code for the quiz

const questions = [
    {
        question: "Who is the father of Luke Skywalker?",
        image: "images/luke_skywalker.jpeg",
        options: ["Darth Vader", "Emperor Palpatine", "Obi-Wan Kenobi", "Han Solo"],
        correctAnswer: "Darth Vader"
    },
    {
        question: "What is the name of Han Solo's ship?",
        image: "images/millennium_falcon.jpeg",
        options: ["Millennium Falcon", "Star Destroyer", "TIE Fighter", "X-wing"],
        correctAnswer: "Millennium Falcon"
    },
    {
        question: "Which bounty hunter captured Han Solo in 'Star Wars: Episode V - The Empire Strikes Back'?",
        image: "images/boba_fett.jpeg",
        options: ["Dengar", "IG-88", "Bossk", "Boba Fett"],
        correctAnswer: "Boba Fett"
    },
    {
        question: "What is Darth Vader's real name before turning to the dark side?",
        image: "images/darth_vader.jpeg",
        options: ["Anakin Skywalker", "Sheev Palpatine", "Obi-Wan Kenobi", "Qui-Gon Jinn"],
        correctAnswer: "Anakin Skywalker"
    },
    {
        question: "What is the real name of The Mandalorian (Mando)?",
        image: "images/mando.jpeg",
        options: ["Din Djarin", "Boba Fett", "Cara Dune", "Greef Karga"],
        correctAnswer: "Din Djarin"
    },
    {
        question: "What is Rey's full name in the sequel trilogy?",
        image: "images/rey.jpeg",
        options: ["Rey Skywalker", "Rey Solo", "Rey Kenobi", "Rey Palpatine"],
        correctAnswer: "Rey Skywalker"
    }
];

let currentQuestion = 0;
let score = 0;

const showQuestion = () => {
    const questionCard = document.querySelector("#question-card");
    const questionText = document.querySelector("#question-text");
    const optionsContainer = document.querySelector("#options-container");
    const imageContainer = document.querySelector("#image-container");

    // Clear previous content
    imageContainer.innerHTML = "";

    const currentQ = questions[currentQuestion];

    questionText.innerText = currentQ.question;

    // Add an image to the question card
    const image = document.createElement("img");
    image.src = currentQ.image;
    image.alt = "Question Image";
    image.classList.add("question-image");
    imageContainer.append(image);

    optionsContainer.innerHTML = "";

    currentQ.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.append(button);
    });

    // Reset the next button
    const nextBtn = document.querySelector("#next-btn");
    nextBtn.style.display = "none";

    if (currentQuestion === questions.length - 1) {
        nextBtn.innerText = "Finish";
    }
};

const checkAnswer = (selectedOption) => {
    const currentQ = questions[currentQuestion];
    const nextBtn = document.querySelector("#next-btn");

    if (selectedOption === currentQ.correctAnswer) {
        score++;
    }

    nextBtn.style.display = "block";
}

const nextQuestion = () => {
    const nextBtn = document.querySelector("#next-btn");
    nextBtn.style.display = "none";

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResult();
    }
}

const showResult = () => {
    const quizContainer = document.querySelector("#quiz-container");
    const resultContainer = document.querySelector("#result-container");
    const resultText = document.querySelector("#result-text");

    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    resultText.innerText = `You scored ${score} out of ${questions.length}!`;
}

// Initial call to showQuestion when the page loads
document.addEventListener('DOMContentLoaded', showQuestion);