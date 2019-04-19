function outer(max) {
  var result = [];
  function inner(n, arr) {
    if (n === max) {
      result.push(arr);
    } else {
      for (var i = 0; i < 2; i++) {
        let newArr = [].concat(arr);
        newArr.push(i);
        inner(n + 1, newArr);
      }
    }
  }
  inner(0, []);
  return result;
}

// [[0-9]]
