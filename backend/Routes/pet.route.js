const express = require("express");
const Pet = require("../schema/pet.schema");
const router = express.Router();

router.post("/", async function (req, res) {
  try {
    const { name, email, password } = req.body; // data is the array of json
    const newPet = new Pet({ name: name, email: email, password: password });
    await newPet.save();
    res.status(200).send({
      message: "Data Saved Successfully",
    });
  } catch (err) {
    console.log("Error is ", err);
    res.status(500).send("Internal Server error");
  }
});

router.post("/login", async function (req, res) {
  try {
    const patient = await Pet.findOne({ email: req.body.email });
    if (!patient) return res.status(404).send("patient not found");
    if (patient.password === req.body.password)
      return res.status(200).send("login successful");
    return res.status(401).send("invalid credentials");
  } catch (err) {
    console.log("Error is ", err);
    res.status(500).send("Internal Server error");
  }
});

router.get("/", async function (req, res) {
  try {
    const newPetData = await Pet.find();
    console.log("My Data is ", newPetData);
    res.status(200).json(newPetData);
  } catch (err) {
    console.log("Error is ", err);
    res.status(500).send("Internal Server error");
  }
});

router.put("/:id", async function (req, res) {
  try {
    const petId = req.params.id;
    const updatedPet = req.body;
    const response = await Pet.findByIdAndUpdate(petId, updatedPet, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      console.log(response);
      return res.status(404).json({
        error: "This menu id is not found",
      });
    }

    console.log("Data is updated");
    res.status(200).json(response);
  } catch (err) {
    console.log("Error is ", err);
    res.status(500).send("Internal Server error");
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const delId = req.params.id;
    const response = await Pet.findByIdAndDelete(delId);
    if (!response) {
      res.status(404).json({
        Message: "This ID is not present",
      });
    }
    res.status(202).json({
      response: "Deleted Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      Message: "Internal Server Error",
    });
  }
});

module.exports = router;
