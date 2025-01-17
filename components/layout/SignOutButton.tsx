import Button from '@/components/ui/Button';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid';

const SignOutButton = () => {
  return (
    <form action="/api/auth/sign-out" method="post">
      <Button
        className="w-full"
        type="submit"
        icon={<ArrowLeftStartOnRectangleIcon className="size-4" />}
      >
        Sign Out
      </Button>
    </form>
  );
};

export default SignOutButton;
