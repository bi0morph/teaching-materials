function foo() {
  return 66;
}

function bar() {
  return 100;
}

function baz(x) {
  return function() {
    return x;
  };
}

function add(x, y) {
  return x + y;
}

function add2(fn1, fn2) {
  return add(fn1(), fn2());
}

function addnLoop(list) {
  var total = 0;
  for (i = 0; i < list.length; i++) {
    total = add2(list[i], baz(total));
  };
  return total;
}
function addnRecurcive(list) {
  var listCopy = [].slice.call(list);
  if (listCopy.length <= 2) {
    return add2(listCopy[0], listCopy[1]);
  }
  return addnRecurcive(listCopy[0], listCopy.slice(1));
}
function addnMap(list) {
  var total = 0;

  list.map(function(item) {
    total = add2(item, baz(total));
    return item;
  });

  return total;
}
function addnReduce(list) {
  return list.reduce(function(prev, current) {
    return add2(current, baz(prev));
  }, baz(0));;
}

[1,2,3,4,1,2,3,4,5,22,2,4,1].reduce(function(prev, curr) {
  if( !prev.indexOf(curr) < 0) {
    prev.push(curr);
  }
  return prev;
}, []);

[1,2,3,4].filter(function(item) {
  return item % 2 === 0;
});
