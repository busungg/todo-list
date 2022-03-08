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

1. todo 1:N category

# Server

## 1. 모듈

1. prettier
   - code style 통일 시키는 용도
   - airbnb
2. lint
   - code quality를 위한 용도

## 1. 미들웨어

1. express-session
   - session 관리용 미들웨어

## 5. 개발 단계

1. Sequelize 적용
2. Todo Model 구현
3. Category Model 구현
4. Todo Router 구현
5. Category Router 구현
6. Vue 구현
