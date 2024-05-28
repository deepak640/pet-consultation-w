const Doctor = require("../schema/doctor.schema");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Doctor.find();
    // console.log('Data is ', data);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password, specialised, license } = req.body;
    const newDoc = new Doctor({
      name: name,
      email: email,
      password: password,
      expertise: specialised,
      license: license,
    });
    await newDoc.save();
    res.status(200).send("Data Saved Successfully");
  } catch (err) {
    console.log("Error is ", err);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const dataId = req.params.id;
    const data = req.body;

    const response = await Doctor.findByIdAndUpdate(dataId, data, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      res.status(404).send("Invalid id");
    }
    console.log(response);
    res.status(202).send(response);
  } catch (err) {
    console.log("Error is ", err);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const delId = req.params.id;
    const response = await Doctor.findByIdAndDelete(delId);
    if (!response) {
      res.status(404).send("Invalid id");
    }
    console.log(response);
    res.status(202).send(response);
  } catch (err) {
    console.log("Error is ", err);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
