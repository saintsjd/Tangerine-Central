var SubtestCollection = Backbone.Collection.extend({
	model: Subtest,
	
	comparator: function(assessment) {
	  return assessment.get("updated");
	},
	
	/**
	 * fetch() does not work with coudb-backbone library, so we manually create one here to load all assessments from the database
	 */
	fetchAll: function() {
		//this changes as we move through the various callbacks in this function. save a reference to the collection here
		var thisCollection = this;

		_.each( window.assessment.get("urlPathsForPages"), function(subtestId) {
			var subtest = new Subtest({_id: subtestId });
			subtest.fetch({
				success: function(model,response){
					thisCollection.add(model);
				},
			});
		});

		console.log( thisCollection );					

	}
});
