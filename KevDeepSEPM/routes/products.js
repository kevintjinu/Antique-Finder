const express = require("express");
const app = express();
const Item = require("../schema/formSchema");

app.post("/projects", async (req, res) => {
  const items = new Item({
    ...req.body,
  });

  try {
    await items.save();
    res.status(201).send(items);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/projects", async (req, res) => {
  try {
    const response = await Item.find();
    res
      .json({
        status: "success",
        response,
      })
      .status(201);
  } catch (err) {
    res.json({
      status: "Failed",
      error: err,
    });
  }
});

module.exports = app;
