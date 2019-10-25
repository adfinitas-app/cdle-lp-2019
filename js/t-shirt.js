(function() {
    $("#click_t-shirt").click(function() {
        if ($(".img_t-shirt").attr("src") == "assets/t-shirt-front.png") {
            $(".img_t-shirt").attr("src", "assets/t-shirt-back.png")
        } else {
            $(".img_t-shirt").attr("src", "assets/t-shirt-front.png")
        }
    });
})();