var SubtestListCollectionView = Backbone.View.extend({

	el: "#subtests",
	
	template: loadTemplate("SubtestListCollectionView.template.html"),

	initialize: function() {
	  //TODO Bummer backbone cannot listen for changes to an array of a model object
      this.model.bind('change', this.render, this);
      //TODO this.model.bind('destroy', this.remove, this);
    },


	render: function() {
      //$(this.el).html(this.template(this.model.toJSON()));
	//console.log(this.model.get("urlPathsForPages"));
      return this;
    },
        
});
