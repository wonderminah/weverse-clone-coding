# 20250820

## 프로젝트 생성

React + Typescript 기반으로 생성

```bash
➜  weverse-clone-coding git:(main) npm create vite@latest . -- --template react-ts

> npx
> "create-vite" . --template react-ts

│
◇  Current directory is not empty. Please choose how to proceed:
│  Ignore files and continue
│
◇  Scaffolding project in /Users/minah.kim/Projects/weverse-clone-coding...
│
└  Done. Now run:

  npm install
  npm run dev
```

```bash
➜  weverse-clone-coding git:(main) ✗ npm install


added 233 packages, and audited 234 packages in 14s

48 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```bash
➜  weverse-clone-coding git:(main) ✗ npm run dev

> weverse-clone-coding@0.0.0 dev
> vite

Port 5173 is in use, trying another one...

  VITE v7.1.3  ready in 310 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## URL 확인, 스코프 결정

```bash
// 대전제
공통헤더: 로고, 검색버튼, 알림버튼, 프로필버튼, 설정버튼
서브네비: Fan, Artist, Media, LIVE 링크
미디어용 서브네비: Continue Watching, Latest Media, Recommended Media, Membership, See All Media 링크

// 홈 화면
"/" # 공통헤더 + 컨텐츠

// 1. 아티스트 정보 화면 (Artist Info, Profile, Media, Live 를 총망라한 화면)
1-1. "/{아티스트명}/artistpedia" # 공통헤더 + 총망라 컨텐츠
1-2. "/{아티스트명}/artistpedia/artistinfo" # 1-1. 에서 'Artist Info' 버튼 클릭하면 URL 바뀌면서 아티스트 정보가 모달로 표시됨

// 2. 아티스트 > Fan 화면 (서브 네비에서 'Fan'에 해당)
2-1. "/{아티스트명}/feed" # 공통헤더 + 서브네비 + 팬 포스트 컨텐츠 ("/{아티스트명}"로 액세스할 시에도 이 URL로 리다이렉트)
2-2. "/{아티스트명}/fanpost/{팬 포스트ID}" # 2-1. 에서 팬 포스트를 클릭 시 팬 포스트가 모달로 표시됨

// 3. 아티스트 > Artist 화면 (서브 네비에서 'Artist'에 해당)
3-1. "/{아티스트명}/artist" # 공통헤더 + 서브네비 + 아티스트 포스트 컨텐츠
3-2. "/{아티스트명}/artist/{변수ID}" # "/{아티스트명}/artist"에서 아티스트 포스트 클릭하면 아티스트 포스트가 모달로 표시됨
3-3. "/{아티스트명}/artist/moment/{변수ID}/post/{변수ID}" # 공통헤더 + 모먼트 컨텐츠 (서브네비 표시안됨)
3-4. "/{아티스트명}/artist/profile" # 공통헤더 + 서브네비 + 아티스트 프로필 컨텐츠
3-5. "/{아티스트명}/artist/profile/{인물ID}" # 공통헤더 + 서브네비 + 아티스트 개인 프로필 컨텐츠

// 2. 와 3. 에서 공유하는 컴포넌트가 있고, 그 컴포넌트에 Digital Membership 버튼이 있음. 해당 버튼 클릭 시 아래 모달 표시
"/{아티스트명}/digitalmembership" # 디지털 멤버십 가입 모달 표시

// 4. 아티스트 > Media 화면 (서브 네비에서 'Media'에 해당)
3-6. "/{아티스트명}/media/" # 공통헤더 + 서브네비 + 미디어용 서브네비 + 미디어 컨텐츠 (Latest Media, Recommended Media 등 총망라)
3-7. "/{아티스트명}/media/cont" # 공통헤더 + 서브네비 + 미디어용 서브네비 + Continue Watching 미디어 컨텐츠
3-8. "/{아티스트명}/media/new" # 공통헤더 + 서브네비 + 미디어용 서브네비 + Latest Media 미디어 컨텐츠
3-9. "/{아티스트명}/media/recommend/" # 공통헤더 + 서브네비 + 미디어용 서브네비 + Recommended Media 미디어 컨텐츠
3-10."/{아티스트명}/media/membership/" # 공통헤더 + 서브네비 + 미디어용 서브네비 + Membership 미디어 컨텐츠
3-10."/{아티스트명}/media/all/" # 공통헤더 + 서브네비 + 미디어용 서브네비 + 전체 미디어 컨텐츠
3-11."/{아티스트명}/media/{미디어ID}" # 공통헤더 + 서브네비 + 미디어용 서브네비 + 특정 미디어 컨텐츠

// 5. 아티스트 > LIVE 화면 (서브 네비에서 'LIVE'에 해당)
"/{아티스트명}/live/" # 공통헤더 + 서브네비 + 라이브 컨텐츠
"/{아티스트명}/live/{라이브ID}" # 공통헤더 + 서브네비 + 클릭한 특정 라이브 컨텐츠

// 6.
"/{아티스트명}/notice/{공지ID}" # 공통헤더 + 서브네비 + 공지글
```

개발자 도구 Network 탭에서 Doc 리퀘스트가 있는지 살펴본 결과 전부 없음. 페이지 리로드 없이 라우팅만 된 SPA 로 보인다.
맨 위의 헤더는 모든 페이지에서 공유하며, URL 에 따라 아래 컨텐츠 부분이 바뀐다.

------

## 라우팅 설계 원칙

위의 요구사항을 보면 공통/부분 공통/모달 라우트까지 층위가 뚜렷해서, **레이아웃 기반 중첩 라우팅**이 제일 깔끔하다는 GPT 의 조언을 따른다.

1. **AppLayout (최상단)**
   - 항상 포함되는 **공통 헤더(로고, 검색, 알림, 프로필, 설정)** 담당
   - `/` → 홈 컨텐츠
2. **ArtistLayout (/:artist)**
   - 특정 아티스트 들어왔을 때 기본으로 깔리는 **서브 네비 (Fan, Artist, Media, Live)**
   - 하위 경로들(`feed`, `artist`, `media`, `live`, …)이 Outlet으로 바뀜
3. **MediaLayout (/:artist/media)**
   - 미디어 하위는 또 **미디어용 서브네비 (Continue, Latest, Recommend, Membership, All)**가 공통
   - 하위 Outlet은 각각의 미디어 탭/상세 화면
4. **모달 라우트(background location)**
   - 특정 게시글/포스트/미디어 상세/멤버십 가입 → 모달 라우트로 정의
   - 배경 페이지는 그대로 두고 오버레이만 렌더

------

## 라우트 트리 (설계도)

```
/                               -> AppLayout (공통헤더 + 홈)
 └─ :artist                     -> ArtistLayout (공통헤더 + 서브네비)
     ├─ index                   -> redirect -> /:artist/feed
     ├─ artistpedia             -> 종합 정보 화면
     │   └─ artistinfo (modal)  -> 아티스트 정보 모달
     ├─ feed                    -> 팬 포스트 리스트
     │   └─ fanpost/:fanId (modal) -> 팬 포스트 모달
     ├─ artist                  -> 아티스트 포스트 리스트
     │   ├─ :id (modal)         -> 아티스트 포스트 모달
     │   ├─ moment/:momentId/post/:postId -> 모먼트 상세 (풀화면)
     │   ├─ profile              -> 아티스트 프로필
     │   │   └─ :personId        -> 개별 프로필
     ├─ digitalmembership (modal) -> 디지털 멤버십 모달 (Fan/Artist 공유 버튼에서 진입)
     ├─ media                   -> MediaLayout (공통헤더 + 서브네비 + 미디어 서브네비)
     │   ├─ index               -> 종합 미디어 화면
     │   ├─ cont                -> Continue Watching
     │   ├─ new                 -> Latest Media
     │   ├─ recommend           -> Recommended Media
     │   ├─ membership          -> Membership Media
     │   ├─ all                 -> 전체 미디어
     │   └─ :mediaId            -> 특정 미디어 상세
     ├─ live                    -> LiveLayout (공통헤더 + 서브네비)
     │   ├─ index               -> 라이브 리스트
     │   └─ :liveId             -> 특정 라이브 상세
     └─ notice/:noticeId        -> 공지글 상세
```

------

## 설계상의 포인트

- **중첩 레이아웃 3단**:
   `AppLayout` → `ArtistLayout` → (선택적으로) `MediaLayout`.
   이렇게 하면 공통 UI를 중복 없이 재사용 가능.
- **모달 라우트**:
  - fanpost, artist post, digitalmembership 등은 전부 모달로 통일.
  - URL을 갖기 때문에 공유/딥링크 가능, 동시에 기존 화면 유지.
- **탭은 경로로, 상태는 쿼리로**:
  - 탭(Continue, New, Recommend 등)은 **서브경로**로 둠.
  - 정렬/페이지네이션 같은 동적 상태는 **쿼리스트링**으로 처리.
- **리다이렉트**:
  - `/artist` → `/artist/feed`
  - `/media` → `/media/cont`
     이런 식으로 첫 진입 시 기본 탭으로 자동 이동.
- **서브네비 표시 여부**:
  - Artist moment 상세(`/:artist/artist/moment/...`)는 네비 없이 풀화면.
  - 그 외 대부분은 서브네비 유지.

------

이렇게 설계하면 **공통 레이아웃 구조가 단순해지고, URL 계층이 리소스 구조를 직관적으로 반영**한다.

## 라우팅 구성

react-router-dom 을 이용한다.

```bash
npm install react-router-dom
```

