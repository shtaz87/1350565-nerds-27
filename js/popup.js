var modal = document.querySelector(".feedback");
var btn = document.querySelector(".pop-up-btn");
var close = document.querySelector(".feedback-close");
btn.onclick = function() {
  modal.style.display = "block";
}
close.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}