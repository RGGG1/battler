
let character1 = {attack:75, defence:"25"};
let character2 = {attack:90, defence:"25"};

function fight() 
{ 
        var random = Math.floor(Math.random() * 100) + 1;
        console.log(random);
        var win_chance = character1.attack / (character1.attack + character2.attack);
        
        if (random <= win_chance) {
            document.getElementById("result").innerHTML = "P1";
          } else {
            document.getElementById("result").innerHTML = "P2";
          }
}

