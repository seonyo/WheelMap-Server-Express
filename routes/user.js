const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt'); // bcrypt 모듈 임포트

router.post('/', async (req, res) => {
    try {
        const { password, nickname, profile, email } = req.body;

        // 이메일 중복 확인
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: "이미 등록된 이메일입니다." });
        }

        // 비밀번호 해싱
        const hashedPassword = await bcrypt.hash(password, 10);

        // 새 사용자 생성
        const newUser = await User.create({ password: hashedPassword, nickname, profile, email });
        res.json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
