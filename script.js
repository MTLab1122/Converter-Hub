function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }
  document.getElementById("myNavbar").classList.add("home-page-navbar");

  const imageElement = document.getElementById("myImage");
const dropTarget = document.getElementById("dropTarget");

// Set the "draggable" attribute to true for the image
imageElement.draggable = true;

// Handle the dragstart event
imageElement.addEventListener("dragstart", (event) => {
  // Set the data that will be dragged (in this case, the image URL)
  event.dataTransfer.setData("text/plain", imageElement.src);
});

// Prevent default behavior for the drop event
dropTarget.addEventListener("dragover", (event) => {
  event.preventDefault();
});

// Handle the drop event
dropTarget.addEventListener("drop", (event) => {
  event.preventDefault();
  // Get the dropped data (in this case, the image URL)
  const imageUrl = event.dataTransfer.getData("text/plain");
  // Do something with the image URL, like displaying it or using it in your application
  alert("Dropped image URL: " + imageUrl);
});
