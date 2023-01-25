import cipher from './cipher.js';

const text = document.getElementById("box1"); 
const key = document.getElementById("keyNumber");
document.getElementById("btn1").addEventListener("click",encrypt);
document.getElementById("btn2").addEventListener("click",decrypt);

function encrypt(event){
  event.preventDefault();
  const offset = Number(key.value);
  const msg = text.value.toUpperCase(); 

  try{
    const encryptText = cipher.encode(offset, msg)
    document.getElementById("box2").value = encryptText; 
  }
  catch(error){
    alert(error.message);
  }
}

function decrypt(event) {
  event.preventDefault();
  const offset = Number(key.value);
  const msg = text.value.toUpperCase();

  try{
    const decryptText = cipher.decode(offset, msg)
    document.getElementById("box2").value = decryptText;  
  }
  catch(error){
    alert(error.message);
  }
}



