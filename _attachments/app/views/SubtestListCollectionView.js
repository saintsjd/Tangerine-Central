var SubtestListCollectionView = Backbone.View.extend({

	el: "#subtests",
	
	initialize: function() {
      this.model.bind('add', this.addOne, this);
      this.model.bind('reset', this.reset, this);
    },

	reset: function() {
		$(this.el).empty();
      	return this;
    	this.$(this.el).listview("refresh");
    },

	addOne: function(subtest) {
		var view = new SubtestMetaView({model: subtest});
    	this.$(this.el).append(view.render().el);

		this.render();		
	},
	
	render: function() {
    	//not sure why I need to do this. Something conflicts with jquery and backbone... this is a work around
    	try{ 
    		this.$(this.el).listview("refresh");
    	}catch(e){
    		this.$(this.el).trigger("create");
    	}
	
	}
        
});
