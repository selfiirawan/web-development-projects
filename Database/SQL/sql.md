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

<br>

## Foreign Keys 
- create a **link** between **two tables**
- is a **column in a table** that refers to the `PRIMARY KEY` in another table
- table with `FOREIGN KEY` is called **child table**
- table with `PRIMARY KEY` is called the **referenced** or **parent table**

example syntax:
```
CREATE TABLE orders (
    id INT PRIMARY KEY, 
    order_num INT,
    customer_id INT,
    product_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
)_
```
- the keyword is `REFERENCES`

<br>

## Inner Join
- returns only rows that have **matching values** in both tables
- can use just `JOIN` instead of `INNER JOIN`, as `INNER` is the **default** join type

syntax:
```
SELECT column_name
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name
```

example:
```
SELECT orders.order_number, products.name, products.price, products.stock
FROM orders
INNER JOIN products
ON orders.product_id = products.id
```