## 🍞PB 클론코딩 으로 flex 이해하기🍞🥐🥨
---
### 🍞 왜 해야하는가
-flex 를 알면 불필요한 레이아웃 잡는 시간이 줄어든다.  
-엄청 flex 하고 awesome 한 아이~!  
-제대로만 이해하고 쓰면 편하게 반응형 레이아웃 작업을 할 수 있다~!  
-언제까지 px에 놀아날것인가!!

### 🥐 작업순서
1. 마크업 골격 이해하기
2. css 선택자 이해하기
3. 움직임 요소 고려하기

### 🥨 작업고려
1. 파비콘
2. seo
3. 반응형
4. 폰트

### ⭐ flex를 배워보자
1. flex-basis(auto):  
auto는 기존 콘텐츠가 가지고 있는 너비를 가지겠다는 뜻, width를 따로 설정하지 않으면 컨텐츠의 크기(auto), flex로 배치된 아이템들의 기본 너비값을 설정해 주는것이라고 보면 됨(기본 너비값보다 작을 경우 기본 너비로 채워지고, 클 경우 해당 콘텐츠 너비로 채워짐) def: auto , 

2. flex-grow(0):  
 0이 아닌 값이 올경우, flex-basis로 설정한 값보다 커질 수 있음을 의미(유연한 박스로 변함), 각 자식 아이템들이 해당 숫자 비율대로 표현되는 것(만약 자식이 총 3명이고 각각 1 2 1의 값을 가지고 있으면, 부모에서 각 콘텐츠 너비의 합을 제외한 여백을 1 :2 :1 비율로 나눠 부모 안에서 채워진다는 말, 즉 남은 여백의 비)

3. flex-shrink(1):  
 0 보다 큰 값이 올경우 유연한 박스라 인지를 하고, flex-basis로 설정한 값보다 작아질 수 있음
  flex: 1 == flex-grow: 1; flex-shrink: 1; flex-basis: 0%; flex-basis가 0이 되면, 기존 가지고 있는 콘텐츠 너비를 0으로 만들고 유연한 박스로 대처하겠다라는 의미가 되기 때문에 부모너비 안에서 각각의 콘텐츠를 정비율로 나눌 수 있게 된다.  

---

### 🚫Issue 🔥⁉❗❓
1. IE 축약속성 calc 값 계산오류
  ```css
    - 축약 속성을 사용할 경우 calc 값이 제대로 들어가지 않는 이슈가 있다.
    - 단일 속성을 통해 사용하면 계산된 값이 들어가게된다.
    /* x */
    flex: 0 1 calc( (100% / 3) - 20px );
    /* o */
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: calc( (100% / 3) - 20px );
  ```

  ### 👇👇꼭 참고해 주세요👇👇
  - [mdn](https://developer.mozilla.org/ko/docs/Web/CSS/flex)
  - [일분코딩 블로그](https://studiomeal.com/archives/197)
  - [naver D2](https://d2.naver.com/helloworld/8540176)

