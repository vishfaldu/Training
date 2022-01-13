//P3:- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed)
/*
\ - - - /
| \   / | 
|   o   |
| /   \ |
/ - - - \
*/
var num = ""
var n = 5

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {

        if (i == j) 
        {
            if ((i == Math.round((n/2) - 1)))
                num += "o"
            else
                num += "\\"
        }

        else if (i + j == n - 1)
            num += "/"

        else if ((i == 0 || i == n - 1) && (j > 0 && j < n - 1))
            num += "-"

        else if ((j == 0 || j == n - 1) && (i > 0 && i < n - 1))
            num += "|"

        else
            num += " "

    }
    num += "\n"
}
console.log(num)

/*
for(let i = -n; i < n; i++)
{
    for(let j = -n; j < n; j++)
    {
        if(i == j)
            num += "\\"
        
        else if(i == -j || -i == j)
            num += "\/"


    }
    num += "\n"
}
console.log(num)
*/