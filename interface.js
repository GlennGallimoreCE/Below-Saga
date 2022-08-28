const ptnText = document.querySelector('#potionId');
//const canvas1 = document.getElementById("canvas");
//const context = canvas.getContext("2d");
//const width = canvas.width






//Potions -- to give the player an extra edge to heal
let potionCount = 3;
let ptn = document.querySelector('ptnbtn')

function potions() {
    //ptn = document.addEventListener('click', () => {
    if (potionCount <= 99 && potionCount >= 1) {
        ptnText.textContent = (potionCount -= 1);  //If this code in () was on the next line, there's a delay in activation upon taking a hit.
        
        hpText.textContent = (hp += 15);  //If this code in () was on the next line, there's a delay in activation upon taking a hit.

        console.log("You take a potion, 15 HP restored!")
        
    } else if (potionCount == 0) {  //This prevents the text to go into the negatives, and no potion triggered.
        return;
    }

    
}

