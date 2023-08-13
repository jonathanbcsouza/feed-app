import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/25882133"
          />
          <div className={styles.authorInfo}>
            <strong>Jonathan Souza</strong>
            <span>Software Engineer</span>
          </div>
        </div>
        <time title="13 de August às 10:00" dateTime="2023-08-11 10:00:00">
          Posted 1 hour ago
        </time>
      </header>
      <div className={styles.content}>
        <p>Hey folks 👋</p>
        <p>I have just uploaded my new project on Github 🚀</p>
        <p>
          <a href="">john.doe/doctorcare</a>
        </p>
        <p>
          <a href="">#newproject</a> <a href="">#xyz</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your comment:</strong>

        <textarea placeholder="Leave your comment" />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>
    </article>
  )
}
