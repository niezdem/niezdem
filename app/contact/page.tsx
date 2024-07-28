import Link from '@/components/ui/Link';
import Title from '@/components/ui/Title';
import Info from './info.mdx';

const ContactPage = () => {
  return (
    <>
      <div className="n-container prose prose-lg">
        <Info />
      </div>
      <div className="n-container mt-4">
        <Link
          href="/Dmitr_Niezdemkowski_CV.pdf"
          target="_blank"
          label="📄 Take a look at my CV"
        >
          <div className="h-2 w-6 rounded-lg bg-rose-500" />
        </Link>
      </div>
    </>
  );
};

export default ContactPage;
