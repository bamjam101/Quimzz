let questionCounter = 0;
let nextCount = 0;
let score = 0;
let currentQue;
let availableQue = [];
let availableOpt = [];
let correct;
const optContainer = document.querySelector(".options");
const queText = document.querySelector(".question");
// const scored = document.querySelector(".score");
const button = document.querySelector("button");
const bubble = document.querySelector("#bubble");

function setQuestion() {
    const totalQue = quiz.length;
    for (let i = 0; i < totalQue; i++) {
        availableQue.push(quiz[i]);
    }
}

function getNewQuestion() {
    const questionIndex = availableQue[Math.floor(Math.random() * availableQue.length)]
    currentQue = questionIndex;
    // Set the question on webpage using innerHTML
    queText.innerHTML = currentQue.q;
    // Set respective theme bubble
    bubble.style.opacity = "0";

    setTimeout(() => {
        bubble.setAttribute("src", currentQue.theme);
    }, 200);
    setTimeout(() => {
        bubble.style.opacity = "30%";
    }, 1500);
    // index of current question, position in availableQue array
    const indexSlice = availableQue.indexOf(questionIndex);
    // slice out the asked question to avoid repetition
    availableQue.splice(indexSlice, 1);
    // optionCode
    const optionLen = currentQue.option.length;

    for (let i = 0; i < optionLen; i++) {
        availableOpt.push(i);
    }
    optContainer.innerHTML = '';
    // What is correct option?
    correct = currentQue.ans;
    // set the options randomly
    for (let i = 0; i < optionLen; i++) {
        const optIndex = availableOpt[Math.floor(Math.random() * availableOpt.length)];
        const optSlice = availableOpt.indexOf(optIndex);
        availableOpt.splice(optSlice, 1);
        const option = document.createElement("div");
        option.innerHTML = currentQue.option[optIndex];
        option.id = optIndex;
        option.className = "box";
        // option.style.animationDelay = "0.2s";
        optContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this, correct)")
    }
    questionCounter++;
}

function getResult(element, ans) {
    const optionChose = element.id;
    if (optionChose == ans) {
        // styling green, score++, or 
        element.classList.add("correct");
        score++;
        // scored.innerHTML = score + " out of 5";
    } else {
        // style red
        element.classList.add("wrong");
        // To show the correct answer along
        const optLen = optContainer.children.length;
        for (let i = 0; i < optLen; i++) {
            if (optContainer.children[i].id == ans) {
                optContainer.children[i].classList.add("correct");
            }
        }
    }
    restrictClick();
}

function restrictClick() {
    const optRegionLen = optContainer.children.length;
    for (let i = 0; i < optRegionLen; i++) {
        optContainer.children[i].classList.add("already-clicked");
    }
}

function next() {
    nextCount++;
    queText.style.opacity = "0";
    setTimeout(() => {
        queText.style.opacity = "100";

        if (questionCounter === 5) {
            // menu();
            // if (score >= 3) {
            //     bubbble.style.opacity = "0";
            //     bubbble.setAttribute("src", "img/winner.gif");

            //     setTimeout(() => {
            //         bubbble.style.opacity = "100";
            //     }, 500);
            // }
            queText.style.opacity = "0";
            button.style.opacity = "0";
            optContainer.style.opacity = "0";
            setTimeout(() => {
                queText.innerHTML = `You've Finished The Game!   Score : ${score} out of 5`;
                queText.style.opacity = "100";
                optContainer.innerHTML = "";
            }, 1000);
            setTimeout(() => {
                button.style.opacity = "100";
            }, 2000);
            button.innerHTML = "Restart";
            button.removeAttribute("onclick", "next()");
            button.setAttribute("onclick", "reload()");
        } else {
            getNewQuestion();
        }
    }, 1000);

}

function reload() {
    window.location.reload();
}

window.onload = function () {
    setQuestion();
    getNewQuestion();
}