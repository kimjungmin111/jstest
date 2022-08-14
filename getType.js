export default function (data){
  return Object.prototype.toString.call(data).slice(8,-1)
}
// 내보내기
// default 는 기본통로
// 기본통로는 하나의 데이터만 내보낼 수 있다
// export default 123 데이터 하나이상이면 에러남