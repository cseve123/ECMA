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
console.log(/^\uD842/u.text(str2)) //es6 false

// .除了换行符以外的任意单个字符
console.log(/^.$/.test(str2)) // false
console.log(/^.$/u.test(str2)) // true

console.log(/\u{61}/.test('a')) // false
console.log(/\u{61}/u.test('a')) // true