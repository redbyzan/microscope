/**
 * Created by roger on 2016. 7. 4..
 */
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function () {
    return Meteor.subscribe('posts');
  }
});

Router.onBeforeAction(function () {
  Errors.clearSeen();
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
  name: 'postPage',
  data: function () {
    return Posts.findOne(this.params._id);
  }
});
Router.route('postEdit', {
  path: 'posts/:_id/edit',
  data: function () {
    return Posts.findOne(this.params._id);
  }
});

Router.route('/submit', {name: 'postSubmit'});

const requireLogin = function () {

  if (!Meteor.user()) {

    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
  }
  else
    this.next();
  
};

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});