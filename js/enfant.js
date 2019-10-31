var ScrollWindow = 0;

function SetPageEnfant(name) {
    $("#Page_Enfant").css("display", "block");
    $("#Home_Page").css("display", "none");

    createjs.Ticker.setFPS(1);
    ScrollWindow = $(window).scrollTop();

    $('html, body').animate({
        scrollTop: 0
    },1);
    $("#image_enfant").attr("src", "assets/" + name + ".png")

    var heightElement = document.getElementById("don_page_enfant").offsetTop;
    var offset = 600;
    var enfantText = ["grâce à vous,<br>momo", "va être pris<br>en charge", "MOMO, 17 mois, Mauritanie", "Pathologie : Malformation faciale", "une malformation rare", "Momo est un petit garçon mauritanien né avec une grave malformation faciale, aussi rare que terrible : une macrostomie congénitale bilatérale, en d'autres termes une large fente qui lui déchire le visage.Âgé de 17 mois, il vit près de Nouadhibou, une petite ville située à plus de 399 km de la capitale.", "Sa famille, qui vit dans<br> une grande précarité,<br> ne peut rien pour lui.", "une solution existe", "Les parents de Momo n'ont qu'un vœu en cette fin d’année : que leur enfant soit pris en charge afin de lui donner une nouvelle vie…", "Heureusement, une solution chirurgicale existe ; ", "nous pouvons éliminer la souffrance de ce petit garçon. Trois opérations complexes seront nécessaires : la première refermera la fente du palais, à l’intérieur de la bouche ; la deuxième soignera les fentes qui atteignent la face inférieure de l’enfant ; enfin, la dernière intervention pourra redessiner son visage."];
    var idList = ["#title_enfant_jaune", "#title_enfant_noir", "#sous_title_enfant_jaune_1", "#sous_title_enfant_jaune_2", "#black_title_text_1", "#black_text_1", "#yellow_text_1", "#black_title_text_2", "#black_text_2", "#black_title_text_3", "#black_text_3"];

    for (var i = 0; i < idList.length; i++) {
        $(idList[i]).html(enfantText[i]);
    }
    $(window).scroll(function () {
        heightElement = document.getElementById("don_page_enfant").offsetTop;

        if ($(window).scrollTop() + offset < heightElement && $(window).width() > 768) {
            $("#sticky_enfant").css({ "padding-top": ($(window).scrollTop()) + "px" });
        }
    });
}

$("#retour_enfant").click(function() {
    $("#Page_Enfant").css("display", "none");
    $("#Home_Page").css("display", "block");
    $('html, body').animate({
        scrollTop: ScrollWindow
    },1);
    createjs.Ticker.setFPS(30);
});

var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("enfant");

if (c) {
    SetPageEnfant(c)
}

$(".imgKid-container").click(function() {
    SetPageEnfant(this.id);
});