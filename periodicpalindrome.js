importPackage(java.io);
importPackage(java.lang);

var read = new BufferedReader( new InputStreamReader(System['in']) );

var testcases = read.readLine();
var seq = 0;

for (var k = 0; k < testcases; k++) {
    var np = read.readLine();
    np = String(np).split(' ');
    var len = Number(np[0]);
    var period = Number(np[1]);
    if (len % period !== 0) System.out.println("impossible");
    else if (len == 1 || period == 1) System.out.println("impossible");
    else if (len == 2 && period == 2) System.out.println("impossible");
    else {
        var pal = [];
        var i = 0;
        if (len % 2 === 0) {
            var seq = 0;
            var j = len-1;
            while (i <= j) {
            if (seq) { pal[i] = 'b'; pal[j] = 'b'; seq = 0;}
            else {
                pal[i] = 'a'; pal[j] = 'a';
                seq = 1;
            }
            i++; j--;
        }
        }
        else {
            var j = len - 1;
            var seq = 0;
            while (i <= j) {
            if (seq) { pal[i] = 'b'; pal[j] = 'b'; seq = 0;}
            else {
                pal[i] = 'a'; pal[j] = 'a';
                seq = 1;
            }
            i++; j--;
        }
        }
        System.out.println(pal);
    }
    
}
