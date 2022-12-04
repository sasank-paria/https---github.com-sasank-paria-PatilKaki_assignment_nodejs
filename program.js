
const sumofString = "1,2_9,4-3,4^7,5,*7-,99,8,7,5,9,2,1->80"; 
var numbers = sumofString.match(/\d+/g).map(Number);
console.log(numbers);
sum=0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);