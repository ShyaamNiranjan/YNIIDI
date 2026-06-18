(() => {
  const params = new URLSearchParams(window.location.search);
  const success = document.getElementById("form-success");
  const form = document.getElementById("yniidi-contact-form");

  if (!form) return;

  const nextInput = document.getElementById("form-next");
  const replyInput = document.getElementById("form-replyto");
  const subjectInput = document.getElementById("form-email-subject");
  const emailInput = document.getElementById("email");
  const topicSelect = document.getElementById("subject");
  const submitButton = form.querySelector('button[type="submit"]");

  if (nextInput) {
    nextInput.value = `${window.location.origin}${window.location.pathname}?sent=1`;
  }

  form.addEventListener("submit", () => {
    if (replyInput && emailInput) {
      replyInput.value = emailInput.value.trim();
    }
    if (subjectInput && topicSelect && topicSelect.value) {
      subjectInput.value = `YNIIDI Inquiry: ${topicSelect.value}`;
    }
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }
  });

  if (params.get("sent") === "1" && success) {
    form.hidden = true;
    success.hidden = false;
    const section = document.getElementById("contact-form");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
})();
