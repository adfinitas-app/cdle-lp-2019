$(document).ready(function () {
	var url_string = window.location.href;
	var url = new URL(url_string);

	c = url.searchParams.get("goBack");

	if (c) {
    $(".goBack").addClass("show");
    $(".goBack a").attr("href", "/#" + c);
	}
});
