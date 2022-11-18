const express = require('express')
const app = express()
const port = 3000

// get은 HTTP메소드이다. 요청의 목적 종류등을 알려주기 위해
// get은 주소창에서 데이터전달 post는 주소창없이 데이터 전달
// /는 라우팅이다. ex)/borad, /about/board등 여러 페이지내로 접속
// 콜백함수 = 끝나고 실행할 함수 
// ex) setTimeout(()=>{console.log("1초지남")}, 1000) 뒤의 함수가 끝난 후에 전의 함수를 실행한다. 따라서 1초뒤에 1초지남이 출력된다.
// req = request 요청정보, res = response 반응정보
app.get('/', (req, res) => {
    res.send("Hello world!")
})
app.get('/dog', (req, res) => {
    res.send({'sound':'멍멍'})
})
app.get('/cat', (req, res) => {
    res.send({"sound": "야옹"})
})
// port란? 입구다. 몇번 포트에 대해 리슨하고 있다.!
// 리슨은 항상 하고있는것 (서버가 켜져있다면)
app.listen(port, () => {
    console.log("Example app listening on port ${port}")
})