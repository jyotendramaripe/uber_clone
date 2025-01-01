const mapService = require('../services/maps.services'); 
const { validationResult } = require('express-validator'); 

// Controller to get coordinates for a given address
module.exports.getCoordinates = async (req, res, next) => {
    // Extract validation errors from the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Extract the 'address' query parameter from the request
    const { address } = req.query;

    try {
        // Call the mapService to get the coordinates for the given address
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(404).json({ message: 'Coordinates not found' });
    }
}

// Controller to get distance and time between origin and destination
module.exports.getDistanceTime = async (req, res, next) => {
    try {
        // Extract validation errors from the request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Extract 'origin' and 'destination' query parameters from the request
        const { origin, destination } = req.query;

        // Call the mapService to calculate distance and time between the two locations
        const distanceTime = await mapService.getDistanceTime(origin, destination);

        
        res.status(200).json(distanceTime);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Controller to get autocomplete suggestions for location input
module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
    try {
        // Extract validation errors from the request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // If there are validation errors, return a 400 Bad Request response with error details
            return res.status(400).json({ errors: errors.array() });
        }

        // Extract the 'input' query parameter from the request
        const { input } = req.query;

        // Call the mapService to fetch autocomplete suggestions based on the input
        const suggestions = await mapService.getAutoCompleteSuggestions(input);

        res.status(200).json(suggestions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}
