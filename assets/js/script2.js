
/* let and const for specific variables, var for global variables */

let character1 = {attack:75, defence:"25"};
let character2 = {attack:90, defence:"25"};

function fight() 
{ 
        let random = Math.floor(Math.random() * 100) + 1;
        console.log(random);
        let win_chance = (character1.attack / (character1.attack + character2.attack))*100;
        let result = document.getElementById("result");
        
        if (random <= win_chance) {
            result.innerHTML = "P2";
          } else {
            result.innerHTML = "P1";
          }
}

