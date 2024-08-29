const mongoose = require('mongoose');

// Prepare for Mongoose 7 change by setting strictQuery option
mongoose.set('strictQuery', false); // Or true if you want strict query behavior

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
});
