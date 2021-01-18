function sum(a: number, b: number){
  return a + b
}


sum(10, 20);

function add(): number {
  // return `1'
  return 10;
}

// param과 return 값들 정의 가능 
// param 인자에 따라 동적으로 Generic 

function sum2(a, b){
  return a+b;
}

// js에서 유연한 처리 TS 에서는 에러 
// sum2(10,20, 30, 40);

// 함수의 옵셔널 파라미터 

function log(a:string, b?: string, c?:string) {
  // ? 옵셔널 파라미터를 통해서 선택적으로 받아서 처리할 수 있다. 
}

log('hello')
log('hello', 'world')
log('hello', 'world', '!!!')