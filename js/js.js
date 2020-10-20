window.addEventListener("scroll", function){
	var navbar = document.querySelector(".nav");
	navbar.classlist.toggle("sticky", window.scrollY > 0);
})
