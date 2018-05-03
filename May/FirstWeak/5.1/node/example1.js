// console.log("hellow world");
// process.stdin.resume();
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
  process.stdout.write('data: ' + chunk);
});
process.stdin.on('end', function () {
  process.stdout.write('end');
});