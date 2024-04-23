const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

const { sequelize } = require('./models');

app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 3000);

//시퀄라이즈와 데이터베이스 동기화
sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    })

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});