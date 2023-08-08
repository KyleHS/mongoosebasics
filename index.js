//requiring and setting up mongoose

const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
}

//Schema

const movieSchema = new mongoose.Schema({
  title: 'Where the Wild Things Are',
  year: 1999,
  score: 8.6,
  rating: 'pg'
});

//name passed through must have an uppercase letter
const Movie = mongoose.model('Movie', movieSchema);

new Movie({title: 'Amadeus', year: 1986, score: 9.2});