var c = url.searchParams.get("enfant");

$('meta[property="og:title"]').remove();
$('meta[property="og:description"]').remove();
$('meta[property="og:url"]').remove();
$("head").append('<meta property="og:title" content="blubb1">');
$("head").append('<meta property="og:description" content="blubb2">');
$("head").append('<meta property="og:url" content="blubb3">');