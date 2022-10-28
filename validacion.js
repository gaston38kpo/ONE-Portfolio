//Haz tú validación en javascript acá
const form = document.getElementById("form");
const sendBtn = document.getElementById("btnEnviar");

const userName = form.nombre;
const email = form.email;
const asunt = form.asunto;
const message = form.mensaje;

sendBtn.style.background = "#bbb";
sendBtn.style.color = "#444";
sendBtn.style.cursor = "not-allowed";

function is_valid_text_length(text, lengthText) {
  return text.trim().length <= lengthText && text.trim().length > 0;
}

// Nombre
function is_valid_name() {
  const MAX_LENGTH_NAME = 50;
  return is_valid_text_length(userName.value, MAX_LENGTH_NAME);
}

// Email
function is_valid_email() {
  const EMAIL_REGEX = /^[^@]+@[^@]{2,}\.[^@]{2,}$/;
  let emailStr = email.value.trim();
  return EMAIL_REGEX.test(emailStr) && emailStr.length > 0;
}

// Asunto
function is_valid_asunt() {
  const MAX_LENGTH_ASUNT = 50;
  return is_valid_text_length(asunt.value, MAX_LENGTH_ASUNT);
}

// Mensaje
function is_valid_message() {
  const MAX_LENGTH_MESSAGE = 300;
  return is_valid_text_length(message.value, MAX_LENGTH_MESSAGE);
}

function is_valid_form() {
  return (
    is_valid_name() &&
    is_valid_email() &&
    is_valid_asunt() &&
    is_valid_message()
  );
}

function enable_btn() {
  if ([userName.value, email.value, asunt.value, message.value].includes("")) {
    sendBtn.disable = true;
    sendBtn.style.background = "#bbb";
    sendBtn.style.color = "#444";
    sendBtn.style.cursor = "not-allowed";
  } else {
    sendBtn.disable = false;
    sendBtn.removeAttribute("style");
  }
}

form.addEventListener("keyup", enable_btn);
