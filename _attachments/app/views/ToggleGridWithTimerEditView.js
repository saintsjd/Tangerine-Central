var ToggleGridWithTimerEditView = Backbone.View.extend({
  el: $("body"),
  template: loadTemplate("ToggleGridWithTimerEdit.template.html"),
  initialize: function (){
    this.model.view = this;
  },
  events: {
    "click button:contains('Sort')" : "sort",
    "click button:contains('Shuffle')" : "shuffle",
    "click button:contains('Save')" : "save",
  },
  
  save: function() {
  	var letters = this.$("textarea").val().split(" ");
    this.model.set({"letters": letters}).save();
  },

  sort: function() {
  	var letters = this.$("textarea").val().split(" ");
    letters.sort();
    
    var mush = "";
    $.each(letters,function(index, value) {
    	if( value != "")
    	  mush = mush + value + " ";
    });
    this.$("textarea").val(mush);
  },

  shuffle: function() {
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

  render: function(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
});
