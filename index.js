'use strict'

var express = require('express')
var ejs = require('ejs')

express()
  .use(express.static('static'))
  .set('view engine', 'ejs')
  .set('views', 'views')
  .get('/', index)
  .get('/hosting', hosting)
  .get('/cms', cms)
  .listen(3000)

function index(req, res) {
  res.render('index.ejs')
}

function hosting(req, res) {
  res.render('hosting.ejs')
}

function cms(req, res) {
  res.render('cms.ejs')
}
