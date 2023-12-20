const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};

setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

function countRequests(req, res, next){
  const user = req.headers['user-id'];
  if(!(user in numberOfRequestsForUser)){
    numberOfRequestsForUser[user]=1
  }
  else{
    numberOfRequestsForUser[user]+=1;
  }
  next();
}

function rateLimiter(req, res, next){
  const user = req.headers['user-id'];
  const numOfRequests = numberOfRequestsForUser[user];
  if(numOfRequests > 5){
    res.status(404).json({
      error: "Number of requests should be less than 5 per second"
    });
    return;
  }
  else{
    next();
  }
}

app.use(countRequests);
app.use(rateLimiter);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;