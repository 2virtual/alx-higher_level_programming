#!/usr/bin/node
const request = require('request');
const movieID = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const movie = JSON.parse(body);
    if (movie.episode_id == movieID) {
      console.log(movie.title);
    } else {
      console.log(`No Star Wars movie found with episode number ${movieID}`);
    }
  }
});
