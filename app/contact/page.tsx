import Link from '@/components/ui/Link';
import Info from './info.mdx';

const ContactPage = () => {
  return (
    <>
      <div className="n-container mb-4">
        <Link
          href="/Dmitr_Niezdemkowski_CV.pdf"
          target="_blank"
          label="📄 Take a look at my CV"
        >
          <div className="h-2 w-6 rounded-lg bg-rose-500" />
        </Link>
      </div>
      <div className="n-container prose prose-lg">
        <Info />
      </div>
    </>
  );
};

export default ContactPage;
