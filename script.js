let winMsg='Victory';
let loseMsg='Crushing Defeat';
let tieMsg='Tie';
let movelist=['Rock','Paper','Scissors'];

function startGame(move1){
    let statusDisplay=document.querySelector("#status-head");
    statusDisplay.textContent="Choose!";
    move2=randomMove();
    console.log(move2);
    endGame(move1,move2);   
}

function calcResult(move1,move2){
    if (move1==0){
        if (move2==0){
            return 'draw'
        }
        else if (move2==1){
            return 'loss'
        }
        else{
            return 'win'
        }
    }
    else if (move1==1){
        if (move2==0){
            return 'win'
        }
        else if (move2==1){
            return 'draw'
        }
        else{
            return 'loss'
        }
    }
    else if (move1==2){
        if (move2==0){
            return 'loss'
        }
        else if (move2==1){
            return 'win'
        }
        else{
            return 'draw'
        }
    }
}   

function randomMove(){
    move2=Math.floor(Math.random()*3);
    return move2
}


function endGame(move1,move2){
    result=calcResult(move1,move2);
    moveDisplay(move1,move2);
    if (result=='win'){
        document.getElementById("status-head").innerHTML=winMsg;
        document.getElementById('retry').classList.toggle('hide');
        document.getElementById('rock-button').classList.toggle('hide');
        document.getElementById('paper-button').classList.toggle('hide');
        document.getElementById('scissors-button').classList.toggle('hide');
    }
    else if (result=='loss'){
        document.getElementById("status-head").innerHTML=loseMsg;
        document.getElementById('retry').classList.toggle('hide');
        document.getElementById('rock-button').classList.toggle('hide');
        document.getElementById('paper-button').classList.toggle('hide');
        document.getElementById('scissors-button').classList.toggle('hide');
    }
    else if (result='draw'){
        document.getElementById("status-head").innerHTML=tieMsg;
        document.getElementById('retry').classList.toggle('hide');
        document.getElementById('rock-button').classList.toggle('hide');
        document.getElementById('paper-button').classList.toggle('hide');
        document.getElementById('scissors-button').classList.toggle('hide');
    }
}

function reload(){
    location.reload();
}

function moveDisplay(move1,move2){
    document.getElementById('user').innerHTML="You Played " + movelist[move1];
    document.getElementById('comp').innerHTML="Computer Played " + movelist[move2];
}




