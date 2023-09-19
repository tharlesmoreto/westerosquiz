import { questions, families } from './data.js'

const btnStart = document.querySelector('.btnStart')
const btnQuiz = document.querySelector('.btnQuiz')
const btnRemake = document.querySelector('.restart')

const toStart = document.querySelector('.toStart')
const gameQuiz = document.querySelector('.gameQuiz')
const toResult = document.querySelector('.result')
const logo = document.querySelector('.iconLogo')

const addQuestion = document.querySelector('.questions')
const addAnswers = document.querySelector('.answers')

const addHouse = document.querySelector('.house')
const addMotto = document.querySelector('.motto')
const addSymbol = document.querySelector('.symbol')

let index = 0
let counter = 0

btnStart.addEventListener('click', startQuiz)
btnQuiz.addEventListener('click', nextQuestion)

function startQuiz() {
  toStart.classList.add('hide')
  gameQuiz.classList.remove('hide')
  nextQuestion()
}

function nextQuestion() {
  addQuestion.textContent = questions[index].question
  addAnswers.innerHTML = questions[index].answers
    .map(answer => `<button class="answer">${answer.text}</button>`)
    .join('')
  const answerButton = addAnswers.querySelectorAll('.answer')
  for (counter = 0; counter < answerButton.length; counter++) {
    answerButton[counter].addEventListener('click', select)
    btnQuiz.disabled = true
  }

  index++
  if (index >= questions.length) {
    btnQuiz.value = 'Resultado'
    btnQuiz.addEventListener('click', result)
  }
}

function select(event) {
  const answerClick = event.target
  const alternating = addAnswers.querySelectorAll('.answer')
  for (counter = 0; counter < alternating.length; counter++) {
    alternating[counter].classList.remove('select')
  }
  answerClick.classList.add('select')
  btnQuiz.disabled = false
}

function result() {
  gameQuiz.classList.add('hide')
  toResult.classList.remove('hide')
  const indexFamilies = Math.floor(Math.random() * families.length)
  let family = families[indexFamilies]
  addHouse.innerHTML = family.house
  addMotto.innerHTML = family.motto
  addSymbol.src = family.symbol
}

btnRemake.addEventListener('click', showLoading)

function showLoading() {
  toResult.classList.add('hide')
  logo.classList.add('hide')
  const div = document.createElement('div')
  div.classList.add('loading')

  const span = document.createElement('span')
  span.innerHTML = 'WesterosQuiz'
  div.appendChild(span)

  document.body.appendChild(div)

  setTimeout(() => hideLoading(), 5000)
}

function hideLoading() {
  location.reload(true);
}
