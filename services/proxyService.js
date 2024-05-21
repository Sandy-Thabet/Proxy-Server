const { forwardRequest } = require("../utils/axiosConfig");

const handleProxyRequest = async (req, res, next) => {
  const { request_url, headers, body, method } = req.body;

  try {
    const response = await forwardRequest(request_url, headers, body, method);
    res.status(response.status).json(response.data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleProxyRequest,
};
