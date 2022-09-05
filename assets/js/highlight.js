function highlight() {
	$(".language-c .cp").each(function() {
		$(this).html(
			$(this)
			.html()
			.replaceAll(' defined ', ' <span class="cp-k">defined</span> ')
			.replaceAll('#define ', '<span class="cp-k">#define</span> ')
			.replaceAll('#elif ', '<span class="cp-k">#elif</span> ')
			.replaceAll('#else ', '<span class="cp-k">#else</span> ')
			.replaceAll('#endif ', '<span class="cp-k">#endif</span> ')
			.replaceAll('#if ', '<span class="cp-k">#if</span> ')
			.replaceAll('#ifdef ', '<span class="cp-k">#ifdef</span> ')
			.replaceAll('#ifndef ', '<span class="cp-k">#ifndef</span> ')
			.replaceAll('#include ', '<span class="cp-k">#include</span> ')
			.replaceAll('#include_next ', '<span class="cp-k">#include_next</span> ')
		);
	});
}
