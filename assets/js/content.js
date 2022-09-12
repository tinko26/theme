function content() {
	$(".content-main h1 > code").each(function() { $(this).html($(this).html().replace(/_/g, "_<wbr/>")); });
	$(".content-main h2 > code").each(function() { $(this).html($(this).html().replace(/_/g, "_<wbr/>")); });
	$(".content-main h3 > code").each(function() { $(this).html($(this).html().replace(/_/g, "_<wbr/>")); });
	$(".content-main h4 > code").each(function() { $(this).html($(this).html().replace(/_/g, "_<wbr/>")); });
	$(".content-main h5 > code").each(function() { $(this).html($(this).html().replace(/_/g, "_<wbr/>")); });
	$(".content-main h6 > code").each(function() { $(this).html($(this).html().replace(/_/g, "_<wbr/>")); });
}
