// 类与继承

// ES5
function People (name, age) {
  console.log(this) //当前对象应用
  // this. 是实例属性
  this.name = name;
  this.age = age;
  // k
  People.count++;
}
// 静态属性
People.count = 0;
// 静态方法
People.getCount = function () {
  console.log('People静态里的this指构造函数', this.age) // 指向People构造函数,取不到实例的属性
  console.log('共有实例', People.count + '个')
}

// 原型里的是实例方法
People.prototype.showName = function () {
  console.log('我的名字是', this.name);
}
let p1 = new People('jim', 12);
console.log('实例p1', p1.count);  // 构造函数的静态属性，实例是访问不到的
console.log('构造函数的静态属性和方法', People.count, People.getCount());

// 继承
function Animal (name) {
  this.name = name;
}
Animal.count =123;
Animal.getCount = function () {
  console.log(3333);
}
Animal.prototype.showName = function () {
  console.log('我的名字', this.name);
}
// 子类 继承分为 属性继承和原型继承处理
function Dog(name, color) {
  Animal.call(this, name); // 继承属性
  this.color = color;
}
Dog.prototype = new Animal(); // 继承原型,下面的showName才继承，但Dog的构造函数constructor也改变了
Dog.prototype.constructor = Dog;  // 修复构造函数
let d1 = new Dog('we', 'red');
d1.showName() // 没有动Dog.prototype时这里没有继承Animal的原型
// console.log(Dog.count); // 子类不能访问父类的静态属性和方法

// ES6
class People6 {
  constructor(name, age) {
    // 实例属性
    this.name = name;
    this.age = age;
    this._sex = -1;
  }
  // 实例属性,在外面写
  get sex() {
    return this._sex
  }
  set sex(val) {
    this._sex = val
  }
  // 实例方法
  showName(){
    console.log(this.name);
  }
  // 静态方法
  static getCount() {
    return 5
  }
}
// 静态属性，static关键字目前只支持静态方法
People6.count = 99;
// 实例
let p6 = new People6('im', 12);
console.log(p1);
// 继承
class Coder extends People6 {
  constructor(name, age, company) {
    // 继承属性
    super(name, age);
    this.company = company;
  }
  // 覆盖方法
  showName(){
    console.log(this.name);
  }
  // 自己方法
  showCompany(){
    console.log(this.company);
  }
}
let c1 = new Coder('jim', 12, 'cm');
// console.log(c1.getCount()); //实例使用不了静态方法
console.log(Coder.getCount()); // 子类可以使用静态方法
console.log(Coder.count);  // 子类可以继承静态属性,实例同样不可以