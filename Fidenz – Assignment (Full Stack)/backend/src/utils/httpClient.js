const axios = require("axios");

// reusable http get function
const get = async (url) => {
  try {
    const response = await axios.get(url);

    // return only respose body 
    return response.data;
  } catch (err) {
    // Log error message if request fails
    console.error("HTTP Error mesg", err.message);
    throw err;
  }
};

// export
module.exports = { get };
