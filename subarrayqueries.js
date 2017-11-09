importPackage(java.io);
importPackage(java.lang);

var read = new BufferedReader( new InputStreamReader(System['in']) );

var testcase = read.readLine();
testcase = String(testcase).split(' ');
var len = testcase[0];
var qu = testcase[1];
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
        for (var j = subL-1; j < subH; j++) {
            for (var k = j; k < subH; k++) {
                if (arr[j] > right || arr[k] > right) break;
                var maxN = max(arr[j], arr[k]);
                if (maxN) {
                    if (arr[j] >= left && arr[j] <= right) count = Number(count + 1);
                }
                else {
                    if (arr[k] >= left && arr[k] <= right) count = Number(count + 1);
                }
            }
        }
        System.out.println(count);
        count = 0;
    }
}
function max(a, b) {
    if (a > b) return 1;
    else return 0;
}
