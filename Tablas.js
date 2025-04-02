function truthTable() {
    console.log("| A   | B   | A AND B |");
    console.log("|-----|-----|---------|");

    let values = [false, true];

    for (let A of values) {
        for (let B of values) {
            console.log(`| ${A} | ${B} | ${A && B} |`);
        }
    }
}

truthTable();
