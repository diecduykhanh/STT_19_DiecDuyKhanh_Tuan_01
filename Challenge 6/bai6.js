
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

var billValue = 100;
var tipValue = calcTip(billValue);
console.log("The tip for a bill of $${billValue} is $${tipValue}");

var bills = [125, 555, 44];

var tips = bills.map(calcTip);

var total = bills.map(bill => bill + calcTip(bill));

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total:", total);