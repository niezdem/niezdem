import Logo from '@/components/Logo';
import Text from './ui/Text';

const Footer = () => {
  return (
    <footer className="n-container mt-10 flex items-center justify-center gap-2 border-t border-zinc-100/5 py-4 md:mt-20">
      <Logo width={30} height={30} />
      <Text size="sm">2024 nezdem.com ©</Text>
    </footer>
  );
};

export default Footer;
