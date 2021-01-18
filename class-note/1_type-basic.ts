const str = 'hello';

// 기본 타입 

// 타입추론 잘 되지만 가능한 넣는게 명시적이라 생각 

// 문자, 숫자, boolean
const str_ts:string = 'hello';
const num: number = 10;
let show:boolean = true;


// 배열  생성자함수<Generic>, or type[]
const arr: Array<number> = [1,2,3];
const heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10];
const items: number[] = [1,2,3];

// 튜플 
// index 의 type까지 지정하는 형태 
let address: [string, number] = ['gangnam', 100]

// TS 객체 

const obj:object = {}
// let person:object = {
//   name: 'capt',
//   age: 10,
// }

let person: {name: string, age: number } = {
  name: 'thor', 
  age: 1000,
}