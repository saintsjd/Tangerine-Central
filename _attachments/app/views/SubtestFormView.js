var SubtestFormView = Backbone.View.extend({

  el: "#subtest-edit #edit-form",

  initialize: function(){
	this.model.bind("change", this.render, this );
  },
  
  render: function() {
    var type = this.model.get("pageType");
    console.log(type);
    switch( type ) {
    	case "TextPage":
    		this.template = loadTemplate("TextPageEdit.template.html");
    	break;
    	
    	case "ToggleGridWithTimer":
    		this.template = loadTemplate("ToggleGridWithTimerEdit.template.html");    	
    	break;
    
    }

   	$(this.el).html(this.template(this.model.toJSON()));

    
    return this;
  }
  
           
});
