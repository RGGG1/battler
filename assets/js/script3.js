

/* Radio buttons */

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
    console.log(randomOpponent);

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
            incrementBalance();
            incrementBounty();

          } else {
            window.winner1.innerHTML = "You Lose";
            opponentBattleScore();
            decrementBalance();
            decrementBounty();
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



/* Load characters, weapons, specials + randomisation and no dupes + rerolling */


    window.addEventListener('load', function() {
        chooseCharacter();
      });
      
      window.addEventListener('load', function() {
        chooseWeapon();
      });
      
      window.addEventListener('load', function() {
        chooseSpecial();
      });




/* Rerolling*/

var charactersGroup = new Array("assets/images/characters/c1.png", "assets/images/characters/c2.png", "assets/images/characters/c4.png", "assets/images/characters/c5.png", "assets/images/characters/c6.png", "assets/images/characters/c7.png", "assets/images/characters/c9.png", "assets/images/characters/c10.png");

function chooseCharacter() {
    var randomNum1 = Math.floor(Math.random() * charactersGroup.length);

    val=0; 
    while(val==0) {
    randomNum2=Math.floor(Math.random() * charactersGroup.length);
    if(randomNum2!=randomNum1 && randomNum2!=randomNum1){val=1;}
    }

    val=0;
    while(val==0) {
    randomNum3=Math.floor(Math.random() * charactersGroup.length);
    if(randomNum3!=randomNum1 && randomNum3!=randomNum2){val=1;}
    }   

    window.document.getElementById("c1").src = charactersGroup[randomNum1];
    window.document.getElementById("c2").src = charactersGroup[randomNum2];
    window.document.getElementById("c3").src = charactersGroup[randomNum3];
}

var weaponsGroup = new Array("assets/images/weapons/w1.png", "assets/images/weapons/w2.png", "assets/images/weapons/w3.png");

function chooseWeapon() {
    var randomNum1 = Math.floor(Math.random() * weaponsGroup.length);

   val=0; 
   while(val==0) {
   randomNum2=Math.floor(Math.random() * weaponsGroup.length);
   if(randomNum2!=randomNum1 && randomNum2!=randomNum1){val=1;}
   }

   val=0;
   while(val==0) {
   randomNum3=Math.floor(Math.random() * weaponsGroup.length);
   if(randomNum3!=randomNum1 && randomNum3!=randomNum2){val=1;}
   }   

   window.document.getElementById("w1").src = weaponsGroup[randomNum1];
   window.document.getElementById("w2").src = weaponsGroup[randomNum2];
   window.document.getElementById("w3").src = weaponsGroup[randomNum3];
}

var specialsGroup = new Array("assets/images/specials/s1.png", "assets/images/specials/s2.png", "assets/images/specials/s3.png");

function chooseSpecial() {
    var randomNum1 = Math.floor(Math.random() * specialsGroup.length);

   val=0; 
   while(val==0) {
   randomNum2=Math.floor(Math.random() * specialsGroup.length);
   if(randomNum2!=randomNum1 && randomNum2!=randomNum1){val=1;}
   }

   val=0;
   while(val==0) {
   randomNum3=Math.floor(Math.random() * specialsGroup.length);
   if(randomNum3!=randomNum1 && randomNum3!=randomNum2){val=1;}
   }   

   window.document.getElementById("s1").src = specialsGroup[randomNum1];
   window.document.getElementById("s2").src = specialsGroup[randomNum2];
   window.document.getElementById("s3").src = specialsGroup[randomNum3];
}


/* Reroll character*/

function rerollCharacter() {
    var randomNum1 = Math.floor(Math.random() * character1Group.length);

   val=0; 
   while(val==0) {
   randomNum2=Math.floor(Math.random() * character1Group.length);
   if(randomNum2!=randomNum1 && randomNum2!=randomNum1){val=1;}
   }

   val=0;
   while(val==0) {
   randomNum3=Math.floor(Math.random() * character1Group.length);
   if(randomNum3!=randomNum1 && randomNum3!=randomNum2){val=1;}
   }   

   window.document.getElementById("c1").src = character1Group[randomNum1];
   window.document.getElementById("c2").src = character1Group[randomNum2];
   window.document.getElementById("c3").src = character1Group[randomNum3];
}

 
  

/* confirm selection and hide unselected radio buttons */
function hide() {
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    var w1 = document.getElementById("w1");
    var w2 = document.getElementById("w2");
    var w3 = document.getElementById("w3");
    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    var s3 = document.getElementById("s3");
    var hideSelectionButton = document.getElementById("confirmSelection");
    
// character hide

    if (document.getElementById('r1').checked){
        playerSelect.style.display = "none";
        window.document.getElementById("cSelect").src = window.document.getElementById("c1").src;
        
    } else {
        ;
    }

    if (document.getElementById('r2').checked){
        playerSelect.style.display = "none";
        window.document.getElementById("cSelect").src = window.document.getElementById("c2").src;
    } else {
        ;
    }

    if (document.getElementById('r3').checked){
        playerSelect.style.display = "none";
        window.document.getElementById("cSelect").src = window.document.getElementById("c3").src;
    } else {
        ;
    }

    // weapon hide

    if (document.getElementById('r4').checked){
        playerSelect.style.display = "none";
        window.document.getElementById("wSelect").src = window.document.getElementById("w1").src;
    } else {
        ;
    }

    if (document.getElementById('r5').checked){
        playerSelect.style.display = "none";
        window.document.getElementById("wSelect").src = window.document.getElementById("w2").src;
    } else {
        ;
    }

    if (document.getElementById('r6').checked){
        playerSelect.style.display = "none";
        window.document.getElementById("wSelect").src = window.document.getElementById("w3").src;
    } else {
        ;
    }

    // special hide
    if (document.getElementById('r7').checked){
        window.document.getElementById("sSelect").src = window.document.getElementById("s1").src;
    } else {
        ;
    }

    if (document.getElementById('r8').checked){
        window.document.getElementById("sSelect").src = window.document.getElementById("s2").src;
    } else {
        ;
    }

    if (document.getElementById('r9').checked){
        window.document.getElementById("sSelect").src = window.document.getElementById("s3").src;
    } else {
        ;
    }
  }

  /* Coin Balance increment and decrement */

  function incrementBalance() {
    let oldScore = parseInt(document.getElementById("balance").innerText);
    document.getElementById("balance").innerText = ++oldScore;
}

function decrementBalance() {
    let oldScore = parseInt(document.getElementById("balance").innerText);
    document.getElementById("balance").innerText = --oldScore -1;
}

/* Bounty increment and decrement */

function incrementBounty() {
    let oldScore = parseInt(document.getElementById("bounty").innerText);
    document.getElementById("bounty").innerText = ++oldScore;
}

function decrementBounty() {
    let oldScore = parseInt(document.getElementById("bounty").innerText);
    document.getElementById("bounty").innerText = oldScore - oldScore +1;
}

