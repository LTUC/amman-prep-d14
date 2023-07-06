const express = require("express");
const router = express.Router();
const client = require("../client");

router.get("/", (req, res, next) => {
  try {
    client.query(`SELECT * FROM unis`).then(
      (dbresponse) => {
        res.status(200).send(dbresponse.rows);
      },
      (rejectDbResponse) => {
        res.status(501).send(rejectDbResponse);
      }
    );
  } catch (e) {
    next("main handler " + e);
  }
});

router.get("/:n", (req, res, next) => {
  try {
    client.query(`SELECT * FROM unis WHERE name='${req.params.n}'`).then(
      (dbresponse) => {
        res.status(200).send(dbresponse.rows);
      },
      (rejectDbResponse) => {
        res.status(501).send(rejectDbResponse);
      }
    );
  } catch (e) {
    next("fav/:n get handler " + e);
  }
});

router.post("/", (req, res, next) => {
  try {
    const { n, w, c, cm } = req.body;
    let lc_n = n.toLocaleLowerCase();
    client
      .query(
        `INSERT INTO unis (name,comment,country,web_page) VALUES ($1,$2,$3,$4)`,
        [lc_n, cm, c, w]
      )
      .then(
        (dbresponse) => {
          res.status(201).send(`The Record added into unis`);
        },
        (rejectDbResponse) => {
          res.status(501).send(rejectDbResponse);
        }
      );
  } catch (e) {
    next("fav post handler " + e);
  }
});

router.delete("/:n", (req, res, next) => {
  try {
    const name = req.params.n.toLocaleLowerCase();
    client
      .query(`DELETE FROM unis WHERE name='${name}'`)
      .then((dbresponse) => {
        res.status(200).send(`Record has been Deleted`);
      })
      .catch((rejectDbResponse) => {
        res.status(501).send(rejectDbResponse);
      });
  } catch (e) {
    next("fav delete handler " + e);
  }
});

router.put("/:n", (req, res, next) => {
  try {
    const name = req.params.n.toLocaleLowerCase();
    client
      .query(`UPDATE unis SET comment=$1 WHERE name='${name}'`, [
        req.body.comment,
      ])
      .then((dbresponse) => {
        res.status(200).send(`The Record has been Updated`);
      })
      .catch((rejectDbResponse) => {
        res.status(501).send(rejectDbResponse);
      });
  } catch (e) {
    next("fav/:n put handler " + e);
  }
});

module.exports = router;
