//@ sourceURL=acciones.js
core.launcher.parser.loadClass("acciones",{
	
	initialize: function(conf){
		
	},
	
	saltar : function(object) {
		object.top -= object.jumpHeight;
		setInterval(
			function(){ 
				object.top += object.jumpHeight;
			},
		1000);
	},
	
	estaColisionando : function(object){
		object.colisionando = true;
	}
	
});