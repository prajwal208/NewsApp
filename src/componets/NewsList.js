import React,{useEffect} from 'react'
import { useNavigate  } from 'react-router-dom';


function NewsList({setNews,SearchFilterId}) {

useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=apple&from=2023-05-30&to=2023-05-30&sortBy=popularity&apiKey=52a8444999a44387b7bb1e0802945669')
    .then((res) => res.json())
    .then((data) => setNews(data.articles))
},[])

const navigate = useNavigate ()

const handleNewsCLicked = (id) => {
    navigate(`/news/${id}`)
}




    return (
        <>
           <div className="container">
                <div className="list-content">
                    {
                        SearchFilterId.length===0? <h1>No Article Found...</h1>:
                        SearchFilterId.map((info) => {
                            return <div className="news-box" onClick={() => handleNewsCLicked(info.id)}
                            key={info.id}>
                            <h2>Author:{info.author}</h2>
                            <h3>Title:{info.title}</h3>
                            <p>{info.description}</p>
                            <h4>PostedAt:{info.publishedAt}</h4>
                        </div>
                        })
                    }

                </div>   
            </div> 
        </>
    )
}

export default NewsList
