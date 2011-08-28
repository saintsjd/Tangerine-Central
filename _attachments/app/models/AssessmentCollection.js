var AssessmentCollection = Backbone.Collection.extend({
	model: AssessmentMeta,
	
	comparator: function(meta) {
	  return meta.get("updated");
	},
});
