//@ sourceURL=juego.js
core.launcher.parser.loadClass("juego",{
	personaje: null,
	escena: null,
	
	initialize: function(conf){
		this.personaje = new core.launcher.parser.personaje();
	}	
});