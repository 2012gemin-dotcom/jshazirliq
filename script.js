function isLucky(n) {
    const str = n.toString();
    if (str.length !== 6) return false;

    const sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
    const sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

    return sum1 === sum2;
}

console.log(isLucky(234801));