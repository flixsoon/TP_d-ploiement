const mongoose = require('mongoose');

async function testConnection() {
  try {
    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect('mongodb://localhost:27017/book-management', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4 // Use IPv4, skip trying IPv6
    });
    console.log('Successfully connected to MongoDB!');
    
    // Test if we can create and read from the database
    const Book = mongoose.model('Book', {
      title: String,
      author: String,
      description: String,
      publishedYear: Number,
    });

    // Try to create a test book
    const testBook = new Book({
      title: 'Test Connection Book',
      author: 'Test Author',
      description: 'This is a test book to verify MongoDB connection',
      publishedYear: 2024
    });

    await testBook.save();
    console.log('Successfully created test book!');

    // Try to read the book
    const books = await Book.find();
    console.log('Found books:', books);

    process.exit(0);
  } catch (error) {
    console.error('Error testing MongoDB connection:', error);
    process.exit(1);
  }
}

testConnection(); 