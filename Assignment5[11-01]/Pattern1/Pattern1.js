//P1:- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed)
/*
# * * * #
* # * # *
* * # * *
* # * # *
# * * * #
*/
var num = ""
var n = 5;
for(let i = 0; i < n; i++)
{
    for(let j = 0; j < n; j++)
    {
        if(i==j || i+j == n - 1)
        {
            num += "# ";
        }
        else 
        {
            num += "* "
        }
    }
    num += "\n"
}
console.log(num);