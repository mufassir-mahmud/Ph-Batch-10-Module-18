const price = 40000;
if ( price >= 5000){
    const discount = price * 10 / 100;
    const afterDiscount = price - discount;
    console.log('Discount Price ' + afterDiscount);
}
else if (price >=2000){
    const discount = price * 5/ 100;
    const afterDiscount = price - discount;
    console.log('Discount Price ' + afterDiscount);
}
else{
    console.log("You don't get discount. You would pay " + price);
}