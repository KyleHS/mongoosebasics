//requiring and setting up mongoose

const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
}

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number
});

//name passed through must have an uppercase letter
const Movie = mongoose.model('Movie', movieSchema);

Movie.insertMany([
  {title: 'Amadeus', year: 1986, score: 9.2},
  {title: 'Up', year: 2007, score: 9.2},
  {title: 'Frozen', year: 2015, score: 9.2},
  {title: 'Frozen 2', year: 2020, score: 9.2},
  {title: 'Tangled', year: 2008, score: 9.2}
])

.then(data => {
  console.log("IT Worked")
  console.log(data);
})
