var SubtestMetaView = Backbone.View.extend({

	tagName: "li",
	
	template: loadTemplate("SubtestMetaView.template.html"),

	initialize: function() {
      this.model.bind('change', this.render, this);
      //TODO this.model.bind('destroy', this.remove, this);
    },


	render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
		//remove these attrs so jqm will rerender the li 
		$(this.el).removeAttr("data-theme");
		$(this.el).removeAttr("class");

      return this;
    },

	events: {
      "click a": "switchActiveSubtest"
    },
    
    switchActiveSubtest: function() {
    	/*window.assessment.set({ _id: this.model.get("_id"), urlPathsForPages: undefined }, {silent: true} );
    	window.assessment.fetch({
    		success:function(model){
    			//load in the subtests
				window.subtests.fetchAll();
    		},
    	});*/
    	console.log("switchActiveSubtest");
    	return true;
    }
    
});