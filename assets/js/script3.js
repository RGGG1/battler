
// Currently trying to get the character traits to be updated and accessible based on the radio button selections. E.g. if a user selects C1 then C1 becomes the character variable of which we check the attack rating


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
        totalValue = (characterValue + weaponValue + specialValue);
        console.log(totalValue);

        let score = document.getElementById("score");        
        score.innerHTML = totalValue;    
}

// Create random matchup - need to adjust the min max scores later

function createOpponent() {
    var min = 150;
    var max = 180;
    var randomOpponent = Math.round(Math.random() * (max - min) + (min));

    let oScore = document.getElementById("opponentScore"); 
    oScore.innerHTML = randomOpponent;
}


// Fight Character vs opponent

function fight1() {
    console.log(totalValue);
}

// Fight - orginal, maybe delete

function fight() 
{ 
    let random = Math.floor(Math.random() * 100) + 1;
        console.log(random);

        characterValue = parseInt(character.textContent);
        weaponValue = parseInt(weapon.textContent);
        specialValue = parseInt(special.textContent);

        score = (characterValue + weaponValue + specialValue);

        console.log(score);

    // need to update these results calcs below, to be based on user selected items total score vs random opponent totals.
       
        let win_chance = (C1.attack / (C1.attack + C2.attack))*100;
        let result = document.getElementById("result");
        
        if (random <= win_chance) {
            result.innerHTML = "C2";
          } else {
            result.innerHTML = "C1";
          }
}



