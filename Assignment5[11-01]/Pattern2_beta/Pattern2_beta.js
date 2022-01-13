//P2(beta):- Write a program to draw a pattern given below from 0-9. 
/* 
---@@---
--@@@@--
-@@@@@@-
@@@@@@@@
@@@@@@@@
-@@@@@@-
--@@@@--
---@@---
*/

var num = ""
var n = 4

for (let i = -n; i <= n; i++) {
    if(i == 0)  continue;
    for (let j = -n; j <= n; j++) {
        if(j == 0)  continue;
        
        if (Math.abs(i) + Math.abs(j) <= n + 1)
            num += "@"
        else
            num += "-"
    }
    num += "\n"
}
console.log(num)