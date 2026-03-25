# API 
### **Application Programming Interface**
- bridges the communication between different pieces of software

## Types of API 
- **REST API** (most common)
- GraphQL
- SOAP
- gRPC

<br>

## REST API 
- APIs that follow a particular set of rules
- use the HTTP protocol to interact with the API (GET, POST, PATCH, PUT, DELETE)

### Extra 
> we can use *Postman* to get the result of the API, in json

<br>

## API Endpoint
```base-url/endpoint```
- can be different for different purposes
- basically a different route on the API provider server
- eg:
``` 
https://bored-api.appbrewery.com/random 
https://bored-api.appbrewery.com/filter?type=education 
```
- **endpoint** - random & filter 


## Query Parameters 
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