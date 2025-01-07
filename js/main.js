// Picture Slider

// Projects
let projects = [
    {
        "name":"Aldegrove Town Center",
        "developer":"Placeholder",
        "contractor":"Placeholder",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2024",
        "imgnames": [
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
        ],
    },
    {
        "name":"Paramount",
        "developer":"Example",
        "contractor":"Example",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2023",
        "imgnames": [
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
        ],
    },
    {
        "name":"Example Job #3",
        "developer":"Placeholder",
        "contractor":"Placeholder",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2023",
        "imgnames": [
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
        ],
    },
    {
        "name":"Example Job #4",
        "developer":"Placeholder",
        "contractor":"Placeholder",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2023",
        "imgnames": [
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
        ],
    },
    {
        "name":"Example Job #5",
        "developer":"Placeholder",
        "contractor":"Placeholder",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2023",
        "imgnames": [
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
        ],
    },
    {
        "name":"Example Job #6",
        "developer":"Placeholder",
        "contractor":"Placeholder",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2023",
        "imgnames": [
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"atc-01",
            "alt":"Standing Elevator Cores",
          },
        ],
    },
];

/* 
<div class="collapsible-container">
    <button type="button" class="collapsible"><b>Example Project</b></button>
    <div class="content">
        <p><b>Developer: </b><a href="#">Example</a></p>
        <p><b>Contractor: </b><a href="#">Example</a></p>
        <p><b>Scope: </b><a href="#">Example</a></p>
        <div class="slide-container">
            <div class="slide">
                <div class="img-number">1/3</div>
                <img src="./img/site.jpg" alt="">
            </div>
            <div class="slide">
                <div class="img-number">2/3</div>
                <img src="./img/atc-banner-2.jpg" alt="">
            </div>
            <div class="slide">
                <div class="img-number">3/3</div>
                <img src="./img/columns.jpg" alt="">
            </div>
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
            <div class="dots">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
            </div>
        </div>    
    </div>
</div>
*/

function populateProjects() {
    projects.forEach(project => {
            let proj = document.createElement("div");
            proj.className="collapsible-container";
            proj.innerHTML = `
                    <button type="button" class="collapsible"><b>`+project.name+`</b></button>
                    <div class="content">
                      <p><b>Developer: </b><a href="#">`+project.developer+`</a></p>
                      <p><b>Contractor: </b><a href="#">`+project.contractor+`</a></p>
                      <p><b>Scope: </b><a href="#">`+project.scope+`</a></p>
                    </div>
            `;
            let imgs = document.createElement("div");
            imgs.className="slide-container";
            let dotsDiv = document.createElement("div");
            dotsDiv.className = "dots";
            if(project.imgnames.length > 0){
              for(let i = 1; i <= project.imgnames.length; i++){
                let imgSlide = document.createElement("div");
                imgSlide.className = "slide";
                imgSlide.innerHTML = `
                  <div class="slide">
                    <div class="img-number">`+i+` / `+project.imgnames.length+`</div>
                    <img src="./img/`+project.imgnames[i].name+`.jpg" alt="`+project.imgnames[i].alt+`">
                  </div>
                `;
                imgs.appendChild(imgSlide);
                dotsDiv.innerHTML += `<span class="dot" onclick="currentSlide(`+i+`)"></span>`
              }
              proj.appendChild(imgs);
              proj.innerHTML += `
                  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                  <a class="next" onclick="plusSlides(1)">&#10095;</a>
              `;
              proj.appendChild(dotsDiv);
            }
            document.getElementById("projects-container").appendChild(proj);
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