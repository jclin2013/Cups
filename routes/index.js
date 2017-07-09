var express = require('express');
var router = express.Router();
const path = require('path');

var db = require('../queries');

router.get('/api/cups', db.getAllCups);
router.post('/api/cups', db.createCup);
router.put('/api/cups/:id', db.updateCup);
router.delete('/api/cups/:id', db.removeCup);

router.get(['/', '/cupsForm', '/cups-table', '/dashboard'], (req, res) =>
  res.sendFile(path.join(
    __dirname + '/../src/index.html')));

router.get('/node_modules/*', (req, res) =>
  res.sendFile(path.join(
    __dirname + `/../node_modules/${req.params[0]}`)));

router.get('/styles.css', (req, res) =>
  res.sendFile(path.join(
    __dirname + `/../src/styles.css`)));

router.get('/systemjs.config.js', (req, res) =>
  res.sendFile(path.join(
    __dirname + `/../src/systemjs.config.js`)));

router.get('/main.js', (req, res) =>
  res.sendFile(path.join(
    __dirname + `/../src/main.js`)));

router.get('/main.js.map', (req, res) =>
  res.sendFile(path.join(
    __dirname + `/../src/main.js.map`)));

router.get('/favicon.ico', (req, res) =>
  res.sendFile(path.join(
    __dirname + `/../src/favicon.ico`)));

router.get('/systemjs-angular-loader.js', (req, res) =>
  res.sendFile(path.join(
    __dirname + `/../src/systemjs-angular-loader.js`)));

router.get('/app/*', (req, res) =>
  res.sendFile(path.join(
    __dirname + `/../src/app/${req.params[0]}`)));

router.get('/cup.png', (req, res) =>
  res.sendFile(path.join(
    __dirname + `/../src/cup.png`)));

module.exports = router;
