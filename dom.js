
//console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.links);
console.log(document.images);
 //get element by id
console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent='Hello';
headerTitle.innerText='Goodbye';
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
headerTitle.style.borderBottom='solid 3px #000'

//get element by class name
var item =document.getElementByClassName('list-group-item');
console.log(items);
console.log(item[1]);
items[1].textContent='Hello 2';
items[1].fonrweight='bold';
items[1].backgroundColor="purple";





 
