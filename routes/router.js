const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    res.render('index');
});
router.get("/music", (req,res) => {
    res.render('music');
});
router.get("/cs", (req,res) => {
    res.render('cs');
});
router.get("/ee", (req,res) => {
    res.render('ee');
});
router.get("/auto", (req,res) => {
    res.render('auto');
});
router.get("/phy", (req,res) => {
    res.render('phy');
});
router.get("/mat", (req,res) => {
    res.render('mat');
});

module.exports = router;