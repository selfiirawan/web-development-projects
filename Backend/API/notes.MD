# 🔥 API 
### **Application Programming Interface**
- bridges the communication between different pieces of software

## ⌖ Types of API 
- **REST API** (most common)
- GraphQL
- SOAP
- gRPC

<br>

## → REST API 
- APIs that follow a particular set of rules
- use the HTTP protocol to interact with the API (GET, POST, PATCH, PUT, DELETE)

### Extra 
> we can use *Postman* to get the result of the API, in json

<br>

## → API Endpoint
```base-url/endpoint```
- can be different for different purposes
- basically a different route on the API provider server
- eg:
``` 
https://bored-api.appbrewery.com/random 
https://bored-api.appbrewery.com/filter?type=education 
```
- **endpoint** - random & filter 


## → Query Parameters 
```base-url/endpoint?query=value```
- using ```?query=value```
- basically like **key & value**
- use when we want to provide some additional information/parameters to a request
- commonly use for *filtering, sorting, searching*

eg;
```
https://bored-api.appbrewery.com/filter?type=education
```
- **query parameter** - ```?type=education```


## → Multiple Query Parameters 
```base-url/endpoint?query1=value1&query2=value2 ```
- add ```&query=value```
- start with **?** for the first query-value, cont with **&** for multiple query-value


## → Path Parameter 
```base-url/endpoint/{path-param}```
- use to identify a resource by some specific parameters in the API; 
- *id, username* etc

eg:
```
https://bored-api.appbrewery.com/activity/3943506
```
- **path parameter** - 3943506

<br>

## ⌗ JSON 
### **JavaScript Object Notation**

- a way to format data that can be sent over the internet in a readable and efficient way
- json viewer - view flat json in a readable format

<br>

### JS Object -> JSON 
- use **stringify()**
```
const jsonData = JSON.stringify(dataObject);
```

### JSON -> JS Object 
- use **parse()**
```
const data = JSON.parse(jsonData);
```

<br>

## Axios
- a package in NPM 
- helps GET other server in shorter lines
- better error handling
- code:
```
import axios from "axios";
 
app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://wwww...");
        res.render("index.ejs", {activity: response.data});
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.status(500).send("Failed to fetch activity. Please try again.");
    }
});
```
> Docs available on npm web, search **"axios"**

<br>

## API Authentication 
### **4 tiers of authentication**

0. No Authentication
1. Basic Authentication
2. API Key Authorisation
3. Token Based

<br>

### 0. No Authentication 
- public API
- no security, no need of authorisation
- but have rate limit, eg: 100 requests /15mins

### 1. Basic Authentication
- use username and password
- turns them into base64 code
- website to decode base64: ```base64decode.org```

