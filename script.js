

//my code...

var cannon = document.getElementById("cannon"),
    up = document.getElementById("up"),
    down = document.getElementById("down"),
    fire = document.getElementById("fire");


/**a method I found on CSS-Tricks to export an element's transform rotate value:
//"https://css-tricks.com/get-value-of-css-rotation-through-javascript/"
*/

function cannonCurrentAngle (){
    //getting the transform value for the cannon
    var cannonStyle = window.getComputedStyle(cannon),
        cannonTransform = cannonStyle.getPropertyValue("transform");

    //pulling out the transform values (got this part from CSS-Tricks: "https://css-tricks.com/get-value-of-css-rotation-through-javascript/")

    var values = cannonTransform.split('(')[1],
        values = values.split(')')[0],
        values = values.split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];

    //this is the cannnons current angel
    var angle = Math.round(Math.asin(b) * (180/Math.PI));
    return angle;
}



function cannonUp(){

    var angle = cannonCurrentAngle();

        angle++;

        cannon.style.transform = "rotate("+angle+"deg) translate(-50%,0)";

}

function cannonDown(){

    var angle = cannonCurrentAngle();

    angle--;

    cannon.style.transform = "rotate("+angle+"deg) translate(-50%,0)";

}


up.addEventListener('click',cannonUp);
down.addEventListener('click',cannonDown);
