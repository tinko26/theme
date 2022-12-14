function highlight() {
	$(".language-c .cp").each(function() {
		$(this).html(
			$(this)
			.html()
			
			/* strings */
			
			.replace(/"(\\.|[^"])*"/g, function replace(x) { return '<span class="string">' + x + '</span>'; })
			
			/* compounds */
			
			.replace(/\benum[\s\\]+[a-zA-Z_][a-zA-Z0-9_]*\b/g, function replace(x) { return '<span class="compound">' + x + '</span>'; })
			.replace(/\bstruct\s[a-zA-Z_][a-zA-Z0-9_]*\b/g, function replace(x) { return '<span class="compound">' + x + '</span>'; })
			.replace(/\bunion\s[a-zA-Z_][a-zA-Z0-9_]*\b/g, function replace(x) { return '<span class="compound">' + x + '</span>'; })
			
			/* includes */
			
			.replace(/&lt;.*&gt;/g, function replace(x) { return '<span class="include">' + x + '</span>'; })
			
			/* floating-point numbers */
			
			.replace(/ \.\d+([eE][+-]?\d+)?[fFlL]?\b/g, function replace(x) { return ' <span class="literal">' + x + '</span>'; })
			.replace(/\b\d+\.(?![\deEfFlL])/g, function replace(x) { return '<span class="literal">' + x + '</span>'; })
			.replace(/\b\d+\.\d+([eE][+-]?\d+)?[fFlL]?\b/g, function replace(x) { return '<span class="literal">' + x + '</span>'; })
			.replace(/\b\d+[eE][+-]?\d+[fFlL]?\b/g, function replace(x) { return '<span class="literal">' + x + '</span>'; })
			
			.replace(/\b(0x|0X)\.[\da-fA-F]+([pP][+-]?[\da-fA-F]+)?[fFlL]?\b/g, function replace(x) { return '<span class="literal">' + x + '</span>'; })
			.replace(/\b(0x|0X)[\da-fA-F]+\.(?![\da-fA-FpP])/g, function replace(x) { return '<span class="literal">' + x + '</span>'; })
			.replace(/\b(0x|0X)[\da-fA-F]+\.[\da-fA-F]+([pP][+-]?[\da-fA-F]+)?[fFlL]?\b/g, function replace(x) { return '<span class="literal">' + x + '</span>'; })
			.replace(/\b(0x|0X)[\da-fA-F]+[pP][+-]?[\da-fA-F]+[fFlL]?\b/g, function replace(x) { return '<span class="literal">' + x + '</span>'; })
			
			/* integers */
	
			.replace(/\b[1-9][0-9]*[uU]?[lL]?[lL]?\b/g, function replace(x) { return '<span class="literal">' + x + '</span>'; })
			.replace(/\b0[0-7]*[uU]?[lL]?[lL]?\b/g, function replace(x) { return '<span class="literal">' + x + '</span>'; })
			.replace(/\b(0b|0B)[0-1]+[uU]?[lL]?[lL]?\b/g, function replace(x) { return '<span class="literal">' + x + '</span>'; })
			.replace(/\b(0x|0X)[0-9a-fA-F]+[uU]?[lL]?[lL]?\b/g, function replace(x) { return '<span class="literal">' + x + '</span>'; })
			
			/* comments */
			
			.replace(/ \\\n/g, ' <span class="comment">\\</span>\n')
			
			/* constants */
			
			.replace(/\bNULL\b/g, '<span class="keyword">NULL</span>')
			
			/* keywords */
			
			.replace(/#\bdefine\b/g, '<span class="keyword">#define</span>')
			.replace(/#\belif\b/g, '<span class="keyword">#elif</span>')
			.replace(/#\belifdef\b/g, '<span class="keyword">#elifdef</span>')
			.replace(/#\belifndef\b/g, '<span class="keyword">#elifndef</span>')
			.replace(/#\belse\b/g, '<span class="keyword">#else</span>')
			.replace(/#\bendif\b/g, '<span class="keyword">#endif</span>')
			.replace(/#\berror\b/g, '<span class="keyword">#error</span>')
			.replace(/#\bif\b/g, '<span class="keyword">#if</span>')
			.replace(/#\bifdef\b/g, '<span class="keyword">#ifdef</span>')
			.replace(/#\bifndef\b/g, '<span class="keyword">#ifndef</span>')
			.replace(/#\binclude\b/g, '<span class="keyword">#include</span>')
			.replace(/#\binclude_next\b/g, '<span class="keyword">#include_next</span>')
			.replace(/#\bline\b/g, '<span class="keyword">#line</span>')
			.replace(/#\bpragma\b/g, '<span class="keyword">#pragma</span>')
			.replace(/#\bundef\b/g, '<span class="keyword">#undef</span>')
			.replace(/#\bwarning\b/g, '<span class="keyword">#warning</span>')
			
			.replace(/\balignas\b/g, '<span class="keyword">alignas</span>')
			.replace(/\balignof\b/g, '<span class="keyword">alignof</span>')
			.replace(/\basm\b/g, '<span class="keyword">asm</span>')
			.replace(/\bauto\b/g, '<span class="keyword">auto</span>')
			.replace(/\bbreak\b/g, '<span class="keyword">break</span>')
			.replace(/\bcase\b/g, '<span class="keyword">case</span>')
			.replace(/\bchar\b/g, '<span class="keyword">char</span>')
			.replace(/\bcomplex\b/g, '<span class="keyword">complex</span>')
			.replace(/\bconst\b/g, '<span class="keyword">const</span>')
			.replace(/\bconstexpr\b/g, '<span class="keyword">constexpr</span>')
			.replace(/\bcontinue\b/g, '<span class="keyword">continue</span>')
			.replace(/\bdefault\b/g, '<span class="keyword">default</span>')
			.replace(/\bdefined\b/g, '<span class="keyword">defined</span>')
			.replace(/\bdo\b/g, '<span class="keyword">do</span>')
			.replace(/\bdouble\b/g, '<span class="keyword">double</span>')
			.replace(/\belse\b/g, '<span class="keyword">else</span>')
			.replace(/\benum\b/g, '<span class="keyword">enum</span>')
			.replace(/\bextern\b/g, '<span class="keyword">extern</span>')
			.replace(/\bfalse\b/g, '<span class="keyword">false</span>')
			.replace(/\bfloat\b/g, '<span class="keyword">float</span>')
			.replace(/\bfor\b/g, '<span class="keyword">for</span>')
			.replace(/\bgoto\b/g, '<span class="keyword">goto</span>')
			.replace(/\bif\b/g, '<span class="keyword">if</span>')
			.replace(/\bimaginary\b/g, '<span class="keyword">imaginary</span>')
			.replace(/\binline\b/g, '<span class="keyword">inline</span>')
			.replace(/\bint\b/g, '<span class="keyword">int</span>')
			.replace(/\blong\b/g, '<span class="keyword">long</span>')
			.replace(/\bnoreturn\b/g, '<span class="keyword">noreturn</span>')
			.replace(/\bnullptr\b/g, '<span class="keyword">nullptr</span>')
			.replace(/\boffsetof\b/g, '<span class="keyword">offsetof</span>')
			.replace(/\bregister\b/g, '<span class="keyword">register</span>')
			.replace(/\brestrict\b/g, '<span class="keyword">restrict</span>')
			.replace(/\breturn\b/g, '<span class="keyword">return</span>')
			.replace(/\bshort\b/g, '<span class="keyword">short</span>')
			.replace(/\bsigned\b/g, '<span class="keyword">signed</span>')
			.replace(/\bsizeof\b/g, '<span class="keyword">sizeof</span>')
			.replace(/\bstatic\b/g, '<span class="keyword">static</span>')
			.replace(/\bstatic_assert\b/g, '<span class="keyword">static_assert</span>')
			.replace(/\bstruct\b/g, '<span class="keyword">struct</span>')
			.replace(/\bswitch\b/g, '<span class="keyword">switch</span>')
			.replace(/\bthread_local\b/g, '<span class="keyword">thread_local</span>')
			.replace(/\btrue\b/g, '<span class="keyword">true</span>')
			.replace(/\btypedef\b/g, '<span class="keyword">typedef</span>')
			.replace(/\btypeof\b/g, '<span class="keyword">typeof</span>')
			.replace(/\btypeof_unqual\b/g, '<span class="keyword">typeof_unqual</span>')
			.replace(/\bunion\b/g, '<span class="keyword">union</span>')
			.replace(/\bunsigned\b/g, '<span class="keyword">unsigned</span>')
			.replace(/\bvolatile\b/g, '<span class="keyword">volatile</span>')
			.replace(/\bwhile\b/g, '<span class="keyword">while</span>')
		);
	});
	$(".language-c").each(function() {
		$(this).html(
			$(this)
			.html()
			
			/* keywords */
			
			.replace(/\bbool\b/g, '<span class="keyword">bool</span>')
			.replace(/\bvoid\b/g, '<span class="keyword">void</span>')
			
			/* compounds */
			
			.replace(/<span class="k">enum<\/span>\s+<span class="n">[a-zA-Z_][a-zA-Z0-9_]*<\/span>/g, function replace(x) { return '<span class="compound">' + x + '</span>'; })
			.replace(/<span class="k">struct<\/span>\s+<span class="n">[a-zA-Z_][a-zA-Z0-9_]*<\/span>/g, function replace(x) { return '<span class="compound">' + x + '</span>'; })
			.replace(/<span class="k">union<\/span>\s+<span class="n">[a-zA-Z_][a-zA-Z0-9_]*<\/span>/g, function replace(x) { return '<span class="compound">' + x + '</span>'; })
			
			/* types */
			
			.replace(/\b[a-zA-Z_][a-zA-Z0-9_]*_t\b/g, function replace(x) { 
				return '<span class="type">' + x + '</span>'; 
			})
			
			/* types that are keywords */
			
			.replace(/\bint8_t\b/g, '<span class="keyword">int8_t</span>')
			.replace(/\bint16_t\b/g, '<span class="keyword">int16_t</span>')
			.replace(/\bint32_t\b/g, '<span class="keyword">int32_t</span>')
			.replace(/\bint64_t\b/g, '<span class="keyword">int64_t</span>')
			.replace(/\bint_fast8_t\b/g, '<span class="keyword">int_fast8_t</span>')
			.replace(/\bint_fast16_t\b/g, '<span class="keyword">int_fast16_t</span>')
			.replace(/\bint_fast32_t\b/g, '<span class="keyword">int_fast32_t</span>')
			.replace(/\bint_fast64_t\b/g, '<span class="keyword">int_fast64_t</span>')
			.replace(/\bint_least8_t\b/g, '<span class="keyword">int_least8_t</span>')
			.replace(/\bint_least16_t\b/g, '<span class="keyword">int_least16_t</span>')
			.replace(/\bint_least32_t\b/g, '<span class="keyword">int_least32_t</span>')
			.replace(/\bint_least64_t\b/g, '<span class="keyword">int_least64_t</span>')
			.replace(/\bintmax_t\b/g, '<span class="keyword">intmax_t</span>')
			.replace(/\bintptr_t\b/g, '<span class="keyword">intptr_t</span>')
			.replace(/\bmax_align_t\b/g, '<span class="keyword">max_align_t</span>')
			.replace(/\bnullptr_t\b/g, '<span class="keyword">nullptr_t</span>')
			.replace(/\bptrdiff_t\b/g, '<span class="keyword">ptrdiff_t</span>')
			.replace(/\bsize_t\b/g, '<span class="keyword">size_t</span>')
			.replace(/\buint8_t\b/g, '<span class="keyword">uint8_t</span>')
			.replace(/\buint16_t\b/g, '<span class="keyword">uint16_t</span>')
			.replace(/\buint32_t\b/g, '<span class="keyword">uint32_t</span>')
			.replace(/\buint64_t\b/g, '<span class="keyword">uint64_t</span>')
			.replace(/\buint_fast8_t\b/g, '<span class="keyword">uint_fast8_t</span>')
			.replace(/\buint_fast16_t\b/g, '<span class="keyword">uint_fast16_t</span>')
			.replace(/\buint_fast32_t\b/g, '<span class="keyword">uint_fast32_t</span>')
			.replace(/\buint_fast64_t\b/g, '<span class="keyword">uint_fast64_t</span>')
			.replace(/\buint_least8_t\b/g, '<span class="keyword">uint_least8_t</span>')
			.replace(/\buint_least16_t\b/g, '<span class="keyword">uint_least16_t</span>')
			.replace(/\buint_least32_t\b/g, '<span class="keyword">uint_least32_t</span>')
			.replace(/\buint_least64_t\b/g, '<span class="keyword">uint_least64_t</span>')
			.replace(/\buintmax_t\b/g, '<span class="keyword">uintmax_t</span>')
			.replace(/\buintptr_t\b/g, '<span class="keyword">uintptr_t</span>')
		);
	});
}
