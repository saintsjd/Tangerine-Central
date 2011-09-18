var AssessmentCollectionView = Backbone.View.extend({

	el: "#assessment-list",
	
	initialize: function() {
      this.model.bind('add', this.addOne, this);
      this.model.bind('change', this.render, this);
      //TODO this.model.bind('destroy', this.remove, this);
    },


	render: function() {
		this.$(this.el).listview("refresh");
      	return this;
    },

	addOne: function(assessment) {
		var view = new AssessmentItemView({model: assessment});
    	this.$(this.el).prepend(view.render().el);
    	
    	this.render();
	},
    
});
