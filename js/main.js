// Picture Slider

// Projects
let projects = [
    {
        "name":"Aldegrove Town Center",
        "developer":"Placeholder",
        "contractor":"Placeholder",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2024",
        "imgnames": ["atc-01","atc-02","atc-03"],
    },
    {
        "name":"Paramount",
        "developer":"Example",
        "contractor":"Example",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2023",
        "imgnames": ["atc-01","atc-02","atc-03"],
    },
    {
        "name":"Aldegrove Town Center",
        "developer":"Placeholder",
        "contractor":"Placeholder",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2023",
        "imgnames": ["atc-01","atc-02","atc-03"],
    },
    {
        "name":"Aldegrove Town Center",
        "developer":"Placeholder",
        "contractor":"Placeholder",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2023",
        "imgnames": ["atc-01","atc-02","atc-03"],
    },
    {
        "name":"Aldegrove Town Center",
        "developer":"Placeholder",
        "contractor":"Placeholder",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2023",
        "imgnames": ["atc-01","atc-02","atc-03"],
    },
    {
        "name":"Aldegrove Town Center",
        "developer":"Placeholder",
        "contractor":"Placeholder",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2023",
        "imgnames": ["atc-01","atc-02","atc-03"],
    },
];

function populateProjects() {
    projects.forEach(project => {
            let tile = document.createElement("div");
            tile.className="tile";
            tile.innerHTML = `
                    <a href="#"><p>`+ project.name +`</p></a>
                    <img src="./img/site.jpg" alt="" />
                    <div class="tile-overlay">
                        <p id="tile-developer"><b>Developer: </b>`+ project.developer +`</p>
                        <p id="tile-contractor"><b>Contracter: </b>`+ project.contractor +`</p>
                        <p id="tile-scope"><b>Scope: </b>`+ project.scope +`</p>
                    </div>
            `;
            document.getElementById("tiles").appendChild(tile);
    });
}

// document.addEventListener("DOMContentLoaded", populateProjects());


// Project Dropdowns
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Image Slides
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function dropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-hover')) {
        var dropdowns = document.getElementById("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
} 