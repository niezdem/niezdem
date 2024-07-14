import Link from 'next/link';
import Logo from '@/components/Logo';
import Text from './ui/Text';

const Footer = async () => {
  return (
    <nav className="n-container flex items-center justify-between py-10">
      <div className="flex items-center gap-4">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Logo width={50} height={50} />
            <Text>
              <div>Dmitriy</div>
              <div>Yakovlev</div>
            </Text>
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

export default Footer;
