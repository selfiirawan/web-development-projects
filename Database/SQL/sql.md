# Structured Query Language (SQL)
## CRUD with SQL
### Create Table 
```
CREATE TABLE tableName (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    price MONEY
);
```
---
### Insert Data to the Table 
```
INSERT INTO tableName (column1, column2)
VALUES (value1, value2)
```
or 
```
INSERT INTO tableName
VALUES (value1, value2, value3, value4)
```
---
### Read Data 
```
SELECT * FROM tableName 
```
- display all columns and rows   
<br>

```
SELECT column1, column2 FROM tableName
```
- only display data of selected columns   
<br>

```
SELECT * FROM tableName WHERE id = 2
```
- only display a specific data / row  
<br>

```
SELECT column1, column2 FROM tableName WHERE id = 3
```
- display specific row and column
---
### Update Table 
```
UPDATE tableName
SET column1 = value1, column2 = value2
WHERE id = 1
```
- updating a single row of data 
> remember to use `WHERE` 
---
### Delete Data 
```
DELETE FROM tableName
WHERE id = 3 #example
```
> remember to use `WHERE` 