import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import './global.css';

const post = [
  {
    id: 1,
    author: {
      avatar: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @ Rocketseat',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        {
          type: 'paragraph',
          content:
            'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,',
        },
        { type: 'link', content: '<a href="#">#novoprojeto</a>' },
        { type: 'link', content: '<a href="#">#nlw</a>' },
        { type: 'link', content: '<a href="#">#rocketseat</a>' },
      ],
    },
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post author="Pedro Geramano" content="Frontend Developer" />

          <Post author="Tiago Alves" content="Design UI" />
        </main>
      </div>
    </>
  );
}
