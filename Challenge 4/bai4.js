
var billValues = [275, 40, 430];

billValues.forEach(bill => {
    var tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

    var totalValue = bill + tip;

    console.log("The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value is ${totalValue.toFixed(2)}");
});