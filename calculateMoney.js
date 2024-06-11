
function calculateMoney(input){
    const ticket = 120;
    const checker = 500; 
    const staf = 8;
    const food = 50;
    
    if( input>= 0 ){
        const total = (input * ticket) - (checker + (staf * food));
        return total;
    }
    else {
        console.log('Invalid Number')
    }

   
    
}

// const output = calculateMoney(93);
// console.log(output)

