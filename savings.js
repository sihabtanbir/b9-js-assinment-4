
function monthlySavings(arr , livingCost) {

    let savings = 0;
   
    for (let i = 0; i < arr.length; i++) {
        savings= savings +arr[i];
        console.log(savings)
        return savings;
        
    }
    const tax = savings* (20/100);
    console.log(tax)
    console.log(savings)
    return savings- livingCost - tax;
    
    
    
    }

    let incomes = [1000, 2000, 3500];
let cost = 5000;
console.log(monthlySavings(incomes, cost));