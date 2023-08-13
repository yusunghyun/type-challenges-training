/*
  18220 - Filter
  -------
  by Muhun Kim (@x86chi) #보통 #array #filter

  ### 질문

  Implement the type `Filter<T, Predicate>` takes an Array `T`, primitive type or union primitive type `Predicate` and returns an Array include the elements of `Predicate`.

  > GitHub에서 보기: https://tsch.js.org/18220/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Filter<T extends any[], P> = [];

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type Falsy = false | 0 | "" | null | undefined;

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
];

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/18220/answer/ko
  > 정답 보기: https://tsch.js.org/18220/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
