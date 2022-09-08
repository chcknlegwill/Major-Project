const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
	if (!menuOpen) {
		menuBtn.classList.add("open");
		menuOpen = true;
	} else {
		menuBtn.classList.remove("open");
		menuOpen = false;
	}
});

function openMenu() {
	document.getElementById("sidebar").style.display = "block";
}
function closeMenu() {
	document.getElementById("sidebar").style.display = "none";
}

console.log("/public/js/index.js has ran correctly ;)")