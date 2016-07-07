/**
 * Created by roger on 2016. 7. 7..
 */
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
};