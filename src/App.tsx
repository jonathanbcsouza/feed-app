import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
      name: 'Albert Einstein',
      role: 'Theoretical Physicist',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Greetings to all and sundry 👋',
      },
      {
        type: 'paragraph',
        content:
          'Just unveiled the culmination of years of relentless curiosity and mathematical musings: E=mc². The interconnectedness of energy and mass, a revelation that transcends the boundaries of physics',
      },
      {
        type: 'link',
        content:
          'https://en.wikipedia.org/wiki/Mass%E2%80%93energy_equivalence',
      },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,

    author: {
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLUufarCnfwMJP_RR1piiN0cPv8asLlqExbGfkZw7Rg&s',
      name: 'Issac Newton',
      role: 'Mathematician | Physicist | Astronomer, Theologian',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Salutations to all present 👋',
      },
      {
        type: 'paragraph',
        content:
          'Just had a eureka moment under the apple tree: Unveiled the laws of motion and universal gravitation',
      },
      {
        type: 'link',
        content:
          'https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation',
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
                content={post.content as any}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
