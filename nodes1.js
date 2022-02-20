var newDivText = document.createTextNode('Hello ');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);


var container = document.querySelector('header .container');
var h2 = document.querySelector('header h2');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h2);