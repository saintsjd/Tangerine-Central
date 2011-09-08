var SubtestListCollectionView = Backbone.View.extend({

	el: "#subtests",
	
	initialize: function() {
      this.model.bind('add', this.addOne, this);
      this.model.bind('reset', this.reset, this);
    },

	reset: function() {
		//this.$(this.el).listview("refresh");
		$(this.el).empty();
      	return this;
    },

	addOne: function(subtest) {
		var view = new SubtestMetaView({model: subtest});
    	this.$(this.el).prepend(view.render().el);
    	//this.render();
	},
        
});
