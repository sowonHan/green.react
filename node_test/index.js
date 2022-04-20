/* express라는 프레임워크를 가져오겠다는 것.
html에서 라이브러리 가져올 때는 script src로 js 라이브러리 파일을 불러왔는데 node에서는 그걸 require로 한다 */
const express = require('express');
// 실행
const app = express();
// 포트번호 지정
app.set('port', process.env.PORT || 3000);

// 경로, (프론트에서 받는 것, 프론트에 보내는 응답) 경로에 넣은 /는 localhost:3000/ <-이거를 의미
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/test.html');
});

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/test.html');
});

// 서버에서 듣고있다는 뜻으로 listen. 터미널에 node index.js 를 치면 문구를 볼 수 있다
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

// 터미널에서 ctrl + c 누르면 서버 종료. PS C:\project\node_test> 같이 경로 나오면 종료된 것임