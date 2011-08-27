/*  
Initialize the app
*/

$(function(){


	//Models
	window.assessment = new Assessment;
	
	//Views
	var metaform = new AssessmentMetaForm({model: window.assessment, el: $('#assessment-meta-form [data-role="content"]') });

	//force the metaForm to render... this is for testing only
	window.assessment.change();
			
	/**
	 * UI Events
	 */
	$("#new-egra-button").click(function(){
		//create a new blank assessment
		window.assessment = new Assessment();
		window.assessment.change();
		$.mobile.changePage("#assessment-meta-form");
	});


	

});























