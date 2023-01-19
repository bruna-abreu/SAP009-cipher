import cipher from './cipher.js';

const text = document.getElementById("box1"); 
document.getElementById("btn1").addEventListener("click",encrypt);
document.getElementById("btn2").addEventListener("click",decrypt);

function encrypt(){
  const msg = text.value.toUpperCase(); 
  document.getElementById("box2").value = msg; 
}

function decrypt() {
  const msg = text.value.toUpperCase();
  document.getElementById("box2").value = msg;
}
