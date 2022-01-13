//P3: Write a program to draw a pattern given below from 0-9. 
/* 
11111
22222
33333
44444
55555
*/

var n = 7;
var num = "";

for(let i = 0; i < n; i++)
{
    for(let j = 0; j < n; j++)
    {
        num += i + 1;
    }
    num += "\n";
}
console.log(num);