/**
 * Created by roger on 2016. 7. 4..
 */
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate : 'notFound',
  waitOn: function() {
    return Meteor.subscribe('posts');
  }
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
  name: 'postPage',
  data : function() {
    console.log("requireLogin this.param is ", this);
    return Posts.findOne(this.params._id);
  }
});

Router.route('/submit', {name : 'postSubmit'});

const requireLogin = function() {
  if ( ! Meteor.user() )
    this.render('accessDenied');
  else
    this.next();
};

Router.onBeforeAction('dataNotFound', {only : 'postPage'});
Router.onBeforeAction(requireLogin, {only : 'postSubmit'});