import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />

      <div className={styles.profile}>
        <img className={styles.avatar}
          src="https://yt3.ggpht.com/yti/AHXOFjW8pT6Eo33c0DAjJ3dm7uAjXfk7psCPBry8sraelpo=s88-c-k-c0x00ffffff-no-rj-mo" alt="Avatar profile"
        />

        <strong>Pedro Germano</strong>
        <span>Front-end | Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>

    </aside>
  );
}