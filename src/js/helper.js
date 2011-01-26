/**
 *	Helper
 */

ui.helper = function(parent){

/**
 *  Constructor
 */
var conf = {};
	conf.name = "helper";
	conf.$trigger = $(parent.element);
	conf.cone = true;
	conf.classes = "helper" + parent.id;
	conf.visible = false;
	conf.position = {};
	conf.position.context = parent.reference;
	conf.position.offset = "15 0";
	conf.position.points = "lt rt";

/**
 *  Inheritance
 */

	var that = ui.floats(conf); // Inheritance

/**
 *  Private Members
 */
	var hide = function(){
		$('.helper' + parent.id).remove();
		conf.visible = false;
		that.callbacks(conf, 'hide');
	};
	
	var show = function(txt){
		conf.content = '<p><span class="ico error">Error: </span>' + txt + '</p>';		
		that.show($.Event(), conf);
	};

/**
 *  Protected Members
 */ 
 
/**
 *  Default event delegation
 */
    ui.utils.body.bind(ui.events.CHANGE_LAYOUT, function(){ 
            that.position("refresh", conf) 
        });

/**
 *  Expose propierties and methods
 */	
	that.publish = {
	
	/**
	 *  @ Public Properties
	 */
    	uid: conf.id,
		element: conf.element,
		type: "helper",
	/**
	 *  @ Public Methods
	 */
		show: function(txt) { show(txt); },
		hide: hide,
		position: function(o) {
			return that.position(o,conf) || that.publish;
		}
	 };
	 
	 return that.publish;
};
