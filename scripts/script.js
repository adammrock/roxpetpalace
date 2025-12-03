/*
	Adam Rock
	File Name: script.js
	Date: 11/11/2025
*/

//Hamburger menu
function menu() {
	var navlinks = document.getElementById("navlinks");
	var menuicon = document.getElementById("icon");
	if (navlinks.style.display === "block") {
		navlinks.style.display = "none";
		menuicon.style.color = "#000";
	} else {
		navlinks.style.display = "block";
		menuicon.style.color = "#000";
	}
}
