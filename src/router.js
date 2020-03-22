const express = require('express');
const demoRoute = require("./routes/demo.route")
const router = express();
router.use("/demo", demoRoute);
module.exports = router;