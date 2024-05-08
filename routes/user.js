const express = require('express');
const { User } = require('../models');// index는 파일 이름 생략 가능 
const { Op } = require("sequelize");
const session = require('express-session');
const crypto = require('crypto');

const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

//회원가입 api
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
        const hashedPassword = await bcrypt.hash(password, 10)

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


// 개인정보 수정 api
router.put('/update', async (req, res) => {
    try {
        const { userId, newPassword, nickname, profile } = req.body;

        // 사용자 확인
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "사용자를 찾을 수 없습니다." });
        }

        // 새 비밀번호 해싱
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

        // 정보 업데이트
        await User.update({ password: hashedPassword, nickname, profile }, { where: { id: userId } });

        res.json({ message: "개인정보가 업데이트 되었습니다." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});




module.exports = router;
