var ScrollWindow = 0;

function checkImage(src) {
    var img = new Image();
    img.onload = function () {
        return true;
    };
    img.onerror = function () {
        return false;
    };
    img.src = src; // fires off loading of image
    return true;
}

function SetPageEnfant(name) {

    createjs.Ticker.setFPS(1);
    ScrollWindow = $(window).scrollTop();

    $('html, body').animate({
        scrollTop: 0
    }, 1);
    $("#image_enfant").attr("src", "assets/" + name + ".png");
    if (checkImage("assets/rectangle_haut_enfant_" + name + ".png")) {
        $("#rectangle_haut_enfant").attr("src", "assets/rectangle_haut_enfant_" + name + ".png");
        $("#rectangle_haut_enfant").css("display", "block");
        $(".video_enfant_haut").css("display", "none");
    } else {
        $("#rectangle_haut_enfant").css("display", "none");
        $(".video_enfant_haut").css("display", "block");
    }
    if (checkImage("assets/rectangle_bas_enfant_" + name + ".png")) {
        $("#rectangle_bas_enfant").attr("src", "assets/rectangle_bas_enfant_" + name + ".png");
        $("#rectangle_bas_enfant").css("display", "block");
        $(".video_enfant_bas").css("display", "none");
    } else {
        $("#rectangle_bas_enfant").css("display", "none");
        $(".video_enfant_bas").css("display", "block");
    }

    var links = document.getElementsByClassName("uconc_enfant");
    for (var x = 0; x < links.length; x++) {
        var newHrefEnfant = "https://donner.chainedelespoir.org/b?";
        var url_string = links[x].href;
        var url = new URL(url_string);
        var c = url.searchParams.get("amount");
        if (c) {
            newHrefEnfant += "&amount=" + c;
        }
        var c = url.searchParams.get("utm_campaign");
        if (c) {
            newHrefEnfant += "&utm_campaign=" + c;
        }
        var c = url.searchParams.get("utm_medium");
        if (c) {
            newHrefEnfant += "&utm_medium=" + c;
        }
        var c = url.searchParams.get("reserved_code_media");
        if (c) {
            newHrefEnfant += "&reserved_code_media=" + c;
        }
        var url_string = window.location.href;
        var url = new URL(url_string);
        var c = url.searchParams.get("utm_source");
        if (c) {
            newHrefEnfant += "&utm_source=" + c;
        } else {
            newHrefEnfant += "&utm_source=LP_" + name.toUpperCase();
        }
        switch (name) {
            case "ayo":
                newHrefEnfant += "&cid=" + 189;
                break;
            case "andy":
                newHrefEnfant += "&cid=" + 188;
                break;
            case "nitha":
                newHrefEnfant += "&cid=" + 190;
                break;
            case "baian":
                enfantText = baianText;
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
        links[x].href = newHrefEnfant;
    }



    var heightElement = document.getElementById("don_page_enfant").offsetTop;
    var offset = 600;

    document.getElementById("facebook_enfant").href = "https://www.facebook.com/sharer/sharer.php?u=https://jepasselespoir.chainedelespoir.org/&quote=Passez l'espoir et sauvez des vies. %23jepasselespoir";
    document.getElementById("twitter_enfant").href = "https://twitter.com/intent/tweet?url=https://jepasselespoir.chainedelespoir.org/&text=Passez l'espoir et sauvez des vies.&hashtags=jepasselespoir";

    var momoText = ["grâce à vous,<br>momo", "va être pris<br>en charge", "MOMO, 17 mois, Mauritanie", "Pathologie : Malformation faciale", "une malformation rare", "Momo est un petit garçon mauritanien né avec une grave malformation faciale, aussi rare que terrible : une macrostomie congénitale bilatérale, en d'autres termes une large fente qui lui déchire le visage.Âgé de 17 mois, il vit près de Nouadhibou, une petite ville située à plus de 399 km de la capitale.", "Sa famille, qui vit dans<br> une grande précarité,<br> ne peut rien pour lui.", "une solution existe", "Les parents de Momo n'ont qu'un vœu en cette fin d’année : que leur enfant soit pris en charge afin de lui donner une nouvelle vie…", "Heureusement, une solution chirurgicale existe ; ", "nous pouvons éliminer la souffrance de ce petit garçon. Trois opérations complexes seront nécessaires : la première refermera la fente du palais, à l’intérieur de la bouche ; la deuxième soignera les fentes qui atteignent la face inférieure de l’enfant ; enfin, la dernière intervention pourra redessiner son visage."];
    var andyText = ["andy a<br>besoin de vous,<br>",
        "aidez-le",
        "andy, 5 ANS, madagascar",
        "fuite mitrale",
        "12 000&#8239€",
        "une pathologie sévère",
        "<br>Andy est un garçon malgache de cinq ans. Il est né avec une grave pathologie cardiaque : une fuite mitrale. Cette maladie le fait beaucoup souffrir et l’handicape au quotidien : il est essoufflé à l’effort comme au repos et est obligé de dormir avec plusieurs oreillers sous sa tête pour pouvoir respirer correctement. C’est la fuite mitrale qui cause ces souffrances : l’une des valves de son cœur est abîmée et seule une opération à cœur ouvert pourra le sauver. Mais une telle opération n’est pas possible sur place. Il faut le faire venir en France de toute urgence.",
        "Or Andy vit à Mandritsara, une ville située à 18h en voiture de la capitale de Madagascar. Ses parents sont cultivateurs et vivent modestement de leurs productions. Ils n’ont pas les moyens de financer une telle opération.",
        "Vous pouvez<br>changer les choses",
        "Les parents du petit Andy et sa grande sœur n’ont qu’un seul souhait en cette fin d’année : lui offrir un nouveau souffle. Et ils ont espoir que leur vœu soit exaucé : l’opération chirurgicale est possible à Bordeaux, où une famille d’accueil a même déjà été trouvée. Nous avons le pouvoir de les aider ! Il ne manque plus que vos dons pour sauver la vie d’Andy et changer la vie de sa famille.",
        "Heureusement, une solution chirurgicale existe ; ", "nous pouvons éliminer la souffrance de ce petit garçon. Trois opérations complexes seront nécessaires : la première refermera la fente du palais, à l’intérieur de la bouche ; la deuxième soignera les fentes qui atteignent la face inférieure de l’enfant ; enfin, la dernière intervention pourra redessiner son visage."];
    var nithaText = ["offrez<br>votre aide<br>",
        "à nitha",
        "NITHA, 5 ANS, CAMBODGE",
        "CIA ET CIV*",
        "3 000&#8239€",
        "5 ans et deux cardiopathies congénitales",
        "<br>Nitha est une petite fille de cinq ans vivant avec ses parents dans un village de la province de Takéo, au Cambodge. Depuis sa naissance, elle souffre de 2 pathologies cardiaques complexes. Une Communication Interauriculaire* qui mélange des sangs dans le côté droit de son cœur et une Communication Interventriculaire* qui dilate le côté gauche. Nitha est très essoufflée par ces deux anomalies et a perdu du poids en quelques mois. Seule une opération à cœur ouvert peut la sauver. L’intervention est possible à l’hôpital Calmette, situé à 2h30 de son domicile.",
        "Le père de Nitha est cuisinier et sa mère est femme au foyer. Leurs revenus ne leur permettent pas de pouvoir scolariser leur fille. Comment réussir à financer l’opération dont elle a tant besoin ?",
        "Soutenez Nitha<br>et aidez-la à guérir",
        "Ses parents souhaitent plus que tout voir leur fille guérir, continuer à grandir, s’amuser et s’épanouir. Pour cela, ils ont besoin de notre aide pour financer l’opération ainsi que le suivi médical de Nitha. Ensemble, offrons à cette petite cambodgienne une nouvelle vie !",
        "Heureusement, une solution chirurgicale existe ; ", "nous pouvons éliminer la souffrance de ce petit garçon. Trois opérations complexes seront nécessaires : la première refermera la fente du palais, à l’intérieur de la bouche ; la deuxième soignera les fentes qui atteignent la face inférieure de l’enfant ; enfin, la dernière intervention pourra redessiner son visage."];
    var ayoText = ["sauvez ayo<br>",
        "et réalisez<br>son rêve",
        "ayo, 13 ANS, bénin",
        "neurofibromatose",
        "7 800&#8239€",
        "une tumeur<br>très douloureuse",
        "<br>Ayo est une jeune fille béninoise de treize ans. Elle vit à Cotonou, avec ses parents et sa petite sœur de neuf ans. Ayo est atteinte d’une neurofibromatose de type I. Cette tumeur, non maligne, est située au niveau de son œil gauche et s’étend progressivement en surface et en profondeur. Ayo souffre beaucoup. Si nous n’agissons pas rapidement, Ayo pourrait perdre la vue de son œil gauche, et, pire, la masse pourrait évoluer en tumeur cancéreuse. Nous devons la faire venir à Paris pour l’opérer.",
        "Les parents d’Ayo gagnent, à eux deux, moins de 60&#8239€ par mois&#8239: ils n’ont pas les moyens de financer cette opération.",
        "Aidez Ayo à être soignée et à réaliser son rêve",
        "Une opération chirurgicale est possible ! Le personnel médical de l’Hôpital Necker — Enfants Malades à Paris sait réaliser cette opération délicate et Ayo pourra en bénéficier si nous nous mobilisons pour elle. Sa famille n’attend rien d’autre que de la voir enfin soulagée. Aidons Ayo à être soignée mais aussi à réaliser son rêve : celui d’être ophtalmologiste pour pouvoir à son tour aider les enfants du Bénin atteints de troubles oculaires.",
        "Heureusement, une solution chirurgicale existe ; ", "nous pouvons éliminer la souffrance de ce petit garçon. Trois opérations complexes seront nécessaires : la première refermera la fente du palais, à l’intérieur de la bouche ; la deuxième soignera les fentes qui atteignent la face inférieure de l’enfant ; enfin, la dernière intervention pourra redessiner son visage."];
    var baianText = ["baian a besoin<br>de nous,<br>",
        "soutenons-la !",
        "baian, 17 mois, Syrie",
        "LCH*",
        "2 500&#8239€",
        "baian est née avec une malformation de la hanche",
        "<br>Baian est une petite fille syrienne de 17 mois qui vit en Jordanie avec sa famille.A sa naissance, elle est arrivée en position de siège et sa mère a dû subir une césarienne. C’est la famille qui a dû financer l’opération, malgré leurs faibles revenus.Dès ses premières semaines de vie, Baian a été examinée par 3 médecins qui ont tous posé le même diagnostic : Baian souffre d’une luxation congénitale de la hanche gauche*, appelée LCH, dûe aux conditions de sa mise au monde.<br><br>Cette pathologie se décrit simplement : l’extrémité supérieure du fémur n’est pas à sa place normale. Au lieu d’être dans la cavité qui sert d’articulation avec le bassin (cotyle), elle est en dehors. Lorsqu’elle est dépistée, cette affection nécessite le port d’un harnais de Pavlik qui maintient les hanches écartées et permet au fémur de se repositionner correctement. Le plus souvent, cette rééducation est suffisante.",
        "Mais en cas de prise en charge tardive, ou d’échec, un traitement chirurgical devient indispensable pour replacer la tête du fémur dans sa cavité.",
        "Un premier traitement échoué",
        "Baian a été prise en charge très rapidement et a porté un harnais de Pavlik pendant 4 mois et demi. Lors de la visite de contrôle, le médecin qui suivait la fillette a décidé de cesser le traitement car la hanche paraissait stabilisée.<br><br>Malheureusement, à 14 mois, l’âge des premiers pas, la famille a remarqué que Baian boitait. Ils l’ont alors ramenée chez le médecin qui a confirmé l’échec du premier traitement.<br><br><br><span id='black_title_text_2' class='uppercase noir_pur bold' style='font-size: 25px; line-height: 22px'>Il faut agir rapidement</span><br>Il faut maintenant corriger la LCH de Baian par une intervention chirurgicale.L’opération consistera en une reposition chirurgicale de la tête du fémur dans le cotyle, à sa place normale. Mais si cette intervention n’est pas réalisée dans les prochains mois, Baian continuera de boiter et souffrira d’une douleur à la hanche de plus en plus intense. Elle devra alors subir une opération plus complexe, qui laissera par ailleurs d’inévitables séquelles : raideurs et douleurs de la hanche.<br><br><br><span id='black_title_text_2' class='uppercase noir_pur bold' style='font-size: 25px; line-height: 22px;'>Sauvons Baian, offrons-lui cette opération</span><br>Grâce à votre soutien et à vos dons, Baian pourra être opérée. Dans les 3 mois suivants l’intervention chirurgicale, elle pourra marcher, puis ensuite courir et vivre. Offrons à Baian cette opération et la chance de grandir comme les autres enfants de son âge !",
        "Heureusement, une solution chirurgicale existe ; ", "nous pouvons éliminer la souffrance de ce petit garçon. Trois opérations complexes seront nécessaires : la première refermera la fente du palais, à l’intérieur de la bouche ; la deuxième soignera les fentes qui atteignent la face inférieure de l’enfant ; enfin, la dernière intervention pourra redessiner son visage."];
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
        case "baian":
            enfantText = baianText;
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
    var idList = ["#title_enfant_jaune", "#title_enfant_noir", "#sous_title_enfant_jaune_1", "#sous_title_enfant_jaune_2", "#sous_title_enfant_jaune_3", "#black_title_text_1", "#black_text_1", "#yellow_text_1", "#black_title_text_2", "#black_text_2", "#black_title_text_3", "#black_text_3"];

    for (var i = 0; i < idList.length; i++) {
        $(idList[i]).html(enfantText[i]);
    }
    $("#don_bas_enfant").html("je passe l'espoir pour " + name);
    $(window).scroll(function () {
        heightElement = document.getElementById("don_page_enfant").offsetTop;

        if ($(window).scrollTop() + offset < heightElement && $(window).width() > 768) {
            $("#sticky_enfant").css({ "padding-top": ($(window).scrollTop()) + "px" });
        }
    });
    $("#Page_Enfant").css("display", "block");
    $("#Home_Page").css("display", "none");
    createjs.Ticker.setFPS(1);
}

$("#retour_enfant").click(function () {
    $("#Page_Enfant").css("display", "none");
    $("#Home_Page").css("display", "block");
    $('html, body').animate({
        scrollTop: ScrollWindow
    }, 1);
    createjs.Ticker.setFPS(30);
    init();
});

var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("enfant");

if (c) {
    SetPageEnfant(c)
} else {
    init();
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
        if (!links[x].classList.contains("uconc_enfant")) {
            links[x].href += "&utm_source=HOME";
        }
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