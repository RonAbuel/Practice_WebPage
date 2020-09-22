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


document.querySelector('.video_container').innerHTML='<div class="video_thumbnail"><img src="thumbnail1.png" class="thumbnail"></div><div class="hover_elements"><div class="hover_icons" id="watch_later_hover"><img src="hover_icon1.png" class="hover_icon1 hover_icon"><div class="hover_text2 hover_watch_later">WATCH LATER</div></div><div class="hover_icons"><img src="hover_icon2.png" class="hover_icon2 hover_icon">		<div class="hover_text2 hover_add_to_queue">ADD TO QUEUE</div></div>	<div class="hover_icons"><img src="hover_icon3.png" class="hover_dot hover_icon"></div><div class="video_time hover_icons">15:49</div></div><div class="video_details_container"><div class="channel_icon"><img src="user2.png"></div><div class="video_details"><div class="video_title">San Antonio Spurs Legends</div><div class="channel_name gray_text">Spurs4Life</div><div class="video_views gray_text">14M Views · 1 year ago </div></div></div>';

