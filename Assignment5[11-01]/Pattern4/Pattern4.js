//P4:- Write a program to draw a pattern given below from 0-9. 
/*
0 0 0 0 0 0 0 0 0 0 0 0 0
0 a b c d e f 5 4 3 2 1 0
0   a b c d e 4 3 2 1   0
0     a b c d 3 2 1     0
0       a b c 2 1       0
0         a b 1         0
0           a           0
0         1 b a         0
0       1 2 c b a       0
0     1 2 3 d c b a     0
0    1 2 3 4 e d c b a  0
0 1 2 3 4 5 f e d c b a 0
0 0 0 0 0 0 0 0 0 0 0 0 0
*/
var num = ""
var n = 9
var arr = ['a', 'b', 'c', 'd', 'e', 'f']

for (let i = -n - 1; i <= n + 1; i++) {

    for (let j = -n - 1; j <= n + 1; j++) {
        if (j == (n + 1) || i == (n + 1) || j == -(n + 1) || i == -(n + 1))     //for border
            num += "0"
        else if (Math.abs(i) - Math.abs(j) >= 0) {
            if ((i < 0 && j > 0) || (i > 0 && j < 0))
                num += Math.abs(i) - Math.abs(j) + 1
            else
                //num += arr[Math.abs(i) - Math.abs(j)]                     //with array
                num += String.fromCharCode(Math.abs(i) - Math.abs(j) + 97)  //with ascii
        }

        else
            num += " "
    }
    num += "\n"
}
console.log(num)
