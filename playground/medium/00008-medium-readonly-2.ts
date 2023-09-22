/*
  8 - Readonly 2
  -------
  by Anthony Fu (@antfu) #보통 #readonly #object-keys

  ### 질문

  `T`에서 `K` 프로퍼티만 읽기 전용으로 설정해 새로운 오브젝트 타입을 만드는 제네릭 `MyReadonly2<T, K>`를 구현하세요. `K`가 주어지지 않으면 단순히 `Readonly<T>`처럼 모든 프로퍼티를 읽기 전용으로 설정해야 합니다.

  예시:

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  todo.completed = true // OK
  ```

  > GitHub에서 보기: https://tsch.js.org/8/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// 1. in 을 이용한 순회로 readonly 삽입.
// 2. merge가 헷갈려서 interface를 쓰려다가 실패ㅠㅜ
// 3. 남은 부분은 & 를 이용하여 merge.
// 4. 제네릭 두번째 인자 optional 까먹어서 답 확인 후 초깃값 입력함.

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [key in K]: T[key];
} & Omit<T, K>;

/* _____________ 테스트 케이스 _____________ */
import type { Alike, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "description">, Expected>>
];

// @ts-expect-error
type error = MyReadonly2<Todo1, "title" | "invalid">;

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/8/answer/ko
  > 정답 보기: https://tsch.js.org/8/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
