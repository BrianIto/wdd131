let year = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastmodified");

let today = new Date();
let lastModifiedDate = new Date(document.lastModified);

medium = new Intl.DateTimeFormat("en-US", {
	dateStyle: "medium",
}).format(lastModifiedDate);

year.innerHTML = today.getFullYear();
lastModified.innerHTML = "Last modified at " + medium;

const products = [
	{
		name: "Product One",
		value: "p1",
	},
	{
		name: "Product Two",
		value: "p2",
	},
	{
		name: "Product Three",
		value: "p3",
	},
];

const selectElement = document.getElementById("product-name");
selectElement.innerHTML +=
	`` +
	products
		.map(
			(p) =>
				`<option value="${p.value}" id="${p.value}">${p.name}</option>`,
		)
		.join("");
