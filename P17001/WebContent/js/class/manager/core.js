core = {
	launcher: null,
	
	initialize: function(){
		this.launcher = {
				loadingWindow: null,
				loader: null,
				parser: null,
				
				initialize: function(){
					this.loadingWindow = {
							window: null,
							initialize: function(){
								//TODO crear ventana jquery
								var html = ""
									+ "<div id='loadingWindow'>"
										+ "<div class='imgcontainer'>" 
										+ "</div>"
										+ "<div class='textcontainer'>"
											+ "cargando..."
										+ "</div>" 
										+ "<div class='barcontainer'>" 
											+ '<div class="progress">'
												+ '<div id="loadingWindowBar" class="progress-bar progress-bar-striped active" role="progressbar"'
												+ ' aria-valuemin="0" aria-valuemax="100" style="width:0%">'
													+ '0%'
												+ '</div>'
											+ '</div>'
										+ "</div>" 
									+ "</div>";
								this.window = $(html);
								$('body').append(this.window);
							},
							
							updateLoading: function(cant){
								$('#loadingWindowBar').css("width",cant+"%");
								$('#loadingWindowBar').html(cant+"%");
							}
					};
					this.loader = {
						imports: null,
						css: null,
						conf: null,
						initialize: function(){
							var oThis = this;
							$.when(
							    $.getScript( "/P17001/js/class/manager/imports.js" ),
							    $.getScript( "/P17001/js/class/manager/conf.js" )
							).done(function(){
								core.launcher.loadingWindow.updateLoading(50);
								oThis.loadConf();
							});
						},
						
						loadConf: function(){
							var oThis = this;
							this.getScripts(function(){
								oThis.loadCss();
								core.launcher.loadingWindow.updateLoading(70);
								core.launcher.parser.initialize();
								core.launcher.loadingWindow.updateLoading(100);
								core.launcher.loadingWindow.window.hide();
							});
						},
						
						getScripts: function(callback) {
							var scripts = this.imports;
						    var progress = 0;
						    scripts.forEach(function(script) { 
						        $.getScript(script, function () {
						            if (++progress == scripts.length) callback();
						        }); 
						    });
						},
						
						loadCss: function() {
							for(var f in this.css){
								$('head').append('<link rel="stylesheet" href="'+this.css[f]+'" type="text/css" />');
							}
						}
					};
					this.parser = {
						classes: [],
						
						initialize: function(){
							var oThis = this;
							function executeFunctionByName(functionName, context /*, args */) {
							  var args = [].slice.call(arguments).splice(2);
							  var namespaces = functionName.split(".");
							  var func = namespaces.pop();
							  context[func] = function(){
								oThis.classes[func].initialize(core.launcher.loader.conf[func]);
							  };
							}
							this.classes['header'].initialize(core.launcher.loader.conf['header']);
							this.classes['escenario'].initialize(core.launcher.loader.conf['escenario']);
							for(var c in this.classes){
								if(this.classes[c].initialize){
									if(c != 'header' && c != 'escenario'){
										executeFunctionByName(c, this);
									}
								}
							}
							for(var c in this.classes){
								if(this.classes[c].initialize){
									if(c != 'header' && c != 'escenario' && c != 'personaje'){
										this.classes[c].initialize(core.launcher.loader.conf[c]);
									}
								}
							}
						},
						
						loadClass: function(name,json){
							this.classes[name] = json;
						}
					};
					
					this.loadingWindow.initialize();
					this.loader.initialize();
				}
		};
		this.launcher.initialize();
	}
};