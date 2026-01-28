-- SQL Data Manipulation Language (DML)

-- DEFINITION: DML (Data Manipulation Language)
-- What it is: The subset of SQL used to manage data *within* schema objects.
-- What it does: Inserts, retrieves, modifies, and deletes row-level data.
-- Key Note: Unlike DDL, DML operations can often be rolled back (if inside a transaction).

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    sku_code VARCHAR(50),
    product_name VARCHAR(100),
    price DECIMAL(10, 2),
    restock_date DATE,
    is_available BOOLEAN
);

-- 1. Insert (Creation)

-- COMMAND: INSERT INTO
-- Definition: Adds new rows of data to a table.

-- Variation A: Single Row Insert (Standard)
INSERT INTO products (product_id, sku_code, product_name, price, restock_date, is_available)
VALUES (101, 'TSH-BLUE-S', 'Small Blue T-Shirt', 19.99, '2023-09-01', TRUE);

-- Variation B: Bulk Insert (Optimization)
INSERT INTO products (product_id, sku_code, product_name, price, restock_date, is_available)
VALUES 
    (102, 'TSH-RED-M', 'Medium Red T-Shirt', 24.99, '2023-09-01', TRUE),
    (103, 'HDY-BLK-L', 'Large Black Hoodie', 45.00, '2022-01-15', FALSE),
    (104, 'CP-WHT-OR', 'White Cotton Cap', 15.50, '2024-01-10', TRUE),
    (105, 'SCK-GRY-PK', 'Grey Socks Pack', 9.99, '2023-09-01', TRUE),
    (107, 'TSH-GRN-L', 'Large Green T-Shirt', 19.99, '2023-09-01', TRUE); 

-- Variation C: Partial Insert
INSERT INTO products (product_id, sku_code, product_name)
VALUES (106, 'GIFT-VCH', 'Promotional Gift Voucher');


-- 2. Select (Retrieval & Clauses)

-- COMMAND: SELECT
-- Definition: Retrieves data from one or more tables.

-- Clause: DISTINCT
-- Definition: Removes duplicate rows from the result set.
-- Use case: "What are the unique prices in our catalog?"
SELECT DISTINCT price FROM products;

-- Clause: WHERE ... IN
-- Definition: Filters for values that match any value in a specified list.
SELECT * FROM products 
WHERE sku_code IN ('TSH-BLUE-S', 'TSH-RED-M', 'HDY-BLK-L');

-- Clause: WHERE ... BETWEEN
-- Definition: Selects values within a given range (inclusive).
SELECT * FROM products 
WHERE price BETWEEN 10.00 AND 30.00;

-- Clause: AS (Alias)
-- Definition: Renames a column or table temporarily for the query result.
SELECT 
    product_name AS Item_Name, 
    price AS Current_Price 
FROM products;

-- Clause: GROUP BY
-- Definition: Groups rows that have the same values into summary rows.
-- Use case: "How many products were restocked on each date?"
SELECT restock_date, COUNT(*) AS product_count
FROM products
GROUP BY restock_date;

-- Clause: HAVING
-- Definition: Filters groups created by GROUP BY.
SELECT restock_date, COUNT(*) AS product_count
FROM products
GROUP BY restock_date
HAVING COUNT(*) > 1;

-- Clause: ORDER BY
-- Definition: Sorts the result set (ASC or DESC).
SELECT * FROM products
ORDER BY price DESC;

-- Clause: LIMIT / OFFSET
-- Definition: Constraints the number of rows returned.
SELECT * FROM products
LIMIT 2 OFFSET 0;


-- 3. Update (Modification)

-- COMMAND: UPDATE
-- Definition: Modifies existing data in the table.

-- Variation A: Standard Update
UPDATE products 
SET price = 21.99 
WHERE product_id = 101;

-- Variation B: Multi-Column Update
UPDATE products 
SET is_available = TRUE, price = 5.00 
WHERE product_id = 106;


-- 4. Delete (Removal)

-- COMMAND: DELETE
-- Definition: Removes specific rows from a table.

-- Variation A: Specific Delete
DELETE FROM products 
WHERE product_id = 102;

-- Variation B: Conditional Delete
DELETE FROM products 
WHERE is_available = FALSE;
