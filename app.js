const quiz = [
  {
    question: '2021年12月1日時点でもっとも人口の多い日本の都市は？',
    answers: ['世田谷区','横浜市','札幌市','大阪市'],
    correct: '横浜市'
  }, {
    question: '2022年1月時点でもっともチャンネル登録者数の多い日本のYouTuberは？',
    answers: ['HikakinTV','Junya.じゅんや','東海オンエア','はじめしゃちょー（hajime）'],
    correct: 'Junya.じゅんや'
  }, {
    question: '日本国内で３番目に高い山は？',
    answers: ['富士山','北岳','奥穂高岳','槍ヶ岳'],
    correct: '奥穂高岳'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  // while文で繰り返し
  while (buttonIndex < buttonLength){
    // 下で命令を指示
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    // index++で値が1ずつ増加する。
  buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
window.alert('正解');
score++;
} else {
  window.alert('不正解')
}

quizIndex++;

if(quizIndex < quizLength){
  // 問題まだあればこちらを実行
  setupQuiz();
} else {
  // 問題もうなければこちらを実行
  window.alert('正解数'+ score + '/' + quizLength);
}
};

// ボタンを押したら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e) => {
  clickHandler(e);
  });
  handlerIndex++;
}
