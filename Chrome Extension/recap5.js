function generateSentence(desc,arr){
    let baseString = `the ${arr.length} ${desc} are`;
    const lastIndex = arr.length -1;
    for (let i = 0; i < arr.length; i++){
        if(i === lastIndex){
            baseString += arr[i];
        }else{
            baseString += arr[i] + " , ";
        }
        
    }
    return baseString
}

const sentence = generateSentence("higest mountains", ["Mount Everest" , "K2"]);
console.log(sentence)