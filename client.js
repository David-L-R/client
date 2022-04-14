// THIS IS THE FRONTEND
// When we go to a page, the browser gets 3 files:
// HTML (structure)
// CSS (Style)
// JAVASCRIPT (logic)
const axios = require("axios");

// ASYNC AWAIT
const getUsers = async () => {
  // TRY & CATCH

  try {
    // THIS TAKES TIME!
    // await -> asks JS to wait until we get a response
    // axios is a bit like a URL address
    const res = await axios.get("http://localhost:3000/");
    // response => {data: <users>}
    const users = res.data;
    console.log(users);
  } catch (err) {
    console.log(err.response.data);
  }
};

const getUser = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    const user = response.data;
    console.log("user", user == undefined);
  } catch (err) {
    console.log(err.response.data);
  }
};

// getUsers();
// getUser("62555f2dabf09bafee5fafdc");
getUser("62555f2dabf09ba");
