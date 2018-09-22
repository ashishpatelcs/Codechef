process.stdin.resume();
process.stdin.setEncoding('utf8');

let input='';

process.stdin.addListener('data', d => {
  input+=d.toString()
});

process.stdin.addListener('end', () => {
  input = input.split('\n')
  var t = parseInt(input[0]);
  for(var i = 1; i <= t; i++) {
      var counts = input[i].split(' ').filter((a, b) => {
          return a==b
      })
      len = counts.length
      if (len == 1) console.log(counts[0]+1)
      else console.log(Math.max(...counts))
  }
});
