import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,',
      },
      { type: 'link', content: '<a href="#">#novoprojeto</a>' },
    ],
    publishedAt: new Date('2023-01-03 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl:
        'https://media.licdn.com/dms/image/C4D03AQEcMwXIKTxTSA/profile-displayphoto-shrink_800_800/0/1606010522125?e=1683158400&v=beta&t=ZJMJe2l5YbbsQTF_cO23XR4BP10t-5yrx0i8gLzih_8',
      name: 'Pedro Germano',
      role: 'Frontend Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,',
      },
      { type: 'link', content: '<a href="#">#novoprojeto</a>' },
    ],
    publishedAt: new Date('2023-01-03 15:00:00'),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
