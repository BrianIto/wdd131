// Year and Last Modified ----------------------------------------------

const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

year.innerHTML = new Date().getFullYear();
let dateFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });
lastModified.innerHTML = dateFormatter.format(new Date(document.lastModified));

// ---------------------------------------------------------------------

// Navigation Menu -----------------------------------------------------

const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector("nav");
menuButton.addEventListener("click", function () {
  navMenu.classList.toggle("open");
  menuButton.classList.toggle("open");
});

// ---------------------------------------------------------------------
