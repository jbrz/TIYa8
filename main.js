// Answer to Question 1 - Show me how to calculate the average price of all items.

var AllPrices = items.map(function(i) {return i.price;});
var AvPrice  = AllPrices.reduce(function(a,b){
  var TotalPrice = a + b
  return a + b
}) / AllPrices.length;

("The average price is " + AvPrice)


// Answer to Question 2 - Show me how to get an array of items that cost between $14.00 and $18.00 USD
var RangePrices = []
items.filter(function(i) {                           /*Filter and Map do the same thing here.  Why?!*/
  if((14 < i.price)&&(i.price < 18)){
  RangePrices.push(i);
  return i;}});

(????)

// Answer to Question 3 - Which item has a "GBP" currency code? Display it's name and price.

var GBPitem = []
items.filter(function(i) {
  if(i.currency_code === "GBP") {
    GBPitem.push(i.title, i.price);
    return GBPitem[0] + " costs " + GBPitem[1];
}});