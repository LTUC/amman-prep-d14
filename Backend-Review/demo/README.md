# Project Name - Project Version

**Author Name**: LTUC - prep-d14

## WRRC

Add an image of your WRRC here

## Overview

## Getting Started

- install express, cors, dotenv, pg, axios
- create .env file, refet to .env.sample

## Project Features

- Main Route 
<pre>
  Mtehod: GET
  Endpoint: '/'
  Desc: The route to test our server status
</pre>

---
- Unis Data Route 
<pre>
  Mtehod: GET
  Endpoint: '/uni'
  Query : {cont:'Country name'}
  Desc: Send request to 3rd Party API
</pre>

---
- Unis DataBase Routes 
<pre>
  Mtehod: GET
  Endpoint: '/fav'
  Desc: Get all the data from unis table
</pre>
<pre>
  Mtehod: GET
  Endpoint: '/fav/:n'
  Desc: Get the data from unis table for a param (:n params to select a record by university name )
</pre>
<pre>
  Mtehod: POST
  Endpoint: '/fav'
  body : {
    "n":"uni name",
    "c":"uni country",
    "w":"uni web page",
    "cm": "uni comment"
  }
  Desc: Get the data from unis table for a param (:n params to select a record by university name )
</pre>
<pre>
  Mtehod: DELETE
  Endpoint: '/fav/:n'
  Desc: Delete a record data from unis table for a param (:n params to select a record by university name )
</pre>
<pre>
  Mtehod: PUT
  Endpoint: '/fav/:n'
  body : {
    "comment":"newcomment",
  }
  Desc: Update a record comment from unis table for a param (:n params to select a record by university name )
</pre>
