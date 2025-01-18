import { cookies } from 'next/headers';
import Link from 'next/link';

import CurrentTimeWidget from '@/components/layout/CurrentTime';
import Logo from '@/components/layout/Logo';
import Title from '@/components/ui/Title';
import { createClient } from '@/utils/supabase/server';

const NavBar = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="n-container !mt-0 mb-10 flex flex-shrink-0 items-center justify-between py-4 md:mb-20">
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
      <CurrentTimeWidget />
    </nav>
  );
};

export default NavBar;
