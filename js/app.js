import {perguntas, respostas} from './perguntaserespostas.js';


function viewProcess (){
  let process = document.querySelector('.process');
  process.classList.add("show");

  let start = document.querySelector('.start');
  start.classList.add("show");
}

let btnStart = document.querySelector('.btnStart');
btnStart.addEventListener("click", viewProcess);


let indice = 1
let pergunta = document.querySelector('.perguntaProcess')
pergunta.textContent = perguntas[0]

function next (){
  if (indice < perguntas.length){
    pergunta.textContent = perguntas[indice] 
    indice++
  }
}


let nextProcess = document.querySelector('.btnProcess');
nextProcess.addEventListener("click", next);
