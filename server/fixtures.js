/**
 * Created by roger on 2016. 7. 4..
 */
if ( Posts.find().count() === 0 ) {

  const now = new Date().getTime();

  const tomId = Meteor.users.insert({
    profile : { name : 'Tom Coleman'}
  });
  const tom = Meteor.users.findOne(tomId);
  const sachaId = Meteor.users.insert({
    profile : { name : 'Sacha Greif'}
  });
  const sacha = Meteor.users.find(sachaId);

  const telescopeId = Posts.insert({
    title : 'Introducing Telescope',
    userId : sacha._id,
    author : sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted : new Date(now - 7 * 3600 * 1000)
  });

  Comments.insert({
    postId : telescopeId,
    userId : sacha._id,
    author : sacha.profile.name,
    submitted : new Date(now - 3 * 3600 * 1000),
    body : 'You sure can Tom!'
  });

  Posts.insert({
    title : 'Meteor',
    userId : tom._id,
    author : tom.profile.name,
    url : 'http://meteor.com',
    submitted : new Date(now - 10 * 3600 * 1000)
  });

  Posts.insert({
    title : 'The Meteor Book',
    userId : tom._id,
    author : tom.profile.name,
    url : 'http://themeteorbook.com',
    submitted : new Date(now - 12 * 3600 * 1000)
  });
}