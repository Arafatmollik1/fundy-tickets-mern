# fundy-tickets
This is a simple crowdfunding web app. A bit more robust than buymeacoffee but less complicated like gofundme.

# Built with MERN Stack with Tailwind CSS

This project is a simple implementation of a MERN (MongoDB, Express.js, React.js, Node.js) stack with Tailwind CSS for styling. It consists of two folders: `backend` for the server-side code and `frontend` for the client-side code. Both the backend and frontend can be run concurrently using `npm run dev`.

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js and npm
- MongoDB (running remotely via a MongoDB URI)

## Installation

1. Clone this repository:


2. Navigate to the `backend` directory and install dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Navigate to the `frontend` directory and install dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

## Configuration

1. In the `backend` directory, create a `.env` file and specify your MongoDB connection URI:

   ```
   MONGO_URI=<your-mongodb-uri>
   PORT=5001
   ```

## Running the Application

1. To run both the backend and frontend concurrently, from the root directory, run:

   ```bash
   npm run dev
   ```

4. Open your web browser and visit `http://localhost:3000` to view the application.

## Usage

- The frontend is built with React.js and styled using Tailwind CSS. 
- The backend is built with Express.js and connects to a MongoDB database.

## License

This project is licensed under the MIT License.