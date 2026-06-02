import './App.css'
import Blogs from './components/Blogs/blogs'
import Bookmarks from './components/bookmarks/bookmarks'
import Header from './components/header/header'

function App() {

  return (
    <div>
      <Header></Header>
      <main className='md:flex max-w-5xl mx-auto'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </div>
  )
}

export default App
