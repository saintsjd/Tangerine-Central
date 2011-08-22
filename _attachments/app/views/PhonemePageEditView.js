var PhonemePageEditView = Backbone.View.extend({
  el: $("#edit-pane"),
  template: loadTemplate("PhonemePageEdit.template.html"),

  events: {
    "click button:contains('Save')" : "save",
    "click button:contains('Add')" : "add",
  },

  save: function() {
  	var words = new Array();
 	this.$("ol li").each(function( index, value ){
 		var word = {};
 		word.word = $(value).find('input[name="word"]').val();
 		word["number-of-sounds"] = $(value).find('input[name="number-of-sounds"]').val();
		word.phonemes = new Array();
		
		$.each( $(value).find("textarea").val().split("\n"), function( idx, option ) { 
			if( option != "" )
		  		word.phonemes.push(option);
  		});		

		if( word.word != "" )
			words.push(word);
 	});
	this.model.set({"words":  words } ).save();
  },

  add: function() {
 	var template = loadTemplate("NewPhonemeForm.template.html");
 	this.$("ol").append(template());
  },

  render: function(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
});
