//@ sourceURL=personaje.js
core.launcher.parser.loadClass("personaje",{
	vida: null,
	nivel: null,
	
	initialize: function(conf){
		this.nivel = conf.nivel;
		this.vida = 100 * this.nivel;
		
		this.crearPersonaje();
	},
	crearPersonaje: function(){
		var html = '<div id="personaje" />';
		$('#game').append(html);
	}
});