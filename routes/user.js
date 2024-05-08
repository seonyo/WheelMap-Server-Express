const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt'); // bcrypt 모듈 임포트

//회원가입 api
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

//로그인 api
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // 이메일이 데이터베이스에 있는지 확인
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: "유효하지 않은 이메일 또는 비밀번호입니다." });
        }

        // 비밀번호 검증
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: "유효하지 않은 이메일 또는 비밀번호입니다." });
        }

        // 로그인 성공
        res.json({ message: "로그인 성공", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
