
function viewProcess (){
  let process = document.querySelector('.process');
  process.classList.add("show");

  let viewStart = document.querySelector('.start');
  viewStart.classList.add("show");
 
}

let btnStart = document.querySelector('.btn');
btnStart.addEventListener("click", viewProcess);


