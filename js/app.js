// --------------------------------- Import ---------------------------------
import { questionData, responseData } from './perguntaserespostas.js'

// --------------------------------- Star ---------------------------------
function viewProcess() {
  let process = document.querySelector('.process')
  process.classList.add('show')

  let start = document.querySelector('.start')
  start.classList.add('show')
}

let btnStart = document.querySelector('.btnStart')
btnStart.addEventListener('click', viewProcess)

// --------------------------------- Process ---------------------------------
let result = 0

let question = document.querySelector('.perguntaProcess')
question.textContent = questionData[0]

let answers = document.querySelector('.respostas')
answers.innerHTML = responseData[0]
  .map(response => `<div id="res">${response}</div>`)
  .join('')

let i = 1

function next() {
  if (i < questionData.length && i < responseData.length) {

    question.textContent = questionData[i]
    answers.innerHTML = responseData[i]
      .map(response => `<div id="res">${response}</div>`)
      .join('')
    i++
  }
}


let selected = document.querySelector('#res')


let nextProcess = document.querySelector('.btnProcess')
nextProcess.addEventListener('click', next)
