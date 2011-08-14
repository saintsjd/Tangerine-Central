// Set the _id and then call fetch to use the backbone connector to retrieve it from couch
// Uncomment different lines below to test different page types

//subtest = new Subtest({_id: "Assessment.The Gambia EGRA May 2011.ReadingComprehensionInstructions"}); //TextPage
//subtest = new Subtest({_id: "Assessment.The Gambia EGRA May 2011.Letters"}); //ToggleGridWithTimer
subtest = new Subtest({_id: "Assessment.The Gambia EGRA May 2011.School"}); //SchoolPage


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
  		
  	}
  }
})
