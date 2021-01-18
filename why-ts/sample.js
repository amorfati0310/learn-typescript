// @ts-check  // ts 쓴 것 같은 효과 가능 

/**
 * 
 * @param {number} a 첫번째 숫자 
 * @param {number} b 두번째 숫자
 */

function sum(a, b){
  return a+b;
}

sum(10, 20);
sum('1', '2')  // 에러가 안남 ...

// 여러면에서 jsDoc 쓰는 비용 -> TS 사용 비용이 훨씬 좋다 