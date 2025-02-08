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


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Manaus Brazil",
    location: "Manaus - AM, Brazil",
    dedicated: "2012, June, 10",
    area: 32032,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/manaus-brazil-temple/manaus-brazil-temple-3918.jpg"
  },
  {
    templeName: "Curitiba Brazil",
    location: "Curitiba–PR, Brazil",
    dedicated: "2008, June, 1",
    area: 27850,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-1078-main.jpg"
  },
  {
    templeName: "Rio de Janeiro Brazil",
    location: "Rio de Janeiro - RJ, Brazil",
    dedicated: "2022, May, 8",
    area: 29966,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167-main.jpg"  
    
}
];

/**
 * @typedef { object} Temples
 * @property { string } templeName
 * @property { string } location
 * @property { string } dedicated
 * @property { number } area
 * @property { string } imageUrl
 */

/**
 * 
 * @param {Temples} templeData 
 */
const createTempleCard = (templeData) => {
  let card = document.createElement("div");
  let name = document.createElement("h3");
  let location = document.createElement("p");
  let dedication = document.createElement("p");
  let area = document.createElement("p"); 
  let image = document.createElement("img");

  name.textContent = templeData.templeName;
  location.textContent = `Location: ${templeData.location}`;
  dedication.textContent = `Dedicated: ${templeData.dedicated}`;
  area.textContent = `Area: ${templeData.area.toLocaleString()} square feet`;
  image.src = templeData.imageUrl;
  image.style.width = "400px";
  image.style.height = "300px";
  image.style.objectFit = "cover";
  image.alt = `${templeData.templeName} Temple`;
  image.setAttribute("loading", "lazy");

  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedication);
  card.appendChild(area);
  card.appendChild(image);

  document.querySelector("section").appendChild(card);
}

function filterTemples(temples) {
  document.querySelector("section").innerHTML = "";
  for (let temple of temples) {
    createTempleCard(temple);
  }
}

filterTemples(temples);

// All temples
document.querySelector("#home").addEventListener("click", () => {
  filterTemples(temples);
})

// Old Temples
document.querySelector("#old").addEventListener("click", () => {
  filterTemples(temples.filter(i => +i.dedicated.split(",")[0] < 1900))
})

// New Temples
document.querySelector("#new").addEventListener("click", () => {
  filterTemples(temples.filter(i => +i.dedicated.split(",")[0] >= 2000))
})

// Large Temples
document.querySelector("#large").addEventListener("click", () => {
  filterTemples(temples.filter(i => i.area > 90000))
})

// Small Temples 
document.querySelector("#small").addEventListener("click", () => {
  filterTemples(temples.filter(i => i.area < 10000))
})