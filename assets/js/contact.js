(() => {
  const params = new URLSearchParams(window.location.search);
  const success = document.getElementById("form-success");
  const form = document.getElementById("yniidi-contact-form");

  if (params.get("sent") === "1" && success && form) {
    form.hidden = true;
    success.hidden = false;
    const section = document.getElementById("contact-form");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
})();
