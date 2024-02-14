import { useState } from 'react';
import { Avatar } from './Avatar';
import { HandsClapping, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

type CommentProps = {
  content: string;
  onDeleteComment: (comment: string) => void;
};

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [clapsCount, setClapsCount] = useState(0);

  function handleDelete() {
    onDeleteComment(content);
  }

  function handleClapsCounter() {
    setClapsCount((state) => {
      return state + 1;
    });
  }
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/jonathanbcsouza.png"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jonathan Souza</strong>
              <time
                title="11th of May at 08:13h"
                dateTime="2022-05-11 08:13:00"
              >
                1 Hour ago
              </time>
            </div>

            <button onClick={handleDelete} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleClapsCounter}>
            <HandsClapping />
            Clap <span>{clapsCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
