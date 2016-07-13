/**
 * Created by roger on 2016. 7. 5..
 */
Template.postSubmit.created = function () {
  Session.set('postSubmitErrors', {});
}

Template.postSubmit.helpers({

  errorMessage: function (field) {
    return Session.get('postSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
  }

});

Template.postSubmit.events({
  'submit form': (e) => {
    e.preventDefault();

    const post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    const errors = validatePost(post);
    if (errors.title || errors.url)
      return Session.set('postSubmitErrors', errors);

    Meteor.call('postInsert', post, (error, result) => {
      if (error)
        return throwError(error.reason);

      if (result.postExist)
        throwError('This link has already been posted.');

//      Router.go('postPage', {_id: result._id});
    });

    Router.go('postsList');
  }
});