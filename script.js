document.addEventListener('DOMContentLoaded', function() {
let compGuess=(Math.floor(Math.random() * 100 )+1);
console.log(compGuess);

const form= document.querySelector('.form')
const userGuessInput=document.querySelector('.guessedNumber');
const submit= document.querySelector('#sbt');
const guess= document.querySelector('.guess');
const RemainingGuess=document.querySelector('.remainingGuess');
const highLow=document.querySelector('.highLow');
const restart= document.querySelector('.result');

const p=document.createElement('p')

let prevGuess=[]  //previous guess value stored
let playGame=true;
let numGuess=1;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const userGuess= parseInt(userGuessInput.value)
        //console.log(userGuess);
        validateGuess(userGuess)
    })
}

function validateGuess(userGuess){ //checking if received string is a valid number/ between the range
    if(isNaN(userGuess)){
       alert("Enter a Valid Number")
    }else if(userGuess<1){
        alert("Enter a number greater than equal to 1")
    }else if(userGuess>100){
        alert("Enter a number lesser than equal to 100")
    }else{
        prevGuess.push(userGuess)
        if(numGuess<11){
            displayGuess()
            checkGuess(userGuess)
        }
        else{
            displayMessage(`GAME OVER!!. Random Number was ${compGuess}`)
            endGame()
        }
    }
}

function displayGuess(){
    userGuessInput.value=' '
    guess.innerHTML= `${prevGuess}`
    numGuess++;
    RemainingGuess.innerHTML= `${11-numGuess}`
}

function checkGuess(userGuess){ //Comparing the userGuess with compGuess
    if(userGuess===compGuess){
        displayMessage(`You Guessed the number correctly!!`)
        endGame()
    }else if(userGuess>compGuess){
        displayMessage(`Your guessed value is too larger than the actual number`)
    }else{
        displayMessage(`Your guessed value is too smaller than the actual number`)
    }
}

function displayMessage(message){ //displaying the message of the userGuess being correct or not
    highLow.innerHTML= `<h3>${message}</h3>`
}

function endGame(){
    userGuessInput.value=' '
    userGuessInput.setAttribute('disabled',' ')
    p.classList.add('button')
    p.innerHTML= `<h2 id="new">Start New Game</h2>`
    restart.appendChild(p)
    playGame=false
    newGame()
}

function newGame(){
   const newbutton= document.querySelector('#new')
   newbutton.addEventListener('click',function(e){
    compGuess=(Math.floor(Math.random() * 100 )+1);
    prevGuess=[]
    numGuess=1;
    userGuessInput.removeAttribute('disabled')
    RemainingGuess.innerHTML= `${11-numGuess}`
    guess.innerHTML= ` `
    highLow.innerHTML=' '
    restart.removeChild()
    playGame=true
   })
}

})
