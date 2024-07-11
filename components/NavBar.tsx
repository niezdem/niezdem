import Link from 'next/link';
// import { cookies } from 'next/headers';

import Logo from '@/components/Logo';
import Title from './ui/Title';
// import SignOutButton from '@/components/SignOutButton';
// import { createClient } from '@/utils/supabase/server';

const NavBar = async () => {
  // const cookieStore = cookies();
  // const supabase = createClient(cookieStore);

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  return (
    <nav className="flex items-center justify-between pb-8">
      <div className="flex items-center gap-4">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Logo width={50} height={50} />
            <Title size="xl">
              <div>Dmitriy</div>
              <div>Yakovlev</div>
            </Title>
            <h1 className="text-xl font-bold leading-tight text-gray-100"></h1>
          </div>
        </Link>
      </div>

      {/* <div>
        {user && (
          <div className="flex flex-col items-center gap-1 border-dotted text-xs text-gray-300">
            <SignOutButton />
          </div>
        )}
      </div> */}
    </nav>
  );
};

export default NavBar;
