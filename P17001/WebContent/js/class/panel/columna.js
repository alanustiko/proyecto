//@ sourceURL=columna.js
core.launcher.parser.loadClass("columna",{
	img: null,
	
	initialize: function(conf){
//		alert('initialize de prueba');
//		alert(conf.param);
		this.img = conf.img;
		var html = 
		 '<div class="">'
			+ '<img src="/P17001/img/'+(this.img || 'columna1.png')+'" alt="columna1"/>'
		+ '</div>';
		
		$('.gameColumn').append(html);
	}	
});