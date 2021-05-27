//single line comment//

/* multiple lines */

var elements=document.getElementsByClassName("togglable");

Array.from(elements).forEach(function(element) {
    element.addEventListener('click', changeImage);
  });

function changeImage(event) {

console.log(event);

    if (document.getElementById("imgClickAndChange").src == "IMG/Privātmājas rekonstrukcija.webp") 
    {
        document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
    }
    else 
    {
        document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
    }
}