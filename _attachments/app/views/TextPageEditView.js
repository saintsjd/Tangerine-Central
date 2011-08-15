var TextPageEditView = Backbone.View.extend({
  el: $("#app"),
  template: loadTemplate("TextPageEdit.template.html"),
  initialize: function (){
    this.model.view = this;
  },
  events: {
    "click button:contains('Save')" : "save",
  },
  save: function() {
    this.model.set({"content": this.$("textarea").val()}).save();
  },
  render: function(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
});
