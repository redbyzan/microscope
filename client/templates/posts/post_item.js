/**
 * Created by roger on 2016. 7. 4..
 */
Template.postItem.helpers({
  ownPost : function() {
    return this.userId === Meteor.userId();
  },

  domain : () => {
    let a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});