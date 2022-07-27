import Link from 'next/link';
import type { NextPage } from 'next';
import AuthLayout from '@/components/templates/AuthLayout';
import FindPasswordForm from '@/components/auth/FindPasswordForm';
import Anchor from '@/components/common/Anchor/Anchor';
import { routes } from '@/config/routes';

const FindPassword: NextPage = () => {
  return (
    <AuthLayout>
      <h1 className="mt-14 text-center font-bold text-3xl">FIND PASSWORD</h1>
      <div className="card-body">
        <FindPasswordForm />
        <Link href={routes.BASE} passHref>
          <Anchor className="btn btn-outline">로그인 메뉴로 돌아가기</Anchor>
        </Link>
      </div>
    </AuthLayout>
  );
};

export default FindPassword;
