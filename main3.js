import _ from 'lodash'//From 'node_modules'!
// import checkType from './getType'
// // import checkRandom from './getRandom'
// // import {random,user as heropy} from './getRandom'
// // A as B  B라는이름으로 사용
// import * as R from './getRandom'


// console.log(_.camelCase('the hello world'))
// console.log(checkType([1,2,3]))
// // console.log(random(),random())
// console.log(R)
// console.log(typeof R)
// // 객체

// const usersA = [
//   {
//     userId:'1',name: 'HEROPY'
//   },
//   {
//     userId:'2',name: 'Neo'
//   }
// ]
// const usersB = [
//   {
//     userId:'1',name:'HEROPY'
//   },
//   {
//     userId:'3',name:'Amy'
//   }
// ]
// const usersC = usersA.concat(usersB)
// console.log('concat:',usersC)
// console.log('uniqBy:',_.uniqBy(usersC,'userId'))
// // _.uniqBy(중복된데이터가 있는 배열 , '중복된데이터를 구분할 고유한 데이터')
// // 합친후
// const usersD = _.unionBy(usersA , usersB , 'userId')
// console.log('unionBy',usersD)
// // 합치기전(중복된데이터가 있을거라고 예상되는 두배열)

// const users = [
//   {userId : '1' , name : 'HEROPY'},
//   {userId : '2' , name : 'Neo'},
//   {userId : '3' , name : 'Amy'},
//   {userId : '4' , name : 'Evan'},
//   {userId : '5' , name : 'Lewis'}
// ]

// const foundUser = _.find(users,{name : 'Amy'})
// const foundUserIdex = _.findIndex(users,{ name : 'Amy'})

// console.log(foundUser)
// console.log(foundUserIdex)
// console.log(users)
// _.remove(users, {name : 'HEROPY'})
// console.log(users)

// import myData from './myData.json'
// // json 파일은 문자데이터지만 가져오면 자동으로 객체데이터로 변환됨
// console.log(myData)
// console.log(typeof myData)
// const user = {
//   name: 'HEROPY',
//   age:85,
//   emails: [ 
//     'thesecon@gmail.com',
//     'neo@zillinks.com'
//   ]
// }
// console.log('user',user)

// const str = JSON.stringify(user)
// // JSON 은 전역객체
// // stringify 는 객체 데이터를 문자데이터로만들어줌
// console.log('str:',str)
// console.log(typeof str)

// const obj = JSON.parse(str)
// // 자바스크립트 내에서 사용할 수 있게 객체데이터로 바꿈
// console.log('obj',obj)
// console.log(typeof obj)

// const user = {
//   name : 'HEROPY', 
//   age : 85,
//   emails : [
//     'thesecon@gmail.com',
//     'neo@zillinks.com'
//   ]
// }

// localStorage.setItem('user',JSON.stringify(user))
// // localStorage 에 저장할때는 문자데이터로 저장해야함
// console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')

// const str = localStorage.getItem('user')
// const obj = JSON.parse(str)
// obj.age = 22
// console.log(obj)
// localStorage.setItem('user',JSON.stringify(obj))
// import axios from 'axios'

// function fetchMovies(){
//   axios
//     .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
//     // 데이터요청
//     .then(res=>{
//       console.log(res)
//       const h1El = document.querySelector('h1')
//       const imgEl = document.querySelector('img')
//       console.log(h1El.textContent = res.data.Search[0].Title)
//       imgEl.src = res.data.Search[0].Poster
//     })
//   //프로젝트에서 데이터를 요청할땐 https
// }
// fetchMovies()



