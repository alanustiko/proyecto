core.launcher.parser.loadClass("escenario",{
	columnas: null,
	
	initialize: function(conf){
//		alert('initialize de prueba');
//		alert(conf.param);
		var html = ''
			+ '<div id="escenario">'
				+ '<div>'
				
				+ '</div>'
				+ '<div>'
					+ '<div class="gameColumn">'
						+ '<img src="/P17001/img/'+conf.columna || 'columna1.png'+'" alt="columna1"/>'
					+ '</div>'
					+ '<div id="game">'
					
					+ '</div class="gameColumn">'
					+ '<div>'
					
					+ '</div>'
				+ '</div>'
				+ '<div>'
				
				+ '</div>'
			+ '</div>';
		
		$('body').append(html);
	}	
});