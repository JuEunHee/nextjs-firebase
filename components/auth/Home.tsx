import { User } from 'firebase/auth';
import { authService } from '@/lib/firebase';

const Home = ({ userData }: { userData: User }) => {
  return (
    <div>
      <h1>안녕하세요 {userData.email}님</h1>

      <button
        type="button"
        className="btn"
        onClick={() => {
          authService.signOut();
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default Home;
