window.Subtest = Backbone.Model.extend({
  initialize: function(){
	this.id = "Assessment.The Gambia EGRA May 2011.ReadingComprehensionInstructions";
  	this.fetch();
  },
  url: "/subtest"
});
