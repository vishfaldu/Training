//Pattern-dynamic

var num = ""
var n = 5

console.log(num)
for (let i = 0; i < 1; i++) {
    for (let j = -n; j <= n; j++) {

        if (i == 0 && j == 0)
            num += "O"
        else
            num += " "
    }
    //num += "\n"
}

for (let k = 0; k < n - 1; k++) {
    for (let i = 0; i <= n; i++) {
        for (let j = -n; j <= n; j++) {

            if (i + j == 0 && (j != 0))
                num += "/"
            else if (i - Math.abs(j) >= 1)
                num += "-"
            else if (i - j == 0 && (j != 0))
                num += "\\"

            else
                num += " "
        }
            num += "\n"
    }
}

for (let i = 0; i <= n; i++) {
    for (let j = -n; j <= n; j++) {
        //if (i > (n * 2) && i <= n * n && (j == -1 || j == 1))
        //else if (i >= (n + n) + 1 && j == 0 || i == (n * n) + 1)
        if (i == n || Math.abs(j) == 0)      //bottom
            num += "="
        else if (Math.abs(j) == 1)
            num += "|"

        else
            num += " "

    }
   num += "\n"
}
console.log(num)
