//P6: Write a program to draw a pattern given below from 0-9.  
/* 
    1
   121
  12321
 1234321
123454321
*/
var n = 5;
var num = "";
var count;

for(let i = 0; i < n; i++)
{
    for(let j = 0; j < (2*n) - 1; j++)
    {
        if((i+j) >= n - 1 && Math.abs(i-j) <= n - 1)
        {
            if(j <= n - 1)
            {
                count++;
                num += count;
            }
            else
            {
                count--;
                num += count;
            }
        }
        else
        {
            num += " ";
            count = 0;
        }
    }
    num += "\n";
}
console.log(num)