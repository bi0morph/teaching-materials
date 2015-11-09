function mult () {
  var args = [].slice.call(arguments);
  if (args.length <= 2) {
    return args[0] * args[1];
  }
  return (args[0] * mult.apply(null, args.slice(1)) );
}

mult(3, 4, 5); // 60

console.log( mult(3, 4, 5, 6) ); // 360
