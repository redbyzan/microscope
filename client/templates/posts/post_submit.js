/**
 * Created by roger on 2016. 7. 5..
 */
Template.postSubmit.events({
  'submit form': (e) => {
    e.preventDefault();

    const post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };


    Meteor.call('postInsert', post, (error, result) => {
      if (error)
        return alert(error.reason);

      Router.go('postPage', result._id);
    });
  }
});