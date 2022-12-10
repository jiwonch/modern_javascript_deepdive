document.write("<br>");
document.write("<br>");

document.write('.');
for(var i = 0; i < 10; i++) {
    document.write(i);
}

document.write("<br>");

for(var i = 0; i <10; i++) {
    document.write(i);
    for(var j = 0; j < 10; j++) {
        if(i+j == 9) {
            document.write('*');
        } else {
            document.write('-');
        }
    }
    document.write("<br>");
}