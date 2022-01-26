# Class 14


## **Server**

You will continue building on the last classes demos.

Today you will build and end point for get, update and delete a specific record.


1. Create an end point that take a get request with a specific id as params and return the details for the recipe which has the same id:

```javascript
app.get('/favRecipe/:id', getFavRecipeHandler);

function getFavRecipeHandler(req,res){
    const id = req.params.id;

    const sql = `SELECT * FROM favRecipes WHERE id = ${id}`;

    client.query(sql).then(data => {
        return res.status(200).json(data.rows);
    })
    .catch(error => {
        errorHandler(error, req,res);
    });
};
```

2. Create an end point that take a put request with a specific id as params and return the details for the recipe which has the same id:

```javascript
app.put('/updateFavRecipe/:id', jsonParser,updateFavRecipeHandler);

function updateFavRecipeHandler(req, res){
    const id = req.params.id;
    const recipe = req.body;

    const sql = `UPDATE favRecipes SET title=$1, readyInMinutes=$2, summary=$3, vegetarian=$4, instructions=$5, sourceUrl=$6, image=$7, comment=$8 WHERE id=${id} RETURNING *;`;
    const values = [recipe.title, recipe.readyInMinutes, recipe.summary, recipe.vegetarian, recipe.instructions, recipe.sourceUrl, recipe.image, recipe.comment];

    client.query(sql, values).then(data => {
        return res.status(200).json(data.rows);
        // or you can send 204 status with no content
        // return res.status(200).json(data.rows);
    }).catch( err => {
        console.log(err);
        errorHandler(err,req,res);
    });

};

```

3. Create and end point that take a delete request and delete the record from database:

```javascript
app.delete('/deleteFavRecipe/:id', deleteFavRecipeHandler);

function deleteFavRecipeHandler(req , res){
    const id = req.params.id;

    const sql = `DELETE FROM favRecipes WHERE id=${id};`;

    client.query(sql).then(() => {
        return res.status(204).json({});
    })
    .catch(err => {
        errorHandler(err,req,res);
    })
};
```