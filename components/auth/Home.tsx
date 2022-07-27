import _ from 'lodash';
import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { query, collection, getDocs, DocumentData } from 'firebase/firestore';
import { authService, dbService } from '@/lib/firebase';
import PostForm from '@/components/post/PostForm';

const Home = ({ userData }: { userData: User }) => {
  const [texts, setTexts] = useState<DocumentData[]>([]);
  const getPosts = async () => {
    let results: DocumentData[] = [];
    const q = query(collection(dbService, 'daylogs'));
    const postSnapshot = await getDocs(q);
    postSnapshot.forEach((document) => {
      results = [{ id: document.id, ...document.data() }, ...results];
    });
    setTexts(results);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>안녕하세요 {userData.email}님</h1>

      <PostForm />

      <ul>
        {_.map(texts, ({ text, id }) => (
          <p key={id}>{text}</p>
        ))}
      </ul>

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
