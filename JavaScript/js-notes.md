
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
typeof("Hello);     \\ string
typeof(123);    \\ number
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
const name = "Selfi";   \\ default
name = "Alice";     \\ ❌ error
```

```
let age = 26;
age = 20;   \\ ✅ allowed
```
<br>

---

### .length
- count the length of value 
- start with 0 

```
const name = "Selfi";

name.length 

\\ output: 4
```

<br>

### .slice(x,y)
- slice value 
- the last is not included 

```
const country = "Malaysia";

country.slice(0,5);

\\ output: Malay
```
<br>

### .toUpperCase() & .toLowerCase()
- turn the string to all uppercase or all lowercase 

```
let country = "Malaysia";

country.toUpperCase();  \\output: MALAYSIA
country.toLowerCase();  \\output: malaysia 
```
<br>

## Increment(++) and Decrement(--)
### Increment(++)
- only +1
```
let x = 5;
x++;

\\output: 6
```
<br>

### Decrement(--)
- only -1 
```
let y = 6;
y--;

\\output: 5
```
<br>

## Functions 
- creating and calling functions 
``` 
function funcName() {
    console.log("Hello");
}

funcName();

\\ output: Hello
```
> no semi-colon(;) at the end of the function's curly bracket 

<br>

### Function with Parameters and Arguments 
```
function funcName(param) {
    var x = param * 3;
    console.log("He bought " + x + " milks");
}
 
funcName(3);

\\ output: He bought 9 milks
```
<br>

### Function: Outputs & Return Values 
```
function funcName(param1, arg2) {
    return param1 * arg2;
}
 
var x = funcName(3, 5);

\\output: 15
```
- also can join one function with other function 