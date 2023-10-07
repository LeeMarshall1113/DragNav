const googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_MAPS_API_KEY // Using an environment variable for security
  });
  
  function geocodeAddress(address, callback) {
    googleMapsClient.geocode({ address: address }, callback);
  }
  
  module.exports = {
    geocodeAddress
  };
  