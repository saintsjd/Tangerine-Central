//TODO - figure out why this code causes flash of unstyled content with JQM
var Assessment = Backbone.Model.extend({
   defaults: function() {
      return {
        type:  "assessment",
      };
    },
    
  url: "/subtest"
});
