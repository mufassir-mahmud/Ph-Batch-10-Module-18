// const age = 22;
// if(age > 18){
//     console.log('You can vote');
// }
// else{
//     console.log('You cant vote');
// }
const age = 22;
age >= 18 ? console.log('You can vote') : console.log("You can't vote");

let price = 500;
const isleader = false;
// if(isleader == true){
//     price = 0;
// }
// else{
//     price += 100;
//  }
//  console.log(price);
// price = isleader == true ? 0 : price + 100;
// console.log(price);
// if(isleader == true){
//     if(price > 1000){
//         price /= 2;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price += 100;
// }
price = isleader == true ? price > 1000 ? price /=2 : price = 0 : price += 100;
console.log(price);

