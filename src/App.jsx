import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jonathanbcsouza.png',
      name: 'Jonathan Souza',
      role: 'Software Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Hello everyone 👋',
      },
      {
        type: 'paragraph',
        content:
          'I just uploaded a new project to my portfolio. It is a project that I did in the NLW Return, Rocketseat event. The name of the project is HealthCare 🚀',
      },
      {
        type: 'link',
        content: 'jonathan.design/healthcare',
      },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/jonathanbcsouza.png',
      name: 'Jonathan Souza',
      role: 'Software Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Hello everyone 👋',
      },
      {
        type: 'paragraph',
        content:
          'I just uploaded a new project to my portfolio. It is a project that I did in the NLW Return, Rocketseat event. The name of the project is HealthCare 🚀',
      },
      {
        type: 'link',
        content: 'jonathan.design/healthcare',
      },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
