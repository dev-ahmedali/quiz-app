// Select element
const quizButton = document.querySelector('.quizBtn button');
const rulesBox = document.querySelector('.rules-box');
const exitButton = document.querySelector('.buttons .exitBtn');
const continueButton = document.querySelector('.buttons .continueBtn');
const Questions = document.querySelector('.questions');
const questionText = document.querySelector('.quiz-text');
const optionList = document.querySelector('.MyOptions');
const NextButton = document.querySelector('.nextBtn');
const totolQuestion = document.querySelector('.total_que');
const timeCounter = document.querySelector('.timeCount .seconds');
const timeLine = document.querySelector('.questionsHeader .time_lines');
const resultBox = document.querySelector('.result_box');
const restartQuiz = document.querySelector('.buttons_result .restart');
const quitQuiz = document.querySelector('.buttons_result .quit');
const timeOff = document.querySelector('.questionsHeader .timeLeft');

quizButton.onclick = () => {
  rulesBox.classList.add('activeInfo');
};

exitButton.onclick = () => {
  rulesBox.classList.remove('activeInfo');
};

continueButton.onclick = () => {
  rulesBox.classList.remove('activeInfo');
  Questions.classList.add('questionInfo');
  showQuestion(0);
  startTimer(15);
  startTimerLine(0);
};

quitQuiz.onclick = () => {
  window.location.reload();
};

restartQuiz.onclick = () => {
  Questions.classList.add('questionInfo');
  resultBox.classList.remove('activeResult');
  let questionCount = 0;
  let timeValue = 15;
  let widthValue = 0;
  let userScore = 0;
  showQuestion(questionCount);
  clearInterval(counter);
  startTimer(timeValue);

  clearInterval(counterLine);
  startTimerLine(widthValue);
  NextButton.style.display = 'none';
  timeOff.textContent = 'Time Left';
};
// defined variable
let questionCount = 0;
let counter;
let timeValue = 15;
let counterLine;
let widthValue = 0;
let userScore = 0;

NextButton.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestion(questionCount);
    clearInterval(counter);
    startTimer(timeValue);

    clearInterval(counterLine);
    startTimerLine(widthValue);
    NextButton.style.display = 'none';
  timeOff.textContent = 'Time Left';
  } else {
    showResultBox();
  }
};

function showQuestion(index) {
  let optionTag =
    '<div class="options">' +
    questions[index].options[0] +
    '</div>' +
    '<div class="options">' +
    questions[index].options[1] +
    '</div>' +
    '<div class="options">' +
    questions[index].options[2] +
    '</div>' +
    '<div class="options">' +
    questions[index].options[3] +
    '</div>';
  let questionTag =
    '<span>' +
    questions[index].number +
    '.' +
    questions[index].question +
    '</span';
  questionText.innerHTML = questionTag;
  optionList.innerHTML = optionTag;
  let totalQueTag = '<p>' + questions[index].number + ' of 5 </p>';
  totolQuestion.innerHTML = totalQueTag;
  const option = optionList.querySelectorAll('.options');
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute('onclick', 'optionSelected(this)');
  }
}

let checkIcon =
  '<div class="tick icon"><i class="fa-solid fa-check"></i></div>';
let crossIcon =
  '<div class="cross icon"><i class="fa-solid fa-xmark"></i></div>';

function optionSelected(answer) {
  clearInterval(counterLine);
  clearInterval(counter);
  let userAnswer = answer.textContent;
  let correctAns = questions[questionCount].answer;
  let allOptions = optionList.children.length;
  if (userAnswer === correctAns) {
    userScore += 1;
    console.log(userScore);
    answer.classList.add('correct');
    answer.insertAdjacentHTML('beforeend', checkIcon);
  } else {
    answer.classList.add('incorrect');
    answer.insertAdjacentHTML('beforeend', crossIcon);

    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent == correctAns) {
        optionList.children[i].setAttribute('class', 'options correct');
        optionList.children[i].insertAdjacentHTML('beforeend', checkIcon);
      }
    }
  }

  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add('disabled');
  }
  NextButton.style.display = 'block';
}

function showResultBox() {
  rulesBox.classList.remove('activeInfo');
  Questions.classList.remove('questionInfo');
  resultBox.classList.add('activeResult');
  const scoreText = document.querySelector('.score_text');
  if (userScore > 3) {
    let scoreTag =
      '<span>Congratulations you got <p>' +
      userScore +
      '</p>out of <p> ' +
      questions.length +
      ' </p></span>';
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 1) {
    let scoreTag =
      '<span>Carry on you got <p>' +
      userScore +
      '</p>out of <p> ' +
      questions.length +
      ' </p></span>';
    scoreText.innerHTML = scoreTag;
  } else {
    let scoreTag =
      '<span>You have failed you got <p>' +
      userScore +
      '</p>out of <p> ' +
      questions.length +
      ' </p></span>';
    scoreText.innerHTML = scoreTag;
  }
}

// Start timer
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCounter.textContent = time;
    time--;
    if (time < 9) {
      let addzero = timeCounter.textContent;
      timeCounter.textContent = '0' + addzero;
    }
    if (time < 0) {
      clearInterval(counter);
      timeCounter.textContent = '00';
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 50);
  function timer() {
    time = time + 1;
    timeLine.style.width = time + 'px';
    if (time > 319) {
      clearInterval(counterLine);
    }
  }
}
