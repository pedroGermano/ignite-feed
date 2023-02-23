import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css'
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Pedro Geramano"
            content="Frontend Developer"
          />

          <Post
            author="Tiago Alves"
            content="Design UI"
          />
        </main>
      </div>
    </>
  )
}

