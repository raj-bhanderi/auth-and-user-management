# auth-crud-service

A simple API for user sign-up and sign-in with full CRUD functionality using Mongoose ORM and MongoDB. Ideal for basic user authentication and management tasks.

## Features
- User Registration (Sign Up)
- User Login (Sign In)
- CRUD operations for user data
- Password hashing for security
- Token-based authentication (optional)

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose ORM

## Installation

1. Clone the repository
    ```sh
    git clone https://github.com/your-username/auth-crud-service.git
    ```

2. Navigate to the project directory
    ```sh
    cd auth-crud-service
    ```

3. Install dependencies
    ```sh
    npm install
    ```

4. Create a `.env` file in the root directory and add your MongoDB URI
    ```
    MONGODB_URI=your-mongodb-uri
    ```

## Usage

1. Start the server
    ```sh
    npm start
    ```

2. The API will be running at `http://localhost:3000`

## Endpoints

### User Registration
- **URL:** `/api/signup`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request Body:**
    ```json
    {
        "username": "your-username",
        "password": "your-password",
        "email": "your-email"
    }
    ```

### User Login
- **URL:** `/api/login`
- **Method:** `POST`
- **Description:** Login a user.
- **Request Body:**
    ```json
    {
        "username": "your-username",
        "password": "your-password"
    }
    ```

### Get User by ID
- **URL:** `/api/users/:id`
- **Method:** `GET`
- **Description:** Get a user by ID.

### Update User by ID
- **URL:** `/api/users/:id`
- **Method:** `PUT`
- **Description:** Update a user by ID.
- **Request Body:**
    ```json
    {
        "username": "new-username",
        "email": "new-email"
    }
    ```

### Delete User by ID
- **URL:** `/api/users/:id`
- **Method:** `DELETE`
- **Description:** Delete a user by ID.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

