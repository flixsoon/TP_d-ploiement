# Book Management API Backend

This is the backend API for the Book Management System.

## Deployment Instructions for Railway

1. Create a Railway account if you don't have one already at [railway.app](https://railway.app)
2. Install Railway CLI by running: `npm i -g @railway/cli`
3. Login to Railway using: `railway login`
4. Navigate to this backend directory and run: `railway init`
5. Create a new MongoDB database using Railway's MongoDB plugin or use MongoDB Atlas
6. Once you have your MongoDB connection string, add it as an environment variable in Railway:
   - Name: `MONGODB_URI`
   - Value: Your MongoDB connection string
7. Deploy the project by running: `railway up`
8. Once deployed, copy your Railway app URL for use in the frontend

## Environment Variables

- `PORT`: The port the server will run on (Railway will set this automatically)
- `MONGODB_URI`: MongoDB connection string

## API Endpoints

- `GET /api/books`: Get all books
- `GET /api/books/:id`: Get a specific book
- `POST /api/books`: Create a new book
- `PUT /api/books/:id`: Update a book
- `DELETE /api/books/:id`: Delete a book
