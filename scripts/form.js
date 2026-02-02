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
selectElement.innerHTML =
	`<option value="" disabled selected>Choose a product...</option>` +
	products
		.map(
			(p) =>
				`<option value="${p.value}" id="${p.value}">${p.name}</option>`,
		)
		.join("");
