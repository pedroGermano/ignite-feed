import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://yt3.ggpht.com/yti/AHXOFjW8pT6Eo33c0DAjJ3dm7uAjXfk7psCPBry8sraelpo=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="profile"
          />
          <div className={styles.authorInfo}>
            <strong>Pedro Germano</strong>
            <span>Frontend | Developer</span>
          </div>
        </div>

        <time dateTime="2023-02-23">Públicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a>
          {''} <a href="#">#nlw</a> {'  '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
