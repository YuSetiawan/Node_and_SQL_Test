const {default: axios} = require('axios');

let jobController = {
  getAllJob: async (req, res) => {
    try {
      const page = req.query.page;
      const limit = req.query.limit;
      const filters = req.query;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      axios
        .get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json')
        .then(function (response) {
          let resultUsers = response.data.slice(startIndex, endIndex);
          let filteredUsers = response.data.filter((user) => {
            let isValid = true;
            for (key in filters) {
              isValid = isValid && user[key] == filters[key];
            }
            return isValid;
          });

          page ? res.json(resultUsers) : res.json(filteredUsers);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  },
  getSelectedJob: async (req, res) => {
    const id = String(req.params.id);
    await axios
      .get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`)
      .then(function (response) {
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};

module.exports = jobController;
