import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import GithubLogin from '@/components/GithubLogin';
import { createClient } from '@/utils/supabase/server';
import Messages from '@/app/login/messages';

const Login = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      redirect('/');
    }
  } catch (error) {
    console.error('Error fetching user:', error);
  }

  return (
    <div className="n-container flex flex-grow flex-col items-center justify-center">
      <GithubLogin />
      <Messages />
    </div>
  );
};

export default Login;
