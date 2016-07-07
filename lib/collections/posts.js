/**
 * Created by roger on 2016. 7. 4..
 */
/*
 Var을 적용할까 말까?

 미티어에서, var 키워드는 해당 객체의 영역(scope)을 현재의 파일로 제한한다. 여기서, 우리는 Posts 컬렉션을 앱 전체에서 이용하기를 원한다. 이것이 우리가 var 키워드를 사용하지 않는 이유이다.
 http://kr.discovermeteor.com/chapters/collections/
 */
Posts = new Mongo.Collection('posts');

Posts.allow({
  update : function (userId, post) { return ownsDocument(userId, post); },
  remove : function (userId, post) { return ownsDocument(userId, post); }
});

Posts.deny({
  update : function (userId, post, fieldName) {
    return (_.without(fieldName, 'url', 'title').length > 0 );
  }
});

Meteor.methods({
  postInsert : (postAttributes) => {
    check(Meteor.userId(), String);
    check(postAttributes, {
      title : String,
      url : String
    });

    if ( Meteor.isServer ) {
      postAttributes.title += "(server)";
      Meteor._sleepForMs(3000);
    }
    else {
      postAttributes.title += "(client)";
    }

    const postWithSameLink = Posts.findOne({url : postAttributes.url});
    if ( postWithSameLink ) {
      return {
        postExist : true,
        _id : postWithSameLink._id
      };
    }

    const user = Meteor.user();
    const post = _.extend(postAttributes, {
      userId : user._id,
      author : user.username,
      submitted : new Date()
    });

    const postId = Posts.insert(post);

    return {
      _id : postId
    }
  }
});