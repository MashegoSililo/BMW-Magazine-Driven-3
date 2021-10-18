/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const testing = document.getElementsByClassName("feature-article");
const defaultArticle = document.getElementsByClassName("default-article");


const show = (name) => {
  console.log("opened");
  if (name === "first") {
    // Show main feature
    defaultArticle[0].style.display = "block";
    document.getElementById("title").innerHTML = 'Title 1';

    // Hide the other features
    testing[0].style.display = "none";
    testing[1].style.display = "none";
  }
  if (name === "second") {
    // Show main feature
    testing[0].style.display = "block";
    document.getElementById("title").innerHTML = 'Title 2';

    // Hide the other features
    defaultArticle[0].style.display = "none";
    testing[1].style.display = "none";
  }
  if (name === "third") {
    // Show main feature
    testing[1].style.display = "block";
    document.getElementById("title").innerHTML = 'Title 3';

    // Hide the other features
    defaultArticle[0].style.display = "none";
    testing[0].style.display = "none";
  }
};
