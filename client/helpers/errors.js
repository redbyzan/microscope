/**
 * Created by roger on 2016. 7. 7..
 */
Errors = new Mongo.Collection(null); // null 을 지정하면 서버에 저장이 되지 않음

throwError = function(msg) {
  Errors.insert({message : msg});
};
