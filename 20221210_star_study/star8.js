document.write("<br>");
document.write("<br>");

var odd_num = parseInt(prompt('홀수'));
if(parseInt(odd_num) % 2 == 0) {
    alert("홀수를 입력하세요.");
    var odd_num = parseInt(prompt('홀수'));
} 

var odd_half = parseInt(odd_num/2);
var s = 0;
var d = 0;
for( var i = 0; odd_num>i; i++){
    for(var j = 0; odd_num>j; j++){
        if(
            i==odd_half ||
            j==odd_half ||
            j>=odd_half-s && j < odd_half ||
            j<=odd_half+s && j > odd_half
        ) {
            document.write('*');
        } else{
            document.write('-');
        }
    }
    if(s >= odd_half){
        s--;
        d=1;
    } else{
        if(d==1){
            s--;
        } else{
            s++;
        }
    }
    document.write('<br>');
}