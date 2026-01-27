-- SQL Data Definition Language (DDL)

-- DEFINITION: DDL (Data Definition Language)
-- What it is: A subset of SQL used to define and manage the database structure (schema).
-- What it does: Creates, modifies, and destroys database objects like tables, indexes, and views.
-- Key Note: DDL commands are auto-committed (cannot be rolled back in many SQL dialects).

-- 1. Database Creation and Selection

-- COMMAND: CREATE DATABASE
-- Definition: Creates a new container for organizing tables and other objects.
-- Interview Tip: Always check if it exists first to prevent script failures in automation.
CREATE DATABASE IF NOT EXISTS company_db;

-- COMMAND: USE
-- Definition: Selects the specific database context for subsequent commands.
USE company_db;


-- 2. Table Creation Ways

-- COMMAND: CREATE TABLE (Standard)
-- Definition: Defines a new table's blueprint: columns, data types, and base constraints.
-- Real-world use: Defining an inventory system for an e-commerce platform.
CREATE TABLE IF NOT EXISTS products (
    product_id INT AUTO_INCREMENT PRIMARY KEY, -- Primary Key: Unique ID + Not Null + Index.
    sku_code VARCHAR(50) NOT NULL UNIQUE,      -- Unique: Stock Keeping Unit. Prevents duplicates.
    category VARCHAR(20) DEFAULT 'general'     -- Default: Fallback category if none provided.
);

-- COMMAND: CREATE TABLE AS SELECT (CTAS)
-- Definition: Creates a new table and populates it with the result set of a SELECT query.
-- Interview Tip: Copies structure AND data, but often does NOT copy constraints (like Primary Keys or Indexes).
CREATE TABLE products_snapshot AS
SELECT * FROM products;

-- COMMAND: CREATE TEMPORARY TABLE
-- Definition: Creates a table that exists ONLY for the duration of the current session.
-- What it does: Auto-dropped when connection closes. Visible only to the current user.
-- Use case: Storing intermediate calculations without cluttering the main database.
CREATE TEMPORARY TABLE temp_price_calc (
    session_id INT,
    calculated_margin DECIMAL(5,2)
);


-- 3. Datatypes 

-- Interview Question: "How do you choose the right data type?"
-- Answer: "Optimize for storage space and data integrity."
CREATE TABLE all_datatypes_demo (
    -- Numeric Types
    id_tiny TINYINT,        -- Very small integers (0-255). Good for flags.
    id_small SMALLINT,      -- Small integers (~32k). 
    id_norm INT,            -- Standard integers (~2 billion). Default for IDs.
    id_big BIGINT,          -- Huge integers. For logs or massive tables.
    
    -- Exact & Approximate Decimals
    price DECIMAL(10, 2),   -- Exact fixed-point (Currency). 10 digits total, 2 decimal places. MANDATORY for money.
    scientific_val FLOAT,   -- Approximate floating-point (Scientific calc).
    precise_val DOUBLE,     -- Double precision floating-point.

    -- String Types
    code_fixed CHAR(3),        -- Fixed length. 'USA' takes 3 bytes. 'A' takes 3 bytes (padded). Fast.
    name_var VARCHAR(255),     -- Variable length. 'A' takes 1 byte + overhead. Efficient for text.
    description TEXT,          -- Long text blocks (Articles, comments).
    
    -- Date & Time
    birth_date DATE,           -- YYYY-MM-DD
    start_time TIME,           -- HH:MM:SS
    event_dt DATETIME,         -- YYYY-MM-DD HH:MM:SS (Static)
    updated_at TIMESTAMP,      -- YYYY-MM-DD HH:MM:SS (Timezone aware, often auto-updates)

    -- Other
    is_verified BOOLEAN,       -- True/False
    profile_pic BLOB,          -- Binary Large Object (Images/Files)
    settings JSON              -- Storing flexible JSON documents (Modern SQL)
);


-- 4. Altering Tables (Schema Manipulation)

-- DEFINITION: ALTER TABLE
-- What it is: Modifies an existing table structure.
-- Why use it: Requirements change. We need new columns, wider fields, or name changes.

-- COMMAND: ADD COLUMN
ALTER TABLE products 
ADD COLUMN supplier_email VARCHAR(100);

-- COMMAND: MODIFY / ALTER COLUMN
-- What it does: Changes the data type or properties of a column.
-- Warning: Can fail if existing data cannot be converted to the new type.
ALTER TABLE products 
MODIFY COLUMN category VARCHAR(50);

-- COMMAND: RENAME COLUMN
-- What it does: Changes the column name without losing data.
ALTER TABLE products 
CHANGE COLUMN category product_category VARCHAR(50);

-- COMMAND: DROP COLUMN
-- What it does: Permanently removes a column and all its data. Irreversible.
ALTER TABLE products 
DROP COLUMN supplier_email;


-- 5. Constraints (Data Integrity)

-- DEFINITION: CONSTRAINTS
-- What they are: Rules enforced by the database engine to ensure data validity.

-- COMMAND: ADD CONSTRAINT (Foreign Key)
-- Definition: Enforces referential integrity. Ensures a value in one table matches a value in another.
-- Result: Prevents "orphan" records.
ALTER TABLE products 
ADD CONSTRAINT fk_snapshot_link 
FOREIGN KEY (product_id) REFERENCES products_snapshot(product_id); 

-- COMMAND: ADD CONSTRAINT (Check)
-- Definition: specific logic validation.
-- Result: Rejects rows that don't meet the condition.
ALTER TABLE products 
ADD CONSTRAINT chk_id_positive 
CHECK (product_id > 0);


-- 6. Views & Indexes (Optimization)

-- COMMAND: CREATE INDEX
-- Definition: A data structure (B-Tree) that improves the speed of data retrieval operations.
-- Trade-off: Faster SELECTs (Reads), but Slower INSERT/UPDATE (Writes).
CREATE INDEX idx_sku ON products(sku_code);

-- COMMAND: CREATE VIEW
-- Definition: A virtual table based on the result-set of an SQL statement.
-- Why use it: Security (hiding sensitive columns) and Simplicity.
CREATE VIEW public_product_info AS
SELECT sku_code, product_category 
FROM products;


-- 7. Destruction (Cleanup)

-- COMMAND: TRUNCATE TABLE
-- Definition: Removes ALL rows from a table.
-- Interview Question: "Difference between DELETE and TRUNCATE?"
-- Answer: TRUNCATE is DDL (resets structure/counters), DELETE is DML (row-by-row). TRUNCATE is faster.
TRUNCATE TABLE products;

-- COMMAND: DROP TABLE
-- Definition: Deletes the table definition AND data. Complete removal.
DROP TABLE IF EXISTS all_datatypes_demo;