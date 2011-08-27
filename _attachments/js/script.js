/*  
Initialize the app
*/

$(function(){


	//Models
	window.assessment = new Assessment;
	
	//Views
	var metaform = new AssessmentMetaForm({model: window.assessment, el: $('#assessment-meta-form [data-role="content"]') });
	var debug = new Debug( {model: window.assessment, el: $("#debug")} );
	
	//force the metaForm to render... this is for testing only
	window.assessment.change();
			
	/**
	 * UI Events
	 */
	$("#new-egra-button").click(function(){
		console.log( window.assessment.get("foo") );
		//create a new blank assessment
		window.assessment.blank();		
		$.mobile.changePage("#assessment-meta-form");
	});



});























