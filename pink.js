const alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function GetOneVariable(){

    let oneX = (Math.random()*25);
    oneX = Math.trunc(oneX);
    let char = alphabet[oneX];
    return char;
}

console.log(GetOneVariable()+GetOneVariable()+GetOneVariable()+GetOneVariable());