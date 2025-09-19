// -------------------- Footer Year --------------------
const myFooter = document.querySelector(".footerWhats");
const myFooterTele = document.querySelector(".footerTele");

[myFooter, myFooterTele].forEach((footer) => {
  const yearParagraph = document.createElement("h3");
  yearParagraph.textContent = `Copyright © ${new Date().getFullYear()}`;
  footer.appendChild(yearParagraph);
});

// -------------------- Sections --------------------
const whatsSec = document.querySelector(".bodyWhats");
const teleSec = document.querySelector(".bodyTele");

const whatsBtns = document.querySelectorAll(".whats");
const teleBtns = document.querySelectorAll(".tele");

const inputs = document.querySelectorAll(".numInput");

const spmtWats = document.querySelector(".numSubmit");
const spmtTele = document.querySelector(".numSubmitTele");

// -------------------- Section Toggle --------------------
function openWhatsApp() {
  closeAlert();
  whatsSec.classList.replace("deactive", "active");
  teleSec.classList.replace("active", "deactive");
  inputs[0].focus();
}

function openTelegram() {
  closeAlert();
  whatsSec.classList.replace("active", "deactive");
  teleSec.classList.replace("deactive", "active");
  inputs[1].focus();
}

whatsBtns[0].onclick = openWhatsApp;
whatsBtns[1].onclick = () => {
  inputs[1].value = "";
  openWhatsApp();
};

teleBtns[0].onclick = () => {
  inputs[0].value = "";
  openTelegram();
};
teleBtns[1].onclick = openTelegram;

// -------------------- Submit Handlers --------------------
function handleSubmit(inputElem, url, isWhatsApp = false) {
  const message = inputElem.value.trim();
  const alertBox = document.querySelector(".alert-content");

  if (message === "") {
    alertBox.innerHTML = "";
    const title = document.createElement("h2");
    const text = document.createElement("p");
    const btn = document.createElement("button");

    title.textContent = "Write a Message!";
    text.textContent = "You must write a message to send it.";
    btn.textContent = "Ok";

    alertBox.appendChild(title);
    alertBox.appendChild(text);
    alertBox.appendChild(btn);

    btn.onclick = () => closeAlert();
    showAlert();
  } else {
    if (isWhatsApp) {
      const appUrl = `whatsapp://send?phone=201102645949&text=${encodeURIComponent(
        message
      )}`;
      const desktopUrl = `whatsapp://send?phone=201102645949&text=${encodeURIComponent(
        message
      )}`;
      const webUrl = `https://web.whatsapp.com/send?phone=201102645949&text=${encodeURIComponent(
        message
      )}`;

      window.location.href = appUrl;

      setTimeout(() => {
        window.open(webUrl, "_blank");
      }, 500);
    } else {
      window.open(`${url}?text=${encodeURIComponent(message)}`, "_blank");
    }
    inputElem.value = "";
  }
}

// -------------------- Button Actions --------------------
spmtWats.onclick = () =>
  handleSubmit(inputs[0], "https://wa.me/qr/ZIGFPTFHFBYYM1", true);
spmtTele.onclick = () => handleSubmit(inputs[1], "https://t.me/ahmedelsayed25");

// -------------------- Alert Functions --------------------
function showAlert() {
  document.getElementById("custom-alert").style.display = "flex";
}

function closeAlert() {
  document.getElementById("custom-alert").style.display = "none";
}

function closeAlertOnOutsideClick(event) {
  const alertContent = document.querySelector(".alert-content");
  if (!alertContent.contains(event.target)) {
    closeAlert();
  }
}

// -------------------- Preloader hide after page load --------------------
window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }, 500);
});
