import Logo from '@/components/Logo';
import Text from './ui/Text';

const Footer = async () => {
  return (
    <footer className="n-container flex items-center justify-center border-t border-zinc-100/5 py-10">
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <Logo width={30} height={30} />
          <Text>© 2024 nezdem.com</Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
