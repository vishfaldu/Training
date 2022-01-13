//Pattern

var num = ""
var n = 5;

for (let i = -(n + 1); i <= (n + 1); i++) {
    for (let j = -(n + 1); j <= (n + 1); j++) {
        if (i == 0 && j == 0)
            num += "O"
        else if (-n < i < n && (j == -(n + 1) || j == (n + 1)))
            num += "O"
        else if (-n < j < n && (i == -(n + 1) || i == (n + 1)))
            num += "0"

        else if (Math.abs(i) - Math.abs(j) <= 0 && ((i > 0 && j < 0) || (i < 0 && j > 0)))
            num += (n - Math.abs(j)) + 1

        else if (Math.abs(i) - Math.abs(j) >= 0 && ((i > 0 && j > 0) || (i < 0 && j < 0)))
            num += Math.abs(j)

        else
            num += " "

    }
    num += "\n"
}
console.log(num)