//P2:- Write a program to draw a pattern given below from 0-9.  (max 2 or 4 loop allowed)
/* 
    @
   @@
  @@@
 @@@@
@@@@@
     @@@@@
     @@@@
     @@@
     @@
     @
*/
var num = ""
var n = 7;
for(let i = 0; i < n; i++)
{
    for(let j = 0; j < n;j++)
    {
        
        if(i + j >= n - 1)    
            num += "@"
        else
            num += " "  
    }
    num += "\n"
}

for(let i = 0; i < n; i++)
{
    for(let k = 0; k < n; k ++)
    {
        num += " "
    }
    for(let j = 0; j < n;j++)
    {
        if(i + j <= n - 1)
            num += "@"
        else
            num += " "
    }
    num += "\n"
}
console.log(num)


/*
//with two for loops
var num = ""
var n = 4

for (let i = -n; i <= n; i++) {
    if(i == 0)  continue;
    for (let j = -n; j <= n; j++) {
        if(j == 0)  continue;
        
        if ((i > 0 && j > 0) && Math.abs(i) + Math.abs(j) <= n + 1 || (i < 0 && j < 0) && Math.abs(i) + Math.abs(j) <= n + 1)
            num += "@"
        else
            num += "-"
    }
    num += "\n"
}
console.log(num)
*/
