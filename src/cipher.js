const cipher = {encode, decode};

function encode(key, text) {
  if (typeof key !== "number" || key === 0) {
    throw new TypeError("Insira o número de deslocamento");
  }

  if (typeof text !== "string" || text ==="") {
    throw new TypeError("Mensagem inválida");
  }
  
  let message = "";
  for (let i = 0; i < text.length; i++) {
    const cipherText = (text.charCodeAt(i) +65 + key) %26 + 65;
    message += String.fromCharCode(cipherText);
  }
  return message;
}

function decode(key, text) {
  const message = encode(-key, text)
  return message;
}

export default cipher; 
