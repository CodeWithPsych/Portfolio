function initializeTyped() {
  var typed = new Typed("#element", {
    strings: [
      "HTML",
      "CSS",
      "JavaScript",
      "C++",
      "Bootstrap Components",
      "C",
      "React JS",
      "Node JS",
      "Express JS",
      "Mongo DB",
    ],
    typeSpeed: 75,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
  });
}
initializeTyped();
const about = document.getElementById("about");
const aboutp = document.querySelector(".about");
about.addEventListener("click", () => {
  aboutp.scrollIntoView();
});

const contact = document.getElementById("contact");
const contactp = document.querySelector(".contact");
contact.addEventListener("click", () => {
  contactp.scrollIntoView();
});
const service = document.getElementById("services");
const servicep = document.querySelector(".services");
service.addEventListener("click", () => {
  servicep.scrollIntoView();
});
const projects = document.getElementById("projects");
const projectsp = document.querySelector(".projects");
projects.addEventListener("click", () => {
  projectsp.scrollIntoView();
});
document.getElementById("viewResumeButton").addEventListener("click", function () {
  window.location.href = "images/index.html";
});
document.getElementById("myprojects").addEventListener("click", function () {
  window.location.href = "index3.html";
});
document.getElementById("microsoft_certificate").addEventListener("click", function () {
  window.location.href = "index2.html";
});
document.getElementById("home_btn").addEventListener("click", function () {
  alert("You are already in home section");
});
const data =document.querySelector('.top');
window.addEventListener('DOMContentLoaded', () => {
  const errorMessage = document.getElementById('error-message');
  const laptopScreenWidth = 275;

  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth < laptopScreenWidth) {
    errorMessage.style.display = 'block';
    data.style.display='none';
  } else {
    errorMessage.style.display = 'none';
  }
});

