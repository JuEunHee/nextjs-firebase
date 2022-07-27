import { authService } from '@/lib/firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  // sendPasswordResetEmail,
  GithubAuthProvider,
} from 'firebase/auth';
import LoginForm from '@/components/auth/LoginForm';
import { routes } from '@/config/routes';
import Anchor from '@/components/common/Anchor/Anchor';
import Button from '@/components/common/Button/Button';
import AuthLayout from '@/components/templates/AuthLayout';
import { toast } from 'react-toastify';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  return (
    <AuthLayout>
      <h1 className="mt-14 text-center font-bold text-3xl">LOGIN</h1>
      <div className="card-body">
        <LoginForm />
        <div className="btn-group">
          <Anchor
            href={routes.FIND_PASSWORD}
            className="btn btn-outline flex-1"
            passHref
          >
            비밀번호 찾기
          </Anchor>
          <Anchor
            href={routes.SIGNUP}
            className="btn btn-outline flex-1"
            passHref
          >
            회원 가입
          </Anchor>
        </div>
        <div className="divider">OR</div>
        <Button
          className="btn"
          onClick={() => {
            signInWithPopup(authService, googleProvider).catch((e) => {
              toast.error(`로그인 실패 : ${e.code}`);
            });
          }}
        >
          구글 로그인
        </Button>
        <Button
          className="btn"
          onClick={() => {
            signInWithPopup(authService, githubProvider).catch((e) => {
              toast.error(`로그인 실패 : ${e.code}`);
            });
          }}
        >
          깃허브 로그인
        </Button>
      </div>
    </AuthLayout>
  );
};

export default Login;
