/**
 * Created by roger on 2016. 7. 7..
 */
Template.errors.helpers({
  errors : function () {
    return Errors.find();
  }
});

Template.error.rendered = function () {
  const error = this.data;
  Meteor.setTimeout(function() {
    Errors.remove(error._id);
  }, 3000);
};