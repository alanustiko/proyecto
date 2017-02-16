//@ sourceURL=escenario.js
core.launcher.parser.loadClass("escenario",{
	columnas: null,
	
	initialize: function(conf){
//		alert('initialize de prueba');
//		alert(conf.param);
		var html = 
			 '<div id="escenario">'
				+ '<div class="gameColumn gameColumnL" />'
				+ '<div id="game" />'
				+ '<div class="gameColumn gameColumnR" />'
			+ '</div>';
		
		$('body').append(html);
	}	
});