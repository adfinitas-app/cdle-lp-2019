$(document).ready(function () {
	$(".popup").hide();
	setTimeout(function () {
		$(".popup").fadeIn(500);
		$(".navigation__collapse").addClass("popup-active");
	}, 30000);

	$("#popup-close").click((event) => {
		event.preventDefault();
		$(".popup").fadeOut(100);
		$(".navigation__collapse").removeClass("popup-active");
	});
});
