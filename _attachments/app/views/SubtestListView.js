var SubtestListView = Backbone.View.extend({

	el: "#subtests",
	
	template: loadTemplate("SubtestListView.template.html"),

	initialize: function() {
      this.model.bind('change:urlPathsForPages', this.render, this);
      //TODO this.model.bind('destroy', this.remove, this);
    },


	render: function() {
      //$(this.el).html(this.template(this.model.toJSON()));
	console.log("ASDF");
	console.log(this.model.get("urlPathsForPages"));
      return this;
    },
        
});
