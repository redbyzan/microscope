/**
 * Created by roger on 2016. 7. 4..
 */
Router.configure({
  layoutTemplate : 'layout'
});

Router.map(() => {
  this.route('postsList', {path : '/'});
});
