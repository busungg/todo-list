# Todo-List App (0.1)

## 1. 목적

vue.js와 node.js (express)를 연습하기 위한 앱 구현

## 2. 기능

1. todo
   - 추가
   - 조회 (전체, category별)
   - 수정
   - 삭제 (개별, 전체)
2. category
   - 추가(create)
   - 조회(read)
   - 수정(update)
   - 삭제(delete)

## 3. 데이터 구성

1. todo
   - | 데이터 이름 | 데이터 타입 |
     | ----------- | ----------- |
     | id          | int         |
     | title       | string      |
     | desc        | string      |
     | category    | string      |
     | createdAt   | datetime    |
     | modifiedAt  | datetime    |
     | deletedAt   | datetime    |
     | register    | string      |
2. category
   - | 데이터 이름 | 데이터 타입 |
     | ----------- | ----------- |
     | id          | int         |
     | category    | string      |
     | title       | string      |
     | desc        | string      |
     | createdAt   | datetime    |
     | modifiedAt  | datetime    |
     | deletedAt   | datetime    |
     | register    | string      |

## 4. 데이터 관계

1. todo N:M category

# Server

## 1. 모듈

1. prettier
   - code style 통일 시키는 용도
   - airbnb
2. lint
   - code quality를 위한 용도
3. sequelize
   - orm
4. awilix
   - js dependency injection
5. nodemon
   - 코드 변경 시 서버 재시작

## 2. 미들웨어

1. express-session
   - session 관리용 미들웨어

## 3. 폴더 구조

1. https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/#rule2keepaclearseparationbetweenthebusinesslogicandtheapiroutes

## 4. 개발 단계

1. Sequelize 적용
   - sequelize cli 사용
   - sequelize init
2. Todo Model 구현
3. Category Model 구현
4. Todo Router 구현
5. Category Router 구현
6. Vue 구현

# view

## 1. 모듈 및 프레임워크

1. nuxt
   - 직관적인 vue 프레임워크 (튜토리얼 진행)
2. vue-cli
   - vue 공부부터 진행하고 nuxt 진행하기로 변경
