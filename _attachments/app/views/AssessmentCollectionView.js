var AssessmentCollectionView = Backbone.View.extend({

	el: "#assessment-list",
	
	template: loadTemplate("AssessmentMetaView.template.html"),

	initialize: function() {
      this.model.bind('change', this.render, this);
      //TODO this.model.bind('destroy', this.remove, this);
    },


	render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },

	events: {
      "click a": "switchActiveAssessment"
    },
    
    switchActiveAssessment: function() {
    	window.assessment.set({ _id: this.model.get("id")}, {silent: true} );
    	window.assessment.fetch();
    	return false;
    }
    
});