(function () {
    document.addEventListener("click", function (evt) {
    var activeElement = evt.target;

    if (activeElement.classList.contains("slider-toggle")) {
      evt.preventDefault();
      var numberToggle = parseInt(activeElement.dataset.number, 10);

      if (activeElement.classList.contains("slider-toggle-active")) {
        return;
      }

      document.querySelector(".slider-item-active").classList.remove("slider-item-active");
      document.querySelector(".slider-toggle-active").classList.remove("slider-toggle-active");
      activeElement.classList.add("slider-toggle-active");
      var slides = document.querySelectorAll(".slider-item");

      slides[numberToggle - 1].classList.add("slider-item-active");
    }
  });
})();

(function () {
  var modal = document.querySelector(".feedback");
  var close = document.querySelector(".feedback-close");
  var btnSubmit = modal.querySelector(".feedback-btn");
  var name = modal.querySelector("input[type=text]");
  var email = modal.querySelector("input[type=email]");
  var textarea = modal.querySelector("textarea");
  var btnOpenModal = document.querySelector(".pop-up-btn")

  var onChange = function(evt) {
    var changeInput = evt.target;
    changeInput.parentElement.classList.remove("feedback-field-error");
  };

  btnOpenModal.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("feedback-open");
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("feedback-open");
    modal.classList.remove("feedback-error");
  });

  btnSubmit.addEventListener("click", function (evt) {

    if (!name.value || !email.value || !textarea.value ) {
      evt.preventDefault();
      modal.classList.add("feedback-error");
      if (!name.value) {
        name.parentElement.classList.add("feedback-field-error");
        name.addEventListener("change", onChange);
      }
      if (!email.value) {
        email.parentElement.classList.add("feedback-field-error");
        email.addEventListener("change", onChange);
      }
      if (!textarea.value) {
        textarea.parentElement.classList.add("feedback-field-error");
        textarea.addEventListener("change", onChange);
      }
    }
  })
})();
