let numbers = [15 , 2, 4, 10, 7];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 5){
        console.log(numbers[i]);
    }
}

for(let item of numbers){
    if(item > 5){
        console.log(item);
    }
}