var scores = [0,0];
var roundScore=0;

var activePlayer = 0;



document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function () {
    //1. random number
   var dice = Math.floor(Math.random() * 6) +1;
    
   // 2. displays the result
var diceDom = document.querySelector('.dice');
diceDom.style.display = 'block';
diceDom.src = 'dice-' + dice + '.png';
    
    //3. update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else{
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
    }
                                                     
});
                                            
//document.querySelector('#current-' + activePlayer).textContent = dice;
