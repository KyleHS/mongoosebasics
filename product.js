const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
}

const productSchema = new mongoose.Schema({
    name: {
        type: String
        required: true //ensures that name must be there
    },
    price: {
        type: Number
    }
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: 'Mountain Bike', price: 30,000})
bike.save()
    .then(data => {
        console.log('it worked')
        console.log(data)
    })
    .catch(err => {
        console.log("error")
        console.log(err)
    })