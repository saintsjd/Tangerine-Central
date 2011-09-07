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
				console.log("!!!" + m.get("_id") );
				//if ( window.assessment.get("urlPathsForPages") == undefined )
				//	window.assessment.set("urlPathsForPages", [m.get("_id")]);
				//console.log( window.assessment.get("urlPathsForPages") );
					
			},
		});
		
	},
            
});
