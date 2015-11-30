exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var found = -1;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        found = i;
      }
    }

    return found;
  },

  sum : function(arr) {
    var temp = 0;

    for (var i = 0; i < arr.length; i++) {
      temp += arr[i];
    }

    return temp;
  },

  remove : function(arr, item) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != item) {
        newArr.push(arr[i]);
      }
    }

    return newArr;
  },

  removeWithoutCopy : function(arr, item) {
    var count = 0;

    var del = function(found,array) {
      for (var i = 0; i < array.length; i++) {
        if (found === array[i]) {
          array.splice(i,1);
        }
      }
    }
    console.log("orig:",arr);
    for (var i = 0; i < arr.length; i++) {
      del(item,arr);
    }

    // delete(item,arr);
    console.log("final:",arr);
    return arr;
  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
