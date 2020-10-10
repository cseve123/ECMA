// 箭头函数 
let oBtn = document.getElementById('btn')
oBtn.addEventListener('click', function () {
  setTimeout( function () {
    console.log(this); // 指向window
  })
  // 
  setTimeout( function () {
    console.log(this); // 指btn
  }.bind(this))
  setTimeout(()=> { // this指向声明所在对象
    console.log(this) // 指向btn
  })
})

// 不可使用构造函数，没有constructor
let Person = (name) => {
  console.log(arguments)// 不和使用arguments
  this.name = name
}
let jim = new Person('1');
console.log(jim);