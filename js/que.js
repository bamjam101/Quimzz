let quiz = [
    {
        q: "Q. What is the square root of 144?",
        option: ["12", "7", "11", "16"],
        ans: 0,
        theme: "img/math.png"
    },
    {
        q: "Q. What is Earth’s only natural satellite?",
        option: ["Sun", "Mars", "Moon", "Venus"],
        ans: 2,
        theme: "img/earth.png"
    },
    {
        q: "Q. What star shines in the day and provides light?",
        option: ["Neptune", "Mars", "Sun", "Jupiter"],
        ans: 2,
        theme: "img/solar.png"
    },
    {
        q: "Q. What tissue connects muscles to bones?",
        option: ["Skin", "Blood vessels", "Fat", "Tendon"],
        ans: 3,
        theme: "img/connect.png"
    },
    {
        q: "Q. Which nutrient plays an essential role in muscle-building?",
        option: ["Proteins", "Carbohydrates", "Iron", "Fat"],
        ans: 1,
        theme: "img/muscle.png"
    },
    {
        q: "Q. Name the acid that is secreted in the stomach?",
        option: ["Sulphric acid", "Nitric Acid", "Hydrochloric acid", "Phosphoric acid"],
        ans: 2,
        theme: "img/stomach.png"
    },
    {
        q: "Q. Which system of the body controls the senses?",
        option: ["Circulatory system", "Digestive system", "Skeletal system", "Nervous system"],
        ans: 3,
        theme: "img/sense.png"
    },
    {
        q: "Q. Which scientist proposed the three laws of motion?",
        option: ["Isaac Newton", "Thomas Alva Edison", "Albert Einstein", "Stephen Hawking"],
        ans: 0,
        theme: "img/scientist.png"
    },
    {
        q: "Q. Which is the largest animal on earth?",
        option: ["Shark", "Elephant", "Giraffe", "Blue Whale"],
        ans: 3,
        theme: "img/animal.png"
    }
];

function curtain() {
    const curtain = document.querySelector("section");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    setTimeout(() => {
        footer.style.display = "block";
        main.style.display = "block";
        header.style.display = "block";
    }, 2800);
    setTimeout(() => {
        footer.style.opacity = "100";
        main.style.opacity = "100";
        header.style.opacity = "100";
        curtain.style.display = "none";
    }, 3000);
    curtain.style.top = "-100%";

    
    // ask();
}

let toggle = true;

function menu() {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    const menu = document.querySelector("nav");
    const header = document.querySelector("header");
    const question = document.querySelector(".que");
    const options = document.querySelector(".options");
    const menuContent = document.querySelector(".menuContent");

    if (toggle == true) {
        header.style.height = "6vh";
        menu.style.position = "absolute";
        menu.style.top = "0%";
        menu.style.zIndex = "1000";
        menu.style.width = "100%";
        menu.style.height = "100vh";

        footer.style.opacity = "0";
        main.style.opacity = "0";

        question.style.background = "rgba(0,0,0,0)";
        options.style.background = "rgba(0,0,0,0)";
        setTimeout(() => {
            menuContent.style.opacity = "100";
            menuContent.style.zIndex = "1000";
        }, 1000);
        menu.style.background = "rgba(0,0,0,0.5)";
        return toggle = false;
    } else {
        menu.style.position = "none";
        menu.style.top = "none";
        menu.style.zIndex = "none";
        menu.style.width = "100%";
        menu.style.height = "6vh";
        menu.style.background = "rgba(0,0,0,0)";

        menuContent.style.opacity = "0";
        menuContent.style.zIndex = "-1";
        setTimeout(() => {
            question.style.background = "rgba(0,0,0,0.2)";
            options.style.background = "rgba(0,0,0,0.2)";
        }, 1000);
        setTimeout(() => {
            footer.style.opacity = "1";
            main.style.opacity = "1";
        }, 1500);

        return toggle = true;
    }
}

// let Counter = 0;
// let currentQue;
// let availableQue = [];

// function setQuestion() {
//     for (let i = 0; i < quiz.length; i++) {
//         availableQue.push(quiz[i]);
//     }
//     console.log(quiz);
// }

// window.onload = function () {
//     setQuestion();
//     getNewQuestion();
// }

// function ask() {
//     let score = 0;

//     const questionSlot = document.querySelector(".question");
//     const opt_1 = document.querySelector(".optA");
//     const opt_2 = document.querySelector(".optB");
//     const opt_3 = document.querySelector(".optC");
//     const opt_4 = document.querySelector(".optD");

//     const quizLen = Quiz.length;
//     const questionIndex = Math.floor(Math.random() * 19);

//     questionSlot.innerHTML = Quiz.q;
//     // opt_1.innerHTML = Quiz[questionIndex].option[0];
//     // opt_2.innerHTML = Quiz[questionIndex].option[1];
//     // opt_3.innerHTML = Quiz[questionIndex].option[2];
//     // opt_4.innerHTML = Quiz[questionIndex].option[3];
// }