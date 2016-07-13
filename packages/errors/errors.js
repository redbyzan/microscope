/**
 * Created by roger on 2016. 7. 13..
 */
Errors = {
  collection: new Meteor.Collection(null),

  throw: function (message) {
    Errors.collection.insert({message: message, seen: false})
  },
  clearSeen: function () {
    Errors.collection.remove({seen: true});
  }
};