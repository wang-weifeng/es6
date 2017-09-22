//构造函数
// function Per(name) {
//     this.name = name;
// }

// var ab1 = new Per("wwf");
// var ab2 = new Per("w");

// console.log(ab1);
// console.log(ab2);
// console.log(ab1.name);
// console.log(ab2.name);

//call()方法;
// var pe1 = {
//     name:"ww"
// }

// var pe2 = {
//     name:"w"
// }

// a("w");
// a.call(this);
// a.call(pe1);
// a.call(pe2);

// //bind()方法
// function a(){
//     console.log(this.name)
// }

// var pe1 = {
//     name:"wwf"
// }

// var b = a.bind(pe1);
// b(pe1);

//原型链
// function Pes(who) {
//     this.name = who;
// }

// Pes.prototype.say = function () {
//     console.log(this.name);
// };

// Pes.prototype.fav = [];

// var pe1 = new Pes("wwf");
// var pe2 = new Pes("w");

// pe1.say();
// pe2.say();
// console.log(pe1.fav);
// console.log(pe2.fav);

// function Parent(name) { 
//     this.name = name;
// }
// Parent.prototype.sayName = function() {
//     console.log('parent name:', this.name);
// }

//原型链继承
function SuoperType() {
    this.property = true;
}
SuoperType.prototype.getSuperValue = function () {
    console.log(this.property);
}
function SubType() {
    this.subproperty = false;
}
SubType.prototype = new SuoperType();
SubType.prototype.getSubType = function () {
    console.log(this.subproperty);

}
var instance = new SubType()
instance.getSuperValue();//true
instance.getSubType();//false

//call继承
function Parent(n) {
    console.log(this.name+":"+n);
}

function Childe(name) {
    this.name = "12";
    Parent.call(this,name);
}

var ch1 = new Childe("wwf");
var ch2 = new Childe("w");

//es6继承

// class A {
//     constructor() {
//         this.x = 1;
//     }
//     print() {
//         console.log(this.x);
//     }
// }

// class B extends A {

//     constructor() {
//         super();
//         this.x = 2;
//     }
//     m() {
//         super.print();
//     }
// }

// let b = new B();
// b.m() // 2



// class Point {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
//   }

//   class ColorPoint extends Point {
//     constructor(x, y, color) {
//       this.color = color; // ReferenceError
//       super(x, y);
//       this.color = color; // 正确
//     }
//   }




// function Nainal(name) {
//     this.name = name;
// }

// Nainal.prototype.tx = function () {
//     this.eyes = 2;
//     this.nos = 1;
//     console.log(this.eyes, this.nos);
// }

// function Dogs(thi) {
//     this.fan = thi
// }

// Dogs.prototype = new Nainal("gou");

// const dog = new Dogs("chisi");

// console.log(dog.fan);
// console.log(dog.name);
// dog.tx();
