/**
 * Initialize the application and switch between tests
 */
window.AppView = Backbone.View.extend({
	
	el: $("body"),
	
	initialize: function(){
		this.model.bind('change', this.updateSubtestGui, this );
		this.editView = new TextPageEditView({model: this.model });
	},
	
	events: {
      "click .switch-test":  "switchSubtest",
    },

	// Based on the PageType of the subtest model, change the GUI for editing
	updateSubtestGui: function(){
	    console.log(this.model.get("_rev"));

		//MUY IMPORTANTE!! - we have to undelagate all events to switch views
	    this.editView.events = {};
	    this.editView.delegateEvents();
	    //this.editView.remove();

	  	switch( this.model.get("pageType") ) {
			case 'TextPage':
			this.editView = new TextPageEditView({model: this.model });
			break;

			case 'ToggleGridWithTimer':
			this.editView = new ToggleGridWithTimerEditView({model: this.model });
			break;

			case 'SchoolPage':
			this.editView = new SchoolPageEditView({model: this.model });
			break;

			case 'ConsentPage':
			this.editView = new ConsentPageEditView({model: this.model });
			break;

			case 'StudentInformationPage':
			this.editView = new StudentInformationPageEditView({model: this.model });
			break;

	  	}
		this.editView.render();
	},
		
	switchSubtest: function(e){
		this.model.clear({silent: true});
		switch( $( e.target ).attr("id") ) {
			case 'TextPage':
				this.model.set({ _id: "Assessment.The Gambia EGRA May 2011.ReadingComprehensionInstructions"}, {silent: true} );
			break;

			case 'ToggleGridWithTimer':
				this.model.set({ _id: "Assessment.The Gambia EGRA May 2011.Letters"}, {silent: true} ); //ToggleGridWithTimer
			break;

			case 'SchoolPage':
				this.model.set({ _id: "Assessment.The Gambia EGRA May 2011.School"}, {silent: true} ); //ToggleGridWithTimer
			break;

			case 'ConsentPage':
				this.model.set({ _id: "Assessment.The Gambia EGRA May 2011.StudentConsent"}, {silent: true} ); //ToggleGridWithTimer
			break;

			case 'StudentInformationPage':
				this.model.set({ _id: "Assessment.The Gambia EGRA May 2011.StudentInformation"}, {silent: true} ); //ToggleGridWithTimer
			break;

		//subtest = new Subtest({_id: "Assessment.The Gambia EGRA May 2011.School"}); //SchoolPage
		//subtest = new Subtest({_id: "Assessment.The Gambia EGRA May 2011.PupilContextInterview"}); //Interview
		}

		this.model.fetch();
		return false;
	},
	
});

$(function(){
	window.subtest = new Subtest();
	window.App = new AppView({ model: window.subtest });
});
