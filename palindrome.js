process.stdin.resume();
process.stdin.setEncoding('utf8');

let input='';

process.stdin.addListener('data', d => {
  input+=d.toString()
});

process.stdin.addListener('end', () => {
    var s = '';
    var len = input.length-1;
    var mid = len/2;
    for(var i =0; i <= mid; i++) {
        if(!(input[i] == input[len--])) { console.log('NOT PAL'); break; }
        if(i >= mid) console.log('PAL')
    }
});
