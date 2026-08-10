let metn = prompt("Lütfən mətn daxil edin:");

if (/\d/.test(metn)) {
    console.log("Mətndə rəqəm var.");
} else {
    console.log("Mətndə rəqəm yoxdur.");
}