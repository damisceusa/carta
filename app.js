// Per prima cosa creiamo delle costanti per i players

let userScore = 0;
let computerScore = 0;
// associamoli al file html
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p"); //della classe result prendi p 

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");




//******************
// FUNZIONE CHE ASSEGNA UN NUMERO AL PC
// *******************

 function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3); //numero intero da 0 a 2 
    return choices[randomNumber]; //collega numero a p o s o r
} 


function convertToWord(letter) {
    if (letter === 'r') return 'Sasso';
    if (letter === 'p') return 'Carta';
    if (letter === 's')  return 'Forbice';
}



/********************** 
Cosa succede se vinci / perdi / pareggi
***********************/

function win(userChoice, computerChoice) {
    const smallUserWord = 'tu'.fontsize(3).sub();//incapu     sub = sutta
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore ++; //aggiungi 1 
    userScore_span.innerHTML = userScore; //scrivi sull'html
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} sconfigge ${convertToWord(computerChoice)}${smallCompWord} Hai vinto!`; //simile a Python  
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow') , 300) //mette e leva il verde dopo 300 millisecondi
    
}


function lose(userChoice, computerChoice) {
    const smallUserWord = 'tu'.fontsize(3).sub();//incapu     sub = sutta
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore ++; //aggiungi 1 
    userScore_span.innerHTML = userScore; //scrivi sull'html
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} perde contro ${convertToWord(computerChoice)}${smallCompWord} Hai perso :( `; //simile a Python  
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow') , 300)
    
}

function draw(userChoice, computerChoice) {
    const smallUserWord = 'tu'.fontsize(3).sub();//incapu     sub = sutta
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} è uguale a  ${convertToWord(computerChoice)}${smallCompWord} È un pareggio`; //simile a Python  
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow') , 300)
}







//******************
// FUNZIONE CHE TI DA LE SCELTE E LE SCELTE 
// *******************
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        
        case 'rp':
        case 'ps':
        case 'rs':
            lose(userChoice, computerChoice);
            break;
        
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
                        
    }
    
}


//******************
// FUNZIONE CHE ASSEGNA AL CLICK [R, P, S]
// *******************
function main() {
    rock_div.addEventListener('click', () => game('r'));

    paper_div.addEventListener('click', () => game('p'));

    scissors_div.addEventListener('click', () => game('s'));
}

main();
