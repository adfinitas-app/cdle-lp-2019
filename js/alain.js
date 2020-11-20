$(document).ready(function () {
	$("#alain-deloche .more").on("click", function () {
    $("#alain-deloche .more").show();
    $(this).hide();
    $("#alain-deloche .title, #alain-deloche .subtitle").toggle("700");
  });

  $("#alain-deloche .picto-row.ecouter").on("click", function () {
    $(this).find('.my-hide').show();
    $(this).find('.img-wrapper').hide();
    $(this).find('.img-wrapper + span').hide();
    $(this).find('audio').get(0).play();
  });
});
