function highlight() {
	$(".language-c .cp").each(function() {
		$(this).html(
			$(this)
			.html()
			.replaceAll('#define ', '<span class="cp-k">#define</span> ')
			.replaceAll('#elif ', '<span class="cp-k">#elif</span> ')
			.replaceAll('#else', '<span class="cp-k">#else</span>')
			.replaceAll('#endif', '<span class="cp-k">#endif</span>')
			.replaceAll('#if ', '<span class="cp-k">#if</span> ')
			.replaceAll('#ifdef ', '<span class="cp-k">#ifdef</span> ')
			.replaceAll('#ifndef ', '<span class="cp-k">#ifndef</span> ')
			.replaceAll('#include ', '<span class="cp-k">#include</span> ')
			.replaceAll('#include_next ', '<span class="cp-k">#include_next</span> ')
			.replaceAll('defined ', '<span class="cp-k">defined</span> ')
		);
	});
	$(".language-c").each(function() {
		$(this).html(
			$(this)
			.html()
			.replaceAll('<span class="n">bool</span>', '<span class="n-k">bool</span>')
			.replaceAll('<span class="nf">bool</span>', '<span class="nf-k">bool</span>')
		);
	});
	$(".language-c").each(function() {
		$(this).html(
			$(this)
			.html()
			.replace(/<span class="n">[a-zA-Z_][a-zA-Z0-9_]*_t<\/span>/g, function replace(x) { 
				return '<span class="n-t">' + x.substr(16); 
			})
			.replace(/<span class="kt">[a-zA-Z_][a-zA-Z0-9_]*_t<\/span>/g, function replace(x) { 
				return '<span class="kt-t">' + x.substr(17); 
			})
		);
	});
}
