# Class 13


## **Server**
Today we will start with connecting our server that we build in last classes with PostgreSQL.

1. Install pg and body-parser by running:

```
npm install pg body-parser
```

2. Require pg
```javascript
const pg = require('pg');
```
3. Create a local database after connecting to the Postgres server by implementing the following SQL line:

```sql
CREATE DATABASE demo 
```
4. Create the database URL inside the .env file

```
DATABASE_URL=postgres://username:password@localhost:5432/databaseName 
```

5. Create the pg client:

```javascript
const client = new pg.Client(process.env.DATABASE_URL);
```

6. Connect your database with the server

```javascript
client.connect()
.then(()=>{
    app.listen(PORT, () =>
    console.log(`listening on ${PORT}`)
    );
})
```

7. Create an SQL file called schema.sql to create the database table:

```sql
DROP TABLE IF EXISTS favRecipes;

CREATE TABLE IF NOT EXISTS favRecipes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    readyInMinutes INTEGER,
    summary VARCHAR(10000),
    vegetarian BOOLEAN,
    instructions VARCHAR(10000),
    sourceUrl VARCHAR(255),
    image VARCHAR(255),
    comment VARCHAR(255)
);
```

8. Run the following command to create you table:

```
psql -d demo -f schema.sql
```

9. Configure the body parser so you can read the body element from the request:

```javascript
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

```

10. Create an end point that take a post request to add a specific recipe to the database:

```javascript
app.post('/addFavRecipe' ,jsonParser, addFavRecipeHandler);

function addFavRecipeHandler(req, res){
    const recipe = req.body;
    console.log(recipe);
    const sql = `INSERT INTO favRecipes(title, readyInMinutes, summary, vegetarian, instructions, sourceUrl, image, comment) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`

    const values = [recipe.title, recipe.readyInMinutes, recipe.summary, recipe.vegetarian, recipe.instructions, recipe.sourceUrl, recipe.image, recipe.comment];
    client.query(sql,values).then((data) => {
        res.status(201).json(data.rows);
    })
    .catch(error => {
        console.log(error);
        errorHandler(error, req,res);
    });
};
```

11. Create an end point that take a get request and return all favorite recipes from database:

```javascript
app.get('/favRecipes', getFavRecipesHandler);


function getFavRecipesHandler(req, res){

    const sql = `SELECT * FROM favRecipes`;

    client.query(sql).then(data => {
        return res.status(200).json(data.rows);
    })
    .catch(error => {
        errorHandler(error, req,res);
    });
};
```
