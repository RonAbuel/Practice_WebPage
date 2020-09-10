document.addEventListener("DOMContentLoaded", function() {
  // code...
});


const hamburger = document.getElementById ('hamburger');

const side_menu2 = document.getElementById('toggle_menu');

const side_menu1 = document.getElementById('side_menu_id');

hamburger.addEventListener('click', () => {
	side_menu2.classList.toggle('toggle_hamburger_menu');

	side_menu1.classList.toggle('toggle_hamburger_menu2');
});




