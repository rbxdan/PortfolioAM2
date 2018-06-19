function openNav() {
    document.getElementById("sideNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

var modal = document.getElementById("modal-project");
var button = document.getElementById("modal-button");
var span = document.getElementsByClassName("modal-close")[0];

button.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
