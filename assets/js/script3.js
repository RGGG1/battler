
var characterField = document.getElementById('character');
var rad = document.myForm.myRadios;
var prev = null;
for(var i = 0; i < rad.length; i++) {
    rad[i].onclick = function() {
        console.log(this.value);
        if(this !== prev) {
            prev = this;
            characterField.textContent = this.value;
        }
    };
}