const express = require('express');
const { Review } = require('../models');
const { Op, where } = require("sequelize");

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

//충전소 이름으로 리뷰 찾기
router.get('/charger/:charger_name', async (req, res) => {
    try {
        const charger_name = req.params.charger_name;

        const charger_infos = await Review.findAll({
            where: { charger_name }
        });

        if (charger_infos.length == 0) {
            return res.status(404).json({ message: "해당 충전소의 리뷰를 찾을 수 없습니다." })
        } else {
            return res.status(200).json(charger_infos);
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: "서버에서 에러 발생" })
    }
});

//user_id로 리뷰 찾기
router.get('/user/:user_id', async (req, res) => {
    try {
        const user_id = req.params.user_id;

        const charger_infos = await Review.findAll({
            where: { user_id }
        });
        if (charger_infos.length == 0) {
            return res.status(404).json({ message: "해당 충전소의 리뷰를 찾을 수 없습니다." })
        } else {
            return res.status(200).json(charger_infos);
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: "서버에서 에러 발생" })
    }
});

module.exports = router;