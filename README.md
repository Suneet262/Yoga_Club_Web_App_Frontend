# Yoga Club Registration System

Hosted URL : https://658195cd81611e099e7b6450--idyllic-douhua-712778.netlify.app/

## Yoga Class Web Frontend
This repository contains the frontend code for the Yoga Club Registration System. 
The frontend is hosted on Netlify, providing a seamless and responsive user interface. 


## Yoga Class Web Backend
This repository contains the backend code for the Yoga Club Registration System. 
The backend is hosted on Render, ensuring reliable API calls and data storage. 
To access the hosted backend, click here.


## Introduction
The Yoga Club Registration System is a web application designed to streamline the admission process for monthly yoga classes. 
The system provides a user-friendly interface for individuals to enroll in yoga classes, select their preferred batch timings, and make monthly payments. 
This project is developed using React.js for the frontend, Node.js and Express for the backend, and MongoDB as the database.


## Abstract
The Yoga Club Registration System aims to create an efficient and user-centric platform for yoga enthusiasts to easily register for classes, choose suitable batch timings, and make timely payments.
The system ensures adherence to age restrictions, batch selection flexibility, and monthly payment options.

## Implemented Features

### User Registration and Login:
Users can sign up with a valid email and password.
Login functionality for registered users.

### Yoga Class Registration:
Monthly registration form to collect user details.
Validation checks to ensure users are within the age limit of 18-65.

### Batch Selection:
Users can choose from four batches: 6-7AM, 7-8AM, 8-9AM, and 5-6PM.
Batch selection is flexible for each month.

### Payment Processing:
Monthly fee of 500/- INR.
Users can pay the fees at any time during the month.
Payment processing handled by a mock function, CompletePayment().

## Working and Methodology: 

### Frontend:
The frontend is developed using React.js, providing a dynamic and responsive user interface. 
The application is hosted on Netlify, ensuring accessibility for users. 

The frontend comprises several components:
Login Component: Allows users to log in using their credentials.
Signup Component: Enables new users to create an account.
Registration Form Component: Provides a form for users to register for yoga classes.
Payment Component: Handles the payment process.

### Backend:
The backend, hosted on Render, manages API requests and interactions with the MongoDB database. 

Key backend components and functionalities include:

Authentication (JWT)
JWT (JSON Web Token): JSON Web Tokens are used for secure authentication. 
After successful login, a JWT is generated and sent to the frontend. 
This token is included in subsequent requests to authenticate and authorize users.

CORS (Cross-Origin Resource Sharing)
CORS Middleware: CORS is implemented to handle cross-origin requests securely.
This middleware allows or restricts cross-origin resource sharing based on defined policies. 
It enhances security by preventing unauthorized access.

Routes and Controllers
Auth Routes: Handle user authentication, including login and signup functionalities.
Registration Routes: Manage user registration for yoga classes.
Payment Routes: Handle payment-related functionalities.

Models (MongoDB)
User Model: Represents user data, including username, email, and password. Stored in the MongoDB database.
Registration Model: Stores details of user registrations, including name, email, age, gender, and batch timing.

Database (MongoDB)
Database Connection: The backend establishes a connection to the MongoDB database to store and retrieve user and registration data.
Schema Design: Schemas define the structure of user and registration data, ensuring consistency and integrity.


## Database Schema

### User Table:
user_id (Primary Key)
username
email
password

### Registration Table:
registration_id (Primary Key)
user_id (Foreign Key referencing User Table)
name
email
age
gender
batchTime

### Payment Table:
payment_id (Primary Key)
registration_id (Foreign Key referencing Registration Table)
paymentDate

## ER Diagram:

![WhatsApp Image 2023-12-19 at 9 38 03 PM](https://github.com/Suneet262/Yoga_Classes_Web_App_Frontend/assets/91688938/ace8c26b-4439-4f46-a4a7-3d78ae5705f9)

## Screenshots of the dashboard: 

### Signup Page:

![image](https://github.com/Suneet262/Yoga_Classes_Web_App_Frontend/assets/91688938/1812a944-ceb4-4f89-a750-435b56e03034)

### Login Page: 

![image](https://github.com/Suneet262/Yoga_Classes_Web_App_Frontend/assets/91688938/c3560cfe-c3c3-4c6f-bf9f-4fca191ac4dd)

### User Dashboard :

![image](https://github.com/Suneet262/Yoga_Classes_Web_App_Frontend/assets/91688938/f70d34ed-1483-4199-96b4-c2524fd0cdb2)


## Technologies Used: 
Frontend: React, Axios
Backend: Node.js, Express, MongoDB
Deployment: Netlify (Frontend), Heroku (Backend)

## Features that I would like to add in future:  
Set a timer for one month period for the registration form.
Implement a notification system for pending fees every 5 days.
Provide personalized diet suggestions in the dashboard.




