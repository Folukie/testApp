// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//toggle

function hamburger(x) {

    x.classList.toggle("change");

  var view = document.getElementById("mobileMenu");
  
  if (view.style.display === "none") {
    view.style.display = "block";
    view.style.transition = "all ease .3s"
    
} else {
    view.style.display = "none";
  }
  
}

