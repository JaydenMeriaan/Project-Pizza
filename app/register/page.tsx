import { AuthForm } from '@/components/auth-form';

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <AuthForm mode="register" />
    </div>
  );
}
