var SubtestFormView = Backbone.View.extend({

  el: "#subtest-edit #edit-form",

  initialize: function(){
	this.model.bind("change", this.render, this );
  },
  
  render: function() {
    var type = this.model.get("pageType");
    
    switch( type ) {
    	case "TextPage":
    		this.template = loadTemplate("TextPageEdit.template.html");
    		this.events = { "click button:contains('Save')" : "saveTextPage" };
    	break;
    	
    	case "ToggleGridWithTimer":
    		this.template = loadTemplate("ToggleGridWithTimerEdit.template.html");   
    		this.events = {
    			"click button:contains('Sort')" : "sortToggleGridWithTimer",
    			"click button:contains('Shuffle')" : "shuffleToggleGridWithTimer",
    			"click button:contains('Save')" : "saveToggleGridWithTimer",
  			}; 	
    	break;

    	case "SchoolPage":
    		this.template = loadTemplate("SchoolPageEdit.template.html");   
    		this.events = {
			    "click button:contains('Save')" : "saveSchoolPage",
  			}; 	
    	break;

    	case "ConsentPage":
    		this.template = loadTemplate("TextPageEdit.template.html");
    		this.events = { "click button:contains('Save')" : "saveTextPage" };
    	break;
    
    	case "StudentInformationPage":
    		this.template = loadTemplate("StudentInformationPageEdit.template.html");
    		this.events = {
    			"click button:contains('Save')" : "saveStudentInformationPage",
		    	"click button:contains('Add')" : "addStudentInformationPage",
  			};
    	break;

    	case "PhonemePage":
    		this.template = loadTemplate("PhonemePageEdit.template.html");
    		this.events = {
				"click button:contains('Save')" : "savePhonemePage",
				"click button:contains('Add')" : "addPhonemePage",
			};
    	break;

    	case "Interview":
    		this.template = loadTemplate("InterviewEdit.template.html");
    		this.events = {
				"click button:contains('Save')" : "saveInterview",
				"click button:contains('Add')" : "addInterview",
			};
    	break;


    }

	this.delegateEvents();
   	$(this.el).html(this.template(this.model.toJSON()));
    
    return this;
  },
  
  
  saveTextPage: function() {
  	this.model.set({"content": this.$("textarea").val()}).save();
  },
        
        
  saveToggleGridWithTimer: function() {
  	var letters = this.$("textarea").val().split(" ");
    this.model.set({"letters": letters} ).save();
  },

  sortToggleGridWithTimer: function() {
  	var letters = this.$("textarea").val().split(" ");
    letters.sort();
    
    var mush = "";
    $.each(letters,function(index, value) {
    	if( value != "")
    	  mush = mush + value + " ";
    });
    this.$("textarea").val(mush);
  },

  shuffleToggleGridWithTimer: function() {
  	var letters = this.$("textarea").val().split(" ");

	// quick examples taken from here: http://snippets.dzone.com/posts/show/849
    for(var j, x, i = letters.length; i; j = parseInt(Math.random() * i), x = letters[--i], letters[i] = letters[j], letters[j] = x);

    var mush = "";
    $.each(letters,function(index, value) {
    	if( value != "")
    	  mush = mush + value + " ";
    });
    this.$("textarea").val(mush);
  },        

  saveSchoolPage: function() {
  	var schools = [];
  	
  	//for each line in the text area (these are schools)
  	// map the name,district,schoolId,province row to a javascript obejct
  	$.each( this.$("textarea").val().split("\n"), function( index, schoolLine ) { 
  		var school = {};
  		var row = schoolLine.split(",");
  		school.name = row[0];
  		school.district = row[1];
  		school.schoolId = row[2];
  		school.province = row[3];
  		if( school.name != "" )
	  		schools.push( school );
  	});
    this.model.set({"schools": schools }).save();
  },
 
 
  saveStudentInformationPage: function() {
  	var radioButtons = new Array();
 	this.$("ol li").each(function( index, value ){
 		var radioButton = {};
 		radioButton.label = $(value).find('input[name="label"]').val();
		radioButton.options = new Array();
		//TODO add .type and .name
		
		$.each( $(value).find("textarea").val().split("\n"), function( idx, option ) { 
	  		radioButton.options.push(option);
  		});		

		if( radioButton.label != "" )
		radioButtons.push(radioButton);
 	});

	this.model.set({"radioButtons":  radioButtons } ).save();
  },

  addStudentInformationPage: function() {
 	var template = loadTemplate("NewRadioButtonForm.template.html");
 	this.$("ol").append(template());
  },
 
  savePhonemePage: function() {
  	var words = new Array();
 	this.$("ol li").each(function( index, value ){
 		var word = {};
 		word.word = $(value).find('input[name="word"]').val();
 		word["number-of-sounds"] = $(value).find('input[name="number-of-sounds"]').val();
		word.phonemes = new Array();
		
		$.each( $(value).find("textarea").val().split("\n"), function( idx, option ) { 
			if( option != "" )
		  		word.phonemes.push(option);
  		});		

		if( word.word != "" )
			words.push(word);
 	});
	this.model.set({"words":  words } ).save();
  },

  addPhonemePage: function() {
 	var template = loadTemplate("NewPhonemeForm.template.html");
 	this.$("ol").append(template());
  }, 


  saveInterview: function() {
  	var radioButtons = new Array();
 	this.$("ol li").each(function( index, value ){
 		var question = {};
 		question.label = $(value).find('input[name="label"]').val();
		question.options = new Array();
		
		$.each( $(value).find("textarea").val().split("\n"), function( idx, option ) { 
			if( option != "" )
		  		question.options.push(option);
  		});		

		if( question.label != "" )
			radioButtons.push(question);
 	});
	this.model.set({"radioButtons":  radioButtons } ).save();
  },

  addInterview: function() {
 	var template = loadTemplate("NewRadioButtonForm.template.html");
 	this.$("ol").append(template());
  },
           
});
