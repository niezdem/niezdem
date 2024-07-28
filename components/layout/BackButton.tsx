'use client';

import { usePathname } from 'next/navigation';
import Link from '@/components/ui/Link';

const backlessLayoutPages = ['/'];

const BackButton = () => {
  const pathname = usePathname();
  const isHasBack = !backlessLayoutPages.includes(pathname);

  if (!isHasBack) {
    return null;
  }

  return (
    <div className="n-container mb-4">
      <Link href="/" label="◀ Back to main page" />
    </div>
  );
};

export default BackButton;
