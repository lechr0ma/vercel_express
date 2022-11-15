const axios = require("axios");

class testService {
  async getJson(req, res) {
    const jsonRequest = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    res.send(jsonRequest.data);
  }
}

module.exports = new testService();
