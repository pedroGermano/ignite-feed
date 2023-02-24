import styles from './Post.module.css'

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://pbs.twimg.com/profile_images/3025501692/dba138ca4b35fe8559011dfc42f5bd7a_400x400.jpeg"
            alt="profile"
          />
          <div className={styles.authorInfo}>
            <strong>Pedro Germano</strong>
            <span>Frontend | Developer</span>
          </div>
        </div>

        <time dateTime='2023-02-23'>Públicado há 1h</time>
      </header>
    </article>
  )
}