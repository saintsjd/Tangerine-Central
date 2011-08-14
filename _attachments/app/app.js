// Set the _id and then call fetch to use the backbone connector to retrieve it from couch

//TextPage
//subtest = new Subtest({_id: "Assessment.The Gambia EGRA May 2011.ReadingComprehensionInstructions"});

//ToggleGridWithTimer
subtest = new Subtest({_id: "Assessment.The Gambia EGRA May 2011.Letters"});


subtest.fetch({
  success: function(model){
  	
  	switch( model.get("pageType") ) {
		case 'TextPage':
		    (new TextPageEditView({model: model})).render();
		break;

		case 'ToggleGridWithTimer':
		    (new ToggleGridWithTimerEditView({model: model})).render();
		break;

  		
  	}
  }
})
