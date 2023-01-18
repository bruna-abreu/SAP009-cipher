import cipher from './cipher.js';

document.getElementById("btn1").addEventListener("click",encrypt);

function encrypt(){
  const text1 = document.getElementById("box1").value;
  document.getElementById("box2").value = text1 
}
