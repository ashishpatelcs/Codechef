importPackage(java.io);
importPackage(java.lang);

var read = new BufferedReader( new InputStreamReader(System['in']) );

var testcase = read.readLine();
testcase = String(testcase).split(' ');
var len = Number(testcase[0]);
var qu = Number(testcase[1]);
var left = Number(testcase[2]);
var right = Number(testcase[3]);
var arr = [];

for (var i = 0; i < len; i++) {
    arr.push(Number(0));
}
for (var i = 0; i < qu; i++) {
    var query = read.readLine();
    query = String(query).split(' ');
    if (query[0] == 1) {
        arr[query[1]-1] = Number(query[2]);
    }
    if (query[0] == 2) {
        var count = 0;
        var subL = Number(query[1]);
        var subH = Number(query[2]);
        for (var j = Number(subL-1); j < Number(subH); j++) {
            for (var k = Number(j); k < subH; k++) {
                var maxN = max(j, k);
                if (maxN >= left && maxN <= right) count = count + 1;
            }
        }
        System.out.println(String(count));
        count = 0;
    }
}
function max(a, b) {
    var max = 0;
    for (var i = a; i <=b; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
