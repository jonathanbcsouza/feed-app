import { Post } from './Post'
import { Header } from './components/Header'

import './global.css'

export function App() {
  return (
    <>
      <Header />

      <Post
        author="John Doe"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, tenetur."
      />

      <Post
        author="James Smith"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, delectus."
      />
    </>
  )
}

export default App
