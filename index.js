const express = require("express");
const users = require("./users.json");

const app = express();

// GET all users
app.get("/", (request, response) => {
  response.send(users);
});

app.get("/users/:id", (request, response) => {
  // look for a specific user, using the id from the url
  const { id } = request.params;
  const user = users.find((user) => user._id === id);

  // if user is undefined
  if (!user) {
    response.status(404).send({ message: "user was not found" });
    // return stops the function
    // this makes sure that we are not sending both the error and the user info
    return;
  }

  // 2XX (200, 201) - successful
  // 3XX (300, 301) - something was updated
  // 4XX (400, 404) - request was bad (and you should feel bad)
  // 5XX (500) - server screwed up and we should feel bad

  response.status(200).send(user);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
