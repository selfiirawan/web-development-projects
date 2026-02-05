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
