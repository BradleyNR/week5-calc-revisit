
let buttons = ['7', '8', '9', '/', '4', '5', '6', '*',
 '1', '2', '3', '-', '0', '.', '=', '+'];
let appendTo = document.querySelector('.calculator-section');
let storageArray = [];
let operators = ['+', '-', '*', '/']
let answerArea = document.querySelector('.answer-area');


console.log(typeof parseInt(buttons[1]));


//create buttons
buttons.forEach(function(button, index){
  let clickers = document.createElement('button');
  let equal = '=';
  //sets classes correctly based on content of button
  if (operators.includes(button)) {
    clickers.className = "operators-class";
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
    //checks to see if operators are already in array and early returns if they are
    if (operators.includes(clickers.textContent) && (storageArray.includes('+')
    || storageArray.includes('-') || storageArray.includes('*') || storageArray.includes('/'))) {
      return
    } else if (equal.includes(clickers.textContent)) {
      return
    } else {
      storageArray += clickers.textContent;
    }
    console.log(storageArray);

    answerArea.textContent = storageArray;
  });
});

let equalButton = document.querySelector('.equal-class');

equalButton.addEventListener('click', function(e){
  //MATH BELOW BEWARE
  if (storageArray.includes('+')) {
    storageArray = storageArray.split('+');
    let answer = parseFloat(storageArray[0]) + parseFloat(storageArray[1]);
    storageArray[0] = answer;
    answerArea.textContent = answer;
  } else if (storageArray.includes('-')){
    storageArray = storageArray.split('-');
    let answer = parseFloat(storageArray[0]) - parseFloat(storageArray[1]);
    storageArray[0] = answer;
    answerArea.textContent = answer;
  } else if (storageArray.includes('/')) {
    storageArray = storageArray.split('/');
    let answer = parseFloat(storageArray[0]) / parseFloat(storageArray[1]);
    storageArray[0] = answer;
    answerArea.textContent = answer;
  } else if (storageArray.includes('*')) {
    storageArray = storageArray.split('*');
    let answer = parseFloat(storageArray[0]) * parseFloat(storageArray[1]);
    storageArray[0] = answer;
    answerArea.textContent = answer;
  }
  console.log(storageArray);
  storageArray[1] = [];
});

let clearButton = document.querySelector('.clearbutton')

clearButton.addEventListener('click', function(){
  answerArea.textContent = 'clear';
  storageArray = [];
});
