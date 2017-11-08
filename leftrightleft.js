importPackage(java.io);
importPackage(java.lang);

var read = new BufferedReader( new InputStreamReader(System['in']) );

var testcases = read.readLine();

for (var i = 0; i < testcases; i++) {
    var smallR = -999999; var bigL = -999999;
    var temp = read.readLine();
    temp = String(temp).split(' ');
    var nopeople = Number(temp[0]);
    var rating = Number(temp[1]);
    var ratings = read.readLine();
    ratings = String(ratings).split(' ');
    
    for (var j = 0; j < nopeople; j++) {
        if(rating == Number(ratings[j])) { System.out.println("YES"); break; }
        else if(rating < Number(ratings[j])) {
            if (smallR == -999999) { smallR = Number(ratings[j]); }
            else if (Number(ratings[j]) > smallR) { System.out.println("NO"); break; }
            else smallR = Number(ratings[j]);
        }
        else if(rating > Number(ratings[j])) {
            if (bigL == -999999) { bigL = Number(ratings[j]); }
            else if (Number(ratings[j]) < bigL) { System.out.println("NO"); break; }
            else bigL = Number(ratings[j]);
        }
    }
}
