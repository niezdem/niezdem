'use client';

import { usePathname } from 'next/navigation';
import Link from '@/components/ui/Link';

const backlessLayoutPages = ['/', '/login'];

const BackButton = () => {
  const pathname = usePathname();
  const isHasBack = !backlessLayoutPages.includes(pathname);

  if (!isHasBack) {
    return null;
  }

  return (
    <div className="n-container mb-4">
      <Link href="/" label="Back to main page">
        <div className="ml-1 h-2 w-2 rotate-[135deg] transform border-b-2 border-r-2 border-rose-500"></div>
      </Link>
    </div>
  );
};

export default BackButton;
