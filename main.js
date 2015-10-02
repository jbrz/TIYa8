// Answer 1 - Show me how to calculate the average price of all items.

var AllPrices = items.map(function(i) {return i.price;});

var TotalPrice = AllPrices.reduce(function(a,b){
  a + b
});

var AvPrice = TotalPrice / AllPrices.length

"The average price is " + AvPrice