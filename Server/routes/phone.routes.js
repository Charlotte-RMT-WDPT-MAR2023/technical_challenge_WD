const express = require("express");
const router = express.Router();

const phonesJson = require ("../data/phones.json")

//  GET /api/phones -  Retrieves all phones
router.get("/phones", async (req, res, next) => {
    try {
      res.json(phonesJson);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });


  //  GET /api/phones/:id -  Show a phone details
  router.get("/phones/:id", async (req, res, next) => {
    const { id } = req.params;
  
    try {
      const phoneId = parseInt(id, 10); 
  
      const phone = phonesJson.find((phone) => phone.id === phoneId);
  
      if (!phone) {
        res.status(404).json({ message: "Phone not found" });
      } else {
        res.status(200).json(phone);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  
module.exports = router;
