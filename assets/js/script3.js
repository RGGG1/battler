

// Radio buttons
let character = document.getElementById('character');
let weapon = document.getElementById('weapon');
let special = document.getElementById('special');
let char = document.myForm.characters;
let weap = document.myForm.weapons;
let spec = document.myForm.specials;
let prev = null;

// Radio buttons - character selection
for(let i = 0; i < char.length; i++) {
    char[i].onclick = function() {
        console.log(this.value);
        if(this !== prev) {
            prev = this;
            character.textContent = this.value;
                                   
        }

    }
    
// Radio buttons - weapon selection
        for(let i = 0; i < weap.length; i++) {
            weap[i].onclick = function() {
                console.log(this.value);
                if(this !== prev) {
                    prev = this;
                    weapon.textContent = this.value;
                }
            };

    };
// Radio buttons - specials selection
    for(let i = 0; i < spec.length; i++) {
        spec[i].onclick = function() {
            console.log(this.value);
            if(this !== prev) {
                prev = this;
                special.textContent = this.value;                
            }
        };

};
    

}

//
function characterScore() 
{ 
        window.characterValue = parseInt(character.textContent);
        window.weaponValue = parseInt(weapon.textContent);
        window.specialValue = parseInt(special.textContent);
        window.totalValue = (window.characterValue + window.weaponValue + window.specialValue);
        console.log(totalValue);
        
        score.innerHTML = window.totalValue;    
}

// Show user selection



// Create random matchup - need to adjust the min max scores later

function createOpponent() {
    var min = 150;
    var max = 180;
    window.randomOpponent = Math.round(Math.random() * (max - min) + (min));

    opponentScore.innerHTML = window.randomOpponent;
}


// Fight Character vs opponent - NOTE I MAY ONLY NEED ONE FIGHT FUNCTION, if I can log the scores for each fight somehow to use for stats later

function fight1() {
    console.log(window.totalValue);
    console.log(window.randomOpponent);

    window.characterWinChance = (window.totalValue / (window.totalValue + window.randomOpponent))*100;
    console.log(window.characterWinChance);

    random = Math.floor(Math.random() * 100) + 1;
    console.log(random)

    window.winner1 = document.getElementById("fightResult1");
        
        if (random <= window.characterWinChance) {
            window.winner1.innerHTML = "You Win";
            playerBattleScore();
          } else {
            window.winner1.innerHTML = "You Lose";
            opponentBattleScore();
          }
}

//

function fight2() {
    console.log(window.totalValue);
    console.log(window.randomOpponent);

    window.characterWinChance = (window.totalValue / (window.totalValue + window.randomOpponent))*100;
    console.log(window.characterWinChance);

    random = Math.floor(Math.random() * 100) + 1;
    console.log(random)

    window.winner2 = document.getElementById("fightResult2");
        
        if (random <= window.characterWinChance) {
            window.winner2.innerHTML = "You Win";
            playerBattleScore();
          } else {
            window.winner2.innerHTML = "You Lose";
            opponentBattleScore();
          }
}

//

function fight3() {
    console.log(window.totalValue);
    console.log(window.randomOpponent);

    window.characterWinChance = (window.totalValue / (window.totalValue + window.randomOpponent))*100;
    console.log(window.characterWinChance);

    random = Math.floor(Math.random() * 100) + 1;
    console.log(random)

    window.winner3 = document.getElementById("fightResult3");
        
        if (random <= window.characterWinChance) {
            window.winner3.innerHTML = "You Win";
            playerBattleScore();
          } else {
            window.winner3.innerHTML = "You Lose";
            opponentBattleScore();
          }
}

// Scores
function playerBattleScore() {
    let oldScore = parseInt(document.getElementById("playerBattleScore").innerText);
    document.getElementById("playerBattleScore").innerText = ++oldScore;
}

function opponentBattleScore() {
    let oldScore = parseInt(document.getElementById("opponentBattleScore").innerText);
    document.getElementById("opponentBattleScore").innerText = ++oldScore;
}



// Character Randomisation - I also need to repeat it for weapons and specials
window.onload = choosePic; // I should put this into a div to reload instead of whole page reload, so that we can then offer rerolls.

var character1Group = new Array("assets/images/1.png", "assets/images/2.png");
var character2Group = new Array("assets/images/5.png","assets/images/6.png");
var character3Group = new Array("assets/images/9.png");

function choosePic() {
     var randomNum1 = Math.floor(Math.random() * character1Group.length);
     var randomNum2 = Math.floor(Math.random() * character2Group.length);
     var randomNum3 = Math.floor(Math.random() * character3Group.length);
     window.document.getElementById("myPicture1").src = character1Group[randomNum1];
     window.document.getElementById("myPicture2").src = character2Group[randomNum2];
     window.document.getElementById("myPicture3").src = character3Group[randomNum3];
}

