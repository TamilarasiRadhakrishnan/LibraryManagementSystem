# LibraryManagementSystem
LibraryManagementSystem
A Node.js-based Library Management System that allows librarians and users to manage and borrow books efficiently. The system includes user authentication, borrow requests, history tracking, and optional features like JWT authentication and CSV download.

Features
Librarian APIs
Add new library users.
Manage borrow requests (approve/deny).
View user borrow history.
User APIs
View available books.
Request to borrow books.
View personal borrow history.
Tech Stack
Back-end: Node.js, Express.js
Database: MySQL or SQLite
Authentication: Basic Authentication (with JWT as a bonus)
Documentation: Swagger or Postman
Deployment: GitHub Codespaces (Development), Render/Heroku (Deployment)
Setup and Installation
Prerequisites
Node.js installed (v14 or later).
MySQL installed (or use SQLite).
GitHub Codespaces account.
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/library-management-system.git
cd library-management-system
Install dependencies:

bash
Copy code
npm install
Set up the database:

Import the SQL schema from database/schema.sql into your database.
Update the .env file with database credentials:
env
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=library_management
Start the server:

bash
Copy code
npx nodemon app.js
The server will run on http://localhost:3000.

Test APIs using Postman or Swagger.

API Endpoints
Librarian APIs
POST /api/users: Create a new library user.
GET /api/borrow-requests: View borrow requests.
PUT /api/borrow-requests/:id/approve: Approve borrow requests.
PUT /api/borrow-requests/:id/deny: Deny borrow requests.
GET /api/users/:id/history: View user borrow history.
User APIs
GET /api/books: List all available books.
POST /api/borrow-requests: Request to borrow a book.
GET /api/users/:id/history: View personal borrow history.
Environment Variables
Create a .env file with the following keys:

env
Copy code
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=library_management
JWT_SECRET=your_jwt_secret (if using JWT)
Project Structure
bash
Copy code
library-management-system/
├── controllers/       # Route logic
├── middlewares/       # Authentication middleware
├── models/            # Database configuration
├── routes/            # API route definitions
├── utils/             # Helper functions
├── app.js             # Main server file
├── .env               # Environment variables
├── package.json       # Dependencies and scripts
├── README.md          # Project documentation
Bonus Features
CSV Download: Borrow history can be downloaded as CSV.
JWT Authentication: Secure token-based authentication.
API Documentation: Swagger UI for easy API exploration.
Contribution
Feel free to contribute to this project! Follow the steps below:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-name
Commit changes:
bash
Copy code
git commit -m "Add your feature"
Push and create a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.