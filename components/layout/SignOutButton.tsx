import Button from '@/components/ui/Button';
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';

const SignOutButton = () => {
  return (
    <form action="/api/auth/sign-out" method="post">
      <Button type="submit">
        <ArrowUpTrayIcon className="size-6" />
      </Button>
    </form>
  );
};

export default SignOutButton;
