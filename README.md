# 리액트 토이프로젝트(6조) - 유튜브 클론코딩

## 프로젝트 소개

#### ✨배포사이트 - 🔗 [6tube - Toy Project](https://6tube.netlify.app/)

<br />

- 유튜브 클론코딩 사이트로 메인/검색/영상상세/채널상세 페이지로 구성되어 있습니다.
- 메인페이지에서는 핫트렌드 영상 및 각 태그에 맞는 영상 목록을 불러올 수 있습니다.
- 헤더에서 검색어를 입력하면 검색된 영상의 목록을 불러옵니다.
- 검색페이지에서는 무한 스크롤 기능을 추가하였습니다.
- 영상 상세페이지에서는 해당영상 플레이가 가능하며, 관련영상 목록과 댓글을 확인할 수 있습니다.
- 채널명 클릭시 채널에 대한 정보와 해당영상 채널의 목록을 불러오는 채널 상세 페이지로 이동할 수 있습니다.
- 영상 목록의 썸네일 이미지에 마우스를 올릴 경우 영상이 작은화면으로 플레이되어 미리보기를 할 수 있습니다.
- 영상 목록에서 채널등의 정보 호버시 툴팁을 확인할 수 있습니다.
- 각 페이지는 화면크기에 따라 반응형으로 작업하였습니다.

## 👩‍💻 팀원 소개

<table>
  <tbody>
    <tr>
  <td align="center"><a href="https://github.com/hae9"><img src="https://avatars.githubusercontent.com/u/108416023?v=4" width="150px;" /></a></td>
  <td align="center"><a href="https://github.com/iziz9"><img src="https://avatars.githubusercontent.com/u/106734517?v=4" width="150px;" /></a></td>
  <td align="center"><a href="https://github.com/zwonkim"><img src="https://avatars.githubusercontent.com/u/103507999?v=4" width="150px;" /></a></td>
  <td align="center"><a href="https://github.com/autumnly1007"><img src="https://avatars.githubusercontent.com/u/87680906?v=4" width="150px;" /></a></td>
  </tr>
  <tr>
  <td align="center"><a href="https://github.com/hae9">강해경</a></td>
  <td align="center"><a href="https://github.com/iziz9">강현주</a></td>
  <td align="center"><a href="https://github.com/zwonkim">김지원</a></td>
  <td align="center"><a href="https://github.com/autumnly1007">안가을</a></td>
 </tr>
  </tbody>
</table>

## ⚙기술 스택

<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/tailwind css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
<img src="https://img.shields.io/badge/.env-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black">
<img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
<br /><br />
</div>

## 📆 과제 기간

- 2023.1. 16 ~ 2022. 1. 20.
  <br/><br/>

## 📌 작업영역 및 구현 기능 설명

<details><summary>강해경</summary>
<br/>
<ul>
<li><b>헤더와 사이드바</b>
<br/>
반응형 디자인에 초점을 맞춰 헤더와 사이드바를 구현했습니다.
</li>
<li><b>상세페이지 동영상 플레이 구간</b>
<br/>
iframe태그를 이용해 해당영상을 플레이하고 채널과 영상에 대한 정보를 화면에 출력했습니다.</li>
<li><b>메인페이지 태그별 버튼</b>
<br/>
메인페이지에서 해당 태그별 영상목록을 불러올 수 있는 버튼을 구현했습니다. 
'전체'와 '최근업로드된동영상' 클릭시에는 핫트렌드 영상을 불러오고 이 외 버튼은 해당내용을 검색했을 경우 나오는 영상목록을 출력해 줍니다.
</li>
</ul>
  <h4>

</details>
<details><summary>강현주</summary>
<br/>
<ul>
<li><b>상세페이지 관련 동영상 사이드바</b>
<br/>
현재 재생중인 영상과 관련된 영상 리스트가 출력되도록 구현했습니다.
</li>
<li><b>상세페이지 댓글 섹션</b>
<br/>
현재 재생중인 영상의 댓글과 작성자 정보가 출력되도록 구현했습니다.</li>
</ul>
</details>
<details><summary>김지원</summary>
<br/>
<ul>
<li><b>메인화면</b>
<br/>
반응형 디자인에 초점을 맞춰 영상 목록을 구현했습니다.
썸네일 이미지에 마우스가 호버될 경우 영상이 자동재생됩니다.
</li>
<li><b>채널 페이지</b>
<br/>
채널 타이틀을 클릭할 경우 채널의 상세 페이지로 이동합니다.
주어진 API를 이용해 채널 정보, 해당 채널의 플레이리스트를 보여주고 있습니다.</li>
</ul>
</details>
<details><summary>안가을</summary>
<br/>
<ul>
<li><b>검색 페이지</b>
<br/>
메인에서 키워드 검색 시 검색결과 페이지로 이동합니다.
</li>
</ul>
</details>
  <br/>

## 💦 어려웠던 점

- 처음 세팅(같은 작업환경을 만드는 부분)이 어려웠습니다.
- API 요청의 할당량이 정해져 있어 원하는 만큼 테스트를 해볼 수 없었던 점이 어려웠습니다.
- 영상목록을 불러오는 api가 여러가지이고 응답데이터 양식과 뎁스가 가지각색이라 혼란스러웠습니다.
- 페이지에 다른 컴포넌트가 들어오거나 구조의 변경이 생기는 경우 다시 그 구조에 맞게 반응형 스타일로 변경시켜주어야 하는 부분이 어려웠습니다.
- 영상플레이 영역의 크기를 조절하고 반응형으로 구현하는 것이 어려웠습니다.
- 메인화면에서 썸네일을 호버했을 때 자동재생 되도록 구현한 HoverVideo 컴포넌트를 구현하는 것이 어려웠습니다. 지금처럼 이벤트 핸들러를 작성하는 것이 맞는건지 의문이 듭니다 .. 가끔씩 일부 영상이 setTimeOut이 작동하지 않는 오류가 나기도 합니다. HoverVideo가 오류가 나지 않도록 확실한 조건을 걸고 싶은데 어떤 조건을 걸어야 할지 조언을 구하고 싶습니다.

  <br/><br/>

## 💡 질문사항 및 미해결 에러

- 영상과 댓글정보를 불러올 때 일부 특수문자가 html 태그나 entity로 출력되는 현상
- 같은 API 요청이 여러 번 전송되는 문제
