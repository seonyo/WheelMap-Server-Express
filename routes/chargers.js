const express = require('express');
const router = express.Router();
const {Charger } = require('../models');

// 충전소 정보 가져오는 api
router.get('/', async (req, res) => {
    try {
        const chargingStations = await Charger.findAll();
        res.json(chargingStations);
    } catch (error) {
        console.error(error); // 서버 콘솔에 오류 출력
        res.status(500).json({ error: '서버 에러', message: error.message }); // 오류 메시지 반환
    }
});

module.exports = router;
