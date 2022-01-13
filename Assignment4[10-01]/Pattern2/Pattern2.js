//P2: Write a program to draw a pattern given below from 0-9.
/* 
12345
12345
12345
12345
12345
*/

var n = 7;
var num = "";

for(let i = 0; i < n; i++)
{
    for(let j = 0; j < n; j++)
    {
        num += j + 1;
    }
    num += "\n";
}
console.log(num);
