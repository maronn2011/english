'use strict';
let words = document.getElementById('english-words');
let titletext = document.getElementById('title');
let questiontext = document.getElementById('question-text');
let solve = document.getElementById('solve');
let solve_button = document.getElementById('solve-button');
let delete_button = document.getElementById('delete-button');
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let examples = data();



let index = getRandomInt(examples.length);
var example = examples[index];
let sample = example.split(' ');
let title = sample[0];
let question = sample[sample.length-1];
sample.shift();
sample.pop();
let i = sample.length;
example = '';

titletext.innerText = title;
questiontext.innerText = question;

for(let i=0;i<sample.length;i++){
  example += sample[i] + ' ';
}

while (i) {
  let first_number = Math.floor(Math.random()*i);
  --i;
  let first_elm = sample[i];
  sample[i] = sample[first_number];
  sample[first_number] = first_elm;
}

sample.forEach(function(value){
  let eword = document.createElement('button');
  eword.classList.add('ebutton');
  eword.innerText = value;
  eword.setAttribute('value',value);
  words.appendChild(eword);
})

let ebutton = document.querySelectorAll('button[class="ebutton"]');
ebutton.forEach(function(value,index,array){
  value.addEventListener('click',function(e){
    let text = array[index].value + ' ';
    solve.value += text;
  })
})

solve_button.addEventListener('click',function(){
  if(solve.value === example){
    document.location.reload();
  }
  else{
    alert('不正解です');
  }
})

delete_button.addEventListener('click',function(){
  solve.value = '';
})
