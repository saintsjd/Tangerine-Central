var SubtestFormView = Backbone.View.extend({

  el: "#subtest-edit #edit-form",

  initialize: function(){
	this.model.bind("change", this.render, this );
  },
  
  render: function() {
    var type = this.model.get("pageType");
    
    switch( type ) {
    	case "TextPage":
    		this.template = loadTemplate("TextPageEdit.template.html");
    		this.events = { "click button:contains('Save')" : "saveTextPage" }
    	break;
    	
    	case "ToggleGridWithTimer":
    		this.template = loadTemplate("ToggleGridWithTimerEdit.template.html");   
    		this.events = {
    			"click button:contains('Sort')" : "sortToggleGridWithTimer",
    			"click button:contains('Shuffle')" : "shuffleToggleGridWithTimer",
    			"click button:contains('Save')" : "saveToggleGridWithTimer",
  			}; 	
    	break;
    
    }

	this.delegateEvents();
   	$(this.el).html(this.template(this.model.toJSON()));
    
    return this;
  },
  
  
  saveTextPage: function() {
  	this.model.set({"content": this.$("textarea").val()}).save();
  },
        
        
  saveToggleGridWithTimer: function() {
  	var letters = this.$("textarea").val().split(" ");
    this.model.set({"letters": letters} ).save();
  },

  sortToggleGridWithTimer: function() {
  	var letters = this.$("textarea").val().split(" ");
    letters.sort();
    
    var mush = "";
    $.each(letters,function(index, value) {
    	if( value != "")
    	  mush = mush + value + " ";
    });
    this.$("textarea").val(mush);
  },

  shuffleToggleGridWithTimer: function() {
  	var letters = this.$("textarea").val().split(" ");

	// quick examples taken from here: http://snippets.dzone.com/posts/show/849
    for(var j, x, i = letters.length; i; j = parseInt(Math.random() * i), x = letters[--i], letters[i] = letters[j], letters[j] = x);

    var mush = "";
    $.each(letters,function(index, value) {
    	if( value != "")
    	  mush = mush + value + " ";
    });
    this.$("textarea").val(mush);
  },        
           
});
