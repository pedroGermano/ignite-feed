import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar
          hasBorder={true}
          src="https://xesque.rocketseat.dev/users/avatar/profile-9232733e-2c34-4200-bcf6-6639d542964d-1628693755984.jpg"
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
