let year = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastmodified");

let today = new Date();
let lastModifiedDate = new Date(document.lastModified);

medium = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
}).format(lastModifiedDate);

year.innerHTML = today.getFullYear();
lastModified.innerHTML = "Last modified at " + medium;
