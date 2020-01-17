const express = require("express");

const router = express.Router();
const Projects = require("../data/helpers/projectModel");

// CUSTOM MIDDLEWARE

function validateId(req, res, next) {
  if (new RegExp(/^\d+$/).test(req.params.id) !== true) {
    res.status(500).json({ message: "Invalid ID" });
    return true;
  }

  Projects.get(req.params.id)
    .then(data => {
      if (data) {
        req.data = data;
        next();
      } else {
        res.status(404).json({ message: "not found" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "error getting" });
    });
}

function validateBody(req, res, next) {
  if (!req.body) {
    res.status(400).json({ message: "missing data" });
    return true;
  }
  if (!req.body.name || !req.body.description) {
    res.status(400).json({ message: "missing required field" });
    return true;
  }
  if (req.body.completed !== undefined) {
    req.body.completed = !!Number(req.body.completed);
  }
  next();
}

module.exports = router;
