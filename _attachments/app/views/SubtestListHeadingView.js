var SubtestListHeadingView = Backbone.View.extend({

	el: "#subtest-list h1 span",
	
	template: loadTemplate("SubtestListHeadingView.template.html"),

	initialize: function() {
      this.model.bind('change', this.render, this);
      //TODO this.model.bind('destroy', this.remove, this);
    },


	render: function() {
      $(this.el).html(this.template(this.model.toJSON()));

      return this;
    },
        
});
