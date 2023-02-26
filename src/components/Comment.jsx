import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src="https://yt3.ggpht.com/yti/AHXOFjW8pT6Eo33c0DAjJ3dm7uAjXfk7psCPBry8sraelpo=s88-c-k-c0x00ffffff-no-rj-mo"
        alt="Profile"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Germano</strong>
              <time dateTime="2023-02-23">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
