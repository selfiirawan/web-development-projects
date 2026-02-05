# jQuery 
- a JavaScript library 
- lessen codes 
- use $ sign 

from :
``` 
document.querySelector("h1");
```

to:
```
$("h1");
```

<br>

## Implementing jQuery 
1. go to jquery website 
2. choose `google CDN` 
3. copy the script tag from the **latest version**
4. paste the script tag **before** JS script tag 

### extra notes 
- if the script tag is placed inside `<head>`, we need to use `ready()` method to run the code 
- but **not recommended** ❌
- eg :
``` 
$(document).ready(function () {
    $("h1").css("color","red");
})
```

<br>

## Select Elements with jQuery 
- using $ sign 
- will select all chosen element 
- eg:
```
$("h1");
$("button");

// will select all h1 and button element 
```

<br>

## Manipulating Styles with jQuery 
### Add, Remove or Check for class 
- create and styles class in the **css file**
- do the behaviour in **js file** (with jquery)
- can add multiple class, just with **space**, not period(.) or comma(,)

### example 
> styles.css 
```
.big-title {
    font-size: 5rem;
    color: yellow;
}
 
.margin-50 {
    margin: 50px;
}
```

<br>

> index.js 
```
// to add class
$("h1").addClass("big-title margin-50");
 
// to remove class 
$("h1").removeClass("big-title margin-50");
 
// to check for the class
$("h1").hasClass("big-title");
```

<br>

## Manipulating Text with jQuery 
- using `.text(" ")` and `.html(" ")`
- similar to `.innerHTML` and `.innerText`

### example 
``` 
$("h1").text("Bye");             ✅
$("h1").text("<em>Bye</em>");    ❌
 
$("h1").html("<em>Bye</em>");    ✅
$("h1").html("Bye");             ✅
``` 

<br>

## Manipulating Attributes with jQuery 
- setting the `.getAttribute` and `.setAttribute` with jQuery
- using `.attr()`
```
.attr(" ") = .getAttribute
.attr(" ", " ") = .setAttribute 
```

### example 
```
$("img").attr("src");
$("img").attr("src", "http://www.sefghj.com");
```

<br>

## Add Event Listener with jQuery 
### syntax example 1 
```
$("h1").click(function() {
    $("h1").css("color", "red");
})
```

### syntax example 2 
```
$("button").keydown(function(event) {
    console.log(event.key);
})
```

<br>

## Adding / Removing Elements 
### before()
- add new element **before** the selected element 
- eg:
```
$("h1").before("<button>New</button>")

// add new element before the h1 tag 
<button>New</button><h1>Hello</h1>
```

### after()
- add new element **after** the selected element 
- eg:
```
$("h1").after("<button>New</button>")

// add new element after the h1 tag 
<h1>Hello</h1><button>New</button>
```

### prepend()
- add new element **after** the **opening tag** of the selected element
- eg:
```
$("h1").prepend("<button>New</button>");
 
// add button after h1 opening tag
<h1><button>New</button>Hello</h1>
```

### append()
- add new element **before** the **closing tag** of the selected element
- eg:
```
$("h1").append("<button>New</button>");
 
// add button after h1 opening tag
<h1>Hello<button>New</button></h1>
```

### remove()
- remove **all** the selected element
- eg :
```
$("h1").remove();
```