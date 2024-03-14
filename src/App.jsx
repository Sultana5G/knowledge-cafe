
import './App.css'
import Header from './componants/header/Header'
import Blogs from './componants/header/Blogs/Blogs';
import Bookmarks from './componants/bookmarks/Bookmarks';
import { useState } from 'react';
function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddBookmark = blog =>{
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks)
}

  const handleMarkAsRead = time =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }

  return (
    <>
      
     <Header></Header>
    <div className='md:flex'>
    <Blogs handleAddBookmark ={handleAddBookmark} handleMarkAsRead ={handleMarkAsRead}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime ={readingTime}></Bookmarks>
    </div>
      
    </>
  )
}

export default App
