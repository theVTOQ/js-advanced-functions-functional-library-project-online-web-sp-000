const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection === "object" && typeof collection !== null){
        Object.keys(collection).forEach((key) => callback(collection[key]));
      }else{
        //let index = 0;
        collection.forEach(item => {
          callback(item);
          //index++;
        });
      }
      return collection;
    },

    map: function(collection, callback) {
      if (typeof collection === "object" && typeof collection !== null){
        return Object.keys(collection).map((key) => callback(collection[key]));
      }else{
        return collection.map(item => callback(item));
      }
    },

    reduce: function(collection, callback, startingValue) {
      if startingValue == undefined{
        return collection.reduce(callback);
      }else{
        return collection.reduce(callback, startingValue);
      }
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
