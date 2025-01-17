import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import GithubLogin from '@/components/GithubLogin';
import { createClient } from '@/utils/supabase/server';
import Messages from '@/app/login/messages';
import SignOutButton from '@/components/layout/SignOutButton';

const Login = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isRedirectAfterLogin = searchParams.from === 'github-auth';

  if (user && isRedirectAfterLogin) {
    redirect('/');
  }

  return (
    <div className="n-container flex flex-grow flex-col items-center justify-center">
      <div className="flex w-full flex-1 flex-col justify-center gap-2 sm:max-w-md">
        {user ? (
          <SignOutButton />
        ) : (
          <>
            <GithubLogin />
            <Messages />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
