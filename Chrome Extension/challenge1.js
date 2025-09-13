// If possible, use const. If not, use let.
// which variables below should be changed from let to const?
// the customer wants to order some stuff. Here are the details:
const basePrice = 520;
const discount = 120;
let shippingCost = 12;
let shippingTime = "5-12 days";

shippingCost = 15;
shippingTime = "7-14 days";

//calculate the full price
const fullPrice = basePrice - discount + shippingCost;

//notify the customer
console.log("Total Cost: " + fullPrice + ". It will arrive in " + shippingTime)