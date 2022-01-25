# Class 14


## **Server**

You will continue building on the last classes demos.

Today you will build and end point for get, update and delete a specific record.


1. Create an end point that take a get request with a specific id as params and return the details for the fact which has the same id:

```javascript
app.get('/favFact/:id', getFavFactHandler);

function getFavFactHandler(req,res){
    const id = req.params.id;

    const sql = `SELECT * FROM favanimalfact WHERE id = ${id}`;

    client.query(sql).then(data => {
        return res.status(200).json(data.rows);
    })
    .catch(error => {
        errorHandler(error, req,res);
    });
};
```

2. Create an end point that take a put request with a specific id as params and return the details for the fact which has the same id:

```javascript
app.put('/updateFavFact/:id', jsonParser,updateFavFactHandler);


function updateFavFactHandler(req, res){
    const id = req.params.id;
    const fact = req.body;

    const sql = `UPDATE favanimalfact SET name=$1, factImage=$2, animalType=$3, minLength=$4, maxLength=$5, habitat=$6, diet=$7, comment=$8 WHERE id=${id} RETURNING *;`;
    const values = [fact.name, fact.image_link, fact.animal_type, fact.length_min, fact.length_max, fact.habitat, fact.diet, fact.comment];

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
app.delete('/deleteFavFact/:id', deleteFavFactHandler);

function deleteFavFactHandler(req , res){
    const id = req.params.id;

    const sql = `DELETE FROM favanimalfact WHERE id=${id};`;

    client.query(sql).then(() => {
        return res.status(204).json({});
    })
    .catch(err => {
        errorHandler(err,req,res);
    })
};
```