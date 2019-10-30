(function() {
    var heightElement = document.getElementById("don_page_enfant").offsetTop;
    var offset = 600;
    var enfantText = ["grâce à vous,<br>momo", "va être pris<br>en charge", "MOMO, 17 mois, Mauritanie", "Pathologie : Malformation faciale"];
    var idList = ["#title_enfant_jaune", "#title_enfant_noir", "#sous_title_enfant_jaune_1", "#sous_title_enfant_jaune_2"];

    for (var i = 0; i < idList.length; i++) {
        $(idList[i]).html(enfantText[i]);        
    }
    $(window).scroll(function(){
        heightElement = document.getElementById("don_page_enfant").offsetTop;

        /*if ($(window).width() <= 1068) {
            offset = 600;
        } else {
            offset = 600;
        }*/
        if ($(window).scrollTop() + offset < heightElement && $(window).width() > 768) {
            $("#sticky_enfant").css({"padding-top": ($(window).scrollTop()) + "px"});
        }
    });
})();