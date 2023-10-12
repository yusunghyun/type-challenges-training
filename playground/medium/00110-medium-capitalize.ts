/*
  110 - Capitalize
  -------
  by Anthony Fu (@antfu) #보통 #template-literal

  ### 질문

  문자열의 첫 글자만 대문자로 바꾸고 나머지는 그대로 놔두는 `Capitalize<T>`를 구현하세요.

  예시:

  ```ts
  type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
  ```

  > GitHub에서 보기: https://tsch.js.org/110/ko
*/

/* _____________ 여기에 코드 입력 _____________ */
type Alphabet =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

// 1. S extends `${Alphabet}${infer R}` 하면 첫글자 제외 가능
// 2. `${Uppercase<S[0]>}${R}` 실패..
// 3. R이 첫글자 제외 나머지 string이므로 예전 베스트 솔루션 [any, infer R] 처럼
// S extends `${infer E}${R}` 하면 "앞글자만 추출" 가능

type MyCapitalize<S extends string> = S extends `${Alphabet}${infer R}`
  ? S extends `${infer E}${R}`
    ? `${Uppercase<E>}${R}`
    : S
  : S;

type Asd = MyCapitalize<"FOOBAR">;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MyCapitalize<"foobar">, "Foobar">>,
  Expect<Equal<MyCapitalize<"FOOBAR">, "FOOBAR">>,
  Expect<Equal<MyCapitalize<"foo bar">, "Foo bar">>,
  Expect<Equal<MyCapitalize<"">, "">>,
  Expect<Equal<MyCapitalize<"a">, "A">>,
  Expect<Equal<MyCapitalize<"b">, "B">>,
  Expect<Equal<MyCapitalize<"c">, "C">>,
  Expect<Equal<MyCapitalize<"d">, "D">>,
  Expect<Equal<MyCapitalize<"e">, "E">>,
  Expect<Equal<MyCapitalize<"f">, "F">>,
  Expect<Equal<MyCapitalize<"g">, "G">>,
  Expect<Equal<MyCapitalize<"h">, "H">>,
  Expect<Equal<MyCapitalize<"i">, "I">>,
  Expect<Equal<MyCapitalize<"j">, "J">>,
  Expect<Equal<MyCapitalize<"k">, "K">>,
  Expect<Equal<MyCapitalize<"l">, "L">>,
  Expect<Equal<MyCapitalize<"m">, "M">>,
  Expect<Equal<MyCapitalize<"n">, "N">>,
  Expect<Equal<MyCapitalize<"o">, "O">>,
  Expect<Equal<MyCapitalize<"p">, "P">>,
  Expect<Equal<MyCapitalize<"q">, "Q">>,
  Expect<Equal<MyCapitalize<"r">, "R">>,
  Expect<Equal<MyCapitalize<"s">, "S">>,
  Expect<Equal<MyCapitalize<"t">, "T">>,
  Expect<Equal<MyCapitalize<"u">, "U">>,
  Expect<Equal<MyCapitalize<"v">, "V">>,
  Expect<Equal<MyCapitalize<"w">, "W">>,
  Expect<Equal<MyCapitalize<"x">, "X">>,
  Expect<Equal<MyCapitalize<"y">, "Y">>,
  Expect<Equal<MyCapitalize<"z">, "Z">>
];

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/110/answer/ko
  > 정답 보기: https://tsch.js.org/110/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
