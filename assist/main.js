/*Hide navbar*/
const navbarNav = document.getElementById("navbarNav");
const navItem = document.querySelectorAll(".nav-item");

navItem.forEach(element => {
  element.addEventListener("click", () => {
    navbarNav.classList.remove("show");
  });
});

/*==Active Navigation Bar Scroll==*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function changeActiveNav() {
  let scrollY = window.scrollY;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        const linkAddress = link.getAttribute("href").substring(1);
        const sectionAddress = section.id;

        link.classList.remove("active");
        if (linkAddress === sectionAddress) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", changeActiveNav);

/*preloader*/
window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

/*Send form data to gmail app*/
const contractForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  //collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // mailto link create
  const subject = `Message from ${encodeURIComponent(name)}`;
  const body = `Message: ${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`; 
  const mailtoLink = `mailto:webcrafters.service@gmail.com?subject=${subject}&body=${body}`;

  // mailto send
  window.location.href = mailtoLink;
});