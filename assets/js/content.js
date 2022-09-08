function content() {
	$(":not(pre) > code").each(function() {
		$(this).html(
			$(this)
			.html()
			.replace(/_/g, "_<wbr/>")
		);
	});
}
