/*
  10 - Tuple to Union
  -------
  by Anthony Fu (@antfu) #보통 #infer #tuple #union

  ### 질문

  튜플 값으로 유니온 타입을 생성하는 제네릭 `TupleToUnion<T>`를 구현하세요.

  예시:

  ```ts
  type Arr = ['1', '2', '3']

  type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
  ```

  > GitHub에서 보기: https://tsch.js.org/10/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// 1. 순회하며 배열 내 값을 추출해야지 하며 extends와 infer를 활용했는데
// 2. extends 의 mapping 역할 덕에 답 도출.
type TupleToUnion<T extends any[]> = T extends Array<infer R> ? R : never;

type Asd = TupleToUnion<[123, "456", true]>;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/10/answer/ko
  > 정답 보기: https://tsch.js.org/10/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
