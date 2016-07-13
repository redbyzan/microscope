/**
 * Created by roger on 2016. 7. 7..
 */
Template.postEdit.created = function () {
  Session.set('postEditErrors', {});
}

Template.postEdit.helpers({
  errorMessage: function (field) {
    return Session.get('postEditErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('postEditErrors')[field] ? 'has-error' : '';
  }
});

Template.postEdit.events({
  'submit form': function (e) {
    e.preventDefault();

    console.log("edit this is ", this);

    const currentPostId = this._id;

    const postProperties = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    const errors = validatePost(postProperties);
    if (errors.title || errors.url)
      return Session.set('postEditErrors', errors);

    Posts.update(currentPostId, {$set: postProperties}, function (err) {
      if (err) {
        console.log("edit error is ", err);
        throwError(err.reason);
      }
      else
        Router.go('postPage', {_id: currentPostId});
    });
  },

  'click .delete': function (e) {
    e.preventDefault();

    if (confirm("Delete thie post?")) {
      const currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});