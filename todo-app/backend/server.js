const mongoose = require('mongoose');

// ... Other server setup code ...

mongoose.connect('mongodb+srv://admin:nimalekha@cluster0.olfngni.mongodb.net/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });
