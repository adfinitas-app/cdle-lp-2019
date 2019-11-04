(function() {
    var playing = false;
    var video = $('#video')[0];
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("video");

    video.addEventListener('pause', function(){
        $(".play_button_video").css('display', "block");
        $("#video").trigger("pause");
        playing = false;
        $("#video").each(function() {
            this.controls = false;
        });
    })

    $("#video_div").click(function() {
        if (playing) {
            $(".play_button_video").css('display', "block");
            $('video').each(this.pause());
            playing = false;
        } else {
            $(".play_button_video").css('display', "none");
            playing = true;
            $("#video").each(function() {
                this.controls = true;
            });
            $('video').each(this.play());
        }
    });
    if (c != null) {
        $('html, body').animate({
            scrollTop: ($('#video').offset().top)
        },1);
    }
})();