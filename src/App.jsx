import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css'

export function App() {
  return (
    <>
      <Header />

      <Post
        author="Pedro Geramano"
        content="Frontend Developer"
      />

      <Post
        author="Tiago Alves"
        content="Design UI"
      />
    </>
  )
}

