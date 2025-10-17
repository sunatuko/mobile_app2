'use strict';
// ページ上の要素（Element)を参照
const elementSelect = document.getElementById("calcType");
const elementNum1 = document.getElementById("num1");
const elementNum2 = document.getElementById("num2");
const elementResult = document.getElementById("result");
const elementbtnEqual = document.getElementById("btnEqual"); /* fukada add */

// イベントを登録
// elementSelect.addEventListener("change", update);  fukada del 
// elementNum1.addEventListener("change", update);    fukada del
// elementNum2.addEventListener("change", update);    fukada del
elementSelect.addEventListener("change", clear);   //fukada add
elementNum1.addEventListener("change", clear);     //fukada add
elementNum2.addEventListener("change", clear);     //fukada add

elementbtnEqual.addEventListener("click", update); /* fukada add */

/** 計算し画面に結果を表示します。 */
function update() {
  // 計算結果を求める
  const result = calculate(
    Number(elementNum1.value), // 1番目のテキスト入力フォームの値
    Number(elementNum2.value), // 2番目のテキスト入力フォームの値
    elementSelect.value // セレクトボックスの値（計算の種類）
  );

  // 画面に表示
  elementResult.innerHTML = result; // テキストを代入
}

/** 計算します。 */
function calculate(num1, num2, calcType) {
  let result;
  // 計算の種類で処理を分岐
  switch (calcType) {
    case "type-add": // 足し算の場合
      result = num1 + num2;
      break;
    case "type-substract": // 引き算の場合
      result = num1 - num2
      break;
    case "type-multiply": // 掛け算の場合
      result = num1 * num2;
      break;
    case "type-divide": // 割り算の場合
      result = num1 / num2;
      break;
  }
  return result;
}

/** 計算結果をクリアします。(clear Result) */
function clear() {
  elementResult.innerHTML = ""; // クリアする
}
