var SubtestListHeadingView = Backbone.View.extend({

	el: "#subtest-list h1 span",
	
	template: loadTemplate("SubtestListHeadingView.template.html"),

	initialize: function() {
      this.model.bind('change', this.render, this);
      //TODO this.model.bind('destroy', this.remove, this);
    },


	render: function() {
		//update the window.subtest list - we can move this to its own view eventually
		window.subtests = new SubtestCollection;
		window.subtests.fetchAll();
	
      $(this.el).html(this.template(this.model.toJSON()));

      return this;
    },
        
});
