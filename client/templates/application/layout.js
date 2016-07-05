/**
 * Created by roger on 2016. 7. 4..
 */
Template.layout.helpers({
  pageTitle : () => {
    return Session.get('pageTitle');
  }
});