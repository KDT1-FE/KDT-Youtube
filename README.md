# :sparkles: [Youtube Clone Toy Project (Demo)](https://kdt3-team7-react-youtube-app.netlify.app)

#### 프로젝트 문서는 [여기](https://docs.google.com/spreadsheets/d/1EhoF12aqxV7dyYcOJNbmAZO6rkJGMgtNTbrpR0zFBcM/edit#gid=0)에서 확인하실 수 있습니다.

<br/><br/>

## :raising_hand: Member

<table border>
  <tbody>
    <tr>
      <td align="center" width="150px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/103119275?v=4"  alt=""/>
        <center>FE. 팀원</center>
        <br/>
        <a href="https://github.com/Hyeeeein">
          <img src="https://img.shields.io/badge/김혜인-2596be?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </br>
      <td align="center" width="150px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/103406196?v=4"  alt=""/>
        <center>FE. 팀원</center>
        <br/>
        <a href="https://github.com/hyorimcho">
          <img src="https://img.shields.io/badge/조효림-e28743?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="150px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/76930602?v=4"  alt=""/>
        <center>FE. 팀원</center>
        <br/>
        <a href="https://github.com/0nesan">
          <img src="https://img.shields.io/badge/한수산-96be25?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="150px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/64674174?v=4"  alt=""/>
        <center>FE. 팀원</center>
        <br/>
        <a href="https://github.com/hyerimhan">
          <img src="https://img.shields.io/badge/한혜림-FF55B6?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
  </tbody>
</table>

<br/><br/>

## :wrench: 기술 스택
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat-round&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-round&logo=Sass&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-round&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-round&logo=React&logoColor=gray"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-round&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-round&logo=Firebase&logoColor=white"/>
<br/>

### Tools
- <div style="display:flex; align-items: center; margin-right:10px;"><span>Deploy </span><img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-round&logo=Netlify&logoColor=white"/></div>
- <div style="display:flex; align-items: center;"><span>버전관리 </span><img src="https://img.shields.io/badge/GitHub-181717?style=flat-round&logo=GitHub&logoColor=white"/></div>
- <div style="display:flex; align-items: center;"><span>Docs </span><img src="https://img.shields.io/badge/Google Sheets-34A853?style=flat-round&logo=Google Sheets&logoColor=white"/></div>

<br/><br/>

## :page_with_curl: 설치된 라이브러리

- ["@tanstack/react-query": "^4.22.0"](https://tanstack.com/query/latest/docs/react/overview)
  - `useQuery` 사용
- "axios": "^1.2.2"
  - api과 통신하기 위한 라이브러리
- ["react-icons": "^4.7.1"](https://react-icons.github.io/react-icons)
  - 필요한 아이콘을 검색한 후 아이콘을 클릭하여 복사하고 프로젝트에 사용
  - 사용예시 :point_right:<br/>
    <img src="https://i.ibb.co/09MnYzG/2023-01-16-113151.png" alt="2023-01-16-113151" border="0">
- ["react-router-dom": "^6.6.2"](https://reactrouter.com/en/main)
- ["timeago.js": "^4.0.2"](https://www.npmjs.com/package/timeago.js/v/4.0.0-beta.3)
  - 업로드 날짜를 보여주는 라이브러리
  - 적용예시 :point_right:<br/>
    <img src="https://i.ibb.co/JvJ3Ssv/2023-01-16-114404.png" alt="2023-01-16-114404" border="0">
- "dotenv": "^16.0.3"
  - apikey 숨김. `REACT_APP_API_KEY`로 apikey 사용
- "reset-css": "^5.0.1"
  - 스타일 초기화
- ["youtube-duration-format": "^0.2.0"](https://www.npmjs.com/package/youtube-duration-format)
  - 동영상 러닝타임 숫자로 변환해 주는 라이브러리
- ["react-hook-form": "^7.42.1"](https://react-hook-form.com/)

<br/><br/>

## :pushpin: 기능 구현 목록

### 1. Header

- [X] 로고
  - 클릭 시, 홈으로 이동
- [X] 검색창
  - 해당 제목으로 영상 검색
- [X] 로그인
  - 구글 연동
    <br/><br/>

### 2. HOME

- [X] 영상 목록
  - public -> videos -> popular.json 목업데이터 우선 사용

  ### 2-1. VideoCard

  - [X] 영상 클릭 시, 해당 영상 VideoDetail 페이지로 넘어감.
  - [X] 썸네일
  - [X] 영상 제목
  - [X] 채널명
  - [X] 조회수 &middot; 업로드날짜

### 3. VideoDetail

- [X] 영상
- [X] 영상 제목
- [X] 채널명
- [X] 영상 상세 설명
- [X] 관련 영상 목록
- [X] 댓글

### 4. 기타

- [ ] 화면 렌더링 중일땐 `Loading...` 출력
- [X] 페이지에 에러 발생 시, NotFound 페이지로 넘어감.
- [X] 반응형

<br/><br/>

## :scream: 이슈

<table border>
  <thead>
    <tr>
      <th width="60%">발생 이슈</th>
      <th>해결 방법</th>
    </tr>
  </thead>  
  <tbody>
    <tr>
      <td><img src="https://i.ibb.co/2yBFch9/230117-adblock.png" alt="230117-adblock" border="0"><br/>디테일 페이지에서 영상 가져올 떄 발생하는 에러</td>
      <td>크롬에 adblock이 설치되어 있어서 뜨는 에러. 무시해도 잘 작동함.</td>
    </tr>
    <tr>
      <td><img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fuser-images.githubusercontent.com%2F64674174%2F213912869-318ab25a-9faf-4940-9278-a66bc683b414.png" alt="230117-adblock" border="0"><br/><code>npm run start</code> 터미널에서 발생하는 경고 메세지</td>
      <td>root경로에 있는 파일에 <code>GENERATE_SOURCEMAP=false</code> 추가</td>
    </tr>
    <tr>
      <td><a href="https://ibb.co/3vbDvSg"><img src="https://i.ibb.co/3vbDvSg/2023-01-19-160931.png" alt="2023-01-19-160931" border="0"></a><a href="https://ibb.co/VJtJ6yv"><img src="https://i.ibb.co/VJtJ6yv/image.png" alt="image" border="0"></a><br/>netlify 배포 에러</td>
      <td> <a href="https://ibb.co/VT6bJzg"><img src="https://i.ibb.co/VT6bJzg/2023-01-19-221714.png" alt="2023-01-19-221714" border="0"></a> <br/>사용하지 않는 코드나 import 정리하기</td>
    </tr>
    <tr>
      <td><img src="https://i.ibb.co/54s4zCC/image.png" alt="image" border="0"></td>
      <td>상세 페이지에 동영상을 제외한 정보들은 youtube api 의 일일할당량 때문에 localStorage 로 저장하여 구현하고 있어서 첫번째로 들어간 상세페이지의 동영상 정보들이 출력됩니다 </td>
    </tr>
    </tbody>
</table>

