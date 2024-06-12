
let arr = [1,2,4, 'a', 2, 'c', -2];

let result =[];
function deleteInvalids(a){
    
    
    if (typeof a === 'number'){
        
         result.push(a);
        
      
    }
}
arr.forEach(deleteInvalids);

// console.log(result); 
