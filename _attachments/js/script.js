/*  
Initialize the app
*/

$(function(){


	//Models and Collections
	window.assessment = new Assessment;
	window.assessments = new AssessmentCollection;
			
	//Views
	var metaform = new AssessmentMetaForm({model: window.assessment, el: $('#assessment-meta-form [data-role="content"]') });
	var assessmentCollectionView = new AssessmentCollectionView({model:window.assessments});
	var debug = new Debug( {model: window.assessment, el: $("#debug")} );
	var subtestListHeading = new SubtestListHeadingView({model:window.assessment});
	var subtestListAdd = new SubtestListAddView();
	var subtestListView = new SubtestListView({model:window.assessment});
	
	//force the metaForm to render... this is for testing only
	//window.assessment.change();
			
	/**
	 * UI Events
	 */
	$("#new-egra-button").click(function(){
		//create a new blank assessment
		window.assessment.blank();
	});

	// Load all the assessments from the database into the collection
	window.assessments.fetchAll();

});























