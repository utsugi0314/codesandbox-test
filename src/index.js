// /**
//  *  const,len等の変数宣言
//  */
// var val1 = "var変数";
// console.log(val1);

// val1 = "上書き可";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let上書き可能";
// console.log(val2);

// let val2 = "let再宣言不可";

// const val3 = "const変数(読み取り用）";
// console.log(val3);

// val3 = "const上書き不可";

// const val3 = "const再宣言不可（オブジェクト、配列除く）";

// const val4 = {
//   name: "constオブジェクト",
//   Nos: 24,
// };
// val4.name = "オブジェクト内プロパティ上書き";
// val4.addpro = "プロパティ追加"
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 *  テンプレート文字列
 */
// const name = "宇津木";
// const age = "24";
// const age2 = "33"
// // 従来の方法
// const messageold = "私の名前は" + name + "です。年齢は" + age + "です。";

// // テンプレート文字列
// const messagetmp = `私の名前は${name}です。年齢は${age2}です。`;
// console.log(messageold);
// console.log(messagetmp);

/**
 * アロー関数
 */
// 従来
// function func1(str){
//   return str;
// }
// const func1 = function(str){
// 　return str;
// }
// console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10,20))

/**
 * 分割代入
 */
// const myProfile = {
//   name: "オブジェクト",
//   age: "ええ",
// };
// const message1 =`名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);
// myProfile.day = "追加するときは.要素名＝値でOK";
// const {name, age, day} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。日付は${day}です。`;
// console.log(message2);

// const myProfile = ['宇津木','24'];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "デフォルト") => console.log(`こんにちは${name}さん`);
// sayHello("宇津木");

/**
 * スプレット構文．．．
 */
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// console.log("here");
// // sumFunc(arr1[0], arr1[1]);
//  sumFunc(...arr1);
// //...配列名 は配列の要素を順番に処理(ここでは展開）する

////まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー、結合
// const arr4 = [10,20];
// // const arr5 = [30,40];
// //配列のコピーを＝で行うと、名前が違うだけで同じ扱いになる。どちらかを変更した場合、両方変更される。
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4, arr6);
// // const arr7 = [...arr4,...arr5];
// // console.log(arr7);

/**
 * mapやfiltrを使った配列の処理
 */
//const nameArr = ["田中", "山田", "宇津木"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

//nameArr.map((name,index) => console.log(`${index + 1}番目は${name}です`))
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
//nameArr.map((name)=>console.log(name));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) =>{
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) =>{
//   if(name ==="宇津木"){
//     return name
//   }else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const val1 = 1 > 0 ? `trueです`:`falseです`;
// console.log(val1);
// const num =  1300;
// // console.log(num.toLocaleLowerCase());
// const formattedNum = typeof num === 'number' ? num.toLocaleString():`数値を入力してください`;
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' :'許容範囲内です';
// }
// console.log(checkSum(13, 88));

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2){
//   console.log("1か２はtrueになります。");
// }
// if(flag1 && flag2){
//   console.log("1も2もtrueになります");
// }

// // || は左がfalseなら右を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// //&&は左がtrueなら右を返す。
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
