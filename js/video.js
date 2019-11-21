(function() {
    var playing = false;
    var video = $('#video')[0];
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("video");

    video.addEventListener('pause', function(){
        $(".play_button_video").css('display', "block");
        $("video").trigger("pause");
        playing = false;
        $("video").each(function() {
            this.controls = false;
        });
    })

    $("#video_div").click(function() {
        console.log("lol");
        if (playing) {
            $(".play_button_video").css('display', "block");
            $('video').each(this.pause());
            playing = false;
        } else {
            $(".play_button_video").css('display', "none");
            playing = true;
            $("video").each(function() {
                this.controls = true;
            });
            video.play()
        }
    });
    if (c != null) {
        $('html, body').animate({
            scrollTop: ($('#video').offset().top)
        },1);
    }
})();

(function() {
    var playing = false;
    var video = $('#video')[0];
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("video");

    video.addEventListener('pause', function(){
        $(".play_button_video").css('display', "block");
        $("video").trigger("pause");
        playing = false;
        $("video").each(function() {
            this.controls = false;
        });
        $("video").each(function() {
            this.trigger("pause");
        });
    })

    $("#video_div_enfant").click(function() {
        if (playing) {
            $(".play_button_video").css('display', "block");
            $('video').each(this.pause());
            playing = false;
        } else {
            $(".play_button_video").css('display', "none");
            playing = true;
            $("video").each(function() {
                this.controls = true;
            });
        }
    });
    if (c != null) {
        $('html, body').animate({
            scrollTop: ($('#video').offset().top)
        },1);
    }
})();

$("#ButtonMahdi").click(function() {
    $("#ButtonMahdi").css("display", "none");
    var vid = document.getElementById("video_mahdi"); 
    vid.play();
    vid.controls = true;
});