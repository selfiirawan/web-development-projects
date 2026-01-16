
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
