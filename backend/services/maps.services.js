const axios = require('axios'); 
const captainModel = require('../models/captain.model'); 

// Function to get latitude and longitude coordinates for a given address
module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API; // Retrieve Google Maps API key from environment variables
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location; // Extract location details from API response
            return {
                ltd: location.lat, // Latitude of the address
                lng: location.lng  // Longitude of the address
            };
        } else {
            
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error); 
        throw error; 
    }
}

// Function to calculate distance and estimated time between an origin and destination
module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required'); // Validation for missing inputs
    }

    const apiKey = process.env.GOOGLE_MAPS_API; 
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        
        const response = await axios.get(url);

        if (response.data.status === 'OK') {
            if (response.data.rows[0].elements[0].status === 'ZERO_RESULTS') {
                throw new Error('No routes found'); 
            }
            return response.data.rows[0].elements[0];
        } else {
            throw new Error('Unable to fetch distance and time');
        }
    } catch (err) {
        console.error(err); 
        throw err; 
    }
}

// Function to get autocomplete suggestions for a place search query
module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('query is required'); 
    }

    const apiKey = process.env.GOOGLE_MAPS_API; 
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
       
        const response = await axios.get(url);

        if (response.data.status === 'OK') {
            return response.data.predictions.map(prediction => prediction.description).filter(value => value);
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch (err) {
        console.error(err); 
        throw err; 
    }
}

// Function to find captains within a specific radius from a given location
module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
    // radius is provided in kilometers

    // Query the database to find captains within the specified radius
    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [ [ ltd, lng ], radius / 6371 ] // Convert radius to radians (Earth's radius is ~6371 km)
            }
        }
    });

    return captains; 
}
