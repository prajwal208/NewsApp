import React from 'react'
import { useParams } from 'react-router-dom';

function SingleNews({SearchFilterId}) {

const {id} = useParams()
const selectedNews = SearchFilterId.find((info) => info===id)

if (!selectedNews) {
    return <h1>News not found</h1>;
  }

    return (
        <>
           <h2>Author: {selectedNews.author}</h2>
      <h3>Title: {selectedNews.title}</h3>
      <p>{selectedNews.description}</p>
      <h4>Posted At: {selectedNews.publishedAt}</h4>  
        </>
    )
}

export default SingleNews

