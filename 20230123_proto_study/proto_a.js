// function starCharacter(name, attack, exp) {
//     return {
//         이름 : name,
//         공격력: attack,
//         체력: exp,
//         타입: '캐릭터',
//         공격: function(){},
//         방어: function(){}
//     }
// }

// var starChar_1 = starCharacter('일꾼', 3, 10);
// var starChar_2 = starCharacter('드라군', 5, 18);
// var starChar_2 = starCharacter('질럿', 4, 5);

// console.log(starCharacter);

var att = {
    타입: '캐릭터',
    공격 : function() {console.log('공격')},
    방어: function() {console.log('빙어')}
}

function starCharacter(name, attack, exp) {
    var char = Object.create(att);
    char.name = name;
    char.attack = attack;
    char.exp = exp;
    return char
}

var starChar_1 = starCharacter('일꾼', 3, 10);
var starChar_2 = starCharacter('드라군', 5, 18);
var starChar_3 = starCharacter('질럿', 4, 5);

starChar_1.공격();
starChar_3.방어();
console.log(starChar_1);
