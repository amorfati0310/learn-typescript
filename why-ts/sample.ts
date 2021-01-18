function add(a: number, b: number): number{
  // a.toFixed()
  return a+b;
}


// 2번쨰 장점 자동완성 및 에러 방지 +
// ex) number로 선언되어 있으면 number instance가 쓸 수 있는 메소드 자동완성 표현
// vsCode intellisense  + TS와 vsCode 툴 조합이 계속 발전되고 잘 되고 있다. 
// 그도 그럴것이 VSCode , TS 둘다 MS에서 만듬
// add(10, '20')