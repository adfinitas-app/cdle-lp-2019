function changeColor(e) {
    $(e).find(".kidDesc").css("color", "#f9b000");
    // e.firstElementChild.style.color = "#f9b000";
}

function changeBackColor(e) {
    e.firstElementChild.style.color = "#ffffff";
}

if (window.innerWidth < 767) {
    $(".desc_nbr br").replaceWith('&nbsp;');
}

$( window ).resize(function () {
    if (window.innerWidth < 767) {
        $(".desc_nbr br").replaceWith('&nbsp;');
    } else {
        $(".desc_nbr").each(function () {
            $(this).html($(this).html().replace('&nbsp;', "<br/>"));
        })
    }
});
