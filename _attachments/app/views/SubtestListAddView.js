var SubtestListAddView = Backbone.View.extend({

	el: "#subtest-list #add-subtest",
	
	events: {
		"click li a"  : "addNewSubtest",
	},

	addNewSubtest: function(e){
		console.log( $( e.target ).attr("id") );
	},
            
});
