function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}
// JavaScript for the modal functionality
document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("projectModal");
  var btns = document.querySelectorAll(".project-btn");
  var span = document.getElementsByClassName("close")[0];

  btns.forEach(function(btn) {
    btn.onclick = function() {
      var project = this.getAttribute("data-project");
      displayProjectDetails(project);
      modal.style.display = "block";
    };
  });

  span.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function displayProjectDetails(project) {
    var projectDetailsContainer = document.getElementById("projectDetails");
    switch (project) {
      case "project1":
        projectDetailsContainer.innerHTML = `
          <div>
          <img src="./assets/project-1-img.jpeg" alt="Project 1 Details" style="width:100%;height:auto;" />
            <h2>Cotton Diseases Classification (ML/DL)</h2>
            <p>This project provides the farmer with two things: a correct and accurate prediction of crop sustainability in the given area, and fertilizer suggestions for the crops by disease detection.</p>
            <p><strong>Tech stack:</strong> Machine learning, Deep learning</p>
            <p><strong>Language:</strong> Python</p>
          </div>
        `;
        break;
      case "project2":
        projectDetailsContainer.innerHTML = `
          <div>
          <img src="./assets/project-2-img.jpeg" alt="Project 2 Details" style="width:100%;height:auto;" />
            <h2>Lung Cancer Prediction</h2>
            <p>This model spots and detects Lung cancer using deep learning and Python. The Cancer are classified based on the vectorized score of the comment.</p>
            <p><strong>Tech stack:</strong> Deep learning</p>
            <p><strong>Language:</strong> Python</p>
          </div>
        `;
        break;
      case "project3":
        projectDetailsContainer.innerHTML = `
          <div>
          <img src="./assets/project-3-img.webp" alt="Project 3 Details" style="width:100%;height:auto;" />
            <h2>EC Application</h2>
            <p>A appointment booking application in the medical sector ,Helps to book an appointment and buy required from the app itself
            <p><strong>Language:</strong> Solidity</p>
          </div>
        `;
        break;
    }
  }
});
