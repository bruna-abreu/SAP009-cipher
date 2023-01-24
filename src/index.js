import cipher from './cipher.js';

const text = document.getElementById("box1"); 
const key = document.getElementById("keyNumber");
document.getElementById("btn1").addEventListener("click",encrypt);
document.getElementById("btn2").addEventListener("click",decrypt);

function encrypt(){
  const offset = key.valueAsNumber;
  const msg = text.value.toUpperCase(); 
  const encryptText = cipher.encode(offset, msg)
  document.getElementById("box2").value = encryptText; 
}

function decrypt() {
  const offset = key.valueAsNumber;
  const msg = text.value.toUpperCase();
  const decryptText = cipher.decode(offset, msg)
  document.getElementById("box2").value = decryptText;
}



