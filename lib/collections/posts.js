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
  insert: (userId, doc) => {
    return !!userId;
  }
});