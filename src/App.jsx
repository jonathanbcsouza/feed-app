import { Post } from './Post'

export function App() {
  return (
    <>
      <Post
        author="Jonathan Souza"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, tenetur."
      />
      <Post />
      <Post />
      <Post />
    </>
  )
}

export default App
