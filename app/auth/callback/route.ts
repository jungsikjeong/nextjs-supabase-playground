import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { headers } from 'next/headers';

// TODO : 리펙토링 예정
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const headerList = await headers();

  const code = searchParams.get('code');

  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error('Session exchange error:', error);
      return NextResponse.redirect(
        `${origin}/error?redirect_to=${encodeURIComponent(headerList.get('x-url') ?? '')}&message=${encodeURIComponent('인증 과정에서 문제가 발생했습니다.')}`
      );
    }

    const userEmail = data.user?.email as string;

    const { data: existingMember } = await supabase
      .from('members')
      .select('*')
      .eq('email', userEmail)
      .single();

    const forwardedHost = request.headers.get('x-forwarded-host'); // original origin before load balancer
    const isLocalEnv = process.env.NODE_ENV === 'development';

    if (isLocalEnv) {
      // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
      return NextResponse.redirect(`${origin}${next}`);
    }

    if (forwardedHost) {
      return NextResponse.redirect(`https://${forwardedHost}${next}`);
    }

    if (!existingMember) {
      const { error: insertError } = await supabase
        .from('members')
        .insert([
          {
            id: data.user.id,
            email: data.user.email as string,
            nickname: data.user.user_metadata.preferred_username,
            avatar_url: data.user.user_metadata.avatar_url,
          },
        ])
        .select()
        .single();

      if (insertError) {
        console.error('insertError error:', insertError);

        return NextResponse.redirect(
          `${origin}/error?redirect_to=${encodeURIComponent(headerList.get('x-url') ?? '')}&message=${encodeURIComponent('유저 가입 중 문제가 발생했습니다.')}`
        );
      }
    }

    return NextResponse.redirect(`${origin}${next}`);
  }

  return NextResponse.redirect(
    `${origin}/error?redirect_to=${encodeURIComponent(headerList.get('x-url') ?? '')}&message=${encodeURIComponent('인증 과정에서 문제가 발생했습니다.')}`
  );
}
