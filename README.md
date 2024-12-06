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

[http://localhost:3000](http://localhost:3000)에서 실행된 프로젝트를 확인할 수 있습니다.

## 폴더 구조

`Features Folder`구조를 사용하고있습니다.<br/>

아래 링크들을 참고하여 작업하였습니다. 참고해주세요!<br/><br/>

[그대-Next.js-14-폴더-아키텍처를-어떻게-할것인가](https://velog.io/@koreanthuglife/%EA%B7%B8%EB%8C%80-Next.js-14-%ED%8F%B4%EB%8D%94-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%EB%A5%BC-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%A0%EA%B2%83%EC%9D%B8%EA%B0%80-feat.-medium)<br/>

[docs/project-structure](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)

## 주요 기능

- ⚡ Next.js 14 App Router 사용
- 🔐 Supabase와 카카오 로그인을 통한 인증
- 💾 Supabase 데이터베이스
- 🎨 Tailwind CSS와 shadcn/ui 컴포넌트로 스타일링
- 📱 반응형 디자인

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
