import Link from 'next/link';
import { cookies } from 'next/headers';

import Logo from '@/components/layout/Logo';
import Title from '@/components/ui/Title';
import CurrentTimeWidget from '@/components/layout/CurrentTime';
import SignOutButton from '@/components/layout/SignOutButton';
import { createClient } from '@/utils/supabase/server';

const NavBar = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="n-container mb-10 flex flex-shrink-0 items-center justify-between py-4 md:mb-20">
      <div className="flex items-center gap-4">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Logo width={50} height={50} />
            <Title size="lg">
              <div>Dmitr</div>
              <div>Niezdemkowski</div>
            </Title>
          </div>
        </Link>
      </div>

      <section className="flex gap-4">
        <CurrentTimeWidget />

        {user ? (
          <div className="flex flex-col items-center gap-1 border-dotted text-xs text-gray-300">
            <SignOutButton />
          </div>
        ) : (
          <button
            type="button"
            className="in line-flex items-center gap-x-2 rounded-lg bg-rose-500 px-6 py-4 text-sm font-semibold text-white hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
          >
            {/* <CheckCircleIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" /> */}
            Login
          </button>
        )}
      </section>
    </nav>
  );
};

export default NavBar;
