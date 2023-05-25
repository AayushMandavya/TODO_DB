const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({
        message:"hello there",
        status:200,
    });
});


module.exports = router;