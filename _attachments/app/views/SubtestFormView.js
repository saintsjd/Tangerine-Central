var SubtestFormView = Backbone.View.extend({

  el: "#subtest-edit #edit-form",

  initialize: function(){
	this.model.bind("change", this.render, this );
  },
  
  render: function() {
    var type = this.model.get("pageType");
    
    //this.editView.events = {};
    
    switch( type ) {
    	case "TextPage":
    		this.template = loadTemplate("TextPageEdit.template.html");
    		this.events = { "click button:contains('Save')" : "saveTextPage" }
    	break;
    	
    	case "ToggleGridWithTimer":
    		this.template = loadTemplate("ToggleGridWithTimerEdit.template.html");    	
    	break;
    
    }

	this.delegateEvents();
   	$(this.el).html(this.template(this.model.toJSON()));
    
    return this;
  },
  
  
  saveTextPage: function() {
  	this.model.set({"content": this.$("textarea").val()}).save();
  },
           
});
