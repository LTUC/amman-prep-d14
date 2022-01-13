# Class13:
## What is Database

### What is Data ? 
- Data is a collection of a distinct small unit of information.
- Data can be used in a variety of forms like text, numbers, media, bytes, etc.
- Data can be stored in pieces of paper or electronic memory, etc.

### what is Database ?
- A database is an organized collection of data, so that it can be easily accessed and managed.
- You can organize data into tables, rows, columns, and index it to make it easier to find relevant information.
- Database handlers create a database in such a way that only one set of software program provides access of data to all the users.
- The main purpose of the database is to operate a large amount of information by storing, retrieving, and managing data.
- There are many databases available like MySQL, Sybase, Oracle, MongoDB, Informix, PostgreSQL, SQL Server, etc.
- Modern databases are managed by the database management system (DBMS).

### How many types of Database do we have ?

We have about 8 types of database but we will talk only about 2 of them:
1. **Relational Database:** This database is based on the relational data model, which stores data in the form of rows and columns, and together forms a table. A relational database uses SQL(Structured Query Language) for storing, manipulating, as well as maintaining the data.
There are following four commonly known properties of a relational model known as ACID properties, where:
- **A means Atomicity:** This ensures the data operation will complete either with success or with failure. It follows the 'all or nothing' strategy.
- **C means Consistency:** If we perform any operation over the data, its value before and after the operation should be preserved.
- **I means Isolation:** There can be concurrent users for accessing data at the same time from the database. Thus, isolation between the data should remain isolated.
- **D means Durability:** It ensures that once it completes the operation and commits the data, data changes should remain permanent.

2. **Non-Relational Database:** Non-SQL/Not Only SQL is a type of database that is used for storing a wide range of data sets. It is not a relational database as it stores data not only in tabular form but in several different ways. It came into existence when the demand for building modern applications increased. Thus, NoSQL presented a wide variety of database technologies in response to the demands. We can further divide a NoSQL database into the following four types:

- **Key-value storage:** It is the simplest type of database storage where it stores every single item as a key (or attribute name) holding its value, together.
- **Document-oriented Database:** A type of database used to store data as JSON-like document. It helps developers in storing data by using the same document-model format as used in the application code.
- **Graph Databases:** It is used for storing vast amounts of data in a graph-like structure. Most commonly, social networking websites use the graph database.
- **Wide-column stores:** It is similar to the data represented in relational databases. Here, data is stored in large columns together, instead of storing in rows.

### What is DBMS (Database management system) ?
- Database management system is a software which is used to manage the database. For example: PostgreSQL, MySQL, Oracle, etc are a very popular commercial database which is used in different applications.
- DBMS provides an interface to perform various operations like database creation, storing data in it, updating data, creating a table in the database and a lot more.
- It provides protection and security to the database. In the case of multiple users, it also maintains data consistency.


### what is RDBMS ?
- RDBMS stands for Relational Database Management Systems..
- All modern database management systems like SQL, MS SQL Server, IBM DB2, ORACLE, My-SQL and Microsoft Access are based on RDBMS.
- It is called Relational Data Base Management System (RDBMS) because it is based on relational model introduced by E.F. Codd.
- Please read all the topics carefully in this [link](https://www.javatpoint.com/what-is-rdbms)


**NOW,**
- As we discussed earlier, A database is an organized collection of structured information, or data, typically stored electronically in a computer system which is usually controlled by a database management system (DBMS). Together, the data and the DBMS, along with the applications that are associated with them, are referred to as a database system, often shortened to just database.

- Data within the most common types of databases in operation today is typically modeled in rows and columns in a series of tables to make processing and data querying efficient. The data can then be easily accessed, managed, modified, updated, controlled, and organized. Most databases use structured query language (SQL) for writing and querying data.

### Now, what is SQL ?
- It's a way to work with a Relational DB.
- SQL is a standard language for accessing and manipulating databases.
- SQL Uses english sentences to "talk" to the database.
- Now, this is your 4th Language (HTML, CSS, JS, and now SQL)
- SQL itself is not a database
    - It's a way to work with a Relational DB
        - We will use Postgres
        - There are many others

- Good Visual: Excel Spreadsheet
    - Rows and Columns
        - Rows are referred to as "Records" in an actual database
    - Have the students assist you in modeling something in Excel.
        - Like a person, or a car, or whatever they choose
        - Let them give you the column headings
        - Inform them that you get an "id" column automatically, so start with that.

    - Then, have the students fill in 4 or 5 rows of sample data


        |id|year|make|model|trans|cylinders|
        |--|----|----|-----|-----|---------|
        |1|2018|mazda|3|auto|4|
        |2|1976|toyota|celica|manual|3|
        |3|2013|gmc|terrain|auto|6|
        |4|2014|ford|focus|auto|4|
        |5|2008|ford|f-150|auto|8|

    - How many ways can you ask that data for information?
      - Every vehicle made before 2000
      - Every 4 cylinder vehicle
      - All fords
      - etc.

    - These are "Queries" and are written in a structured ("S" in SQL) manner as a statement.

    - The SQL "Language" gives you the statements and clauses that are available to you.

        - What do you want to do?
            - SELECT, INSERT, UPDATE, DELETE
        - Which columns are at play
            - year, make, model ... even all of them (*)
        - What table are you working with?
            - FROM cars
        - How should we filter it?
            - WHERE x=y
        - SELECT year, make, model FROM cars WHERE make = 'ford'
    - Still in the spreadsheet, write out some queries and have the students predict what might come back.

        - SELECT year, make, model FROM cars WHERE make = 'ford'
        - SELECT * FROM cars WHERE year < 2010
        - SELECT make, trans FROM cars WHERE cylinders = 8
        - Alter selecting *, rows, and various where clauses

## Why ??


  - Simply put, scale.
  - Relational databases are remarkably fast at finding similar data and with indexing, you can look up a record amongst billions in milliseconds.
  - In order for this to happen, SQL Databases rely on structure (a solid model)
    - Data Types
        - INT
        - CHAR
        - VARCHAR
        - DATE
        - BLOB
        - BOOL
## Please read the following topics carefully about SQL:

  - You can run and test queries at the [SQL Playground](https://master.dcesh4541no84.amplifyapp.com/)
  - [SQL CREATE DATABASE](https://www.w3schools.com/sql/sql_create_db.asp)
  - [SQL DROP DATABASE](https://www.w3schools.com/sql/sql_drop_db.asp)
  - [SQL CREATE TABLE](https://www.w3schools.com/sql/sql_create_table.asp)
  - [SQL DROP TABLE](https://www.w3schools.com/sql/sql_drop_table.asp)
  - [SQL ALTER TABLE](https://www.w3schools.com/sql/sql_alter.asp)
  - [SQL SELECT](https://www.w3schools.com/sql/sql_select.asp)
  - [SQL SELECT DISTINCT](https://www.w3schools.com/sql/sql_select.asp)
  - [SQL WHERE](https://www.w3schools.com/sql/sql_where.asp)
  - [SQL AND, OR and NOT](https://www.w3schools.com/sql/sql_and_or.asp)
  - [SQL ORDER BY](https://www.w3schools.com/sql/sql_orderby.asp)
  - [SQL INSERT INTO](https://www.w3schools.com/sql/sql_insert.asp)
  - [SQL NULL Values](https://www.w3schools.com/sql/sql_null_values.asp)
  - [SQL UPDATE](https://www.w3schools.com/sql/sql_update.asp)
  - [SQL DELETE](https://www.w3schools.com/sql/sql_delete.asp)
  - [SQL Constraints](https://www.w3schools.com/sql/sql_constraints.asp)
    - [NOT NULL](https://www.w3schools.com/sql/sql_notnull.asp)
    - [UNIQUE](https://www.w3schools.com/sql/sql_unique.asp)
    - [PRIMARY KEY](https://www.w3schools.com/sql/sql_primarykey.asp)

## Postgres Database Server
- Postgres is an SQL (Relational) Database server that we will be using throughout the 401 level courses. In this step, we'll be installing Postgres on your system and preparing it for use.

- Postgres comes in 2 parts, a client and a server ... the server runs constantly, waiting for clients to connect to it so that they can store and retrieve data. The server does the actual management of the data. You'll get much deeper into the inner workings of these during your coursework.

## What is the difference between get and post request:
- **GET:**
  - We do a get request for getting data from the server
  - We do not usually send data with the request(This is not totally correct because we send tokens for auth and we send params and queries but do not mention that in this class).
  - Success status is 200.
- **POST**:
  - We send post to send some secure data (Email, password).
  - This data will be sent inside a secure object called body.
  - Success status is 201.


## Resources:
* [Databases Introduction](https://zenkit.com/en/blog/everything-you-need-to-know-about-web-databases/)
* [SQL](https://sqlbolt.com/)
* [SQL Practice](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all)
* [SQL Sheetcheat](http://www.cheat-sheets.org/sites/sql.su/)
* [What is CRUD](https://youtu.be/iNkspbIfcic)
* [REST vs CRUD](https://www.logicmonitor.com/blog/rest-vs-crud)

### Keywords to search for:
* Databases
* SQL vs NoSQL
* CRUD
* Rest