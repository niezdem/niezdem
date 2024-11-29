import Link from 'next/link';
import { cookies } from 'next/headers';

import Logo from '@/components/layout/Logo';
import Title from '@/components/ui/Title';
import Button from '@/components/ui/Button';
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
            <Title size="lg" className="hidden sm:block">
              <div>Dmitr</div>
              <div>Niezdemkowski</div>
            </Title>
          </div>
        </Link>
      </div>

      <section className="flex gap-4">
        <CurrentTimeWidget />

        {user ? (
          <SignOutButton />
        ) : (
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        )}
      </section>
    </nav>
  );
};

export default NavBar;
