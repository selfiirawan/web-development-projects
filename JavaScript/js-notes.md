
# 📚 JavaScript Notes 


### alert() 
```
alert("Hello");
```
- popped up message

---

### prompt()
```
prompt("Write a message.");
```
- popped up message `with input box`

---

### typeof()
```
typeof("Hello);     // string
typeof(123);    // number
```
- tells the type of value 
- string, Number, boolean 

<br>

## var / let / const 
> **🚨 In modern JavaScript, `var` is generally avoided. `let` and `const` are preferred as they are block-scopped and safer to use.**

<br>

| const                       | let                   |
|:---------------------------:|:---------------------:|
| default. can't change value | value can be updated. |

<br>

e.g.
```
const name = "Selfi";   // default
name = "Alice";     // ❌ error
```

```
let age = 26;
age = 20;   // ✅ allowed
```
<br>

---

### .length
- count the length of value 
- start with 0 

```
const name = "Selfi";

name.length 

// output: 4
```

<br>

### .slice(x,y)
- slice value 
- the last is not included 

```
const country = "Malaysia";

country.slice(0,5);

// output: Malay
```
<br>

### .toUpperCase() & .toLowerCase()
- turn the string to all uppercase or all lowercase 

```
let country = "Malaysia";

country.toUpperCase();  //output: MALAYSIA
country.toLowerCase();  //output: malaysia 
```
<br>

## Increment(++) and Decrement(--)
### Increment(++)
- only +1
```
let x = 5;
x++;

//output: 6
```
<br>

### Decrement(--)
- only -1 
```
let y = 6;
y--;

//output: 5
```
<br>

## Functions 
- creating and calling functions 
``` 
function funcName() {
    console.log("Hello");
}

funcName();

// output: Hello
```
> no `semi-colon(;)` at the end of the function's curly bracket 

<br>

### Function with Parameters and Arguments 
```
function funcName(param) {
    var x = param * 3;
    console.log("He bought " + x + " milks");
}
 
funcName(3);

// output: He bought 9 milks
```
<br>

### Function: Outputs & Return Values 
```
function funcName(param1, arg2) {
    return param1 * arg2;
}
 
var x = funcName(3, 5);

//output: 15
```
- also can join one function with other function 

<br>

## Math Functions 
### Math.floor()
- round off `down` to the nearest number 
- eg:
```
let x = Math.floor(5.75);

//output: 5 (instead of 6)
```

<br>

### Math.pow(base, exponent)
- for square root or cubic 
- eg:
```
// instead of: 
let bmi = weight / (height * height);
 
// we can use:
let bmi = weight / Math.pow(height, 2);
```

<br>

### Math.round()
- round off to the nearest number (the correct one)
- eg:
```
Math.round(6.53)

//output: 7 
```

<br>

### Math.random()
- generates random number **between 0 - 0.99999** (16 digits)
- won't get >= 1 

<br>

## Control Flow 
### if - else if - else 
- e.g. syntax :
```
if (track === "clear") {
    move();
} else if (track === "dirty") {
    turnLeft();
} else {
    turnRight();
}
```

<br>

### Comparators and Equality 

|  ===  |     equals to     |
|:-----:|:-----------------:|
|  !==  |    not equals to  |
|  <=   | lesser or equals  |
|   >=  | greater ot equals |
|   <   |    lesser than    |
|   >   |    greater than   |

<br>

### === and ==
eg:
``` 
const a = 1;
const b = "1";

a === b    // False 
a == b     // True 
```

<br>

### Combining Comparators 

- and = && 
- or = || 
- eg :
``` 
if (a === 6 && a < 10) {
    console.log(a);
}
```

<br>

## Array [ ]
- eg:
```
let guestList = ["Anny", "John", "Brendon"];

// also start from 0 
guestList[0]; //output: Anny

// can use .length 
guestList.length;   //output: 3

// .includes 
guestList.includes("Brendon");   //output: True
```

<br>

## While and For Loop
### While Loop
- eg syntax :
```
let i = 1;

while (i < 2) {
    console.log(i);
    i++;
}
```

<br>

### For Loop
- syntax:
```
for (var; comparison; increment/decrement) {
    // do something 
}
```

- eg :
```
for (var i = 1; i < 3; i++) {
    console.log(i);
}
```

<br>

## Adding JavaScript to Websites 
### External (most recommended ✅)
- create a new file for js; `index.js`
- insert `<script>` at the last line before `</body>`

```
<body>
    <h1>Hello</h1>

    <script src="index.js"></script>
</body>
```

<br>

### Internal 
- the JS code is inside `<body>` at the last line before `</body>`

```
<body>
    <h1>Hello</h1>

    <script type="text/javascript">
        alert("Goodbye");
    </script>
</body>
```

<br>

## Inline (Not recommended ❌)
- like inline css 

```
<body onload="alert('Goodbye');">
    
    <h1>Hello</h1>

</body>
```

<br>

## Document Object Model (DOM)
### 1. document.firstElementChild;
- get the **whole html structure** 

### 2. document.firstElementChild.lastElementChild;
- get only the `<body>` and its child

### 3. document.firstElementChild.firstElementChild;
- get only the `<head>` and whats inside 

### 4. document.firstElementChild.lastElementChild.firstElementChild;
- get the first element (eg; `<h1>`) of the lastElement (`<body>`)

```
html
|___ body 
|________h1 
```

eg:
> index.html 
```
<body>
    <h1>Hello</h1>
    <input type="checkbox">

    <script src="index.js" charset="utf-8"> </script>
</body>
```
<br>

> script.js
```
let heading = document.firstElementChild.lastElementChild.firstElementChild;

heading // Hello 
heading.innerHTML = "Goodbye";    // Hello -> Goodbye 
heading.style.color = "red";    // change h1 color to red 

document.querySelector("input").click();    // auto tick the checkbox
```

<br>

## Selecting HTML elements with JavaScript 

### eg given:
```
<body>
    <h1 id="title">Hello</h1>

    <ul id="list">
        <li class="item"><a></a><li>
        <li class="item"></li>
        <li class="item"></li>
    </ul>
</body>
```

### 1. document.getElementsByTagName("");
- call with tag (`h1, body, button, etc.`)
- output array []
- if we want to call / change a specific items in one of the elements, we use index

eg:
```
document.getElementByTagName("li")[1].style.color = "red";

// change the second <li> to red [li, li, li]
```

- can also check the length 
``` 
document.getElementsByTagName("li").length;

// output: 3
```

<br>

### 2. document.getElementsByClassName("");
- call with class
- output also in array [], so call with index 
- no need to use '.' just put the class name 

```
document.getElementsByClassName("item")[2].style.color = "blue";

// change the third[2] <li> to blue 
```

<br>

### 3. document.getElementById("");
- call with id
- no need # , just put the ID name 

``` 
document.getElementById("title").innerHTML = "Bye";

// change element with ID #title to Bye
```

<br>

### 4. document.querySelector("");
- call with selector, as in CSS selector 
- can be tags, id(#) or/and class(.)

```
document.querySelector(".btn");
```

<br>

### Combining Selectors 
- combining selector with other selector 
- with space 
> `li` --> `a`
```
document.querySelector("li a");
``` 

<br>

- without space 
- more specific 
- but only return the first one 
> calling `li` with `.item` class 
```
document.querySelector("li.item");
```
<br>

### 5. document.querySelectorAll("");
- select **all** from the selected selector 
- output in array[], modify with index 
```
document.querySelectorAll("#list .item");

// select all .item
// in array form [.item, .item, .item]
```

```
document.querySelectorAll("#list .item")[0].style.color = "yellow";

// change the first <li class="item"> to yellow
```
<br>

> More HTML DOM style object : https://www.w3schools.com/jsref/dom_obj_style.asp

<br>

## .classList , .add(""), .remove(""), .toggle("")
### .classList 
- list all the available class for the selected element/tag 
- eg:
```
document.querySelector("button").classList;
```
<br>

### .add("")
- add new class to the selected element/tag 
- eg:
```
document.querySelector("button").classList.add("invisible");
```
- add class `invisible` to `<button>`
- `<button class="btn invisible">`
<br>

### .remove("")
- remove a class from the selected element/tag 
- eg:
```
document.querySelector("button").classList.remove("btn");
```
- remove class `btn` from `<button>` 
- `<button class="invisible">`
<br>

### .toggle("")
- act like an on-off switch from the class 
``` 
document.querySelector("button").classList.toggle("invisible");
```