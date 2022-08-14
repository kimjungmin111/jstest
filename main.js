//산술 연산자 + - * / %

// console.log(1 + 2)
// console.log(5 - 7)
// console.log(3 * 4)
// console.log(10 / 2)
// console.log(7 % 5)

//할당 연산자 =
// const a = 2//재할당불가

// let a2 =2 //재할당가능
// a2= a2+1
// a2 -= 3

// console.log(a2)

// const a = 13
// const b = 13
// 데이터비교 ===
// console.log(a===b)

// function isEqual(x,y){
//   return x === y
// }

// console.log(isEqual(1,1))
// console.log(isEqual(2,'2'))

// console.log(a <= b)

// const a = 1 === 123
// const b ='AB' ==='ABC'
// const c =false

// console.log(a)
// console.log(b)
// console.log(c)

// console.log('&&: ', a && c)
// console.log('||' ,a || b || c)
// console.log('!: ', !a)

// 삼항연산자

// const a = 1 < 2
// const b = true
// if(a){
//   console.log('참')
// }else{
//   console.log('거짓')
// }

// console.log( a ? '참' : '거짓')
// console.log( b ? 'true' : 'false')

// import random from './getRandom'



// const a= random()



// switch (a) {
//   case 0:
//     console.log(a)
//     console.log('a is 0')
//     break
//   case 2:
//     console.log(a)
//     console.log('a is 2')
//     break
//   case 4:
//     console.log(a)
//     console.log('a is 4')
//     break
//   default :
//   console.log(a)
//   console.log ('nothing')
// }

//반복문
// for(시작조건; 종료조건; 변화조건)
// const ulEl = document.querySelector('ul')

// console.log(ulEl)

// for (let i =0 ; i < 10; i += 1){
//   const li = document.createElement('li')//li 를 생성한다
//   li.textContent=`list-${i + 1}`//li에 text 를 추가한다
//   if((i+1) % 2 === 0){
//     li.addEventListener('click',function(){
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)//ulEl안에 li를 삽입
// }

// 변수 유효범위
// var let const

// function scope(){
  
//   if(true){
    
//     var a = 123 
//     //const,let 는 hoisting 되지않는다
//     //블록 레벨의 유효범위를 갖는다
//     //var 는 함수레벨의 유효범위를 갖는다
//     //그러나  값이 올라가진않음
//     console.log(a)
//   }
  
// }
// scope()

// 형 변환

// const a = 1
// const b = '1'

// console.log(a == b)
//==사용하면 형변환이 일어난다
// 형변환이 일어나서 사용 지양한다
//false = '' = null = 0 = -0 = NaN =undefined 으로 형변환이 일어난다
// if(33){
//   console.log(123)
// }

// 함수복습
// 1.함수선언방식
// function sum(){
//   console.log(arguments)  
//   // arguments는 함수 호출시 인수로넣은 값들이 배열형태로들어옴
//   return arguments[0]+arguments[1]

// }

// console.log(sum(3,3))
// 2. 익명함수
// const sum = function(x,y){
//   console.log(x)
//   return x+y
// }

// 화살표 함수
// () => {}
// const double = function(x){
//   return x*2
// }
// console.log('double: ' + double(7))

// const doubleArrow = x => [1,2,3]
// // 리턴값 만있을때는 리턴,{} 생략가능
// // 인수가하나면 () 생략가능
// // 객체데이터는 ()로 한번감싸고 {} 사용
// // ({name: 'Heropy' })

// console.log('doubleArrow: '+ doubleArrow(7))

//즉시실행 함수
//IIFE

// const a = 7
// function double(){
//   console.log(2 * a)
// }
// double();

// (function () {
//   console.log(a*2)
// })();
// // 즉시 실행함수 1.(함수)()
// (function () {
//   console.log(a*2)
// }())
// // 즉시 실행함수 2.(함수())

// // 호이스팅
// // 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// // 함수표현식 const double = function(){ console.log(a*2)} 호이스팅안됨
// // 함수선언식 function double(){console.log(a*2)} 호이스팅 됨
// const a= 7

// double()

// function double(){
//   console.log(a*2)
// }

// // 타이머 함수
// // setTimeout(함수,시간) : 일정 시간 후 함수 실행(한번)
// // setInterval(함수,시간): 시간 간격마다 함수 실행(계속)
// // clearTimeout():설정된 Timeout 함수를 종료 인수에 종료하고자하는 setTimeout 를 넣는다
// // clearInterval():설정된 Interval 함수를 종료

// const timer = setTimeout(() =>{
//   console.log('Heropy!')
// } , 3000)

// const h1El=document.querySelector('h1')
// h1El.addEventListener('click',()=>{
//   clearTimeout(timer)
// })

// const timer1 = setInterval(() =>{
//   console.log('Heropy!')
// } , 3000)
// const h1El1=document.querySelector('h1')
// h1El.addEventListener('click',()=>{
//   clearInterval(timer1)
// })

// 콜백
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)
// function timeout(cb){
//   setTimeout(() => 
//   {
//     console.log("heropy!")
//     cb()
//   }, 3000)}

//   timeout(() => {
//     console.log("done")
//   })

// const heropy ={
//   firstName: 'Heropy',
//   lastName: 'Park',
//   getFullName: function(){
//     return `${this.firstName} ${this.lastName}`
//     // this 는 속성이 속해있는 객체를 의미 여기선 heropy 자체
//   }
//   // 메소드
// }
// console.log(heropy.getFullName())
// const amy ={
//   firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function(){
//     return `${this.firstName} ${this.lastName}`
//     // this 는 속성이 속해있는 객체를 의미 여기선 heropy 자체
//   }
//   // 메소드
// }
// console.log(amy.getFullName())
// const neo ={
//   firstName: 'Neo',
//   lastName: 'Smith',
//   getFullName: function(){
//     return `${this.firstName} ${this.lastName}`
//     // this 는 속성이 속해있는 객체를 의미 여기선 heropy 자체
//   }
//   // 메소드
// }
// console.log(neo.getFullName())
// function User(first, last){
//   this.firstName = first
//   this.lastName = last
//   // 생성자함수는 첫글자 대문자
  
// }
// // user.prototype.getFullName = function(){
// //   return `${this.firstName} ${this.lastName}`
// // }

// const heropy = new User('Heropy','Park')// 생성자함수-> 객체데이터 생성
// const amy = new User('Amy','Clarke')
// const neo = new User('Neo','Smith')

// // console.log(heropy.getFullName())
// console.log(amy)
// console.log(neo)

// this
// 일반 함수는 호출 위치에서 따라 this 정의!
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의
// const heropy = {
//   normal: function(){
//     console.log(this.name)
//   },
  
//   arrow : ()=>{
//     console.log(this.name)
//     // 
//   }
// }
// heropy.normal()
// // 일반 함수는 호출 위치에서 따라 this 정의!
// heropy.arrow()

// const amy = {
//   name: 'Amy',
//   normal : heropy.normal,
//   arrow : heropy.arrow
//   // arrow : heropy.arrow() 면호출인데(()붙어서)
//   // arrow : heropy.arrow 면 할당임
// }
// amy.normal()
// // 함수 호출된 곳 (amy)
// amy.arrow()
// // 함수 선언된 곳
// function User(name){
//   this.name = name
// }
// User.prototype.normal = function(){
//   console.log(this.name)
// }
// User.prototype.arrow = () =>{
//   console.log(this.name)
// }

// const heropy = new User('Heropy')
// // 인스턴스 생성

// heropy.normal()
// heropy.arrow()

// const timer = {
//   name: 'Heropy!!',
//   timeout: function (){
//     setTimeout(()=>{
//       console.log(this.name)
//     },2000)
//     // 화살표 함수 => 선언된 함수범위안 => 객체데이터ㄹ
//   }
// }
// timer.timeout()

// const User = function (first , last){
//   this.first = first,
//   this.last = last
  
// }
// User.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`
// }
// const Heropy =new User('kim', 'jungmin')
// const amy = new User('Amy','Clarke')
// const neo = new User('Neo','Smith')

// console.log(Heropy)
// console.log(amy.getFullName())


// class User {
//   constructor(first, last){
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName(){
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// class Vehicle{
//   constructor(name,wheel){
//     this.name= name
//     this.wheel = wheel
//   }
// }
// const myVehicle = new Vehicle('운송수단',2)

// console.log(myVehicle)
// console.log(Vehicle.name)

// class Bicycle extends Vehicle{
//   constructor(name,wheel){
//     super(name,wheel)
   
//   }
// }
// const myBicycle = new Bicycle('자전거' ,2)
// console.log(myBicycle)
// console.log(Vehicle)
// class Car extends Vehicle{
//   constructor(name , wheel, license){
//     super(name,wheel)
//     this.license = license
//   }


// }















