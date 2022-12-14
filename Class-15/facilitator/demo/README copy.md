# Class 14


## **Server**

You will continue building on the last classes demos.

Today you will build and end point for get, update and delete a specific record.


1. Create an end point that take a get request with a specific id as params and return the details for the meme which has the same id:

```javascript
app.get('/favmeme/:id', getFavMemeHandler);

function getFavMemeHandler(req,res){
    const id = req.params.id;

    const sql = `SELECT * FROM favmeme WHERE id = ${id}`;

    client.query(sql).then(data => {
        return res.status(200).json(data.rows);
    })
    .catch(error => {
        errorHandler(error, req,res);
    });
};
```

2. Create an end point that take a put request with a specific id as params and return the details for the meme which has the same id:

```javascript
app.put('/updateFavMeme/:id', jsonParser,updateFavMemeHandler );


function updateFavMemeHandler(req, res){
    const id = req.params.id;
    const meme = req.body;

    const sql = `UPDATE favmeme SET memeName=$1, memeImage=$2, tags=$3, topText=$4, comment=$5 WHERE id=${id} RETURNING *;`;
    const values = [meme.name, meme.image, meme.tags, meme.topText, meme.comment];

    client.query(sql, values).then(data => {
        return res.status(200).json(data.rows);
        // or you can send 204 status with no content
        // return res.status(200).json(data.rows);
    }).catch( err => {
        errorHandler(err,req,res);
    });

}
```

3. Create and end point that take a delete request and delete the record from database:

```javascript
app.delete('/deleteFavMeme/:id', deleteFavMemeHandler);

function deleteFavMemeHandler(req , res){
    const id = req.params.id;

    const sql = `DELETE FROM favmeme WHERE id=${id};`;

    client.query(sql).then(() => {
        return res.status(204).json({});
    })
    .catch(err => {
        errorHandler(err,req,res);
    })
};
```