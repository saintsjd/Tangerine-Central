var AssessmentCollectionView = Backbone.View.extend({

	el: "#assessment-list",
	
	template: loadTemplate("AssessmentMetaView.template.html"),

	initialize: function() {
      this.model.bind('add', this.addOne, this);
      //TODO this.model.bind('destroy', this.remove, this);
    },


	render: function() {
	  console.log(this.model);
      //$(this.el).html(this.template(this.model.toJSON()));
      return this;
    },

	addOne: function(assessment) {
		var view = new AssessmentMetaView({model: assessment});
    	this.$(this.el).prepend(view.render().el);
    	
    	this.$(this.el).listview("refresh");
	},

    
});
