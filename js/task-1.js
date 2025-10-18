function makeTransaction(quantity,pricePerDroid){
  const numberOfDroids = quantity;
  const priceOfOneDroid = pricePerDroid;
  const totalPrice = numberOfDroids * priceOfOneDroid;
  const message = "You ordered " + numberOfDroids + " droids worth " + totalPrice + " credits!";
  return message;
}
console.log(makeTransaction(5, 3000)); 
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
