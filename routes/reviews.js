const express = require('express');
const { Review } = require('../models');
const { Op } = require("sequelize");

const router = express.Router();


//리뷰 등록 api
router.post('/', async (req, res) => {
    try {
        const date = new Date();
        const newReview = await Review.create({
            ...req.body,
            date
        });
        res.status(201).json({ message: "리뷰 등록 성공" });
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: "서버에서 에러 발생" });
    }
});

module.exports = router;