const player = document.querySelector('#you');
const pos = {x:0, y:0};

const canvas = document.querySelector('#area');
const enemyBars = document.querySelector('#bars');
const yourScore = document.querySelector('#yourScore');
const hpText = document.querySelector('#hitPoints');
let hp = 100;










//Moving the player icon around the area.

/** */
document.addEventListener('keydown', (e) => {
    const direction = (e.key.match( /(?<=^Arrow)\w+/ ) || [] )[0];
    if (!direction) return; // Use this to determine if it's an arrow key pressed
    

    e.preventDefault(); //Use this to prevent icon going past the browser limit



    ({
          Up:    () => pos.y -= 8,
          Down:  () => pos.y += 8,

          Left:  () => pos.x -= 8,
          Right: () => pos.x += 8,

    } [direction]) (); 
        
 
    player.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    
    //Creating the border so the player icon can't leave.
    //Since the pos was set for 0,0 just make it to where the player can't exceed the boundaries using the inspect tool for that game area div.
    //The pos is larger than the regular movement to create the "bounce" effect.
    if (pos.x < -280) {
        pos.x += 10;
    }
    else if (pos.x > 294) {
        pos.x -= 10;
    }
    else if (pos.y < -203) {
        pos.y += 10;
    }    
    else if (pos.y > 224) {
        pos.y -= 10;
    }

    //Taking hits from the bars.
overlap(); 

    

});



/*    
const playerLoc = document.getElementById('you').getBoundingClientRect();
const barsLoc = document.getElementById('bars').getBoundingClientRect();

{
            document.getElementById('you').style.backgroundColor = "green";
            console.log("touching")
        } else {
            document.getElementById('you').style.backgroundColor = "red";
            console.log("NOT touching")
        }

obj1.x + obj1.width >= obj2.x &&
        obj1.x <= obj2.x + obj2.width &&
        obj1.y + obj1.height >= obj2.y &&
        obj1.y <= obj2.y + obj2.height

function detectOverlap() {
        if ((playerLoc.x < barsLoc.x + barsLoc.width) && ((playerLoc.x + playerLoc.width ) > barsLoc.x)) {
            
            setInterval(25);
            hpText.textContent = hp;
            hp -= 1;
        } else {
            console.log("they are NOT touching"); 
        }

    
    
}*/

//Accumulating points
function overlap() {


    const obj1 = document.getElementById('you').getBoundingClientRect();
    const obj2 = document.getElementById('bars').getBoundingClientRect();
    const obj3 = document.getElementById('bars1').getBoundingClientRect();
    const obj4 = document.getElementById('bars2').getBoundingClientRect();
    const obj5 = document.getElementById('bars3').getBoundingClientRect();


    if (obj1.x + obj1.width >= obj2.x &&
        obj1.x <= obj2.x + obj2.width &&
        obj1.y + obj1.height >= obj2.y &&
        obj1.y <= obj2.y + obj2.height){
        
        document.getElementById('you').style.backgroundColor = "green";
        console.log("touching");

    } else if (obj1.x + obj1.width >= obj3.x &&
        obj1.x <= obj3.x + obj3.width &&
        obj1.y + obj1.height >= obj3.y &&
        obj1.y <= obj3.y + obj3.height){
        
        document.getElementById('you').style.backgroundColor = "green";
        console.log("touching");

    } else if (obj1.x + obj1.width >= obj4.x &&
        obj1.x <= obj4.x + obj4.width &&
        obj1.y + obj1.height >= obj4.y &&
        obj1.y <= obj4.y + obj4.height){
        
        document.getElementById('you').style.backgroundColor = "green";
        console.log("touching");

    } else if (obj1.x + obj1.width >= obj5.x &&
        obj1.x <= obj5.x + obj5.width &&
        obj1.y + obj1.height >= obj5.y &&
        obj1.y <= obj5.y + obj5.height){
        
        document.getElementById('you').style.backgroundColor = "green";
        console.log("touching")


    } else {
        document.getElementById('you').style.backgroundColor = "red";
        console.log("NOT touching")
    }
}



