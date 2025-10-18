function getShippingMessage(country,price,deliveryFee){
const deliveryCountry = country;
const productPrice = price;
const shippingFee = deliveryFee;
 const totalPrice = productPrice + shippingFee;
 const message = "Shipping to " + deliveryCountry + " will cost " + totalPrice + " credits";
 return message;
}
console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20)); 
console.log(getShippingMessage("Sweden", 100, 20)); 
