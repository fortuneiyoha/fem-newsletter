const newsletter = document.querySelector(".js-newsletter");
const newsletterInfo = document.querySelector(".js-newsletter-info-container");
const emailForm = newsletterInfo.querySelector("#subscribe-form");
const emailInput = newsletterInfo.querySelector("#subscribe-input");
const subscribeStatus = newsletterInfo.querySelector(".js-subscribe-status");
const subscribeBtn = newsletterInfo.querySelector(".js-btn-subscribe");
const subscribeInfo = document.querySelector(".js-subscribe-info-container");
const subscribeEmail = subscribeInfo.querySelector(".js-subscribe-email");
const dismissBtn = subscribeInfo.querySelector(".js-btn-dismiss");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const inputValue = emailInput.value.trim();

  if (inputValue !== "" && inputRegex.test(inputValue)) {
    newsletterInfo.style.display = "none";
    subscribeInfo.style.display = "block";
    subscribeEmail.textContent = inputValue;
  } else {
    emailInput.classList.add("error");
    subscribeStatus.classList.add("error");
  }
});

emailInput.addEventListener("keydown", () => {
  if (subscribeStatus.classList.contains("error")) {
    emailInput.classList.remove("error");
    subscribeStatus.classList.remove("error");
  }
});

dismissBtn.addEventListener("click", () => {
  newsletterInfo.style.display = "block";
  subscribeInfo.style.display = "none";
});
