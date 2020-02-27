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