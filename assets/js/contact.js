(() => {
  const form = document.getElementById("yniidi-contact-form");
  if (!form) return;

  const nextInput = document.getElementById("form-next");
  const replyInput = document.getElementById("form-replyto");
  const subjectInput = document.getElementById("form-email-subject");
  const emailInput = document.getElementById("email");
  const topicSelect = document.getElementById("subject");
  const submitButton = form.querySelector('button[type="submit"]');

  const getThankYouUrl = () => {
    const path = window.location.pathname.replace(/\/contact\/?.*$/, "");
    const root = path.endsWith("/") ? path : `${path}/`;
    return `${window.location.origin}${root}thank-you/`;
  };

  if (nextInput) {
    nextInput.value = getThankYouUrl();
  }

  form.addEventListener("submit", () => {
    if (nextInput) {
      nextInput.value = getThankYouUrl();
    }
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
})();
