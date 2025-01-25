# Next.js + Supabase 플레이그라운드

> Next.js와 Supabase를 사용한 개인용 프로젝트 템플릿입니다.

수정중..<br/>

## 기술 스택

- **프레임워크**: [Next.js 14](https://nextjs.org/)
- **데이터베이스/인증**: [Supabase](https://supabase.com/)
- **스타일링**:
  - [Tailwind CSS](https://tailwindcss.com/)
  - [shadcn/ui](https://ui.shadcn.com/)
- **로그인**:
  - 카카오 로그인
  - Supabase 인증
- **@tanstack/react-query**

## 시작하기

1. 저장소 복제

```bash
git clone https://github.com/jungsikjeong/nextjs-supabase-playground
```

2. 패키지 설치

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

3. 환경변수 설정

```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
KAKAO_CLIENT_ID=your_kakao_client_id
```

4. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

[http://localhost:3000](http://localhost:3000)에서 실행된 프로젝트를 확인할 수 있습니다. <br/>

### supabase type 설정하기

> supabase는 테이블의 타입을 간단히 `명령어`로 프로젝트로 가져올 수 있습니다. 다음은 그에대한 설명입니다.

- package.json에 `script` 부분을 보시면 다음과 같이 있습니다.

```js
 "gen:types": "npx supabase gen types typescript --project-id YOURsupabaseProjectId --schema public > src/types/supabase.ts"
```

- `--project-id` 다음에 오는 부분을 본인 supabase 프로젝트 id로 해주시면 됩니다. 그리고 다음과 같은 순서를 따라주세요

1. supabase login - `npx supabase login`
2. npm run gen:types 입력

이렇게 하시면 supabase 테이블들의 타입들을 가져올 수 있습니다.

## 폴더 구조

`Features Folder`구조를 사용하고있습니다.<br/>

폴더 아키텍쳐는 아래 링크들을 참고하여 작업하였습니다. 밑에 **참고 자료** 섹션을 참고해주세요!

## 주요 기능

- ⚡ Next.js 14 App Router 사용
- 🔐 Supabase와 react-query를 활용한 카카오 로그인
- 💾 Supabase 데이터베이스
- 🎨 Tailwind CSS와 shadcn/ui 컴포넌트로 스타일링
- 📱 반응형 디자인
- 💧 리액트 쿼리 하이드레이션 코드

## 프로젝트 구조

```
├── .github/                # GitHub 관련 파일
├── src/                    # 소스 디렉토리
│   ├── app/               # Next.js 앱 라우터 페이지
│   ├── features/          # 기능별 모듈
│   ├── lib/               # 라이브러리 설정
│   ├── middleware/        # 커스텀 미들웨어
│   ├── providers/         # 컨텍스트 프로바이더
│   ├── shared/           # 공유 리소스
│   │   ├── components/   # 공통 컴포넌트
│   │   ├── ui/           # UI 컴포넌트
│   │   ├── store/        # 상태 관리
│   │   └── utils/        # 유틸리티 함수
├── public/                # 정적 파일
├── .env.example          # 환경 변수 예시
├── next.config.js        # Next.js 설정
├── tailwind.config.js    # Tailwind CSS 설정
└── tsconfig.json         # TypeScript 설정
```

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 참고 자료

[그대-Next.js-14-폴더-아키텍처를-어떻게-할것인가](https://velog.io/@koreanthuglife/%EA%B7%B8%EB%8C%80-Next.js-14-%ED%8F%B4%EB%8D%94-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%EB%A5%BC-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%A0%EA%B2%83%EC%9D%B8%EA%B0%80-feat.-medium)<br/>

[docs/project-structure](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)

[Next.js app router에서 React Query 사용하면서 고민했던 것들](https://soobing.github.io/react/next-app-router-react-query/#google_vignette)
