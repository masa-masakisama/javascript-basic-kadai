// 「年」の関数を定義する
const onYear = new Date("June 02, 2025 10:55:30");

// 今日の「年」を設定する
onYear.setFullYear(2025);

// 「月」の関数を定義する
const onMonth = new Date("June 02, 2025 10:55:30");

// 今日の「月」を設定する
onMonth.setMonth(06) + 1;

// 「日」の関数を定義する
const onDate = new Date("June 02, 2025 10:55:30");

// 今日の「日」を設定する
onDate.setDate(02);

// 今日の日付を出力する
console.log(onYear.getFullYear() + '年' + onMonth.getMonth() + '月' + onDate.getDate() + '日');
