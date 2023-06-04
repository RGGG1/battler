

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
        window.var1 =  parseInt(v1.textContent);
        window.var2 =  parseInt(v2.textContent);
        window.var3 =  parseInt(v3.textContent);
        window.var4 =  parseInt(v4.textContent);
        window.totalValue = (window.characterValue + window.weaponValue + window.specialValue + window.var1 + window.var2 + window.var3 + window.var4);
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
    characterScore(); // updates based on the user variable values chosen by user
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


// Armoury and Store Show / Hide



/* Load characters, weapons, specials + randomisation and no dupes */


    window.addEventListener('load', function() {
        chooseCharacter();
      });
      
      window.addEventListener('load', function() {
        chooseWeapon();
      });
      
      window.addEventListener('load', function() {
        chooseSpecial();
      });


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
    
// character hide

    if (document.getElementById('r1').checked){
        playerSelect.style.display = "none";
        window.document.getElementById("cSelect").src = window.document.getElementById("c1").src;
        window.document.getElementById("cS").src = window.document.getElementById("c1").src;
        playerBattler.style.display = "block";       
    } else {
        ;
    }

    if (document.getElementById('r2').checked){
        playerSelect.style.display = "none";
        window.document.getElementById("cSelect").src = window.document.getElementById("c2").src;
        window.document.getElementById("cS").src = window.document.getElementById("c2").src;
        playerBattler.style.display = "block";
    } else {
        ;
    }

    if (document.getElementById('r3').checked){
        playerSelect.style.display = "none";
        window.document.getElementById("cSelect").src = window.document.getElementById("c3").src;
        window.document.getElementById("cS").src = window.document.getElementById("c3").src;
        playerBattler.style.display = "block";
    } else {
        ;
    }

    // weapon hide

    if (document.getElementById('r4').checked){
        window.document.getElementById("wSelect").src = window.document.getElementById("w1").src;
        window.document.getElementById("wS").src = window.document.getElementById("w3").src;
    } else {
        ;
    }

    if (document.getElementById('r5').checked){
        window.document.getElementById("wSelect").src = window.document.getElementById("w2").src;
        window.document.getElementById("wS").src = window.document.getElementById("w3").src;
    } else {
        ;
    }

    if (document.getElementById('r6').checked){
        window.document.getElementById("wSelect").src = window.document.getElementById("w3").src;
        window.document.getElementById("wS").src = window.document.getElementById("w3").src;
    } else {
        ;
    }

    // special hide
    if (document.getElementById('r7').checked){
        window.document.getElementById("sSelect").src = window.document.getElementById("s1").src;
        window.document.getElementById("sS").src = window.document.getElementById("s1").src;
    } else {
        ;
    }

    if (document.getElementById('r8').checked){
        window.document.getElementById("sSelect").src = window.document.getElementById("s2").src;
        window.document.getElementById("sS").src = window.document.getElementById("s2").src;
    } else {
        ;
    }

    if (document.getElementById('r9').checked){
        window.document.getElementById("sSelect").src = window.document.getElementById("s3").src;
        window.document.getElementById("sS").src = window.document.getElementById("s3").src;
    } else {
        ;
    }
  }

 /* Coin Balance increment and decrement */

  function incrementBalance() {
    let oldScore = parseInt(document.getElementById("balance").innerText);
    document.getElementById("balance").innerText = ++oldScore;
    document.getElementsByClassName("coinBalance")[0].innerText = parseInt(document.getElementById("balance").innerText);

    var i = document.getElementById("balance");
    i.style.color = "green";
    setTimeout(function () { i.style.color = "white" }, 250);

    var x = document.getElementsByClassName("coinBalance")[0];
    x.style.color = "green";
    setTimeout(function () { x.style.color = "white" }, 250);    

    var y = document.getElementsByClassName("fas fa-coins")[0];
    y.style.color = "green";
    setTimeout(function () { y.style.color = "white" }, 250);

    var z = document.getElementsByClassName("fas fa-coins")[1];
    z.style.color = "green";
    setTimeout(function () { z.style.color = "white" }, 250);
}

function decrementBalance() {
    let oldScore = parseInt(document.getElementById("balance").innerText);
    document.getElementById("balance").innerText = --oldScore;
    document.getElementsByClassName("coinBalance")[0].innerText = parseInt(document.getElementById("balance").innerText);

    var i = document.getElementById("balance");
    i.style.color = "red";
    setTimeout(function () { i.style.color = "white" }, 250);

    var x = document.getElementsByClassName("coinBalance")[0];
    x.style.color = "red";
    setTimeout(function () { x.style.color = "white" }, 250);

    var y = document.getElementsByClassName("fas fa-coins")[0];
    y.style.color = "red";
    setTimeout(function () { y.style.color = "white" }, 250);

    var z = document.getElementsByClassName("fas fa-coins")[1];
    z.style.color = "red";
    setTimeout(function () { z.style.color = "white" }, 250);
}

/* Bounty increment and decrement */

function incrementBounty() {
    let oldScore = parseInt(document.getElementById("bounty").innerText);
    document.getElementById("bounty").innerText = ++oldScore;
    document.getElementsByClassName("bountyBalance")[0].innerText = parseInt(document.getElementById("bounty").innerText);

    let oldHouseBountyBalance = parseInt(document.getElementById("houseBountyBalance").innerText);
    document.getElementById("houseBountyBalance").innerText = --oldHouseBountyBalance;

    var i = document.getElementById("bounty");
    i.style.color = "green";
    setTimeout(function () { i.style.color = "white" }, 250);

    var x = document.getElementsByClassName("bountyBalance")[0];
    x.style.color = "green";
    setTimeout(function () { x.style.color = "white" }, 250);

    var y = document.getElementsByClassName("fas fa-bullseye")[0];
    y.style.color = "green";
    setTimeout(function () { y.style.color = "white" }, 250);

    var z = document.getElementsByClassName("fas fa-bullseye")[1];
    z.style.color = "green";
    setTimeout(function () { z.style.color = "white" }, 250);
}

function decrementBounty() {
    let oldScore = parseInt(document.getElementById("bounty").innerText);
    document.getElementById("bounty").innerText = oldScore - oldScore +1;
    document.getElementsByClassName("bountyBalance")[0].innerText = parseInt(document.getElementById("bounty").innerText);

    var i = document.getElementById("bounty");
    i.style.color = "red";
    setTimeout(function () { i.style.color = "white" }, 250);

    var x = document.getElementsByClassName("bountyBalance")[0];
    x.style.color = "red";
    setTimeout(function () { x.style.color = "white" }, 250);

    var y = document.getElementsByClassName("fas fa-bullseye")[0];
    y.style.color = "red";
    setTimeout(function () { y.style.color = "white" }, 250);

    var z = document.getElementsByClassName("fas fa-bullseye")[1];
    z.style.color = "red";
    setTimeout(function () { z.style.color = "white" }, 250);    
}


/* onload match variables in various objects */

window.onload = varMatch()
function varMatch() {
    document.getElementsByClassName("Vv1")[0].innerText = parseInt(document.getElementById("v1").innerText);
    document.getElementsByClassName("Vv2")[0].innerText = parseInt(document.getElementById("v2").innerText);
    document.getElementsByClassName("Vv3")[0].innerText = parseInt(document.getElementById("v3").innerText);
    document.getElementsByClassName("Vv4")[0].innerText = parseInt(document.getElementById("v4").innerText);
    document.getElementsByClassName("coinBalance")[0].innerText = parseInt(document.getElementById("balance").innerText);
    document.getElementsByClassName("bountyBalance")[0].innerText = parseInt(document.getElementById("bounty").innerText);
}

/* increment and decrement profile variables - user controlled - also updates same stats in other areas*/
// V1
function incrementV1() {
    let oldV1 = parseInt(document.getElementById("v1").innerText);
    document.getElementById("v1").innerText = ++oldV1;

    document.getElementsByClassName("Vv1")[0].innerText = parseInt(document.getElementById("v1").innerText);

    var i = document.getElementById("v1");
    i.style.color = "green";
    setTimeout(function () { i.style.color = "white" }, 250);

}

function decrementV1() {
    let oldV1 = parseInt(document.getElementById("v1").innerText);
    document.getElementById("v1").innerText = --oldV1;
    document.getElementsByClassName("Vv1")[0].innerText = parseInt(document.getElementById("v1").innerText);

    var i = document.getElementById("v1");
    i.style.color = "red";
    setTimeout(function () { i.style.color = "white" }, 250);
}

// V2
function incrementV2() {
    let oldV2 = parseInt(document.getElementById("v2").innerText);
    document.getElementById("v2").innerText = ++oldV2;
    document.getElementsByClassName("Vv2")[0].innerText = parseInt(document.getElementById("v2").innerText);    

    var i = document.getElementById("v2");
    i.style.color = "green";
    setTimeout(function () { i.style.color = "white" }, 250);
}

function decrementV2() {
    let oldV2 = parseInt(document.getElementById("v2").innerText);
    document.getElementById("v2").innerText = --oldV2;
    document.getElementsByClassName("Vv2")[0].innerText = parseInt(document.getElementById("v2").innerText);

    var i = document.getElementById("v2");
    i.style.color = "red";
    setTimeout(function () { i.style.color = "white" }, 250);
}

// V3
function incrementV3() {
    let oldV3 = parseInt(document.getElementById("v3").innerText);
    document.getElementById("v3").innerText = ++oldV3;
    document.getElementsByClassName("Vv3")[0].innerText = parseInt(document.getElementById("v3").innerText);

    var i = document.getElementById("v3");
    i.style.color = "green";
    setTimeout(function () { i.style.color = "white" }, 250);
}

function decrementV3() {
    let oldV3 = parseInt(document.getElementById("v3").innerText);
    document.getElementById("v3").innerText = --oldV3;
    document.getElementsByClassName("Vv3")[0].innerText = parseInt(document.getElementById("v3").innerText);

    var i = document.getElementById("v3");
    i.style.color = "red";
    setTimeout(function () { i.style.color = "white" }, 250);
}

// V4
function incrementV4() {
    let oldV4 = parseInt(document.getElementById("v4").innerText);
    document.getElementById("v4").innerText = ++oldV4;
    document.getElementsByClassName("Vv4")[0].innerText = parseInt(document.getElementById("v4").innerText);

    var i = document.getElementById("v4");
    i.style.color = "green";
    setTimeout(function () { i.style.color = "white" }, 250);
}

function decrementV4() {
    let oldV4 = parseInt(document.getElementById("v4").innerText);
    document.getElementById("v4").innerText = --oldV4;
    document.getElementsByClassName("Vv4")[0].innerText = parseInt(document.getElementById("v4").innerText);

    var i = document.getElementById("v4");
    i.style.color = "red";
    setTimeout(function () { i.style.color = "white" }, 250);
}


function miniP() {
    var x = document.getElementById("userProfileCard");
    var y = document.getElementById("user");
    if (x.style.display === "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
  } 

  function bigP() {
    var x = document.getElementById("userProfileCard");
    var y = document.getElementById("user");
    if (y.style.display === "none") {
      y.style.display = "block";
     
    } else {
      y.style.display = "none";
      x.style.display = "block";
    }
  } 




  function showHideArmoury() {
    var x = document.getElementById("playerBattler");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 