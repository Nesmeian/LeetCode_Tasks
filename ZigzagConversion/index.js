function convert(s, numRows) {
    if (numRows <= 1 || numRows >= s.length) return s;

    let result = Array.from({ length: numRows }, () => "");

    let currentRow = 0; 
    let goingDown = false; 

    for (let i = 0; i < s.length; i++) {
        result[currentRow] += s[i];
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }
    return result.join("");
}

