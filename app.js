const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session'); // Import session middleware

const app = express();
const port = 3000;

const { sequelize } = require('./models');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(require('cookie-parser')());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
}));

app.set('port', process.env.PORT || 3000);

// 시퀄라이즈와 데이터베이스 동기화
sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

// routes
const userRouter = require('./routes/user');
const chargersRouter = require('./routes/chargers');



// router - 진입할 엔드포인트 + 진입할 라우터
app.use('/users', userRouter)
app.use('/chargers', chargersRouter)


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});
