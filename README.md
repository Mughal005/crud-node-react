CRUD Operations with React.js Frontend, Node.js Backend, Express.js Server, and MySQL Database

Overview
This project is a full-stack web application designed to perform CRUD (Create, Read, Update, Delete) operations. The frontend is built using React.js, and the backend is developed with Node.js and Express.js. MySQL (phpMyAdmin) is used as the database to store user and todo information. The application includes user authentication (sign-up and login), and a main page where users can manage their todo tasks.

Technologies Used
• Frontend: React.js is utilized for creating a dynamic and responsive user interface.
• Backend: Node.js is used to handle server-side logic, and Express.js simplifies the creation of RESTful APIs.
• Database: MySQL (phpMyAdmin) is used for relational database management to store user and todo information securely.
• Styling: CSS (or any preferred CSS framework) is used to design the user interface.
• Authentication: JWT (JSON Web Tokens) is implemented for secure user authentication and session management.

Project Structure
The project is divided into two main directories: client for the frontend and server for the backend.
Client Directory: Contains all React components, services, and the main entry point ('index.js') for the frontend.
Server Directory: Contains controllers, models, routes, and configuration files for the backend.

Features

1. User Authentication:
   Sign-up: Allows new users to create an account by providing their name, email, and password.
   Login: Enables existing users to access the application by entering their email and password.
   Logout: Ends the user session and redirects to the login page.

2. Todo Management:
   Add Todo: Users can create new todo items by providing a title and body.
   Read Todos: Displays a list of all todo items.
   Update Todo: Allows users to edit existing todo items.
   Delete Todo: Users can remove todo items from the list.

User Flow

1. Sign-up:
   • User navigates to the sign-up page and fills in their details (name, email, and password).
   • Upon successful sign-up, the user is redirected to the login page.
2. Login:
   • User enters their email and password on the login page.
   • Upon successful login, the user is redirected to the main page.
3. Main Page:
   The page is divided into two sections:
   • Top Section: A form for adding new todo items.
   • Bottom Section: A list of existing todo items with options to edit or delete each item.
   Adding a Todo: User fills in the title and body, then clicks "Add Todo". The new item appears in the list below.
   Editing a Todo: User clicks "Edit" on a todo item. The item’s details are loaded into the form, allowing modifications. Clicking "Update" saves the changes.
   Deleting a Todo: User clicks "Delete" on a todo item, which removes it from the list.
4. Navigation Bar:
   Located at the top of the page.
   A three-dot icon on the right corner opens a dropdown menu with options to view the user's name and logout.
   Clicking "Logout" redirects the user to the login page.

Detailed Implementation

1. Frontend
   The frontend uses React.js to create a responsive and interactive user interface. Key aspects include:
   • Component-based Architecture: React components are used to build reusable UI elements.
   • State Management: React hooks (useState, useEffect) manage the state of the application, such as user authentication status and todo items.
   • Service Layer: Service functions handle API calls to the backend for authentication and todo management.
2. Backend
   The backend is built with Node.js and Express.js, and it interacts with a MySQL database. Key aspects include:
   • Routing: Express routes define endpoints for user authentication and CRUD operations on todo items.
   • Controllers: Handle the logic for each endpoint, such as validating user input, interacting with the database, and returning responses.
   • Models: Define the structure of the data in the database using Sequelize (or another ORM).
   • Authentication: JWT is used to secure endpoints and manage user sessions.

Setup and Installation

1. Clone the Repository:
   git clone https://github.com/your-repository-url.git

2. Install Dependencies:
   • Navigate to the `client` directory and run: npm install
   • Navigate to the `server` directory and run: npm install

3. Set Up MySQL Database:
   • Create a new database in MySQL using phpMyAdmin or another tool.
   • Run the provided SQL script to create the necessary tables and initial data.

4. Set Up Environment Variables:
   Create a .env file in the server directory with the necessary environment variables (e.g., database credentials, JWT secret).
   Example .env file:
   DB_HOST = localhost
   DB_USER = root
   DB_PASS = password
   DB_NAME = todo_db

5. Run the Application:
   • Start the backend server: npm start
   • Start the frontend server: npm start

6. Access the Application:
   • Open a web browser and navigate to `http://localhost:3001`.
   Flow Diagram
   Explanation of Flow Diagram
7. User Sign-Up and Login:
   The user interacts with the Sign-Up and Login pages to create an account and log in.
   Upon successful login, the server generates a JWT token, which is stored in the client’s local storage.

8. Main Page Interaction:
   • Add Todo: The user enters the todo details and submits the form. The frontend sends a request to the backend to create a new todo item in the database.
   • Read Todos: The frontend fetches the list of todos from the backend.
   • Update Todo: When the user edits a todo item, the details are sent to the backend to update the database.
   • Delete Todo: When the user deletes a todo item, the request is sent to the backend to remove the item from the database.
   • Logout: The user clicks the logout button, which clears the JWT token from the local storage and redirects the user to the login page.

Conclusion
This project demonstrates a full-stack application with user authentication and CRUD functionalities using React.js for the frontend and Node.js with Express.js for the backend. MySQL is used for data storage, providing a robust and scalable solution. The application allows users to manage todo tasks efficiently, providing a practical example of integrating frontend and backend technologies.
