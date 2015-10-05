// Answer to Question 1 - Show me how to calculate the average price of all items.

  // Answer Formulae
  var AllPrices = items.map(function(i) {return i.price;});
  var AvPrice  = AllPrices.reduce(function(a,b){
    var TotalPrice = a + b
    return TotalPrice
  }) / AllPrices.length;

  // Filling the Page
  var answer1string = "The average price is $" + AvPrice.toFixed(2)
  var text1 = document.createTextNode(answer1string);
  var answer1 = document.querySelector('#answer1');
  answer1.appendChild(text1);

// Answer to Question 2 - Show me how to get an array of items that cost between $14.00 and $18.00 USD

  // Answer Formulae
  var RangePrices = []
  items.filter(function(i) {                           /*Filter and Map do the same thing here.  Why?!*/
    if((14 < i.price)&&(i.price < 18)){
    RangePrices.push(i.title);
    return RangePrices;
    }
  });

  // Filling the Page
  var answer2 = document.querySelector('#answer2');
  
  RangePrices.forEach(function(i){
    var text2 = document.createTextNode(i);
    var line = document.createElement('br');
    answer2.appendChild(text2);
    answer2.appendChild(line);
  })

// Answer to Question 3 - Which item has a "GBP" currency code? Display it's name and price.

  //Answer Formulae
  var GBPitem = []
  items.filter(function(i) {
    if(i.currency_code === "GBP") {
      GBPitem.push(i);
      var GBPtitle = GBPitem.title;
      var GBPprice = GBPitem.price;
      return GBPitem;
      return GBPtitle
      return GBPprice
    }
  });

  // Filling the Page
  var answer3string = GBPitem.title + " costs " + GBPitem.price
  var text3 = document.createTextNode(answer3string);
  var answer3 = document.querySelector('#answer3');
  answer3.appendChild(text3);  

// Answer to Question 4 - Display a list of all items who are made of wood.

  // Answer Formulae
  var Wooditem = []
  items.filter(function(i) {
    if(i.materials == 'wood') {
      Wooditem.push(i.title);
      return Wooditem.title;
  }});

  // Filling the Page
  var answer4 = document.querySelector('#answer4');
  
  Wooditem.forEach(function(i){
    var text4 = document.createTextNode(i.title);
    var line = document.createElement('br');
    answer4.appendChild(text4);
    answer4.appendChild(line);
  })

// Answer to Question 5 - Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

  // Answer Formulae
  var EightMaterials = []
  var itemMaterials = []

  items.filter(function(i) {
    if (i.materials.length >= 8) {
      EightMaterials.push(i);
    };
    return EightMaterials;
  });

  EightMaterials.filter(function(i) {
    if (i.materials.length >= 8) {
      itemMaterials.push(i.materials);
      return itemMaterials;
    };
  })

  // Filling the Page
  EightMaterials.forEach(function(i) {
    var answer5string = i.title + ' is made of ' + i.materials.length +' materials'
    var text5 = document.createTextNode(answer5string);
    var line = document.createElement('br');
    var answer5 = document.querySelector('#answer5');
    answer5.appendChild(text5);
    answer5.appendChild(line);

  itemMaterials.forEach(function(x){
    var text5 = document.createTextNode(x);
    var line = document.createElement('br');
    var answer5 = document.querySelector('#answer5');
    answer5.appendChild(text5);
    answer5.appendChild(line);
  })
});

// Answer to Question 6 - How many items were made by their sellers?

  // Answer Formulae
  var MadeBySeller = []
  items.filter(function(i){ 
    if (i.who_made === 'i_did') {
      MadeBySeller.push(i);
    }
    return MadeBySeller;
  })

  // Filling the Page
    var answer6string = MadeBySeller.length + " items were made by their sellers."
    var text6 = document.createTextNode(answer6string);
    var answer6 = document.querySelector('#answer6');
    answer6.appendChild(text6);