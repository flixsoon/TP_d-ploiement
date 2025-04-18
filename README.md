# Book Management System

A full-stack web application for managing books, built with React.js frontend and Node.js backend.

## Features

- View list of books
- Add new books
- Edit existing books
- Delete books
- RESTful API with Bruno collection for testing

## Tech Stack

### Frontend
- React.js 18.2.0
- React Router DOM 6.30.0
- Axios for API calls
- Bootstrap 5.3.5 for styling

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS enabled

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js
- MongoDB (v8.0.4 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/flixsoon/TP_d-ploiement.git
cd TP_d-ploiement
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

## Running the Application

1. Start MongoDB service on your machine

2. Start the backend server:
```bash
cd backend
node server.js
```
The server will run on http://localhost:5000

3. In a new terminal, start the frontend development server:
```bash
cd ..  # Go back to root directory
npm start
```
The frontend will be available at http://localhost:3000

## API Documentation

The API endpoints are available at `http://localhost:5000/api`:

### Endpoints

- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get a specific book
- `POST /api/books` - Create a new book
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

### Testing API with Bruno

The project includes a Bruno collection for API testing. To use it:

1. Install Bruno (Portable version)
2. Open Bruno
3. Go to File > Open Collection
4. Navigate to `backend/bruno/Book Management API/Book Management API`
5. Select the folder to load all API endpoints

## Project Structure

```
book-management-system/
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── api/           # API integration
│   │   └── services/      # Service functions
│   └── public/            # Static files
├── backend/               # Node.js backend
│   ├── models/           # MongoDB models
│   ├── bruno/            # API collection
│   └── server.js         # Express server
└── README.md             # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE). 