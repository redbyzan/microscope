/**
 * Created by roger on 2016. 7. 4..
 */
Template.postsList.helpers({
  posts : () => {
    return Posts.find();
  }
});
