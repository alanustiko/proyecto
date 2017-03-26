//@ sourceURL=personaje.js
core.launcher.parser.loadClass("personaje",{
	vida: null,
	nivel: null,
	jumpHeight : null,
	
	initialize: function(conf){
		this.nivel = conf.nivel;
		this.vida = 100 * this.vida;
		this.jumpHeight = conf.jumpHeight;
		this.crearPersonaje();
	},
	crearPersonaje: function(){
		var html = '<div id="personaje" />';
		$('#game').append(html);
	}
});