/** Configure the database **/
Backbone.couch_connector.config.db_name = "tangerine";
Backbone.couch_connector.config.ddoc_name = "central";
Backbone.couch_connector.config.global_changes = false;

// This allows us to have separate template files
var loadTemplate = function(filename){
  var templateFunction;
  $.ajax("app/templates/" + filename,{
    async:false, // make sure we pause execution until this template is loaded
    success: function(result){
      templateFunction = Handlebars.compile(result);
    }
  })
  return templateFunction;
}