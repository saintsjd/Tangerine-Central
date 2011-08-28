/*  
Initialize the app
*/

$(function(){


	//Models and Collections
	window.assessment = new Assessment;
	window.assessments = new AssessmentCollection;
	
	// Load all the assessments from the database into the collection
	//TODO - get the hardcoded db name out of here. same with DDOC
	$.couch.db("tangerine").view("tangerine-cloud" + "/assessment_ids", {
      success: function(result){
      	$.each(result.rows, function(key,row){
      		var a = new AssessmentMeta( {id:row.id, updated:row.key, name: row.value} );
      		window.assessments.add(a);
      	});
      }
    });
		
	//Views
	var metaform = new AssessmentMetaForm({model: window.assessment, el: $('#assessment-meta-form [data-role="content"]') });
	var debug = new Debug( {model: window.assessment, el: $("#debug")} );
	
	//force the metaForm to render... this is for testing only
	window.assessment.change();
			
	/**
	 * UI Events
	 */
	$("#new-egra-button").click(function(){
		//create a new blank assessment
		window.assessment.blank();		
		$.mobile.changePage("#assessment-meta-form");
	});



});























