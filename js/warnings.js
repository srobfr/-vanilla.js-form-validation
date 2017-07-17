function createBubble(text) {                       // creates a popup bubble that shows up after failed validaiton
    const bubble = document.createElement('div'),
        parent =  document.getElementById("bubble_holder");
    bubble.innerHTML = text;
    bubble.setAttribute('class', 'message_bubble');
    if(text.length <= 45) {
        bubble.style.cssText="padding-top:10px; min-height:30px;"
    }
    parent.insertBefore(bubble, parent.childNodes[0]);

    setTimeout(function () {
        bubble.style.opacity = 0;
    }, 500);

    setTimeout(function() {
        parent.removeChild(parent.lastChild);
    }, 4500);
}

function createWarning(field, warning, limit) {      // pops up a message about excessive amount of accepted signs in a field
     const box = document.getElementsByName(field)[0].value,
         textWarning1 = document.getElementById(warning);
     if (box.length > limit) {
         textWarning1.style.display = 'inline';
         textWarning1.innerHTML = 'This field cannot contain more than '+ limit + ' signs. Currently you have '+ (box.length-limit) + ' too many.';
     } else {
         textWarning1.style.display = 'none';
     }
}