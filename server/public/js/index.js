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

function openNav() {
	document.getElementById("sidenav").style.width = "250px";
	document.getElementsByClassName(".sidenav-container").style.marginLeft = "250px"
}

function closeNav() {
	document.getElementById("sidenav").style.width = "0px";
	document.getElementsByClassName(".sidenav-container").style.marginLeft = "0px"
}

console.log("/public/js/index.js has ran correctly ;)")