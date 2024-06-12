function checkName(name) {
    
    name = name.trim();

    const lastAlphabet = name.substring(name.length-1);



    if (lastAlphabet === 'a' || lastAlphabet === 'A' ||lastAlphabet === 'y' || lastAlphabet === 'Y' || lastAlphabet === 'e' || lastAlphabet === 'E' || lastAlphabet === 'o' || lastAlphabet === 'O' ||lastAlphabet === 'u' || lastAlphabet === 'U' || lastAlphabet === 'W' || lastAlphabet === 'w' ){
        console.log('Good Name')
    }
    else{
        console.log(' Bad Name')
    }
}

const sentence = checkName("199");
// console.log(sentence)





