// 1. Print the highest temperature to the console.
var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 
// print the highest temperature
let max = highTemperatures[0];
for( let i =0;i< highTemperatures.length;i++){
    if(highTemperatures[i] > max){
        max = highTemperatures[i];
    }
}
console.log("The highest temperature is: " + max);
//2. print the lowest temperature
let min = lowTemperatures[0];
for( let i =0;i< lowTemperatures.length;i++){
    if(lowTemperatures[i] < min){
        min = lowTemperatures[i];
    }
}
console.log("The lowest temperature is: " + min);
//3. the average high temperature
let sum =0;
for( let i=0;i< highTemperatures.length;i++){
    sum += highTemperatures[i];
}
let averageHigh = sum / highTemperatures.length;
console.log("The average high temperature is: " + averageHigh);
//4. average low temperature
sum =0;
for( let i=0;i< lowTemperatures.length;i++){
    sum += lowTemperatures[i];
}let averageLow = sum / lowTemperatures.length;
console.log("The average low temperature is: " + averageLow);
// 5. the median high temperature
 
for(let i=0;i< highTemperatures.length-1;i++){
    for ( let j=0;j< highTemperatures.length-1-i;j++){
        if(highTemperatures[j]> highTemperatures[j+1]){
            let temp = highTemperatures[j];
            highTemperatures[j] = highTemperatures[j+1];
            highTemperatures[j+1] = temp;
        }
    }
}
let medianHigh = highTemperatures[Math.floor(highTemperatures.length/2)];
console.log("The median high temperature is: " + medianHigh);
// 6. the median low temperature
for(let i=0;i< lowTemperatures.length-1;i++){
    for ( let j=0;j< lowTemperatures.length-1-i;j++){
        if(lowTemperatures[j]> lowTemperatures[j+1]){
            let temp = lowTemperatures[j];
            lowTemperatures[j] = lowTemperatures[j+1];
            lowTemperatures[j+1] = temp;
        }
    }
}
let medianLow = lowTemperatures[Math.floor(lowTemperatures.length/2)];
console.log("The median low temperature is: " + medianLow);