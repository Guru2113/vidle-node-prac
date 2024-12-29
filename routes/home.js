const express = require("express");
const router = express.Router();

//Homepage Route
router.get('/',(req,res) => {
    res.send("This is Homepage.");
});

module.exports = router;