console.log("Hello, World!");

function lastLetter(string){
    return (string.substr(-1))
}
function add7(num){
    console.log("Beginning add7")
    console.log (num+7);
}

function multiply (p1,p2){
    console.log('Beginning multiply function');
    

    console.log(p1*p2);
}
function capitalize(string){
    console.log('Beginning function capitalize');
    

    console.log('The First Letter is: ');
    let a=string.substr(0,1);
    console.log(a);
    a=a.toUpperCase();
    console.log('Capitalized Letter is :');
    console.log(a);

    let b = string.substr(1);
    console.log('The rest of the letters are :');
    console.log(b);
    b=b.toLowerCase();
    console.log('Converting rest of letters to lower case');
    console.log(b);

    console.log('Final Answer')
    console.log(a+b);
     
    console.log('The Last Letter of The String Is:  ')
    console.log(lastLetter(string))
}

add7(3);
multiply(2,7);

capitalize('rIZwaNa');
capitalize('aSAdULLah')