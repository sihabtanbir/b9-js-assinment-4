
let data = { name: "kolimuddin" , birthYear: 1999 , siteName: "google" }
function password(){
let name = data.name;
let birth =data.birthYear;
let birthYear = birth.toString();
let siteName = data.siteName;

if(birthYear.length == 4){
let result = siteName+'#'+name+'@'+birth;
console.log(result);
}
else{
    console.log('Invalid')
}
}
let output = password(data);
// console.log(output)