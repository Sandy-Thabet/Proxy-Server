# Node.js Proxy Server

This project is a simple proxy server built with Node.js and Express. It receives requests from clients, forwards them to a specified target server, and then returns the response back to the client. This can be useful for scenarios where you need to add middleware functionality, such as logging, authentication, or rate limiting, between the client and the target server.

## Deployment

The API is deployed and accessible at [https://proxy-server-ss5t.onrender.com](https://proxy-server-ss5t.onrender.com).

## API Documentation

Documentation for the API endpoints can be found in the [API documentation file](https://documenter.getpostman.com/view/32928987/2sA3QniZmd).

## Features

- Forwards HTTP requests to a specified target server.
- Supports different HTTP methods (GET, POST, PUT, DELETE, etc.).
- Handles custom headers and request bodies.
- Error handling middleware to manage errors gracefully.

---
