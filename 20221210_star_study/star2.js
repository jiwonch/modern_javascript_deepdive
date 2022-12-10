document.write("<br>");
document.write("<br>");

for(var i = 0; i < 10; i++) {
    document.write(i);
}

document.write("<br>");

for(var i = 0; i<10; i++) {
    if( i % 2 == 0) {
        document.write('+');
    } else {
        document.write('-');
    }
}