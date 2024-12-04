# Next.js + Supabase 플레이그라운드

> 수정중..
> Next.js와 Supabase를 사용한 개인용 프로젝트 템플릿입니다.

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

## 주요 기능

- ⚡ Next.js 14 App Router 사용
- 🔐 Supabase와 카카오 로그인을 통한 인증
- 💾 Supabase 데이터베이스
- 🎨 Tailwind CSS와 shadcn/ui 컴포넌트로 스타일링
- 📱 반응형 디자인

## 프로젝트 구조

```
├── app/
├── components/
├── lib/
├── public/
└── utils/
```

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
