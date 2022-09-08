function content() {
	$(
		".content-main h1 code, " + 
		".content-main h2 code, " + 
		".content-main h3 code, " + 
		".content-main h4 code, " + 
		".content-main h5 code, " + 
		".content-main h6 code"
	).each(function() {
		$(this).html(
			$(this)
			.html()
			.replace(/_/g, "_<wbr/>")
		);
	});
}
