import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default function News(props) {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false)

  const updateNews = async () => {
    const url = `https://inshorts.deta.dev/news?category=${props.category}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.data);
    setLoading(false);
  }

  useEffect(() => {
    updateNews();
  }, []);


  return (
    <div className='container mt-4'>
    
      <div className="row">
      {loading && <Spinner />}
        {articles.map((e) => {
          return <div className="col-lg-6 col-md-4 mb-2" key={e.id}>
           <NewsItem 
            title={e.title}
            content={e.content}
            imageUrl={e.imageUrl}
            date={e.date}
            readMoreUrl={e.readMoreUrl}
           />
          </div>


        })}
      {!loading && <small className='text-center text-light p-3'>End of today's <em>Khabarien</em>!</small>}
      </div>

    </div>
  )
}
