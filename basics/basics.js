/*          
                                    JAVASCRIPT BASICS

alert(123);

//Log to console 
console.log("Hello World");
console.error("Yellow");
console.warn("Warning Mssg");

//Gives time taken between
console.time("note time");
    console.log("heck yea");
    console.log("heck yea");
    console.log("heck yea");
    console.log("heck yea");
    console.log("heck yea");
console.timeEnd("note time");

VARIABLES

//var is older way
var name = "arjit";
console.log(name);
name = "Adam"; //Can change variable
console.log(name);

//let is newer way to initialize variables
let name = "Arjit";
console.log(name);

-----------

CONSTANT

const a = 10;
console.log(a);
a = 20; //Cannot do ,Error

//Cannot change object, but can change property of objects
const person = {
    name: "John",
    age: 20
}
person.name = "Arjit"; //Possible
console.log(person);

//Not Possbile reassigning const object
person = {
    name: "XYZ",
    age:45
}

-------------

DATA TYPES:
Dynamically Typed Language
typeof variable_name is used to know type of variable

Primitive Data Types:
    String  : const name = "John Doe";
    Number :  const age = 18;
    Boolean : const isValid = true;
    Null : const a = null;//typeof null gives object,a bug in language
    Undefined : let test;
    Symbols : const sym = Symbol();

Referrence Data Types:
    Arrays : const names = ['Arjit','Adam']
    Object Literals : const person = { name:"Arjit", age:19}
    Functions : function myFunc(){}
    Dates : const today = new Date();

-------------
TYPE CONVERSION
let a;

Number to String:
a = String(89);
a = (90).toString();

Date to String
a = String(new Date());


String to Number
a = Number('5');
a = Number("Hello");//NaN = Not a Number
a = parseInt('100.30');//100


a = parseFloat('100.30');
//toFixed specifies decimal places
console.log(a.toFixed(2));//100.30 


--------------
MATH

let x;

x = Math.PI;
x = Math.E;
x = Math.round(2.8);//3
x = Math.floor(2.4);//2
x = Math.ceil(2.4);//3
x = Math.sqrt(64);//4
x = Math.abs(-3);//3
x = Math.pow(8,2);//64
x = Math.min(2,5,7);//2
x = Math.max(2,5,7);//7
x = Math.random();//generate random decimal between 0 and 1

--------------
STRING

const a


---------------***************************************---------------------
---------------***************************************---------------------
---------------***************************************---------------------
                                    
                                    DOM MANIPUATION

                                    INTRO


val = document;
val = document.all;
val = document.all[2];
val = document.all.length;//counts all elements in dom
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;//Return all forms in a document
val = document.forms[0];//1st form 
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;//Returns all links
val = document.links[0];

val = document.images;

val = document.scripts;

let scripts = document.scripts;


                                        SELECTING:

document.getElementById("task-title");
document.getElementById("task-title").className;//Gives class Name of element with id = task-title
//Can also store in a variable
const tasktitle = document.getElementById("task-title");

const items = document.getElementsByClassName("collection-item");
items[0].style.color = "red";

const li = document.getElementsByTagName("li");
console.log(li[0]);


CONVERTING HTML COLLECTION TO ARRAY:
let li = document.getElementByTagName("li");
li = Array.from(li);
li.reverse();//Works
li.forEach(function(li){
    console.log(li);
});


QUERY SELECTOR:

document.querySelector("#task-title");//Gets id 
document.querySelector(".card-title");//Gets class
document.querySelector("h3");//Gets 1st h3 in doc
document.querySelector("ul li").style.color = "blue";//Gets al list items in ul

//Get all ul with class name "collection-item"
const listItems = document.querySelector("ul").getElementsByClassName("collection-item");

//querySelectorAll
const item = document.querySelectorAll('ul.collection li.collection-item');//ul with class of collection and li in ul with class of collection-item selected


CHANGING STYLE:
document.getElementById("task-title").style.background = "#333";
document.getElementById("task-title").style.color = "#fff";
document.getElementById("task-title").style.dispaly = "none";


CHANGING CONTENT:
document.getElementById("task-title").textContent = "New text";
document.getElementById("task-title").innerText = "My Tasks";
document.getElementById("task-title").innerHTML = "<span>Hello</span>";



CLASSES AND ATTRIBUTES
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let x;
x = link.className;//Classes in string format 

x = link.classList;//Array of classes
x = link.classList[0];

link.classList.add("test");
link.classList.remove("test");


x = link.hasAttribute("href");
x = link.getAttribute("href");
x = link.setAttribute("href","http://google.com");
link.removeAttribute("href");




                                TRAVERSING THE DOM:

let x;
const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

//Getting Child Node

x = list.childNode;//Returns Node list .We get children of ul(Also include Text nodes)
x = list.children;//Returns Html collection .We get children of ul(without text nodes)

x = list.childNode[0].nodeName;
x = list.childNode[3].nodeType;

//Node Type : 
// 1 - Element
// 2 - Attribute
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

//Getting 1st child
x = list.firstChild;//All node types included
x = list.fistElementChild;//Only 1st html element returned

//Getting Last Child
x = list.lastChild;
x = list.lastElementChild;

//Counting total child elements
x = list.childElementCount;


//Getting children of children
x = list.children[3].children;//returns li in ul then returns a tag in that li
x = list.children[3].children[0].id="test-link";//Return a tag with id of test-link in li of ul



//Getting parent Node
x = listItem.parentNode;//All node type
x = listItem.parentElement;//Only html element

//Parent of parent
x = listItem.parentElement.parentElement;



//Get next Siblings
x = listItem.nextSibling;
x = listItem.nextElementSibling;
x = listItem.nextElementSibling.nextElementSibling;

//Get previous Sibling
x = listItem.previousSibling;
x = listItem.previousElementSibling.previousElementSibling;


                                CREATING ELEMENTS
<li class="collection-item">Hello World <a><i class = "fa fa-remove"></a></li>

//Creating li tag
const li = document.createELement("li");
li.className = "collection-item";//Added class name to li
li.id = "new-item"//Added id
li.setAttribute("title","New Item")//Added title attribute to li

//Adding a tag in li --> <li> <a></a> </li>
const link = document.createElement("a");
link.className = "delete-item secondary-content";
link.innerHTML = '<i class = "fa fa-remove"></i>';
li.appendChild(link);

//Adding text node to li
li.appendChild(document.createTextNode("hello World"));//Inserting Text node inside li

//Appending this li tag in ul with class collection
document.querySelector("ul.collection").appendChild(li);


                                REMOVING / REPLACING 
const newHeading = document.createElement("h2");
newHeading.id="task-title";
newHeading.appendChild(document.createTextNode("Task list"));

const oldHeading = document.getElementById("task-title");
const cardAction = document.querySelector(".card-action");

cardAction.replaceChild(newHeading, oldHeading);

//Remove Element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

lis[0].remove(); 

list.removeChild(lis[3]);



                                EVENT LISTENERS

document.querySelector('.clear-task').addEventListener('click',
function(e){
    console.log("button clicked");
    //e.preventDefault();
});

document.querySelector('.clear-task').addEventListener('click',onClick);

function onClick(e){
    console.log("button clicked");
}



document.querySelector('.clear-task').addEventListener('click',onClick);

function onClick(e){

    //Event Target Element
    val = e.target;
    val = e.target.id;
    val = e.target.classList;

    //Change Text in button on click
    e.target.innerText("Hello");

    //Getting Timestamp on clicking
    val = e.timeStamp;

    //Getting Event Type
    val = e.type;

    //Coords event relative to window
    val = e.clientY;
    val = e.clientX;

    //Coords event relative to element
    val = e.offsetY;
    val = e.offsetX;


    console.log("button clicked");
}


                            DIFFERENT MOUSE EVENTS

btn = document.querySelector('.btn');

btn.addEventListener('click',runEvent);
function runEvent(e){
    console.log(`Event Type : ${e.type}`);
}

dblclick
mousedown
mouseup
mouseenter
mouseleave
mouseover : Fires everytime we go inside other elements within parent(for which mouseover is set)
            Ex: We go inside card the inside a list then inside button in li...it fires everytime though only defined for card
mouseout :
mousemove


                            DIFFERENT KEYBOARD EVENTS

const form = document.querySelector('form');
const taskinput = document.getElementById('task');

form.addEventListener("submit", formEvent);

function formEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    
    //log value entered in input field of form
    console.log(taskInput.value);


    //e.preventDefault();
}

taskInput.addEventListener("keydown", inputEvent);

function inputEvent(e){
    console.log(e.target.value);//Every letter we type output to console
}

keyup
keypress - General keypress
focus - Focus on input field
blur - focus outside input field
cut - Anything is cut from input field
paste - Anything pasted to input field
input - general input field...anything we do with input fires this event


EVENT BUBBLING / DELEGATION












LOCAL AND SESSION STORAGE

//Set Local Storage 
localStorage.setItem('name','John');

//Set Session Storage
sessionStorage.setItem('name','Beth');

//Deleting
localStorage.removeItem('name');
localStorage.clear()

//Getting from Storage
const name = localStorage.getItem('name');




*/
OOPS


MAKING A CLASS

function Person(name, age){
    this.name = name;
    this.age = age;

    this.canVote = function(){
        if (age>18) 
            return true 
        else
            return false; 
    }
}

const arjit = new Person ('Arjit',12);




PROTOTYPES

//Object.prototype
//Person.prototype


function Person(name, age){
    this.name = name;
    this.age = age;
}
//Because canVote is Common , move it to protoype
Person.prototype.canVote = function(){
        if (age>18) 
            return true 
        else
            return false; 
    }
//Protoype function to change age
Person.prototype.changeAge = function(age){
        this.age = age; 
    }



const john = new Person('John',10);
console.log(john.canVote());//returns false

john.changeAge(19);
console.log(john.canVote());//returns true

//Using Object Property
console.log(john.hasOwnProperty('name'));//true
console.log(john.hasOwnProperty('canVote'));//false


INHERITANCE


function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greeting = function(){
    return `Hello ${this.firstName} ${this.lastName}`;
}


//Customer Constructor
function Customer(firstName, lastName, phone , membership){
    Person.call(this,firstName,lastName);

    this.phone = phone;
    this.membership = membership;
}

//Inherit Person protoype methods
Customer.protoype = Object.create(Person.prototype);
Customer.protoype.constructor = Customer;



const customer1 = new Customer('Tanmay','Bisht','9056202014','Premium');

//Overriding greeting prototype method of Person
Customer.prototype.greeting = function(){
    return `Hello customer ${firstName} ${lastName} Welcome to company `
}



OBJECT.CREATE


const personPrototype = {
    greeting: function(){
        return `Hello ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototype);
mary.firstName ='Mary';
mary.lastName = 'Poppins';
mary.age = 26;

mary.getsMarried('Marzzi');
console.log(mary.greeting);

const arjit = Object.create(personPrototype,{
    firstName: {value: 'Arjit'},
    lastName : {value: 'Sharma'},
    age: {value: 19}
});

console.log(arjit.greeting);




ES6

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }


    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    //Using Static methods
    static walk(){
        return 'Person is Walking';
    }    

}

const arjit = new Person('Arjit','Sharma');

console.log(Person.walk());





INHERITANCE IN ES6

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(firstName, lastName, phone, membership){
        super(firstName,lastName);
        this.phone = phone;
        this.membership = membership;
    }
}

const John = new Customer('John','Doe','970259022','Premium');

console.log(john.greeting());





ARROW FUNCTIONS 


// const sayHello = function(){
//     console.log('Hello');
// }

const sayHello = () => console.log('Hello');

//To return a string no need to use return keyword.One Line Returns
const sayHello =() => 'Hello';
console.log(sayHello());

//To return object literal wrap object in parenthesis,so that it doesnt consider it as function body
const sayHello = () => ({msg: 'Hello'});
console.log(sayHello());

//Single parameters passed in function dont need parenthesis
const sayHello = (name) => console.log(`Hello ${name}`);
const sayHello = name => console.log(`Hello ${name}`);

//1 or more parenthesis
const sayHello = (Fname,Lname) => console.log(`Hello ${Fname} ${Lname}`);


//Finding length of names in array using arrow func
const users = ['Nathan','John','Williams'];
//const nameLen = users.map(function(name){
//    return name.length;
//})
const nameLen = users.map(name =>name.length);














ASYNCHRONOUS JAVASCRIPT

synchronous code - Works in an order. 1st thing then 2nd 
while in asynchronous , while doing 1st do 2nd. Then wont be waiting for 1st to finish up

Most Async code comes from an API or library
Ways to work with async code
    Callback
    Promises
    Async/Await



AJAX
asynchronous JS and XML
Set of web technologies used to send and recieve data from server asynchronously without reloading webpage

Client --(JS call)-> AJAX Engine --(XmlHttpRequest)-> SERVER --(XML/JSON)-> AJAX Engine --(HTML Response)-> Client

XHR Object - Within JS enviroment, its methods transfer data 
Can be used with other protocols other than HTTP and Can work with data other than XML(JSON,plain Text)


//readyState Values: Tell State of server
//0 : request not initialized
//1 : Server connection established
//2 : request recieved
//3 : processing request
//4 : request finished and response is ready



//loading data from data.txt file
function loadData(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','data.txt',true);//3rd parameter states call data asynchronously
    
    //Used for spinners or loaders
    //While data is being fetched do something
    xhr.onprogress = function(){
        console.log(xhr.readyState);
    }

    xhr.onload = function(){
        //console.log(xhr.readyState);//returns 4
        if(this.status === 200)
            console.log(this.responseText);
    }

    xhr.onerror = function(){
        console.log("Error Loading data");
    }

    xhr.send();

    //Earlier we used onreadystatechange
    // xhr.onreadystatechange = function(){
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }    
}


LOADING JSON DATA USING XHR

function loadData(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','data.json',true);

    xhr.onload = function(){
        //console.log(xhr.readyState);//returns 4
        if(this.status == 200)
            const customers = JSON.parse(this.responseText);
            //Using JSON.parse so we can use it as an object

            customers.forEach(function(customer){
                console.log(customer.id);
                console.log(customer.name);
            });
    }

    xhr.send();

}


API - Application Programming Interface
A structured request and response

REST api - Representational State transfer
Architectural style for designing networked appln and relies on stateless,client-server protocol(mostly HTTP)
Can be used by any prog language
Treats server objects as resources that can be created and destroyed


HTTP Requests -
GET : Retrieve data from specified resource.
POST : Submit data to be processed to a specified resource.
PUT : Update a specified resource
DELETE : Delete a specified resource

API Endpoints -
URL that we acces to do certain thing
//ENDPOINT-->GET https://someurl.com/api/users


CALLBACK - The containing function is responsible for executing the callback function when the time comes

function giveTest(callback){
    setTimout(function(){
        console.log("Test Given");
        callback();
    },2000);
}

function getMarks(){
    setTimout(function(){
        console.log("Got Marks");
    },1000);
}

//giveTest takes 2 sec , getMarks takes 1 sec
//If we would have used synchronous code then we would have got marks before giving test
//callback waits for giving test then executes callback func getMarks 

giveTest(getMarks);
//Output - 
//  Test Given
//  Got Marks






PROMISES - Object that may produce value in the future

//To get response from promise we use .then()
function giveTest(){
    return new Promise(function(resolve,reject){
    setTimout(function(){
        console.log("Test Given");
        resolve();
    },2000);    
    });
}

function getMarks(){
    setTimout(function(){
        console.log("Got Marks");
    },1000);
}

giveTest().then(getMarks);





ERROR DEALING IN PROMISES


function giveTest(){
    return new Promise(function(resolve,reject){
    setTimout(function(){
        console.log("Test Given");

        //lets suppose there is error
        const error = true;
        if(error){
            reject("Something Went Wrong");
        }else{
            resolve();
        }
    },2000);    
    });
}

function getMarks(){
    setTimout(function(){
        console.log("Got Marks");
    },1000);
}

giveTest().then(getMarks).catch(function(err){
    console.log(err);
});





fetch and xhr does data transfer without reloading pages AJAX 
callback/promises are used to support asynchronous behaviour
FETCH API - Alternate to XHR. Used to transfer data from or to a URL endpoint . Built upon promises just how XHR on callbacks.
JavaScript can send network requests to the server and load new information whenever it’s needed.



GETTING TEXT DATA USING FETCH
//fetch returns promises
/*
function getText(){
    fetch('test.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(dat );
    })
    .catch(function(err){
        console.log(err);
    })
}
*/
//fetch returns promise
function getText(){
    fetch('test.txt')
    .then(res => res.text())
    .then(data => console.log(data) 
    .catch(err => console.log(err));
}



ASYNC/AWAIT

async function myFunc(){
    
    const promise = new Promise((resolve,reject)=>{
        setTimout(() => resolve('Hello'), 1000);
    });

    const res = await promise;//Waits until promise is resolved
    return res;

}

myFunc().then(res=>console.log(res));


ASYNC/AWAIT Error Handling

async function myFunc(){
    
    const promise = new Promise((resolve,reject)=>{
        setTimout(() => resolve('Hello'), 1000);
    });

    const error = true;

    if(!error){
    const res = await promise;//Waits until promise is resolved
    return res;
    }else{
        await Promise.reject(new Error('Something went Wrong'));
    }


}

myFunc()
.then(res=>console.log(res))
.catch(err=>console.log(err));


ASYNC/AWAIT with FETCH

async function getUsers(){
    //await response of fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //Only proceed once promise returned by fetch is resolved
    const data = await response.json();
    //Only Proceed when second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));