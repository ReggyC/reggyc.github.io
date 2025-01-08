// Projects
const projects = [
    {
        "id": "0",
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
            "name":"atc-02",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"atc-03",
            "alt":"Standing Elevator Cores",
          },
        ],
    },
    {
        "id": "1",
        "name":"Paramount",
        "developer":"Example",
        "contractor":"Example",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2023",
        "imgnames": [
          {
            "name":"b-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"b-02",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"b-03",
            "alt":"Standing Elevator Cores",
          },
        ],
    },
    {
        "id": "2",
        "name":"Example Job #3",
        "developer":"Placeholder",
        "contractor":"Placeholder",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2023",
        "imgnames": [
          {
            "name":"c-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"c-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"c-01",
            "alt":"Standing Elevator Cores",
          },
        ],
    },
    {
        "id": "3",
        "name":"Example Job #4",
        "developer":"Placeholder",
        "contractor":"Placeholder",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2023",
        "imgnames": [
          {
            "name":"d-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"d-02",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"d-03",
            "alt":"Standing Elevator Cores",
          },
        ],
    },
    {
        "id": "4",
        "name":"Example Job #5",
        "developer":"Placeholder",
        "contractor":"Placeholder",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2023",
        "imgnames": [
          {
            "name":"e-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"e-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"e-01",
            "alt":"Standing Elevator Cores",
          },
        ],
    },
    {
        "id": "5",
        "name":"Example Job #6",
        "developer":"Placeholder",
        "contractor":"Placeholder",
        "scope":"Floating elevator cores, stair cores...",
        "completed":"2023",
        "imgnames": [
          {
            "name":"f-01",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"f-02",
            "alt":"Standing Elevator Cores",
          },
          {
            "name":"f-03",
            "alt":"Standing Elevator Cores",
          },
        ],
    },
];

var slideshows = [];

// Image Slides
// Next/previous controls
function plusSlides(n, slideshow) {
  console.log("inside of plusSlides");
  showSlides(slideshows[slideshow].currentSlideIndex += n, slideshow);
}

// Thumbnail image controls
function currentSlide(n, slideshow) {
  console.log("inside of currentSlide");
  showSlides(slideshows[slideshow].currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  console.log(slideshow.toString());
  let i;
  let slides = document.getElementById(slideshow.toString()).getElementsByClassName("slide");
  let dots = document.getElementById(slideshow.toString()).getElementsByClassName("dot");
  console.log(dots);
  if (n > slides.length) {slideshows[slideshow].currentSlideIndex = 1}
  if (n < 1) {slideshows[slideshow].currentSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log("checkpoint #2");

  slides[slideshows[slideshow].currentSlideIndex -1].style.display = "block";
  dots[slideshows[slideshow].currentSlideIndex -1].className += " active";
  console.log("end of showSlides");
}

// Add projects to DOM via JSON array
function populateProjects() {
    console.log("start of populateProjects");
    projects.forEach(project => {
            console.log("start of cycle");
            // Create Collapsible Element
            let proj = document.createElement("div");
            proj.className="collapsible-container";
            proj.innerHTML = `
                    <button type="button" class="collapsible"><b>`+project.name+`</b><i id="collapse-icon" class="fa-solid fa-chevron-down"></i></button>
            `;
            let content = document.createElement("div")
            content.className = "content";
            content.innerHTML = `
              <p><b>Developer: </b><a href="#">`+project.developer+`</a></p>
              <p><b>Contractor: </b><a href="#">`+project.contractor+`</a></p>
              <p><b>Scope: </b><a href="#">`+project.scope+`</a></p>
            `
            console.log("images");
            // Create images element
            let imgs = document.createElement("div");
            imgs.className="slide-container";
            imgs.id = project.id;
            let dotsDiv = document.createElement("div");
            dotsDiv.className = "dots";
            if(project.imgnames.length > 0){
              for(let i = 1; i <= project.imgnames.length; i++){
                let imgSlide = document.createElement("div");
                imgSlide.className = "slide";
                imgSlide.innerHTML = `
                    <img src="./img/`+project.imgnames[i-1].name+`.jpeg" alt="`+project.imgnames[i-1].alt+`">
                `;
                imgs.appendChild(imgSlide);
                dotsDiv.innerHTML += `<span class="dot" onclick="currentSlide(`+i+","+project.id+`)"></span>`
              }
              console.log("end of imgs");
              imgs.innerHTML += `
                  <a class="prev" onclick="plusSlides(-1,`+project.id+`)">&#10094;</a>
                  <a class="next" onclick="plusSlides(1,`+project.id+`)">&#10095;</a>
              `;
              imgs.appendChild(dotsDiv);
              content.appendChild(imgs);
              proj.appendChild(content);
            };
            if (document.title.includes("Home")){
              document.getElementById("projects-container-home").appendChild(proj);
            } else {
              document.getElementById("projects-container").appendChild(proj);
            }
            console.log("end of cycle");
    });
    console.log("end of populateProjects");
}

// Project Dropdowns
function projectDropdowns() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
        this.firstChild.nextSibling.className = "fa-solid fa-chevron-down";
        this.className = "collapsible";
      } else {
        content.style.display = "block";
        this.firstChild.nextSibling.className = "fa-solid fa-chevron-up";
        this.className = "collapsible activated";
      }
    });
  }
}

function onLoad() {
  populateProjects();
  projectDropdowns();
  for(let i = 0; i < projects.length; i++){
    slideshows.push({id: i, currentSlideIndex: 1})
  };
  slideshows.forEach(slideshow => {
    showSlides(1,slideshow.id);
  })
}

document.addEventListener("DOMContentLoaded", onLoad());


// Nav Dropdown
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

/* 
<div class="collapsible-container">
    <button type="button" class="collapsible"><b>Example Project</b>ICON HERE</button>
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