/**
 * This is a small class to store the id, name, and last updated value for assessments in the AssessmentList Collection
 * this plan seems better, lighter on the client side, rather than loading in full Assessment objects for each element of the collection
 */
var AssessmentMeta = Backbone.Model.extend({
  defaults: {
    "type":  "assessment",
  },
});
