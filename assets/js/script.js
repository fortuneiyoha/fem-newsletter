const newsletter = document.querySelector(".js-newsletter");
const newsletterInfo = document.querySelector("#newsletter-info-container");
const emailForm = document.querySelector("#subscribe-form");
const emailInput = document.querySelector("#subscribe-input");
const subscribeBtn = document.querySelector(".js-btn-subscribe");
const subscribeStatus = document.querySelector(".js-subscribe-status");
const subscribeInfoTemplate = document.querySelector(
  "#subscribe-info-container"
).content;
const subscribeInfo = document.importNode(subscribeInfoTemplate, true);
const subscribeEmail = subscribeInfo.querySelector(".js-subscribe-email");
const dismissBtn = subscribeInfo.querySelector(".js-btn-dismiss");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const inputValue = emailInput.value.trim();

  if (inputValue !== "" && inputRegex.test(inputValue)) {
    newsletterInfo.style.display = "none";
    newsletter.appendChild(subscribeInfo);
    subscribeEmail.textContent = inputValue;
  } else {
    emailInput.classList.add("error");
    subscribeStatus.classList.add("error");
  }
});

function removeSubscriptionStatus(){
  if(subscribeStatus.classList.contains("error")){
     emailInput.classList.remove("error");
    subscribeStatus.classList.remove("error")
    subscribeInfo.style.display = "none"
  }
}

// ! Fix dismiss button event to hide subscription info container
dismissBtn.addEventListener("click", () => {
  newsletterInfo.style.display = "block";
  // newsletter.removeChild(subscribeInfo); // Returns an error: (Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node. at HTMLButtonElement.<anonymous> )
  // newsletter.querySelector(".js-subscribe-info").style.display = "none"; // Hides the element forever
  // dismissBtn.parentElement.style.display = "none"; // Hides the element forever
});
