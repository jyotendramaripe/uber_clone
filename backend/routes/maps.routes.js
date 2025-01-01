const express = require('express'); 
const router = express.Router(); 
const authMiddleware = require('../middlewares/auth.middleware'); 
const mapController = require('../controllers/map.controller'); 
const { query } = require('express-validator'); 

// Route to get coordinates for a given address
router.get(
    '/get-coordinates', // Define the route endpoint
    query('address').isString().isLength({ min: 3 }), // Validate that 'address' is a string with a minimum length of 3
    authMiddleware.authUser, // Middleware to ensure the user is authenticated
    mapController.getCoordinates // Controller function to handle the logic of fetching coordinates
);

// Route to get distance and time between an origin and a destination
router.get(
    '/get-distance-time', // Define the route endpoint
    query('origin').isString().isLength({ min: 3 }), // Validate that 'origin' is a string with a minimum length of 3
    query('destination').isString().isLength({ min: 3 }), // Validate that 'destination' is a string with a minimum length of 3
    authMiddleware.authUser, // Middleware to ensure the user is authenticated
    mapController.getDistanceTime // Controller function to handle the logic of fetching distance and time
);

// Route to get autocomplete suggestions for a location input
router.get(
    '/get-suggestions', // Define the route endpoint
    query('input').isString().isLength({ min: 3 }), // Validate that 'input' is a string with a minimum length of 3
    authMiddleware.authUser, // Middleware to ensure the user is authenticated
    mapController.getAutoCompleteSuggestions // Controller function to handle the logic of fetching suggestions
);

module.exports = router; 
