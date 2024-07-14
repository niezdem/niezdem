import Link from 'next/link';
// import { cookies } from 'next/headers';

import Logo from '@/components/Logo';
import Title from './ui/Title';
import CurrentTimeWidget from './CurrentTime';
// import SignOutButton from '@/components/SignOutButton';
// import { createClient } from '@/utils/supabase/server';

const NavBar = async () => {
  // const cookieStore = cookies();
  // const supabase = createClient(cookieStore);

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  return (
    <nav className="n-container mb-10 flex flex-shrink-0 items-center justify-between py-4 md:mb-20">
      <div className="flex items-center gap-4">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Logo width={50} height={50} />
            <Title size="xl">
              <div>Dmitriy</div>
              <div>Yakovlev</div>
            </Title>
          </div>
        </Link>
      </div>

      <CurrentTimeWidget />

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
