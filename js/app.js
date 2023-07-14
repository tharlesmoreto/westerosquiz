import { questionData, responseData, respostas } from './perguntaserespostas.js'

function viewProcess() {
  let process = document.querySelector('.process')
  process.classList.add('show')

  let start = document.querySelector('.start')
  start.classList.add('show')
}

let btnStart = document.querySelector('.btnStart')
btnStart.addEventListener('click', viewProcess)

let i = 1
let counter = 0

let question = document.querySelector('.perguntaProcess')
question.textContent = questionData[0]

let answers = document.querySelector('.respostas')
answers.innerHTML = respostas[counter].map(response => `<div>${response}</div>`).join('')

function next() {
  if (i < questionData.length) {
    console.log((question.textContent = questionData[i]))
    i++
  }
}

let nextProcess = document.querySelector('.btnProcess')
nextProcess.addEventListener('click', next)
