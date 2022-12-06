var num ='';
var firstNumber = 0;
var secondNumber = 0;
var operator = ''; 

function addDig(val){
    let stringNumber = val.toString();
    num += stringNumber;
    writeDisplay(num);
}

function writeDisplay(val){
    document.getElementById('result').value = val;
}

function addOp(op){
    firstNumber = parseInt(document.getElementById('result').value);
    operator = op;
    num = '';
    document.getElementById('result').value = '';
}

function getResult(){
    secondNumber = parseInt(document.getElementById('result').value);
    switch(operator){
        case '/':
            document.getElementById('result').value = firstNumber / secondNumber;
            break;
        case '*':
            document.getElementById('result').value = firstNumber * secondNumber;
            break;
        case '+':
            document.getElementById('result').value = firstNumber + secondNumber;
            break;
        case '-':
            document.getElementById('result').value = firstNumber - secondNumber;
            break;    
    }
}