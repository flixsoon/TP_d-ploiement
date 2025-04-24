const mongoose = require('mongoose');
const Book = require('./models/Book');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/book-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Add a test book
const addTestBook = async () => {
  try {
    const book = new Book({
      title: 'Test Book',
      author: 'Test Author',
      description: 'This is a test book',
      publishedYear: 2023
    });
    
    await book.save();
    console.log('Test book added successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error adding test book:', error);
    process.exit(1);
  }
};

addTestBook(); 