const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
const sideNavCont = document.querySelector(".sidenav-container");
const sideNav = document.querySelector(".sidenav")


menuBtn.addEventListener("click", () => {
	if (!menuOpen) {
		menuBtn.classList.add("open");
		menuOpen = true;
	} else {
		menuBtn.classList.remove("open");
		menuOpen = false;
	}
});

console.log("/public/js/index.js has ran correctly ;)")