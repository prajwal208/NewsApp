import './App.css';
import React,{useState} from 'react'
import Navbar from './componets/Navbar'
import Search from './componets/Search'
import NewsList from './componets/NewsList'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import SingleNews from './componets/SingleNews'
import { nanoid } from 'nanoid';
function App() {

  const [news,setNews] = useState([])
  const [search,setSearch] = useState('')

  
  const searchfilter = news.filter((name) => {
    return name.title.toLowerCase().includes(search)
  })


  const SearchFilterId = searchfilter.map((info) => ({
    ...info,
    id:nanoid()
}))


  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route  path={'/'} 
        element={
        <>
        <Search search={search} setSearch={setSearch}/>,
        <NewsList news={news} setNews={setNews} searchfilter={searchfilter} SearchFilterId={SearchFilterId}/>
        </>
        }/>
       
       <Route path={`/news/:id`} element={<SingleNews searchfilter={searchfilter} SearchFilterId={SearchFilterId}/>}/>
        

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;





