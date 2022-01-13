//P1: Write a program to draw a pattern given below from 0-100.
/*
*****
*****
*****
*****
*****
*/

var n = 5;
var star = "";

for(let i = 0; i < n; i++)
{
    for(let j = 0; j < n; j++)
    {
        star += "*";
        //star += "\n";
    }
    star += "\n";
}
console.log(star);