/*
  119 - ReplaceAll
  -------
  by Anthony Fu (@antfu) #보통 #template-literal

  ### 질문

  주어진 문자열 `S`에서 부분 문자열 `From`을 찾아 모두 `To`로 교체하는 제네릭 `ReplaceAll<S, From, To>`을 구현하세요.

  예시:

  ```ts
  type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
  ```

  > GitHub에서 보기: https://tsch.js.org/119/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// 1. 기존 replace를 재귀로 해결했지만 replace 후 합쳐진 word 재replace하는 이슈 발생
// 2. 4번째에 Fix라는 optional param 을 파서 이미 replace된 '고정'해야하는 앞부분 분리 후 누적
// 3. 최종은 고정하여 누적된 Fix + S

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string,
  Fix extends string = ""
> = From extends ""
  ? `${S}`
  : S extends `${infer Head}${From}${infer Tail}`
  ? ReplaceAll<`${Tail}`, From, To, `${Fix}${Head}${To}`>
  : `${Fix}${S}`;

type Asd = ReplaceAll<"foobarfoobar", "ob", "b">;
type Asd2 = ReplaceAll<"foboorfoboar", "bo", "b">;
type Asd3 = ReplaceAll<"t y p e s", " ", "">;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<ReplaceAll<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"foobar", "bag", "foo">, "foobar">>,
  Expect<Equal<ReplaceAll<"foobarbar", "bar", "foo">, "foofoofoo">>,
  Expect<Equal<ReplaceAll<"t y p e s", " ", "">, "types">>,
  Expect<Equal<ReplaceAll<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<ReplaceAll<"barfoo", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"foobarfoobar", "ob", "b">, "fobarfobar">>,
  Expect<Equal<ReplaceAll<"foboorfoboar", "bo", "b">, "foborfobar">>,
  Expect<Equal<ReplaceAll<"", "", "">, "">>
];

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/119/answer/ko
  > 정답 보기: https://tsch.js.org/119/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
