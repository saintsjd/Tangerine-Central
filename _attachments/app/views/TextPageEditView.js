var TextPageEditView = Backbone.View.extend({
  el: $("#edit-pane"),
  template: loadTemplate("TextPageEdit.template.html"),
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
