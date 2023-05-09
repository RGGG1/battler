
let characterField = document.getElementById('character');
let weaponField = document.getElementById('weapon');
let specialField = document.getElementById('special');
let char = document.myForm.characters;
let weap = document.myForm.weapons;
let spec = document.myForm.specials;
let prev = null;
for(let i = 0; i < char.length; i++) {
    char[i].onclick = function() {
        console.log(this.value);
        if(this !== prev) {
            prev = this;
            characterField.textContent = this.value;
        }
    }
        for(let i = 0; i < weap.length; i++) {
            weap[i].onclick = function() {
                console.log(this.value);
                if(this !== prev) {
                    prev = this;
                    weaponField.textContent = this.value;
                }
            };

    };

    for(let i = 0; i < spec.length; i++) {
        spec[i].onclick = function() {
            console.log(this.value);
            if(this !== prev) {
                prev = this;
                specialField.textContent = this.value;
            }
        };

};
    

}



