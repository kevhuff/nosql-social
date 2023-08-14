// formatDate.js

// Implement a function to format timestamps
function formatDate(timestamp) {
    // Convert the timestamp to a Date object
    const date = new Date(timestamp);
  
    // Format the date into a readable string
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  
    return `${formattedDate} at ${formattedTime}`;
  }
  
  module.exports = formatDate;
  