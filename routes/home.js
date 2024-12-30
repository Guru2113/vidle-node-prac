const express = require("express");
const router = express.Router();

//Homepage Route
router.get('/',(req,res) => {
    res.send("This is Homepage.");
});
router.get('/:id',(req,res) => {
    res.send("Homepage 1");
});

module.exports = router;