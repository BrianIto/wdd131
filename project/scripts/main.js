window.addEventListener("scroll", function () {
	const pageHeight = document.documentElement.scrollHeight;
	const viewportHeight = window.innerHeight;
	const scrollPosition = window.scrollY + viewportHeight;
	const scrollPercent = (scrollPosition / pageHeight) * 100;
	if (scrollPercent > 95) {
		document.getElementById("article").classList.add("hidden");
	} else {
		document.getElementById("article").classList.remove("hidden");
	}
});
