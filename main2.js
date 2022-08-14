import _ from 'lodash'
// const result = 'Hello world'.indexOf('Heropy')
// console.log(result)

// const str = '0123'

// console.log('글자 수 :'+ str.length)

// const str = 'Hello world!'

// console.log(str.indexOf('world') !== -1)
// // true
// console.log(str.slice(0,3))
// // Hel 0~2번 인덱스까지 출력
// console.log(str.slice(6,11))
// // world
// console.log(str.replace('world','Heropy'))
// // Hello Heropy!
// console.log(str.replace(' world!',''))
// // Hello
// const str0 = '    Hello world  '
// console.log(str0.trim())
// // 앞뒤공백사라짐
// const str1 = 'wjdals1394@naver.com'

// console.log(str1.match(/.+(?=@)/)[0])
// // match 배열데이터로 반환

// const pi = 3.14159265358979
// console.log(pi)

// const str = pi.toFixed(2)
// console.log(str)
// console.log(typeof str)
// console.log(typeof str=='string')

// const integer = parseInt(str)
// // 3
// const float = parseFloat(str)
// // 3.14
// // parseInt,parseFloat 는 전역함수
// console.log(integer)
// console.log(float)
// console.log(typeof integer, typeof float)

// console.log('abs:', Math.abs(-12))
// // 12
// console.log('min:',Math.min(2,8))
// // 작은값 2
// console.log('max:',Math.max(2,8))
// // 큰값 8
// console.log('ceil:', Math.ceil(3.14))
// // 올림값
// console.log('floor: ',Math.floor(3.14))
// // 내림값
// console.log('round: ',Math.round(3.14))
// // 반올림
// console.log('random: ',Math.random())
// // 난수값

// const numbers = [1,2,3,4]
// const fruits = ['Apple','Banana','Cherry']
// // const array3 = new Array('fine','apple')
// console.log(numbers.length)
// console.log(fruits.length)
// console.log([1,2].length)
// // console.log(array3[0])
// // console.log(typeof array3[0])
// console.log([''].length)
// console.log([].length)

// console.log(numbers.concat(fruits))
// // concat() 원래배열에 새로운 배열을 추가하여 새로운 배열을 생성
// console.log(numbers)
// console.log(fruits)
// // 원래배열은 변하지 않음

// fruits.forEach(function(fruit,index1,array){
//   console.log('element:'+fruit,'index:'+index1,'array:'+array)
// })
// // 인수로 콜백함수를사용함 
// // 배열길이만큼 콜백 함수실행

// const a = fruits.forEach(function(fruit,index){
//   console.log(`${fruit}-${index}`)
  
// })

// console.log(a)
// undefined return 값이없음

// const b = fruits.map(function(fruit,index){
//   return {
//     id: index,
//     name: fruit
//   }
// })
// const b = fruits.map((fruit,index)=>
//   ({
//     id: index,
//     name: fruit
//   })
// )
// // map() 은 새로운배열을 반환한다 
// // forEach 는 반환값이 없다
// console.log(b)
// console.log(b[0])
// console.log(b[1])
// console.log(b[2])

// const a = numbers.map(
//   number => number<3
  
// )
// console.log(a)

// const b = numbers.filter(
//   number =>  number < 3
// )
// // 배열에 특정조건을 인수로넣어 조건결과가 true 가되는 item 으로 새로운 배열생성
// console.log(b)

// console.log(numbers)
// // map(), filter() 은 원래배열을 훼손하지않음

// const a = fruits.find(fruit => /^C/.test(fruit))
// console.log(a)
// console.log(typeof a)
// // 특정조건에 true를 반환하는 item 을 찾으면 함수종료되고 해당 item 반환
// const b = fruits.findIndex(fruit => /^C/.test(fruit))
// console.log(b)

// const a = numbers.includes(3)
// console.log(a)

// const b = fruits.includes('HEROPY')
// console.log(b)
// console.log(typeof a)
// // 배열에 인수가 아이템으로 포함되어있는지 확인 boolean 값으로 반환

// numbers.push(5)
// console.log(numbers)
// // 배열의 마지막 인덱스 다음에 추가
// numbers.unshift(0)
// console.log(numbers)
// // 배열의 처음 인덱스 이전에 추가

// numbers.reverse()
// console.log(numbers)
// fruits.reverse()
// console.log(fruits)

// numbers.splice(2,1,999)
// //인수 두개일때 첫번째인수 인덱스 부터 두번째 인수갯수만큼을 지우는 매서드
// //인수 새개일때 세번째인수를 첫번째인수자리에 추가함
// console.log(numbers)
// // {1,2,4}
// fruits.splice(2,0,'Orange')
// console.log(fruits)

// const userAge = {
//   // key : value
//   name:'HEROPY',
//   age:85
// }

// const userEmail = {
//   name:'Heropy',
//   email:'thesecon@gmail.com'
// }

// const target = Object.assign({},userAge,userEmail)
// // 전역객체 Object
// // assign()은 prototype 로 선언된 메서드가 아니기때문에 개발자가 선언한 객체에 {}.assign형식으로 사용못함
// // 정적메소드 static 메서드라고도한다
// console.log(target)
// console.log(userAge)
// console.log(target===userAge)
// // target 과 userAge는 같은 객체임
// const a  = {k:123}
// const b = {k:123}
// console.log(a === b)

// const user = {
//   name: 'Heropy',
//   age:85,
//   email : 'thesecon@gmail.com'
// }

// const keys = Object.keys(user)
// console.log(keys)
// // ['name','age',email']
// // console.log(user['email'])
// // 객체데이터 인덱싱 방법 user[key값]
// const values = keys.map(key => 
//   {
//   console.log(user[key])
//   console.log(typeof key)
//    return user[key]
//   }
// )
// console.log(user['email'])
// console.log(values)

// const {name : heropy , age , email , address = 'Korea'} = user

// console.log(`사용자의 이름은 ${heropy} 입니다.`)
// console.log(`${heropy}의 나이는 ${age}세입니다.`)
// console.log(`${heropy}의 이메일 주소는 ${email}입니다.`)
// console.log(address)
// console.log(age)
// const fruits = ['Apple', 'Banana' , 'Cherry']
// const [a,b,c,d] = fruits
// const [,b,c,d] = fruits
// 구조분해하는 데이터 타입에맞게 작성해야함
// console.log(a,b,c,d)
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// const fruits = ['Apple' , 'Banana' , 'Cherry','Orange']
// console.log(fruits)
// console.log(...fruits)
// // ... 은 전개연산자  ',' 로구분된 배열데이터를 전개함
// // console.log('Apple','Banana','Cherry')
// const toObject=(a,b,...c) => ({a,b,c})
//   // ...c 매개변수에 전개연산자를쓰면 나머지를 전부 배열형태로 넣음


// console.log(toObject(...fruits))
// console.log(typeof toObject(...fruits))

// // 원시 데이터
// let a = 1
// let b = 4
// console.log(a,b,a===b)
// b=a
// console.log(a,b,a===b)
// a=7
// console.log(a,b,a===b)
// let c = 1
// console.log(b,c, b===c)

// // 참조데이터
// let a = {k:1}
// let b = {k:1}
// console.log(a,b,a===b)
// a.k=7
// b=a
// console.log(a,b,a===b)
// a.k=2
// console.log(a , b , a===b)
// let c = b
// console.log(a,b,c,a===c)
// a.k=9
// console.log(a,b,c,a===c)

// 얕은복사 깊은복사
const user = {
  name:'HEROPY',
  age:85,
  emails:['thesecon@gmail.com']
}
// const copyUser = user
// 메모리할당
// const copyUser = Object.assign({},user)
// const copyUser = {...user}
// // 얕은 복사
// const copyUser = _.cloneDeep(user)
// // 깊은복사
// console.log(copyUser === user)

// user.age = 22
// console.log('user:',user)
// console.log('copyUser:',copyUser)

// console.log('------') 
// console.log('------')

// user.emails.push('neo@zillinks.com')
// // console.log(user)
// console.log(user.emails === copyUser.emails)
// console.log('user',user)
// console.log('copyUser',copyUser)
// // emails 는 배열데이터를 참조하고있으므로 user와 copyUser의 참조주소가 다르더라도
// // 두객체의 emails 는 같은 주소를 참조한다


