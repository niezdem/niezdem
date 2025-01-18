import Logo from '@/components/layout/Logo';
import Text from '@/components/ui/Text';

const Footer = () => {
  return (
    <footer className="n-container mt-10 flex flex-shrink-0 items-center justify-center gap-2 border-t border-zinc-100/5 py-4 md:mt-20">
      <Logo width={30} height={30} />
      <Text size="sm">2025 nezdem.com ©</Text>
    </footer>
  );
};

export default Footer;
