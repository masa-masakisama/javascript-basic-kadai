// btn、textというidをもつHTML要素を修正定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// HTML要素をクリックしたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // クリックして2秒後に処理を実行する
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});