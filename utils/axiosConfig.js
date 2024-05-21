const axios = require("axios");

const forwardRequest = async (url, headers, data, method = "POST") => {
  const config = {
    url: url,
    method: method,
    headers: headers,
    data: data,
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    if (error.response) {
      return error.response;
    } else if (error.request) {
      throw new Error("No response received from target server");
    } else {
      throw new Error("Error in setting up the request: " + error.message);
    }
  }
};

module.exports = {
  forwardRequest,
};
