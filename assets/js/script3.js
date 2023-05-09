
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
var prev = null;

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

// Fight

function fight() 
{ 
    let random = Math.floor(Math.random() * 100) + 1;
        console.log(random);
        console.log(C1.attack)
        let win_chance = (character.attack / (character.attack + C2.attack))*100;
        let result = document.getElementById("result");
        
        if (random <= win_chance) {
            result.innerHTML = "C2";
          } else {
            result.innerHTML = "C1";
          }
}


