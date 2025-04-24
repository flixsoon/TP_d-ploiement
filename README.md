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

## Deployment

### Backend Deployment to Railway

1. Create a Railway account if you don't have one already at [railway.app](https://railway.app)
2. Install Railway CLI by running: `npm i -g @railway/cli`
3. Login to Railway using: `railway login`
4. Navigate to the backend directory and run: `railway init`
5. Create a new MongoDB database service:
   - Click "New Project" and then "Add a Service"
   - Select "Database" and then "MongoDB"
   - Wait for the database to be provisioned
6. Add your backend to the same project:
   - Click "New Service" and select "GitHub Repo"
   - Select your repository or use "Deploy from GitHub" button on the Railway dashboard
   - Configure the service with the following environment variables:
     - Name: `MONGODB_URI`
     - Value: Click on your MongoDB service → Connect → "Mongoose URI"
7. Once deployed, get your Railway app URL from the "Settings" tab and note it down for frontend deployment

### Frontend Deployment to Vercel

1. Create a Vercel account if you don't have one already at [vercel.com](https://vercel.com)
2. Create a file named `.env.production` in the root directory (don't commit this to version control):
   ```
   VITE_API_URL=https://your-railway-backend-url.up.railway.app/api
   ```
3. Install Vercel CLI: `npm i -g vercel`
4. Login to Vercel: `vercel login`
5. From the root directory (frontend), run: `vercel`
6. Follow the prompts to deploy your application
7. After deployment, you can access your application at the Vercel URL

Alternatively, you can also deploy directly from the Vercel dashboard:
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure the project:
   - Framework preset: React
   - Environment variables:
     - Name: `VITE_API_URL`
     - Value: Your Railway backend URL + `/api`
5. Click "Deploy"

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