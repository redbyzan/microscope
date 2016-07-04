/**
 * Created by roger on 2016. 7. 4..
 */
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate : 'notFound',
  waitOn: () => {
    return Meteor.subscribe('posts');
  }
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
  name: 'postPage',
  data : () => {
    return Posts.findOne(this.param._id);
  }
});

//Router.onBeforeAction('dataNotFound', {only : 'postPage'});