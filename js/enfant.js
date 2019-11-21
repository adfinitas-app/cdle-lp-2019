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
        $(".video_enfant_haut").attr("src", "assets/video_haut_enfant_" + name + ".mp4");
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

    if (name == "nitha") {
        var source = document.createElement('source');
        source.setAttribute('src', 'assets/video_haut_enfant_' + name + '.mp4');
        $(".video_enfant_haut").innerHTML = source;
        $(".video_enfant_haut").attr("source", "assets/video_haut_enfant_" + name + ".mp4");
        $("#rectangle_haut_enfant").css("display", "none");
        $(".video_enfant_haut").css("display", "block");
    }

    if (name == "mahdi") {
        $("#rectangle_haut_enfant").css("display", "none");
        $("#show_mahdi").css("display", "block");
    } else {
        $("#show_mahdi").css("display", "none");
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
                newHrefEnfant += "&cid=" + 191;
                break;
            case "mahdi":
                newHrefEnfant += "&cid=" + 192;
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

    var mahdiText = ["grâce à vous,<br>mahdi", "va être pris<br>en charge", "mahdi, 17 mois, Mauritanie", "Pathologie : Malformation faciale", "une malformation rare", "mahdi est un petit garçon mauritanien né avec une grave malformation faciale, aussi rare que terrible : une macrostomie congénitale bilatérale, en d'autres termes une large fente qui lui déchire le visage.Âgé de 17 mois, il vit près de Nouadhibou, une petite ville située à plus de 399 km de la capitale.", "Sa famille, qui vit dans<br> une grande précarité,<br> ne peut rien pour lui.", "une solution existe", "Les parents de mahdi n'ont qu'un vœu en cette fin d’année : que leur enfant soit pris en charge afin de lui donner une nouvelle vie…", "Heureusement, une solution chirurgicale existe ; ", "nous pouvons éliminer la souffrance de ce petit garçon. Trois opérations complexes seront nécessaires : la première refermera la fente du palais, à l’intérieur de la bouche ; la deuxième soignera les fentes qui atteignent la face inférieure de l’enfant ; enfin, la dernière intervention pourra redessiner son visage."];
    var andyText = ["andy a<br>besoin de vous,<br>",
        "aidez-le",
        "andy, 5 ANS, madagascar",
        "fuite mitrale",
        "12 000 €",
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
        "3 000 €",
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
        "7 800 €",
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
        "2 500 €",
        "baian est née avec une malformation de la hanche",
        "<br>Baian est une petite fille de 17 mois qui vit en Jordanie avec sa famille. Lors de sa naissance, sa mère a dû accoucher par césarienne et c’est la famille qui a dû financer l’opération, malgré les faibles revenus. Très vite, les parents de Baian ont voulu la faire examiner par des médecins, car ils voyaient bien que quelque chose n’était pas normal. Le diagnostic est tombé&#8239: Baian souffre d’une luxation congénitale à la hanche gauche*, appelée LCH, dûe aux conditions de sa mise au monde.<br><br>La LCH signifie que l’extrémité supérieure du fémur n’est pas dans la cavité qui sert d’articulation avec le bassin (cotyle), là où elle devrait être. Si elle est détectée très tôt, une rééducation est suffisante : le port d’un harnais de Pavlik pendant quelques mois maintient les hanches écartées et permet au fémur de se repositionner correctement.",
        "Mais en cas de prise en charge tardive, ou d'échec, une opération chirurgicale est indispensable.",
        "Un premier traitement échoué",
        "Baian a été prise en charge très rapidement. Après 4 mois et demi de port du harnais de Pavlik, la hanche paraissait stabilisée ; le médecin a alors décidé de cesser le traitement.<br><br>Malheureusement, à 14 mois, l’âge des premiers pas, la famille a remarqué que Baian boitait. lls l’ont alors ramenée chez le médecin qui a confirmé l’échec du premier traitement.<br><br><br><span id='black_title_text_2' class='uppercase noir_pur bold' style='font-size: 25px; line-height: 22px'>Il faut agir rapidement</span><br>L’opération chirurgicale consiste en un repositionnement chirurgical de la tête du fémur dans le cotyle, à sa place normale. Si cette intervention n’est pas réalisée dans les prochains mois, Baian continuera de boiter et souffrira d’une douleur à la hanche de plus en plus intense. Elle devra alors subir une opération plus complexe, qui laissera par ailleurs d’inévitables séquelles : raideurs et douleurs de la hanche.<br><br><br><span id='black_title_text_2' class='uppercase noir_pur bold' style='font-size: 25px; line-height: 22px;'>Sauvons Baian, offrons-lui cette opération</span><br>Grâce à votre soutien et à vos dons, Baian pourra être opérée. Dans les 3 mois suivants l’intervention chirurgicale, elle pourra marcher, puis ensuite courir et vivre. Offrons à Baian cette opération et la chance de grandir comme les autres enfants de son âge !",
        "Heureusement, une solution chirurgicale existe ; ", "nous pouvons éliminer la souffrance de ce petit garçon. Trois opérations complexes seront nécessaires : la première refermera la fente du palais, à l’intérieur de la bouche ; la deuxième soignera les fentes qui atteignent la face inférieure de l’enfant ; enfin, la dernière intervention pourra redessiner son visage."];
    var mahdiText = ["offrons à<br>mahdi un<br>",
        "nouveau sourire",
        "mahdi, 1 an, mali",
        "fente labiale",
        "600 €*",
        "Mahdi vit avec ses deux parents et ses trois sœurs dans la région de Kayes, au Mali.",
        "<br>Aussitôt né, sa maman a immédiatement remarqué une malformation au niveau de sa bouche. Tellement paniquée, elle n'a pas osé allaiter son enfant. Pour cause, en Afrique les malformations sont synonymes de malédictions et les rumeurs se répandent très vite. Accoucher d’un nouveau-né atteint d’un bec de lièvre implique donc une peur de se voir exclus de sa communauté, et surtout, de voir son enfant se faire bannir de tous.<br><br><div class='container-fluid'    style='height: auto; width: 100%; background-color: black; position: relative; background-size: cover; padding: 0;'    id='video_mahdi_div'>    <video width='100%' height='auto' id='video_mahdi' poster='assets/posterMahdi.png'>        <source src='assets/videoMahdi.mp4' type='video/mp4' />    </video>    <div style='position: absolute; top: 0; right: 0; bottom: 0; left: 0; height: 60px; width: 60px; margin: auto; border-radius: 50px; cursor: pointer;'        class='jaune_bg play_button_video' id='ButtonMahdi'>        <img src='assets/play.png' height='50%'            style='position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto;'>    </div></div><br><br>Les parents de Mahdi ont immédiatement consulté un tradi-praticien qui leur a conseillé d’emmener leur fils au Centre Hirzel, à Bamako, une structure spécialisée dans la prise en charge d’enfants nécessitant une chirurgie de la face. Une fois au Centre, après plusieurs heures de taxi brousse, les équipes médicales ont diagnostiqué chez Mahdi une fente labio-alveolo-palatine unilatérale droite, autrement-dit un « bec de lièvre », qui limite son alimentation et retarde sa croissance :",
        "le lait ne peut être ingéré normalement, une grande partie du liquide ressortant par son nez.",
        "LA SITUATION POUR MAHDI EST GRAVE",
        "Agé d’à peine un an, Mahdi a besoin d’apports nutritionnels importants pour vivre. Lui et sa maman ont séjourné quelques jours au Centre Hirzel afin de recevoir des conseils.Mais ça ne suffit pas : seule une intervention chirurgicale permettra à Mahdi de s’alimenter correctement.<br><br><br><span id='black_title_text_2' class='uppercase noir_pur bold' style='font-size: 25px; line-height: 22px;'>UNE FAMILLE SOUDÉE DANS L’ADVERSITÉ</span><br>Contrairement à de nombreux enfants qui naissent avec cette malformation, Mahdi a la chance d’être entouré par toute sa famille. Les rumeurs africaines qui assimilent les fentes labiales à l’œuvre du démon n’ont donc pas d’emprise sur l’amour qui lui est déjà porté, ce qui fait de lui un petit garçon joyeux et plein de vie.<br>Mais ses parents, aux moyens financiers limités ne peuvent surmonter les frais d’une telle opération.<br><br>Avec un don, vous contribuerez à soigner Mahdi et vous changerez le destin de toute une famille !"]
    var konanText = ["grâce à vous,<br>mahdi", "va être pris<br>en charge", "mahdi, 17 mois, Mauritanie", "Pathologie : Malformation faciale", "une malformation rare", "mahdi est un petit garçon mauritanien né avec une grave malformation faciale, aussi rare que terrible : une macrostomie congénitale bilatérale, en d'autres termes une large fente qui lui déchire le visage.Âgé de 17 mois, il vit près de Nouadhibou, une petite ville située à plus de 399 km de la capitale.", "Sa famille, qui vit dans<br> une grande précarité,<br> ne peut rien pour lui.", "une solution existe", "Les parents de mahdi n'ont qu'un vœu en cette fin d’année : que leur enfant soit pris en charge afin de lui donner une nouvelle vie…", "Heureusement, une solution chirurgicale existe ; ", "nous pouvons éliminer la souffrance de ce petit garçon. Trois opérations complexes seront nécessaires : la première refermera la fente du palais, à l’intérieur de la bouche ; la deuxième soignera les fentes qui atteignent la face inférieure de l’enfant ; enfin, la dernière intervention pourra redessiner son visage."];

    var enfantText = mahdiText;

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
        case "mahdi":
            enfantText = mahdiText;
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
    if (name == "mahdi") {
        $("#ButtonMahdi").click(function () {
            $("#ButtonMahdi").css("display", "none");
            var vid = document.getElementById("video_mahdi");
            vid.play();
            vid.controls = true;
        });
    }
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
    $("video").trigger("pause");
    playing = false;
    $("video").each(function () {
        this.controls = false;
    });
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
        links[x].href += "&reserved_code_media=I190900";
    }
}

c = url.searchParams.get("prod");

if (c) {
    $(".display_prod").css("display", "block");
} else {
    $(".display_prod").css("display", "none");
}

$(".imgKid-container").click(function () {
    SetPageEnfant(this.id);
});