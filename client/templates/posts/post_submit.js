/**
 * Created by roger on 2016. 7. 5..
 */
Template.postSubmit.events({
  'submit form' : (e) => {
    e.preventDefault();

    const post = {
      url : $(e.target).find('[name=url]').val(),
      title : $(e.target).find('[name=title]').val()
    };

    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});