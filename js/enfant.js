var ScrollWindow = 0;

function SetPageEnfant(name) {

    createjs.Ticker.setFPS(1);
    ScrollWindow = $(window).scrollTop();

    $('html, body').animate({
        scrollTop: 0
    }, 1);
    $("#image_enfant").attr("src", "assets/" + name + ".png")

    var heightElement = document.getElementById("don_page_enfant").offsetTop;
    var offset = 600;

    $('meta[property="og:title"]').remove();
    $('meta[property="og:description"]').remove();
    $('meta[property="og:url"]').remove();
    $("head").append('<meta property="og:title" content="blubb1">');
    $("head").append('<meta property="og:description" content="blubb2">');
    $("head").append('<meta property="og:url" content="blubb3">');

    document.getElementById("facebook_enfant").href = "https://www.facebook.com/sharer/sharer.php?u=https://agirpourlareinsertion.ilot.asso.fr/" + "?&enfant=" + name + "&quote=Ensemble, agissons pour " + name + "!";

    var momoText = ["grâce à vous,<br>momo", "va être pris<br>en charge", "MOMO, 17 mois, Mauritanie", "Pathologie : Malformation faciale", "une malformation rare", "Momo est un petit garçon mauritanien né avec une grave malformation faciale, aussi rare que terrible : une macrostomie congénitale bilatérale, en d'autres termes une large fente qui lui déchire le visage.Âgé de 17 mois, il vit près de Nouadhibou, une petite ville située à plus de 399 km de la capitale.", "Sa famille, qui vit dans<br> une grande précarité,<br> ne peut rien pour lui.", "une solution existe", "Les parents de Momo n'ont qu'un vœu en cette fin d’année : que leur enfant soit pris en charge afin de lui donner une nouvelle vie…", "Heureusement, une solution chirurgicale existe ; ", "nous pouvons éliminer la souffrance de ce petit garçon. Trois opérations complexes seront nécessaires : la première refermera la fente du palais, à l’intérieur de la bouche ; la deuxième soignera les fentes qui atteignent la face inférieure de l’enfant ; enfin, la dernière intervention pourra redessiner son visage."];
    var ayoText = ["grâce à vous,<br>momo", "va être pris<br>en charge", "MOMO, 17 mois, Mauritanie", "Pathologie : Malformation faciale", "une malformation rare", "Momo est un petit garçon mauritanien né avec une grave malformation faciale, aussi rare que terrible : une macrostomie congénitale bilatérale, en d'autres termes une large fente qui lui déchire le visage.Âgé de 17 mois, il vit près de Nouadhibou, une petite ville située à plus de 399 km de la capitale.", "Sa famille, qui vit dans<br> une grande précarité,<br> ne peut rien pour lui.", "une solution existe", "Les parents de Momo n'ont qu'un vœu en cette fin d’année : que leur enfant soit pris en charge afin de lui donner une nouvelle vie…", "Heureusement, une solution chirurgicale existe ; ", "nous pouvons éliminer la souffrance de ce petit garçon. Trois opérations complexes seront nécessaires : la première refermera la fente du palais, à l’intérieur de la bouche ; la deuxième soignera les fentes qui atteignent la face inférieure de l’enfant ; enfin, la dernière intervention pourra redessiner son visage."];
    var andyText = ["grâce à vous,<br>momo", "va être pris<br>en charge", "MOMO, 17 mois, Mauritanie", "Pathologie : Malformation faciale", "une malformation rare", "Momo est un petit garçon mauritanien né avec une grave malformation faciale, aussi rare que terrible : une macrostomie congénitale bilatérale, en d'autres termes une large fente qui lui déchire le visage.Âgé de 17 mois, il vit près de Nouadhibou, une petite ville située à plus de 399 km de la capitale.", "Sa famille, qui vit dans<br> une grande précarité,<br> ne peut rien pour lui.", "une solution existe", "Les parents de Momo n'ont qu'un vœu en cette fin d’année : que leur enfant soit pris en charge afin de lui donner une nouvelle vie…", "Heureusement, une solution chirurgicale existe ; ", "nous pouvons éliminer la souffrance de ce petit garçon. Trois opérations complexes seront nécessaires : la première refermera la fente du palais, à l’intérieur de la bouche ; la deuxième soignera les fentes qui atteignent la face inférieure de l’enfant ; enfin, la dernière intervention pourra redessiner son visage."];
    var nithaText = ["grâce à vous,<br>momo", "va être pris<br>en charge", "MOMO, 17 mois, Mauritanie", "Pathologie : Malformation faciale", "une malformation rare", "Momo est un petit garçon mauritanien né avec une grave malformation faciale, aussi rare que terrible : une macrostomie congénitale bilatérale, en d'autres termes une large fente qui lui déchire le visage.Âgé de 17 mois, il vit près de Nouadhibou, une petite ville située à plus de 399 km de la capitale.", "Sa famille, qui vit dans<br> une grande précarité,<br> ne peut rien pour lui.", "une solution existe", "Les parents de Momo n'ont qu'un vœu en cette fin d’année : que leur enfant soit pris en charge afin de lui donner une nouvelle vie…", "Heureusement, une solution chirurgicale existe ; ", "nous pouvons éliminer la souffrance de ce petit garçon. Trois opérations complexes seront nécessaires : la première refermera la fente du palais, à l’intérieur de la bouche ; la deuxième soignera les fentes qui atteignent la face inférieure de l’enfant ; enfin, la dernière intervention pourra redessiner son visage."];
    var lauraText = ["grâce à vous,<br>momo", "va être pris<br>en charge", "MOMO, 17 mois, Mauritanie", "Pathologie : Malformation faciale", "une malformation rare", "Momo est un petit garçon mauritanien né avec une grave malformation faciale, aussi rare que terrible : une macrostomie congénitale bilatérale, en d'autres termes une large fente qui lui déchire le visage.Âgé de 17 mois, il vit près de Nouadhibou, une petite ville située à plus de 399 km de la capitale.", "Sa famille, qui vit dans<br> une grande précarité,<br> ne peut rien pour lui.", "une solution existe", "Les parents de Momo n'ont qu'un vœu en cette fin d’année : que leur enfant soit pris en charge afin de lui donner une nouvelle vie…", "Heureusement, une solution chirurgicale existe ; ", "nous pouvons éliminer la souffrance de ce petit garçon. Trois opérations complexes seront nécessaires : la première refermera la fente du palais, à l’intérieur de la bouche ; la deuxième soignera les fentes qui atteignent la face inférieure de l’enfant ; enfin, la dernière intervention pourra redessiner son visage."];
    var konanText = ["grâce à vous,<br>momo", "va être pris<br>en charge", "MOMO, 17 mois, Mauritanie", "Pathologie : Malformation faciale", "une malformation rare", "Momo est un petit garçon mauritanien né avec une grave malformation faciale, aussi rare que terrible : une macrostomie congénitale bilatérale, en d'autres termes une large fente qui lui déchire le visage.Âgé de 17 mois, il vit près de Nouadhibou, une petite ville située à plus de 399 km de la capitale.", "Sa famille, qui vit dans<br> une grande précarité,<br> ne peut rien pour lui.", "une solution existe", "Les parents de Momo n'ont qu'un vœu en cette fin d’année : que leur enfant soit pris en charge afin de lui donner une nouvelle vie…", "Heureusement, une solution chirurgicale existe ; ", "nous pouvons éliminer la souffrance de ce petit garçon. Trois opérations complexes seront nécessaires : la première refermera la fente du palais, à l’intérieur de la bouche ; la deuxième soignera les fentes qui atteignent la face inférieure de l’enfant ; enfin, la dernière intervention pourra redessiner son visage."];

    var enfantText = momoText;

    switch (name) {
        case "ayo":
            enfantText = ayoText;
            break;
        case "andy":
            enfantText = andyText;
            break;
        case "nitha":
            enfantText = nithaText;
            break;
        case "laura":
            enfantText = lauraText;
            break;
        case "momo":
            enfantText = momoText;
            break;
        case "konan":
            enfantText = konanText;
            break;
        default:
            break;
    }
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
    $("#Page_Enfant").css("display", "block");
    $("#Home_Page").css("display", "none");
}

$("#retour_enfant").click(function () {
    $("#Page_Enfant").css("display", "none");
    $("#Home_Page").css("display", "block");
    $('html, body').animate({
        scrollTop: ScrollWindow
    }, 1);
    createjs.Ticker.setFPS(30);
});

var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("enfant");

if (c) {
    SetPageEnfant(c)
}

c = url.searchParams.get("utm_source");

if (c) {
    var links = document.getElementsByClassName("uconc");
    for (var x = 0; x < links.length; x++) {
        links[x].href += "&utm_source=" + c;
    }
} else {
    var links = document.getElementsByClassName("uconc");
    for (var x = 0; x < links.length; x++) {
        links[x].href += "&utm_source=HOME";
    }
}

c = url.searchParams.get("utm_campaign");

if (c) {
    var links = document.getElementsByClassName("uconc");
    for (var x = 0; x < links.length; x++) {
        links[x].href += "&utm_campaign=" + c;
    }
} else {
    var links = document.getElementsByClassName("uconc");
    for (var x = 0; x < links.length; x++) {
        links[x].href += "&utm_campaign=FA19";
    }
}

c = url.searchParams.get("utm_medium");

if (c) {
    var links = document.getElementsByClassName("uconc");
    for (var x = 0; x < links.length; x++) {
        links[x].href += "&utm_medium=" + c;
    }
} else {
    var links = document.getElementsByClassName("uconc");
    for (var x = 0; x < links.length; x++) {
        links[x].href += "&utm_medium=LP";
    }
}

c = url.searchParams.get("reserved_code_media");

if (c) {
    var links = document.getElementsByClassName("uconc");
    for (var x = 0; x < links.length; x++) {
        links[x].href += "&reserved_code_media=" + c;
    }
} else {
    var links = document.getElementsByClassName("uconc");
    for (var x = 0; x < links.length; x++) {
        links[x].href += "&reserved_code_media=l190900";
    }
}

$(".imgKid-container").click(function () {
    SetPageEnfant(this.id);
});