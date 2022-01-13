//Pattern

var num = ""
var n = 3

for (let i = 0; i <= (n * n) + 1; i++) {
    for (let j = -n; j <= n; j++) {

        if (i == 0 && j == 0)
            num += "O"

        else if (i + j == 0 || (i + j == n && j < 0))
            num += "/"
        else if (i - j == 0 || (i - j == n && j > 0))
            num += "\\"
        else if (i <= n && i - Math.abs(j) >= 1 || i <= 2 * n && i - Math.abs(j) >= n)
            num += "-"

        else if (i > n * 2 && i <= n * n && (j == n - 2 || j == -n + 2))

        num += "|"
        else if (i >= (n + n) + 1 && j == 0 || i == (n * n) + 1)
        num += "="

        else
            num += " "

    }
    num += "\n"
}
console.log(num)
