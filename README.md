# Unhandled Promise Rejection in Express.js Application

This repository demonstrates a common error in Node.js applications using Express.js: improper handling of promise rejections in asynchronous operations.  The application lacks robust error handling, which leads to silent failures when unexpected errors occur.

## Bug Description:

The `someAsyncOperation` function simulates an asynchronous task that may throw an error.  The Express.js route handler uses `.then()` and `.catch()`, but the `.catch()` block only logs the error to the console, it does not send an appropriate error response to the client. This results in the user receiving no indication of the failure.

## Solution:

The solution involves implementing proper error handling that sends an error response to the client when an error occurs. This ensures that the client is informed of any issues and can handle them gracefully.  The improved code includes error handling that sends an appropriate HTTP status code (e.g., 500) and a meaningful error message.

## How to reproduce the Bug:

1. Clone the repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js` to start the server.
4. Make several requests to the server. Due to the nature of the simulated error, approximately half of the requests will fail silently.