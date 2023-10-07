/*
  20 - Promise.all
  -------
  by Anthony Fu (@antfu) #보통 #array #promise

  ### 질문

  Type the function `PromiseAll` that accepts an array of PromiseLike objects, the returning value should be `Promise<T>` where `T` is the resolved result array.

  ```ts
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });

  // expected to be `Promise<[number, 42, string]>`
  const p = PromiseAll([promise1, promise2, promise3] as const)
  ```

  > GitHub에서 보기: https://tsch.js.org/20/ko
*/
/* _____________ 여기에 코드 입력 _____________ */

// 1. promise 벗기는 유틸 타입
// 2. 재귀를 위해 타입 새로 선언
// 3. shift와 유사하게 첫번째 추출하여 1. 사용 후 재귀 반복
// 4. 재귀 마지막 한개 남았을 때 예외처리
// 5. (A | B)[] 와 같은 타입 들어올 시 실패..ㅜ

type PromiseInType<T> = T extends Promise<infer R> ? R : T;

type Loop<T extends any[]> = T extends [infer R, ...infer E]
  ? E["length"] extends 0
    ? [PromiseInType<R>]
    : [PromiseInType<R>, ...Loop<[...E]>]
  : // 여기 왔다는건 (a|b)[]꼴.
    never;

declare function PromiseAll<T extends any[]>(values: T): Promise<Loop<T>>;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);
const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>
];

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/20/answer/ko
  > 정답 보기: https://tsch.js.org/20/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
