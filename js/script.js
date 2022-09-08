// Select element
const quizButton = document.querySelector('.quizBtn button');
const rulesBox = document.querySelector('.rules-box');
const exitButton = document.querySelector('.buttons .exitBtn');
const continueButton = document.querySelector('.buttons .continueBtn');
const Questions = document.querySelector('.questions');
const questionText = document.querySelector('.quiz-text');
const optionList = document.querySelector('.MyOptions');
const NextButton = document.querySelector('.nextBtn');
const totolQuestion = document.querySelector(".total_que")


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
};
let questionCount = 0;

NextButton.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++
        showQuestion(questionCount)
    } else {
        alert("You have complete your task")
    }
}

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
  let totalQueTag = '<p>' +  questions[index].number + ' of 5 </p>'
  totolQuestion.innerHTML = totalQueTag
  const option = optionList.querySelectorAll(".options")
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)")
  }
}

function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAns = questions[questionCount].answer;
  if (userAnswer === correctAns) {
    console.log('answer is correct')
  } else {
    console.log('Answer is wrong')
  }
}