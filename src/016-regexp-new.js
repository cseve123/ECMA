// 正则表达式扩展
// 修饰符：i(忽略大小写) m(多行匹配) g(全局匹配)
//  y修饰符 粘连修饰符
const str = 'aaa_aa_a';
const reg1 = /a+/g;
const reg2 = /a+/y // 从剩余的第一个开始匹配，不匹配不找了
// 会从第一个找到，每打印一下累计往下找一次
console.log(reg1.exec(str));
console.log(reg1.exec(str));
console.log(reg1.exec(str));
console.log(reg2.exec(str));
console.log(reg2.exec(str));
// u修饰符 unicode
const str2 = '\uD842\uDFB7'; // 表示一个字符
console.log(/^\uD842/.test(str2)) // es5 true
// console.log(/^\uD842/u.text(str2)) //es6 false

// .除了换行符以外的任意单个字符
console.log(/^.$/.test(str2)) // false
console.log(/^.$/u.test(str2)) // true

console.log(/\u{61}/.test('a')) // false
console.log(/\u{61}/u.test('a')) // true

// ---------------------------
// ES9
// dot点 www.imo.o
// .配饰除换行的任意
const reg3 = /./
console.log(reg3.test('5')) // true
console.log(reg3.test('\n')) // false
console.log(reg3.test('\r')) // false
console.log(reg3.test('\u{2028}')) // false

// dotAll--新的修饰符s,真正的匹配任意
const reg4 = /./s
console.log(reg4.test('5')) // true
console.log(reg4.test('\n')) // false
console.log(reg4.test('\r')) // false
console.log(reg4.test('\u{2028}')) // false
// 修饰符：g i m y u s

// 具名组匹配
// const date = /(\d{4})-(\d{2}-(\d{2}))/.exec('2020-10-12');
// console.log(date[1], date[2], date[3]);
const date = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/.exec('2020-10-12');
console.log(date);
const {year, month, day} = date.groups;
console.log(year,month,day);

// 先行断言
const str9 = 'ecmascript';
console.log(str9.match(/ecma(?=script)/));
// 后行断言
console.log(str9.match(/(?<=ecms)script/));