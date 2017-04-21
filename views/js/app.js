$(document).foundation();

$(document).ready(function() {
/* Automatically close mobile nav menu when a link is clicked */
	$('.mobile-link').on('click', function() {
		$('#mobile-nav-toggle').click();
	});
});
