document.write("<br>");
document.write("<br>");

var odd_num = 9;

var odd_half = (odd_num-1) / 2;
var s = 0;
var d = 0;
for (var i = 0; odd_num > i; i++) {
    for (var j = 0; odd_num > j; j++) {
        if (
            i == odd_half ||
            j == odd_half ||
            j >= odd_half - s && j < odd_half ||
            j <= odd_half + s && j > odd_half
        ) {
            document.write('*');
        } else {
            document.write('-');
        }
    }
    if (s >= odd_half) {
        s--;
        d = 1;
    } else {
        if (d == 1) {
            s--;
        } else {
            s++;
        }
    }
    document.write('<br>');
}