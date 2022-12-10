document.write("<br>");
document.write("<br>");
document.write('.');
for(var i = 0; i < 10; i++ ){
    document.write(i);
}
document.write("<br>");

var odd_num = 9;
var odd_half = (odd_num-1) / 2;
var s = 0;
var d = 0;

for(var i = 0; i < odd_num; i++ ){
    document.write(i);

    for (j = 0; j < odd_num; j++) {
        if (
            j == odd_half ||
            i == odd_half ||
            (j - i <= odd_half && i < odd_half && j > odd_half) ||// 1
            (i + j >= odd_half && i < odd_half && j < odd_half) || // 2
            (i - j <= odd_half && i > odd_half && j < odd_half) || // 3
            (i + j <= odd_half * 3 && i > odd_half && j > odd_half) // 4
        ) {
            document.write('*');
        } else {
            document.write('-');
        }
    }
    document.write("<br>");
}

document.write('<br>');

