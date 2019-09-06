&(document).ready(function() {
	$ ('ul li').click(function() {
		$ ('li').removeClass("active-menu-list");
		$(this).addClass("active-menu-list");
	});
});