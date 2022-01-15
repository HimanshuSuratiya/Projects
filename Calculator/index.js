console.log('Calculator');

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenvalue = "";

for (item of buttons) {
    item.addEventListener('click',(e)=>{
        let buttonText = e.target.innerText;
        if(buttonText == 'Back'){
            if(buttonText == 'Back'){
                let string = screen.value;
                string = string.substring(0, string.length - 1);
                screen.value = string
                screenvalue = screen.value
            }
        }
        else if(buttonText == 'waste'){
            screen.value = 'Error..Dont use This';
        }
        else if(buttonText == 'X'){
            buttonText = '*';
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
        else if(buttonText == 'AC') {
            screenvalue = "";
            screen.value = screenvalue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenvalue)
        }
        else {
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
    })
}