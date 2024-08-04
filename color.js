

const user_interfaceJS = document.getElementById('user_interface');
user_interfaceJS.addEventListener('keypress',enterButton);
const displayJS = document.getElementsByClassName('display_result');
const pool_of_characters =['a','b','5'];

function enterButton(event){
    
    if (event.keyCode === 13) { // 13 is the ascii value for Enter button.
        const value_box = parseInt(user_interfaceJS.value);
        console.log(value_box);
        console.log(typeof(value_box));

        let activation = PassWordGenerator(value_box);
        console.log(activation);   

        displayJS[0].innerText = activation;
    }
    
}

function GetOneVariable(){

    let oneX = ((Math.random()*pool_of_characters.length));
    // console.log(oneX);
    oneX = Math.trunc(oneX);
    let char = pool_of_characters[oneX];
    return char;
}


function PassWordGenerator(user_data_choice){
    let CharOut = [];
    for(i=0 ; i< user_data_choice ; i++){
        
        CharOut.push(GetOneVariable());
        
    }
    return CharOut.join('');
}


