importPackage(java.io); 
importPackage(java.lang); 
var reader = new BufferedReader( new InputStreamReader(System['in']) ); 
var noA = 0, noB = 0, noE = 0, flagA = 0, flagB = 0; 
var testcases = reader.readLine(); 
for(var i = 0; i < testcases; i++) { 
var houses = reader.readLine(); 
houses = String(houses); 
for (var j = 0; j < houses.length; j++) { 
if (houses[j] == 'A') {
if (flagA == 1 && noE > 0) { noA = noA + noE + 1; noE = 0; } 
else { noA = noA+1; noE = 0; flagA = 1; } flagB = 0; } 
if (houses[j] == 'B') { if (flagB == 1 && noE > 0) { noB = noB + noE + 1; noE = 0; }
else { noB = noB+1; noE = 0; flagB = 1; } flagA = 0; }
if (houses[j] == '.') { noE = noE + 1; } 
} 
System.out.println(noA+" "+noB); 
noA = 0; noB = 0;
noE = 0; flagA = 0; flagB = 0; 
}
