/**
 * Global reference to the one subtest we are testing... we can change this later, but works well for the moment
 */
window.SubtestModel = Backbone.Model.extend({
	url: "/subtest",
});

/**
 * Initialize the application and switch between tests
 */
window.AppView = Backbone.View.extend({
	
	el: $("#app"),
	
	initialize: function(){
		//Start with a TextPage
		this.model = new SubtestModel({_id: "Assessment.The Gambia EGRA May 2011.ReadingComprehensionInstructions"});

		this.model.bind('change', this.changeSubtest, this );
	
		this.model.fetch();
	},
	
	// Based on the PageType of the subtest model, change the GUI for editing
	changeSubtest: function(){
	  	switch( this.model.get("pageType") ) {
			case 'TextPage':
			(new TextPageEditView({model: this.model })).render();
			break;

			case 'ToggleGridWithTimer':
		    (new ToggleGridWithTimerEditView({model: this.model })).render();
			break;

			case 'SchoolPage':
		    (new SchoolPageEditView({model: this.model })).render();
			break;
	  	}
	},
	
});

$(function(){
	window.App = new AppView;	
});


// Set the _id and then call fetch to use the backbone connector to retrieve it from couch
// Uncomment different lines below to test different page types

//subtest = new Subtest({_id: "Assessment.The Gambia EGRA May 2011.ReadingComprehensionInstructions"}); //TextPage
//subtest = new Subtest({_id: "Assessment.The Gambia EGRA May 2011.Letters"}); //ToggleGridWithTimer
//subtest = new Subtest({_id: "Assessment.The Gambia EGRA May 2011.School"}); //SchoolPage
/*subtest = new Subtest({_id: "Assessment.The Gambia EGRA May 2011.PupilContextInterview"}); //Interview


subtest.fetch({
  success: function(model){
  	
  	switch( model.get("pageType") ) {
		case 'TextPage':
		    (new TextPageEditView({model: model})).render();
		break;

		case 'ToggleGridWithTimer':
		    (new ToggleGridWithTimerEditView({model: model})).render();
		break;

		case 'SchoolPage':
		    (new SchoolPageEditView({model: model})).render();
		break;

		case 'Interview':
		    (new InterviewEditView({model: model})).render();
		break;
  		
  	}
  }
})
*/