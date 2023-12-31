/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let total_expense = {}
  transactions.forEach(element => {
    if(!(element.category in total_expense)){
      total_expense[element.category] = element.price;
    } 
    else{
      total_expense[element.category] += element.price;
    }
  });

  let output = [];
  
  for( key in total_expense){
    output.push({category: key, totalSpent : total_expense[key]});
  }
  return output;
}

module.exports = calculateTotalSpentByCategory;
