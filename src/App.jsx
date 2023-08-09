import { Post } from './Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="John Doe"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, tenetur."
          />
          <Post
            author="James Smith"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, delectus."
          />
        </main>
      </div>
    </>
  )
}

export default App
