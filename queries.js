var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/cups';
var db = pgp(connectionString);

function getAllCups(req, res, next) {
  db.any('select * from cups')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL cups'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createCup(req, res, next) {
  db.none('insert into cups(name, material, display)' +
      'values(${name}, ${material}, ${display})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one cup'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateCup(req, res, next) {
  db.none('update cups set name=$1, material=$2, display=$3 where id=$4',
    [req.body.name, req.body.material, req.body.display,
      parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated cup'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeCup(req, res, next) {
  var cupID = parseInt(req.params.id);
  db.result('delete from cups where id = $1', cupID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} cup`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllCups: getAllCups,
  createCup: createCup,
  updateCup: updateCup,
  removeCup: removeCup
};
