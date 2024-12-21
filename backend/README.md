# User Registration Endpoint Documentation

## Endpoint: `/users/register`

### Method: POST

### Description:

This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body:

The request body must be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname`: A string representing the user's first name. It must be at least 3 characters long.
  - `lastname`: A string representing the user's last name. It must be at least 3 characters long.
- `email`: A string representing the user's email. It must be a valid email address.
- `password`: A string representing the user's password. It must be at least 6 characters long.

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success:

- **Status Code: 201**
- **Body:**
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors:

- **Status Code: 400**
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### User Already Exists:

- **Status Code: 400**
- **Body:**
  ```json
  {
    "message": "User already exist"
  }
  ```

### Notes:

- Ensure that all required fields are provided in the request body.
- The email must be unique and not already registered in the system.

# User Login Endpoint Documentation

## Endpoint: `/users/login`

### Method: POST

### Description:

This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body:

The request body must be a JSON object containing the following fields:

- `email`: A string representing the user's email. It must be a valid email address.
- `password`: A string representing the user's password. It must be at least 6 characters long.

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success:

- **Status Code: 200**
- **Body:**
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors:

- **Status Code: 400**
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Invalid Credentials:

- **Status Code: 401**
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Notes:

- Ensure that all required fields are provided in the request body.
- The email must be registered in the system.

# User Profile Endpoint Documentation

## Endpoint: `/users/profile`

### Method: GET

### Description:

This endpoint is used to get the profile of the logged-in user. It requires the user to be authenticated.

### Responses:

#### Success:

- **Status Code: 200**
- **Body:**
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

#### Unauthorized:

- **Status Code: 401**
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Notes:

- Ensure that the user is authenticated by providing a valid JWT token in the request headers or cookies.

# User Logout Endpoint Documentation

## Endpoint: `/users/logout`

### Method: GET

### Description:

This endpoint is used to log out the user. It requires the user to be authenticated.

### Responses:

#### Success:

- **Status Code: 200**
- **Body:**
  ```json
  {
    "message": "Logged out"
  }
  ```

#### Unauthorized:

- **Status Code: 401**
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Notes:

- Ensure that the user is authenticated by providing a valid JWT token in the request headers or cookies.
- The token will be added to a blacklist to prevent further use.
