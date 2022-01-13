//Pattern-advanced

var num = ""
var n = 9;

for (let i = -(n + 1); i <= (n + 1); i++) {
    for (let j = -(n + 1); j <= (n + 1); j++) {
        if (i == 0 && j == 0)
            num += "X"
        else if (-n < i < cn && (j == -(n + 1) || j == (n + 1)))
            num += "|"
        else if (-n < j < n && (i == -(n + 1) || i == (n + 1)))
            num += "="
        else if (i == 0 && -n < j < n)
            num += "O"
        else if (-n < i < n && j == 0)
            num += "0"
        else if (i == j)
            num += "\\"
        else if (i + j == 0)
            num += "/"
        else if (Math.abs(i) - Math.abs(j) >= 0) {
            if ((i < 0 && j > 0) || (i > 0 && j < 0))
                num += String.fromCharCode((Math.abs(j)) + 97)
            else
                num += Math.abs(j)
        }
        else if (Math.abs(i) - Math.abs(j) <= 0) {
            if ((i < 0 && j < 0) || (i > 0 && j > 0))
                num += String.fromCharCode((n - Math.abs(j) + 1) + 97)
            else
                num += (n - Math.abs(j) + 1)
        }

        else
            num += " "
    }
    num += "\n"
}
console.log(num)