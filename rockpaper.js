let score= JSON.parse(localStorage.getItem('score')) || {
    win:0,
    lose:0,
    tie:0
};

updateScoreElement();

function playerMove(playersMove){
    const computerMove = compMove();
    let result='';

    if(playersMove === 'rock'){
        if(computerMove==='rock'){
            result='tie';
        }
        else if (computerMove==='paper'){
            result='lose';
        }
        else if(computerMove==='scissors'){
          result='win';  
        }
    }
    else if(playersMove === 'paper'){
        if(computerMove ==='paper'){
            result='tie';
        }
        else if(computerMove === 'rock'){
            result='win';
        }
        else if (computerMove === 'scissors'){
            result='lose';
        }
    }
    else if(playersMove==='scissors'){
        if(computerMove==='scissors'){
            result='tie';
        }
        else if(computerMove ==='rock'){
            result='lose';
        }
        else if(computerMove==='paper'){
            result='win';
        }
    }
     
    if(result === 'win'){
        score.win +=1;
    }
    else if(result=== 'lose'){
        score.lose+=1;
    }
    else if(result === 'tie'){
        score.tie+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
    .innerHTML = `you ${result}`;

    document.querySelector('.js-move')
    .innerHTML = `you
<img src="images/${playersMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
}
    
function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `win: ${score.win}, lose:${score.lose}, tie: ${score.tie}`;

};
   

function compMove(){
    const randomNo= Math.random();
    let compsMove='';
    if(randomNo>=0 && randomNo<=1/3){
        compsMove = 'rock';
    }
    else if(randomNo>1/3 && randomNo<=2/3){
        compsMove= 'scissors';
    }
    else if(randomNo>2/3 && randomNo<=1){
        compsMove= 'paper';
    }

    return compsMove;

}       