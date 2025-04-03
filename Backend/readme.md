# Backend API Documentation

# /users/register Endpoint Documentation

## Description
Registers a new user by validating the email, first name, and password. Upon successful registration, the endpoint returns a JWT token and the user details.

## Request Details
- **Method:** POST
- **Endpoint:** /users/register
- **Content-Type:** application/json
- **Body Parameters:**
  - `fullname`: An object containing:
    - `firstname` (string, required, minimum 3 characters)
    - `lastname` (string, optional, minimum 3 characters if provided)
  - `email`: A valid email address (required, minimum 5 characters)
  - `password`: A string (required, minimum 6 characters)

## Response
- **Success:**
  - **Status Code:** 201 Created
  - **Body:** JSON with properties:
    - `token`: JWT authentication token
    - `user`: Object with user details (excluding the password)
- **Validation Error:**
  - **Status Code:** 400 Bad Request
  - **Body:** JSON object containing an array of error messages

### Examples

#### Success Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64f1c2e5b9d1c2a5e8f7a123",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
  }
}
```

#### Validation Error Response
```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

---

# /users/login Endpoint Documentation

## Description
Authenticates a user by validating the email and password. Upon successful authentication, the endpoint returns a JWT token and the user details.

## Request Details
- **Method:** POST
- **Endpoint:** /users/login
- **Content-Type:** application/json
- **Body Parameters:**
  - `email`: A valid email address (required)
  - `password`: A string (required, minimum 6 characters)

## Response
- **Success:**
  - **Status Code:** 200 OK
  - **Body:** JSON with properties:
    - `token`: JWT authentication token
    - `user`: Object with user details (excluding the password)
- **Authentication Error:**
  - **Status Code:** 401 Unauthorized
  - **Body:** JSON object with an error message

### Examples

#### Success Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64f1c2e5b9d1c2a5e8f7a123",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
  }
}
```

#### Authentication Error Response
```json
{
  "message": "Invalid email or password"
}
```