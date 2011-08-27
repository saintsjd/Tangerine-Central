/*  
Initialize the app
*/

$(function(){


	//Models
	window.assessment = new Assessment;
	
	//Views
	var metaform = new AssessmentMetaForm({model: window.assessment, el: $('#assessment-meta-form [data-role="content"]') });
			
	/**
	 * UI Events
	 */
	$("#new-egra-button").click(function(){
		//create a new blank assessment
		window.assessment.clear();
		$.mobile.changePage("#assessment-meta-form");
	});


	

});























