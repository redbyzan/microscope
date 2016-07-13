/**
 * Created by roger on 2016. 7. 4..
 */
Meteor.publish('posts', () => {
  return Posts.find();
});

Meteor.publish('comments', () => {
  return Comments.find();
});