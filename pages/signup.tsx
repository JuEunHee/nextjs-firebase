import type { NextPage } from 'next';
import AuthLayout from '@/components/templates/AuthLayout';
import SignupForm from '@/components/auth/SignupForm';

const Signup: NextPage = () => {
  return (
    <AuthLayout>
      <h1 className="mt-14 text-center font-bold text-3xl">SIGN UP</h1>
      <div className="card-body">
        <SignupForm />
      </div>
    </AuthLayout>
  );
};

export default Signup;
