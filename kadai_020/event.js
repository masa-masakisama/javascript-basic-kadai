// btnというidをもつHTML要素を取得し、定数に代入する
const changeBtn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
changeBtn.addEventListener('click', () => {
  // textというidをもつHTML要素を取得し、定数に代入する
  const changeText = document.getElementById('text');
  // HTML要素がクリックされたとき、chageTextに「ボタンをクリックしました」というテキストを再代入する
  changeText.textContent = 'ボタンをクリックしました';
})