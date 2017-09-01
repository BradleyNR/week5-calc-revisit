
let buttons = ['7', '8', '9', '/', '4', '5', '6', '*',
 '1', '2', '3', '-', '0', '.', '=', '+'];
let appendTo = document.querySelector('.calculator-section');
let storageArray = [];
let operators = ['+', '-', '*', '/'];
let answerArea = document.querySelector('.answer-area');

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//create buttons
buttons.forEach(function(button, index){
  let clickers = document.createElement('button');
  let equal = '=';
  //sets classes correctly based on content of button
  if (operators.includes(button)) {
    clickers.className = 'operators-class';
  } else if (equal.includes(button)) {
    clickers.className = 'equal-class';
  } else {
    clickers.className = 'number-class';
  }
  //adds bootstrap classes
  clickers.className += ' col-md-3';
  clickers.textContent = button;
  appendTo.appendChild(clickers);

  //onclick
  clickers.addEventListener('click', function(e){
    console.log(clickers.textContent);
    if ((operators+['=']).includes(clickers.textContent)) {
      storageArray.push(answerArea.textContent);
      storageArray.push(clickers.textContent);
      answerArea.textContent = clickers.textContent;
    } else if (isNumeric(clickers.textContent)) {
      console.log('numeric');
      if (!isNumeric(answerArea.textContent)) {
        answerArea.textContent = clickers.textContent;
      } else {
        answerArea.textContent += clickers.textContent;
      }
    }
    console.log(storageArray);
  });
});

let equalButton = document.querySelector('.equal-class');

equalButton.addEventListener('click', function(e){
  console.log('Storage Area ', storageArray);
  let result = parseFloat(storageArray[0]);

  //MATH BELOW BEWARE
  for(var i = 1; i < storageArray.length; i += 2){
    let operator = storageArray[i];
    let secondNumber = parseFloat(storageArray[i + 1]);

    switch (operator) {
      case '+':
        result += secondNumber;
        break;
      case '-':
        result -= secondNumber;
      case '*':
        result *= secondNumber;
      case '/':
        result /= secondNumber;
      default:
    }
  }

  console.log(result);
  answerArea.textContent = result;
  storageArray = [];
});

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let clearButton = document.querySelector('.clearbutton');

clearButton.addEventListener('click', function(){
  answerArea.textContent = '';
  storageArray = [];
});
