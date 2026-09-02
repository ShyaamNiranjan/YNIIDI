(() => {
  const form = document.getElementById("yniidi-contact-form");
  if (!form) return;

  const nextInput = document.getElementById("form-next");
  const replyInput = document.getElementById("form-replyto");
  const subjectInput = document.getElementById("form-email-subject");
  const mediumSelect = document.getElementById("preferred-medium");
  const contactDetailRow = document.getElementById("contact-detail-row");
  const contactDetailLabel = document.getElementById("contact-detail-label");
  const contactDetailInput = document.getElementById("contact-detail");
  const topicSelect = document.getElementById("subject");
  const submitButton = form.querySelector('button[type="submit"]');

  const getThankYouUrl = () => "https://yniidi.com/thank-you/";

  const updateContactDetailField = () => {
    if (!mediumSelect || !contactDetailRow || !contactDetailLabel || !contactDetailInput) return;

    const medium = mediumSelect.value;
    if (!medium) {
      contactDetailRow.classList.add("is-hidden");
      contactDetailInput.removeAttribute("required");
      contactDetailInput.value = "";
      return;
    }

    contactDetailRow.classList.remove("is-hidden");
    contactDetailInput.required = true;

    if (medium === "E-Mail") {
      contactDetailLabel.textContent = "Email";
      contactDetailInput.type = "email";
      contactDetailInput.name = "email";
      contactDetailInput.autocomplete = "email";
      contactDetailInput.placeholder = "you@company.com";
    } else {
      contactDetailLabel.textContent = "WhatsApp number";
      contactDetailInput.type = "tel";
      contactDetailInput.name = "whatsapp";
      contactDetailInput.autocomplete = "tel";
      contactDetailInput.placeholder = "+91 XXXXX XXXXX";
    }
  };

  if (nextInput) {
    nextInput.value = getThankYouUrl();
  }

  if (mediumSelect) {
    mediumSelect.addEventListener("change", updateContactDetailField);
  }

  form.addEventListener("submit", () => {
    if (nextInput) {
      nextInput.value = getThankYouUrl();
    }
    if (replyInput) {
      if (mediumSelect?.value === "E-Mail" && contactDetailInput) {
        replyInput.value = contactDetailInput.value.trim();
      } else {
        replyInput.value = "";
      }
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
