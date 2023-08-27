function showAlert(alertId) {
  const bootstrapAlert = document.querySelector("#" + alertId);
  bootstrapAlert.classList.remove("collapse"); // Remove the "collapse" class to show the alert
}

const modalYesBtn = document.querySelector("#contact-modal .btn-primary");
modalYesBtn.addEventListener("click", function () {
  const sendBtn = document.querySelector("#send-message-btn");
  sendBtn.style.display = "none"; // Hides the "Send message" button
  showAlert("conf-alert"); // Shows the alert
});
