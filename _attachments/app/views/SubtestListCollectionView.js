var SubtestListCollectionView = Backbone.View.extend({

	el: "#subtests",
	
	template: loadTemplate("SubtestListCollectionView.template.html"),

	initialize: function() {
      this.model.bind('add', this.render, this);
      this.model.bind('reset', this.render, this);
    },


	render: function() {
      //$(this.el).html(this.template(this.model.toJSON()));
	//console.log(this.model.get("urlPathsForPages"));
	console.log(this.model.length);
      return this;
    },
        
});
