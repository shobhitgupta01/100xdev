const express = require('express');
const { User } = require('./db/index');
const { createUser } = require('./types');
const app = express()
const PORT = 3000;

app.use(express.json())

app.get('/users', async (req, res) => {
  const users = await User.find({});
  res.json({
    users: users
  });
})

app.post('/user', async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createUser.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Incorrect inputs"
    });
    return;
  }

  // inserting in db
  await User.create({
    name: createPayload.name,
    description: createPayload.descrtiption,
    interests: createPayload.interests,
    linkedin: createPayload.linkedin,
    twitter: createPayload.twitter
  });

  res.json({
    msg: "User added successfully"
  })
});

app.listen(PORT, () => { console.log(`listening on port ${PORT}...`) });
