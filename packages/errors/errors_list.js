/**
 * Created by roger on 2016. 7. 13..
 */
Template.meteorErrors.helper({
  errors: function () {
    return Errors.collection.find();
  }
});

Template.meteorError.rendered = function () {
  const error = this.data;
  Meteor.defer(function () {
    Errors.collection.update(error._id, {$set: {seen: true}});
  });
};
