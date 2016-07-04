/**
 * Created by roger on 2016. 7. 4..
 */
Router.configure({
  layoutTemplate : 'layout',
  loadingTemplate : 'loading',
  waitOn : () => {
    return Meteor.subscribe('posts');
  }
});

Router.route('/', {name : 'postsList'});
