
$('input').on('change', function() {
    $('body').toggleClass('blue');
  });
  

// Currently trying to get the character traits to be updated and accessible based on the radio button selections. E.g. if a user selects C1 then C1 becomes the character variable of which we check the attack rating

// Character names

window.characterNames = ["John", "Adam", "Mary"];


// Character traits
var C1 = {attack:75, defence:"25"};
var C2 = {attack:90, defence:"25"};

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
        characterValue = parseInt(character.textContent);
        weaponValue = parseInt(weapon.textContent);
        specialValue = parseInt(special.textContent);
        window.totalValue = (characterValue + weaponValue + specialValue);
        console.log(totalValue);
        
        score.innerHTML = window.totalValue;    
}

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
