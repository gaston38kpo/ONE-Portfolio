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

userName.addEventListener("keyup", () => {
  if (!is_valid_name()) {
    userName.removeAttribute("style");
    return userName.setAttribute("style", "border-bottom: 2px solid red;");
  }
  userName.removeAttribute("style");
});

// Email
function is_valid_email() {
  const EMAIL_REGEX = /^[^@]+@[^@]{2,}\.[^@]{2,}$/;
  let emailStr = email.value.trim();
  return EMAIL_REGEX.test(emailStr) && emailStr.length > 0;
}

email.addEventListener("keyup", () => {
  if (!is_valid_email()) {
    email.removeAttribute("style");
    return email.setAttribute("style", "border-bottom: 2px solid red;");
  }
  email.removeAttribute("style");
});

// Asunto
function is_valid_asunt() {
  const MAX_LENGTH_ASUNT = 50;
  return is_valid_text_length(asunt.value, MAX_LENGTH_ASUNT);
}

asunt.addEventListener("keyup", () => {
  if (!is_valid_asunt()) {
    asunt.removeAttribute("style");
    return asunt.setAttribute("style", "border-bottom: 2px solid red;");
  }
  asunt.removeAttribute("style");
});

// Mensaje
function is_valid_message() {
  const MAX_LENGTH_MESSAGE = 300;
  return is_valid_text_length(message.value, MAX_LENGTH_MESSAGE);
}

message.addEventListener("keyup", () => {
  if (!is_valid_asunt()) {
    message.removeAttribute("style");
    return message.setAttribute("style", "border-bottom: 2px solid red;");
  }
  message.removeAttribute("style");
});

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
    sendBtn.disabled = true;
    sendBtn.style.background = "#bbb";
    sendBtn.style.color = "#444";
    sendBtn.style.cursor = "not-allowed";
  } else {
    sendBtn.disabled = false;
    sendBtn.removeAttribute("style");
  }
}

form.addEventListener("keyup", enable_btn);

form.addEventListener("submit", (e) => {
  if (!is_valid_form()) {
    e.preventDefault();
    alert("Por favor chequee el formulario e inténtelo de nuevo.");
  }
});
