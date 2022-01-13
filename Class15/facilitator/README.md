# Class15:
## Deployment:
- Just follow the demo
- Mention that we do 3 apps:
  - Development
  - Staging
  - Production
## Database Normalization:
- Data in Database is stored in terms of enormous quantity. Retrieving certain data will be a tedious task if the data is not organized correctly. With the help of Normalization, we can organize this data and also reduce the redundant data.

- It is the processes of reducing the redundancy of data in the table and also improving the data integrity. So why is this required? without Normalization in SQL, we may face many issues such as:

  - Insertion anomaly: It occurs when we cannot insert data to the table without the presence of another attribute
  - Update anomaly: It is a data inconsistency that results from data redundancy and a partial update of data.
  - Deletion Anomaly: It occurs when certain attributes are lost because of the deletion of other attributes.
- In brief, normalization is a way of organizing the data in the database. Normalization entails organizing the columns and tables of a database to ensure that their dependencies are properly enforced by database integrity constraints.

- It usually divides a large table into smaller ones, so it is more efficient.
- Head out to this [PDF file](documents/database-normalization.pdf) which has more explanation and examples.

- Databases Relations(just basics):
  - ERD:
    - ER model stands for an Entity-Relationship model. It is a high-level data model. This model is used to define the data elements and relationship for a specified system.
    - Entity:
      - Is represent a table in the database and we usually draw it as box-table that has the attribute name and the attribute data type.
    - Attribute:
      - The attribute is used to describe the property of an entity.
    - Relations:
      - **One-to-One:** When only one instance of an entity is associated with the relationship
      - **One-to-Many:** When only one instance of the entity on the left, and more than one instance of an entity on the right associates with the relationship then this is known as a one-to-many relationship.
      - **Many-to-one:** When more than one instance of the entity on the left, and only one instance of an entity on the right associates with the relationship then it is known as a many-to-one relationship.
      - **Many-to-Many:** When more than one instance of the entity on the left, and more than one instance of an entity on the right associates with the relationship then it is known as a many-to-many relationship.
    - Keys
      - **Primary Keys:** Primary keys must contain UNIQUE values, and cannot contain NULL values.
      - **Foreign Keys:** 
        - Unique identifier from another table.
        - Often used to join tables within a query and associate table data.

      - **Composite Keys**
        - A combination of columns that make up a unique identifier for a table
        - Composite keys usually consist of multiple foreign keys combined together. No Primary key needs to be included in the combination.

    - Many-to-Many ERDs:
      - **Join Table**:
        - With Payload
        - With Primary key

      - Pure join table:
        - Without Payload
        - With Composite Key


  
## Resources:
* [What is Heroku](https://mentormate.com/blog/what-is-heroku-used-for-cloud-development/)
* [Heroku CLI Commands](https://devcenter.heroku.com/articles/heroku-cli-commands)
* [Mistakes to Avoid As a Backend Developer](https://dev.to/techmaniacc/mistakes-to-avoid-as-a-backend-developer-122j)

### Keywords to search for:
* Heroku
* Heroku CLI
