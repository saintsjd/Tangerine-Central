var SubtestListAddView = Backbone.View.extend({

	el: "#subtest-list #add-subtest",
	
	events: {
		"click li a"  : "addNewSubtest",
	},

	addNewSubtest: function(e){
		var whichButton = $( e.target ).attr("id");
		
		var defaults = {};
		switch( whichButton ) {
			case "new-text-page":
				defaults = {
					"pageType": "TextPage",
					"content": "",
				};
			break;

			case "new-toggle-grid-with-timer":
				defaults = {
					"pageType": "ToggleGridWithTimer",
					"letters": [],				
				};			
			break;
		}
		
		var subtest = new Subtest(defaults);
		subtest.save({},{
			success: function(m) {
				if ( window.assessment.get("urlPathsForPages") == undefined )
					window.assessment.set({ "urlPathsForPages": [m.get("_id")] });
				else
					window.assessment.get("urlPathsForPages").push(m.get("_id"));
				window.assessment.save();
					
			},
		});
		
	},
            
});
