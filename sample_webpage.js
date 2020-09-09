document.addEventListener("DOMContentLoaded", function() {
  // code...
});



const hamburger = document.getElementById ('hamburger');

const side_menu2 = document.getElementById('toggle_menu')

hamburger.addEventListener('click', () => {
	side_menu2.classList.toggle('toggle_hamburger_menu');
});



