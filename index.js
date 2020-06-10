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
      if (startingValue == undefined){
        return collection.reduce(callback);
      }else{
        return collection.reduce(callback, startingValue);
      }
    },

    find: function(collection, value){
      return collection.find(value);
    },

    filter: function(collection, value){
      return collection.filter(value);
    },

    size: function(collection){
      if (typeof collection === "object" && typeof collection !== null){
        return Object.keys(collection).length;
      }else{
        return collection.length;
      }
    },

    first: function(collection, endingIndex){
      if (endingIndex == undefined){
        return collection[0];        
      }else{
        return collection.slice(0, endingIndex);
      }
    },
    
    last: function(collection, startingIndex){
      if (startingIndex == undefined){
        const length = collection.length;
        return collection[length - 1];        
      }else{
        return collection.slice(startingIndex * -1);
      }
    },

    compact: function(collection){
      return collection.filter(element => !!element);
    },

    sortBy: function(collection, callback){
      return collection.concat().sort((a, b) => callback(a) - callback(b));
    },

    flatten: function(collection, depthIsOne = false, result = []){
      // .flat is not a function...? Maybe too new a feature in JS
      //return depthIsOne ? collection.flat() : collection.flat(Infinity);
      if (depthIsOne){
        collection.forEach(element => {
          if(Array.isArray(element)){
              element.forEach(subElement => {
                result.push(subElement);
              });
          }else{
            result.push(element);
          }
        });
        return result;
      }else{
        return collection.reduce((a, b) => 
          a.concat(Array.isArray(b) ? fi.flatten(b) : b), []
        );
      }
    },

    uniq: function(collection, isSorted = true, callback){
      if (callback == undefined){
        callback = function(value) {return value};
       }
      
      //reduce/map approach:
      if(!isSorted){
        collection.sort();
      }

      const callbackCollection = collection.map(callback);
      console.log(collection);
      console.log(callbackCollection);

      return collection.filter((element, index, array) => callbackCollection.indexOf(callback(element)) === index);

      // object approach (only one iteration):
      const uniqueElements = [];

      const callbackOccurences = {}; //{value: occurences}
      collection.forEach(element => {
        const callbackValue = callback(element);
        const existingCallbackOccurences = callbackOccurences[callbackValue];

        if (existingCallbackOccurences == undefined){
          callbackOccurences[callbackValue] = 1;
          uniqueElements.push(element);
        }
      });

      return uniqueElements;
    },

    keys: function(collection){
      return Object.keys(collection);
    },

    values: function(collection){
      return Object.values(collection);
    },

    functions: function(object){
      return Object.keys(object).filter(key => typeof object[key] === "function").sort();
    }   
  }
})()

fi.libraryMethod()
